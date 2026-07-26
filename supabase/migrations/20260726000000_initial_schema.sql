-- ============================================================
-- K-PANTRY SUPABASE SCHEMA
-- ============================================================

-- 1. INGREDIENTS (재료 마스터)
CREATE TABLE ingredients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_ko TEXT,
  category TEXT NOT NULL,
  image_url TEXT,
  aliases TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. RECIPES (레시피 마스터)
CREATE TABLE recipes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en TEXT NOT NULL,
  name_ko TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  hero_image_url TEXT,
  cooking_time_min INTEGER,
  difficulty TEXT,
  servings INTEGER DEFAULT 2,
  calories INTEGER,
  protein_g NUMERIC(5,1),
  carbs_g NUMERIC(5,1),
  fat_g NUMERIC(5,1),
  is_popular BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  is_recently_added BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. RECIPE_INGREDIENTS (레시피 ↔ 재료 연결)
CREATE TABLE recipe_ingredients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recipe_id UUID NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
  ingredient_id UUID NOT NULL REFERENCES ingredients(id) ON DELETE CASCADE,
  amount TEXT,
  type TEXT NOT NULL DEFAULT 'essential',
  sort_order INTEGER DEFAULT 0,
  UNIQUE(recipe_id, ingredient_id)
);

-- 4. RECIPE_STEPS (조리 단계)
CREATE TABLE recipe_steps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recipe_id UUID NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
  step_order INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  UNIQUE(recipe_id, step_order)
);

-- 5. USER_PANTRY (유저 보유 재료)
CREATE TABLE user_pantry (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  ingredient_id UUID NOT NULL REFERENCES ingredients(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, ingredient_id)
);

-- 6. USER_SAVED_RECIPES (저장한 레시피)
CREATE TABLE user_saved_recipes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  recipe_id UUID NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, recipe_id)
);

-- 7. SHOPPING_LIST (쇼핑 리스트)
CREATE TABLE shopping_list (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  ingredient_id UUID NOT NULL REFERENCES ingredients(id) ON DELETE CASCADE,
  recipe_id UUID REFERENCES recipes(id) ON DELETE SET NULL,
  quantity TEXT,
  is_checked BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- INDEXES
CREATE INDEX idx_recipe_ingredients_recipe ON recipe_ingredients(recipe_id);
CREATE INDEX idx_recipe_ingredients_type ON recipe_ingredients(recipe_id, type);
CREATE INDEX idx_user_pantry_user ON user_pantry(user_id);
CREATE INDEX idx_shopping_list_user ON shopping_list(user_id);
CREATE INDEX idx_recipes_category ON recipes(category);
CREATE INDEX idx_recipes_popular ON recipes(is_popular) WHERE is_popular = TRUE;

-- RLS
ALTER TABLE user_pantry ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_saved_recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE shopping_list ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_steps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_pantry_own" ON user_pantry FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "user_saved_own" ON user_saved_recipes FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "shopping_list_own" ON shopping_list FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "recipes_public_read" ON recipes FOR SELECT USING (TRUE);
CREATE POLICY "ingredients_public_read" ON ingredients FOR SELECT USING (TRUE);
CREATE POLICY "recipe_ingredients_public_read" ON recipe_ingredients FOR SELECT USING (TRUE);
CREATE POLICY "recipe_steps_public_read" ON recipe_steps FOR SELECT USING (TRUE);

-- +1/+2 추천 VIEW
CREATE OR REPLACE VIEW pantry_recipe_matches AS
SELECT
  r.id AS recipe_id,
  r.name_en,
  r.name_ko,
  r.category,
  r.cooking_time_min,
  r.difficulty,
  r.hero_image_url,
  up.user_id,
  COUNT(ri.ingredient_id) FILTER (WHERE ri.type = 'essential') AS total_essential,
  COUNT(ri.ingredient_id) FILTER (
    WHERE ri.type = 'essential'
    AND ri.ingredient_id NOT IN (
      SELECT ingredient_id FROM user_pantry up2
      WHERE up2.user_id = up.user_id
    )
  ) AS missing_essential
FROM recipes r
JOIN recipe_ingredients ri ON ri.recipe_id = r.id
CROSS JOIN (SELECT DISTINCT user_id FROM user_pantry) up
GROUP BY r.id, r.name_en, r.name_ko, r.category,
         r.cooking_time_min, r.difficulty, r.hero_image_url, up.user_id;
