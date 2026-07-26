import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function seed() {
  console.log('🌱 Seeding ingredients...')

  const { data: ingredients, error: ingErr } = await supabase
    .from('ingredients')
    .insert([
      { name: 'Kimchi', name_ko: '김치', category: 'pantry', aliases: ['fermented cabbage'] },
      { name: 'Egg', name_ko: '달걀', category: 'etc', aliases: ['eggs'] },
      { name: 'Rice', name_ko: '쌀', category: 'pantry', aliases: ['cooked rice', 'steamed rice'] },
      { name: 'Green Onion', name_ko: '대파', category: 'vegetables', aliases: ['scallion', 'spring onion'] },
      { name: 'Onion', name_ko: '양파', category: 'vegetables' },
      { name: 'Garlic', name_ko: '마늘', category: 'vegetables', aliases: ['minced garlic'] },
      { name: 'Soy Sauce', name_ko: '간장', category: 'pantry', aliases: ['ganjang'] },
      { name: 'Sesame Oil', name_ko: '참기름', category: 'pantry' },
      { name: 'Sesame Seeds', name_ko: '깨', category: 'pantry' },
      { name: 'Gochugaru', name_ko: '고춧가루', category: 'pantry', aliases: ['red pepper flakes', 'korean chili powder'] },
      { name: 'Gochujang', name_ko: '고추장', category: 'pantry', aliases: ['red pepper paste'] },
      { name: 'Doenjang', name_ko: '된장', category: 'pantry', aliases: ['soybean paste'] },
      { name: 'Sugar', name_ko: '설탕', category: 'pantry' },
      { name: 'Salt', name_ko: '소금', category: 'pantry' },
      { name: 'Tofu', name_ko: '두부', category: 'etc', aliases: ['soft tofu', 'firm tofu'] },
      { name: 'Beef', name_ko: '소고기', category: 'meat_seafood', aliases: ['ribeye', 'ground beef', 'beef slices'] },
      { name: 'Pork', name_ko: '돼지고기', category: 'meat_seafood', aliases: ['pork belly', 'pork slices'] },
      { name: 'Chicken', name_ko: '닭고기', category: 'meat_seafood', aliases: ['chicken thigh', 'chicken breast'] },
      { name: 'Tuna', name_ko: '참치', category: 'meat_seafood', aliases: ['canned tuna'] },
      { name: 'Spam', name_ko: '스팸', category: 'meat_seafood', aliases: ['canned ham', 'luncheon meat'] },
      { name: 'Potato', name_ko: '감자', category: 'vegetables' },
      { name: 'Zucchini', name_ko: '애호박', category: 'vegetables', aliases: ['korean zucchini'] },
      { name: 'Mushroom', name_ko: '버섯', category: 'mushrooms', aliases: ['shiitake', 'oyster mushroom', 'enoki'] },
      { name: 'Carrot', name_ko: '당근', category: 'vegetables' },
      { name: 'Spinach', name_ko: '시금치', category: 'vegetables' },
      { name: 'Bean Sprouts', name_ko: '콩나물', category: 'vegetables', aliases: ['soybean sprouts'] },
      { name: 'Glass Noodles', name_ko: '당면', category: 'pantry', aliases: ['japchae noodles', 'sweet potato starch noodles'] },
      { name: 'Rice Cake', name_ko: '떡볶이 떡', category: 'pantry', aliases: ['tteok', 'rice cakes'] },
      { name: 'Anchovy Broth', name_ko: '멸치육수', category: 'pantry', aliases: ['anchovy stock', 'dashi'] },
      { name: 'Perilla Oil', name_ko: '들기름', category: 'pantry', aliases: ['wild sesame oil'] },
    ])
    .select()

  if (ingErr) { console.error('Ingredient error:', ingErr); return }
  console.log(`✅ ${ingredients.length} ingredients inserted`)

  const ingMap: Record<string, string> = {}
  ingredients.forEach(i => { ingMap[i.name] = i.id })

  console.log('🌱 Seeding recipes...')

  const recipesData = [
    {
      name_en: 'Kimchi Fried Rice', name_ko: '김치볶음밥',
      description: 'Crispy fried rice with tangy kimchi and a fried egg on top.',
      category: 'rice', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 380, protein_g: 12, carbs_g: 58, fat_g: 11,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Kimchi', amount: '1 cup', type: 'essential' },
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prep the kimchi', description: 'Chop kimchi into bite-sized pieces.' },
        { step_order: 2, title: 'Fry the rice', description: 'Heat oil in a pan over high heat. Add kimchi and stir-fry for 2 minutes. Add rice and soy sauce, stir-fry for 3–4 minutes until slightly crispy.' },
        { step_order: 3, title: 'Fry the egg', description: 'In a separate pan, fry eggs sunny-side up.' },
        { step_order: 4, title: 'Serve', description: 'Top the rice with fried egg, drizzle sesame oil, and garnish with green onion and sesame seeds.' },
      ]
    },
    {
      name_en: 'Bulgogi', name_ko: '불고기',
      description: 'Sweet and savory marinated beef that\'s perfect with rice.',
      category: 'meat', cooking_time_min: 30, difficulty: 'easy',
      servings: 2, calories: 350, protein_g: 24, carbs_g: 15, fat_g: 20,
      is_popular: true, is_featured: true, is_recently_added: false,
      ingredients: [
        { name: 'Beef', amount: '300g', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'essential' },
        { name: 'Soy Sauce', amount: '3 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'recommended' },
        { name: 'Mushroom', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prepare the vegetables', description: 'Slice the onion and green onion thinly.' },
        { step_order: 2, title: 'Marinate the beef', description: 'Mix beef with soy sauce, sugar, garlic, and sesame oil. Marinate for at least 15 minutes.' },
        { step_order: 3, title: 'Cook', description: 'Stir-fry the beef and onion over medium-high heat until fully cooked.' },
        { step_order: 4, title: 'Serve', description: 'Garnish with green onion and sesame seeds. Enjoy with rice.' },
      ]
    },
    {
      name_en: 'Kimchi Jjigae', name_ko: '김치찌개',
      description: 'A classic comfort stew that never gets old.',
      category: 'stews', cooking_time_min: 25, difficulty: 'easy',
      servings: 2, calories: 320, protein_g: 18, carbs_g: 12, fat_g: 16,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Kimchi', amount: '1.5 cups', type: 'essential' },
        { name: 'Tofu', amount: '200g', type: 'essential' },
        { name: 'Pork', amount: '150g', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Sauté the pork', description: 'Stir-fry pork in a pot until lightly browned.' },
        { step_order: 2, title: 'Add kimchi', description: 'Add kimchi and gochugaru. Stir-fry together for 2 minutes.' },
        { step_order: 3, title: 'Simmer', description: 'Add 2 cups of water and soy sauce. Bring to a boil, then simmer for 15 minutes.' },
        { step_order: 4, title: 'Add tofu and serve', description: 'Add cubed tofu and simmer for 5 more minutes. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Bibimbap', name_ko: '비빔밥',
      description: 'A colorful mixed rice bowl loaded with vegetables and gochujang.',
      category: 'rice', cooking_time_min: 25, difficulty: 'medium',
      servings: 2, calories: 480, protein_g: 16, carbs_g: 72, fat_g: 14,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Spinach', amount: '100g', type: 'essential' },
        { name: 'Bean Sprouts', amount: '100g', type: 'essential' },
        { name: 'Carrot', amount: '1/2', type: 'recommended' },
        { name: 'Mushroom', amount: '100g', type: 'recommended' },
        { name: 'Beef', amount: '150g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prepare vegetables', description: 'Blanch spinach and bean sprouts. Sauté carrots and mushrooms separately with a little soy sauce and sesame oil.' },
        { step_order: 2, title: 'Cook the egg', description: 'Fry an egg sunny-side up.' },
        { step_order: 3, title: 'Assemble', description: 'Place rice in a bowl. Arrange each vegetable in sections on top. Place the fried egg in the center.' },
        { step_order: 4, title: 'Mix and serve', description: 'Add gochujang and sesame oil. Mix everything together vigorously before eating.' },
      ]
    },
    {
      name_en: 'Doenjang Jjigae', name_ko: '된장찌개',
      description: 'Hearty soybean paste stew with tofu and vegetables.',
      category: 'stews', cooking_time_min: 25, difficulty: 'easy',
      servings: 2, calories: 270, protein_g: 14, carbs_g: 18, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: true,
      ingredients: [
        { name: 'Doenjang', amount: '2 tbsp', type: 'essential' },
        { name: 'Tofu', amount: '200g', type: 'essential' },
        { name: 'Zucchini', amount: '1/2', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Mushroom', amount: '100g', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Anchovy Broth', amount: '2 cups', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prepare broth', description: 'Bring 2 cups of water (or anchovy broth) to a boil.' },
        { step_order: 2, title: 'Add paste', description: 'Dissolve doenjang in the broth. Add garlic.' },
        { step_order: 3, title: 'Add vegetables', description: 'Add onion, zucchini, and mushrooms. Simmer for 10 minutes.' },
        { step_order: 4, title: 'Finish', description: 'Add tofu and simmer 5 more minutes. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Tteokbokki', name_ko: '떡볶이',
      description: 'Spicy, chewy rice cakes in a sweet and fiery gochujang sauce.',
      category: 'street_food', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 320, protein_g: 8, carbs_g: 62, fat_g: 4,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice Cake', amount: '300g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Egg', amount: '2', type: 'optional' },
        { name: 'Spam', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make the sauce', description: 'Mix gochujang, gochugaru, sugar, and soy sauce with 2 cups of water in a pan.' },
        { step_order: 2, title: 'Cook the rice cakes', description: 'Bring sauce to a boil. Add rice cakes and cook on medium heat for 10–15 minutes, stirring often.' },
        { step_order: 3, title: 'Finish', description: 'Once sauce thickens and coats the rice cakes, remove from heat. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Japchae', name_ko: '잡채',
      description: 'Stir-fried glass noodles with colorful vegetables and beef.',
      category: 'noodles', cooking_time_min: 30, difficulty: 'medium',
      servings: 2, calories: 290, protein_g: 10, carbs_g: 48, fat_g: 8,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Glass Noodles', amount: '200g', type: 'essential' },
        { name: 'Soy Sauce', amount: '3 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '2 tbsp', type: 'essential' },
        { name: 'Spinach', amount: '100g', type: 'essential' },
        { name: 'Carrot', amount: '1/2', type: 'recommended' },
        { name: 'Mushroom', amount: '150g', type: 'recommended' },
        { name: 'Onion', amount: '1/2', type: 'recommended' },
        { name: 'Beef', amount: '150g', type: 'optional' },
        { name: 'Egg', amount: '1', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Soak the noodles', description: 'Soak glass noodles in warm water for 20 minutes. Drain and set aside.' },
        { step_order: 2, title: 'Sauté vegetables', description: 'Sauté each vegetable separately with a little oil, salt, and garlic. Set aside.' },
        { step_order: 3, title: 'Season noodles', description: 'Cook drained noodles in boiling water for 3 minutes. Drain and mix with soy sauce, sugar, and sesame oil.' },
        { step_order: 4, title: 'Combine and serve', description: 'Mix noodles with all vegetables and beef. Garnish with egg strips and sesame seeds.' },
      ]
    },
    {
      name_en: 'Sundubu Jjigae', name_ko: '순두부찌개',
      description: 'Silky soft tofu stew with a spicy, savory broth.',
      category: 'stews', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 240, protein_g: 14, carbs_g: 8, fat_g: 14,
      is_popular: false, is_featured: false, is_recently_added: true,
      ingredients: [
        { name: 'Tofu', amount: '300g soft', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'essential' },
        { name: 'Gochugaru', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Pork', amount: '100g', type: 'optional' },
        { name: 'Mushroom', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Sauté aromatics', description: 'Sauté garlic and gochugaru in sesame oil for 1 minute.' },
        { step_order: 2, title: 'Add broth', description: 'Add 1.5 cups of water (or anchovy broth) and soy sauce. Bring to a boil.' },
        { step_order: 3, title: 'Add tofu', description: 'Gently spoon in soft tofu. Simmer for 5 minutes without stirring too much.' },
        { step_order: 4, title: 'Add egg and serve', description: 'Crack an egg directly into the stew. Cook for 1–2 minutes. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Egg Rice Bowl', name_ko: '계란밥',
      description: 'The simplest and most comforting Korean meal — rice topped with a runny egg.',
      category: 'rice', cooking_time_min: 10, difficulty: 'easy',
      servings: 1, calories: 280, protein_g: 10, carbs_g: 48, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '1 cup cooked', type: 'essential' },
        { name: 'Egg', amount: '1', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Sesame Seeds', amount: '1/2 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Fry the egg', description: 'Fry an egg to your preferred doneness.' },
        { step_order: 2, title: 'Assemble', description: 'Place egg on hot rice. Drizzle soy sauce and sesame oil.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with sesame seeds and mix before eating.' },
      ]
    },
    {
      name_en: 'Steamed Egg', name_ko: '계란찜',
      description: 'Fluffy, custardy steamed egg — a beloved Korean side dish.',
      category: 'side_dishes', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 120, protein_g: 10, carbs_g: 2, fat_g: 7,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Egg', amount: '3', type: 'essential' },
        { name: 'Salt', amount: '1/2 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1/2 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Beat eggs', description: 'Whisk eggs with 1 cup of water and salt until well combined.' },
        { step_order: 2, title: 'Steam', description: 'Pour into a clay pot or oven-safe bowl. Steam over low heat for 10–12 minutes until just set.' },
        { step_order: 3, title: 'Garnish', description: 'Top with green onion and a drizzle of sesame oil. Serve immediately.' },
      ]
    },
    {
      name_en: 'Kimchi Pancake', name_ko: '김치전',
      description: 'Crispy, savory pancake loaded with tangy kimchi.',
      category: 'side_dishes', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 310, protein_g: 9, carbs_g: 42, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: true,
      ingredients: [
        { name: 'Kimchi', amount: '1 cup', type: 'essential' },
        { name: 'Egg', amount: '1', type: 'essential' },
        { name: 'Salt', amount: '1/4 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make batter', description: 'Mix 1 cup flour, 1 egg, 3/4 cup water, and salt. Add chopped kimchi (and kimchi juice for extra flavor).' },
        { step_order: 2, title: 'Cook', description: 'Pour batter into a hot oiled pan. Press flat and cook on medium-high heat for 3–4 minutes per side until golden and crispy.' },
        { step_order: 3, title: 'Serve', description: 'Slice and serve with soy sauce dipping sauce.' },
      ]
    },
    {
      name_en: 'Galbitang', name_ko: '갈비탕',
      description: 'Clear, rich beef short rib soup — a special occasion classic.',
      category: 'stews', cooking_time_min: 80, difficulty: 'hard',
      servings: 4, calories: 450, protein_g: 38, carbs_g: 10, fat_g: 24,
      is_popular: false, is_featured: false, is_recently_added: true,
      ingredients: [
        { name: 'Beef', amount: '800g short ribs', type: 'essential' },
        { name: 'Garlic', amount: '5 cloves', type: 'essential' },
        { name: 'Green Onion', amount: '3 stalks', type: 'essential' },
        { name: 'Salt', amount: '1 tsp', type: 'essential' },
        { name: 'Onion', amount: '1', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Soak the ribs', description: 'Soak beef short ribs in cold water for 1 hour to remove blood. Drain.' },
        { step_order: 2, title: 'Blanch', description: 'Boil ribs briefly, then drain and rinse under cold water.' },
        { step_order: 3, title: 'Simmer', description: 'Add clean ribs to a large pot with water, garlic, and onion. Simmer for 1 hour until tender.' },
        { step_order: 4, title: 'Season and serve', description: 'Season with salt. Serve in a bowl with green onion and a drizzle of sesame oil.' },
      ]
    },
    {
      name_en: 'Dakgalbi', name_ko: '닭갈비',
      description: 'Spicy stir-fried chicken with rice cakes and vegetables.',
      category: 'meat', cooking_time_min: 35, difficulty: 'medium',
      servings: 2, calories: 410, protein_g: 30, carbs_g: 38, fat_g: 14,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Chicken', amount: '400g', type: 'essential' },
        { name: 'Gochujang', amount: '3 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '3 cloves', type: 'essential' },
        { name: 'Rice Cake', amount: '150g', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
      ],
      steps: [
        { step_order: 1, title: 'Marinate chicken', description: 'Mix gochujang, gochugaru, soy sauce, sugar, and garlic. Coat chicken pieces and marinate 20 minutes.' },
        { step_order: 2, title: 'Stir-fry', description: 'Cook chicken in a hot pan until nearly done. Add rice cakes and vegetables.' },
        { step_order: 3, title: 'Finish', description: 'Stir-fry everything together until sauce caramelizes. Serve hot.' },
      ]
    },
    {
      name_en: 'Kongnamul Muchim', name_ko: '콩나물무침',
      description: 'Seasoned soybean sprouts — simple, crunchy, and full of flavor.',
      category: 'side_dishes', cooking_time_min: 10, difficulty: 'easy',
      servings: 2, calories: 80, protein_g: 6, carbs_g: 8, fat_g: 3,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Bean Sprouts', amount: '300g', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove minced', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Blanch sprouts', description: 'Boil soybean sprouts for 2–3 minutes. Drain and let cool slightly.' },
        { step_order: 2, title: 'Season', description: 'Mix sprouts with soy sauce, sesame oil, garlic, and gochugaru.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with green onion and sesame seeds. Serve warm or chilled.' },
      ]
    },
    {
      name_en: 'Gyeran Mari', name_ko: '계란말이',
      description: 'Korean rolled omelette — a lunch box staple.',
      category: 'side_dishes', cooking_time_min: 15, difficulty: 'medium',
      servings: 2, calories: 160, protein_g: 12, carbs_g: 4, fat_g: 10,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Egg', amount: '4', type: 'essential' },
        { name: 'Salt', amount: '1/4 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Carrot', amount: '1/4', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Beat eggs', description: 'Beat eggs with salt and finely chopped green onion and carrot.' },
        { step_order: 2, title: 'Roll', description: 'Pour a thin layer of egg into a lightly oiled pan. When nearly set, roll from one side to the other. Push to the side and pour more egg. Repeat until all egg is used.' },
        { step_order: 3, title: 'Slice and serve', description: 'Let rest for 1 minute, then slice into rounds.' },
      ]
    },
    {
      name_en: 'Dakdoritang', name_ko: '닭도리탕',
      description: 'Braised spicy chicken with potatoes in a rich sauce.',
      category: 'meat', cooking_time_min: 45, difficulty: 'medium',
      servings: 3, calories: 420, protein_g: 34, carbs_g: 28, fat_g: 16,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Chicken', amount: '500g', type: 'essential' },
        { name: 'Potato', amount: '2 medium', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '2 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '4 cloves', type: 'essential' },
        { name: 'Onion', amount: '1', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Mushroom', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Blanch chicken', description: 'Briefly boil chicken pieces, then drain and rinse.' },
        { step_order: 2, title: 'Make sauce', description: 'Mix gochujang, gochugaru, soy sauce, and garlic with 1 cup water.' },
        { step_order: 3, title: 'Braise', description: 'Add chicken, potatoes, and onion to the sauce in a pot. Cover and cook on medium heat for 25 minutes.' },
        { step_order: 4, title: 'Finish', description: 'Uncover and cook 5 more minutes until sauce thickens. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Japchae with Beef', name_ko: '소고기잡채',
      description: 'Premium japchae with tender marinated beef.',
      category: 'noodles', cooking_time_min: 35, difficulty: 'medium',
      servings: 3, calories: 380, protein_g: 18, carbs_g: 52, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Glass Noodles', amount: '200g', type: 'essential' },
        { name: 'Beef', amount: '200g', type: 'essential' },
        { name: 'Soy Sauce', amount: '3 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '2 tbsp', type: 'essential' },
        { name: 'Spinach', amount: '100g', type: 'recommended' },
        { name: 'Mushroom', amount: '150g', type: 'recommended' },
        { name: 'Carrot', amount: '1/2', type: 'recommended' },
        { name: 'Egg', amount: '1', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Marinate beef', description: 'Marinate beef strips with soy sauce, sugar, and sesame oil for 15 minutes.' },
        { step_order: 2, title: 'Cook noodles', description: 'Soak glass noodles, then boil for 3 minutes. Drain and toss with soy sauce and sesame oil.' },
        { step_order: 3, title: 'Sauté', description: 'Cook beef and each vegetable separately.' },
        { step_order: 4, title: 'Combine', description: 'Mix everything together. Adjust seasoning. Garnish with egg strips.' },
      ]
    },
    {
      name_en: 'Kimchi Stew with Spam', name_ko: '스팸김치찌개',
      description: 'A nostalgic twist on kimchi jjigae with savory Spam.',
      category: 'stews', cooking_time_min: 25, difficulty: 'easy',
      servings: 2, calories: 360, protein_g: 18, carbs_g: 14, fat_g: 22,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Kimchi', amount: '1.5 cups', type: 'essential' },
        { name: 'Spam', amount: '200g', type: 'essential' },
        { name: 'Tofu', amount: '150g', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
      ],
      steps: [
        { step_order: 1, title: 'Brown the Spam', description: 'Cut Spam into cubes and lightly fry until golden.' },
        { step_order: 2, title: 'Add kimchi', description: 'Add kimchi and gochugaru to the pan. Stir-fry for 2 minutes.' },
        { step_order: 3, title: 'Simmer', description: 'Add 2 cups water and soy sauce. Bring to a boil and simmer 15 minutes.' },
        { step_order: 4, title: 'Finish', description: 'Add tofu and simmer 5 more minutes. Top with green onion.' },
      ]
    },
    {
      name_en: 'Sigeumchi Namul', name_ko: '시금치나물',
      description: 'Lightly seasoned blanched spinach — a clean, simple side dish.',
      category: 'side_dishes', cooking_time_min: 10, difficulty: 'easy',
      servings: 2, calories: 60, protein_g: 4, carbs_g: 6, fat_g: 3,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Spinach', amount: '300g', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Blanch spinach', description: 'Boil spinach for 30 seconds. Drain and squeeze out excess water.' },
        { step_order: 2, title: 'Season', description: 'Mix spinach with soy sauce, sesame oil, and garlic.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with sesame seeds.' },
      ]
    },
    {
      name_en: 'Gamja Tang', name_ko: '감자탕',
      description: 'Rich pork bone soup with potatoes and greens.',
      category: 'stews', cooking_time_min: 60, difficulty: 'hard',
      servings: 4, calories: 520, protein_g: 42, carbs_g: 32, fat_g: 22,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Pork', amount: '600g pork neck bones', type: 'essential' },
        { name: 'Potato', amount: '3 medium', type: 'essential' },
        { name: 'Gochugaru', amount: '3 tbsp', type: 'essential' },
        { name: 'Doenjang', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '5 cloves', type: 'essential' },
        { name: 'Green Onion', amount: '3 stalks', type: 'recommended' },
        { name: 'Perilla Oil', amount: '1 tbsp', type: 'optional' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Parboil bones', description: 'Boil pork bones briefly, then drain and rinse well.' },
        { step_order: 2, title: 'Make broth', description: 'Add clean bones to 6 cups of water with garlic. Boil 30 minutes.' },
        { step_order: 3, title: 'Season', description: 'Add gochugaru, doenjang, and potatoes. Simmer 20 more minutes until potatoes are tender.' },
        { step_order: 4, title: 'Finish', description: 'Add greens, drizzle perilla oil, garnish with green onion and sesame seeds.' },
      ]
    },
    {
      name_en: 'Budae Jjigae', name_ko: '부대찌개',
      description: 'Army stew — a fusion of Korean and American flavors.',
      category: 'stews', cooking_time_min: 25, difficulty: 'medium',
      servings: 3, calories: 480, protein_g: 26, carbs_g: 42, fat_g: 20,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Spam', amount: '200g', type: 'essential' },
        { name: 'Kimchi', amount: '1 cup', type: 'essential' },
        { name: 'Tofu', amount: '150g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Rice Cake', amount: '150g', type: 'recommended' },
        { name: 'Mushroom', amount: '100g', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
      ],
      steps: [
        { step_order: 1, title: 'Arrange ingredients', description: 'Arrange Spam, kimchi, tofu, and other ingredients in a pot side by side.' },
        { step_order: 2, title: 'Add broth', description: 'Mix gochujang, gochugaru, and soy sauce with 3 cups of water. Pour over ingredients.' },
        { step_order: 3, title: 'Boil', description: 'Bring to a boil over medium heat. Cook for 15 minutes until all ingredients are cooked through.' },
        { step_order: 4, title: 'Serve', description: 'Garnish with green onion. Mix and eat from the pot.' },
      ]
    },
    {
      name_en: 'Hobak Jeon', name_ko: '호박전',
      description: 'Pan-fried zucchini fritters — light and savory.',
      category: 'side_dishes', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 140, protein_g: 6, carbs_g: 16, fat_g: 6,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Zucchini', amount: '1 medium', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'essential' },
        { name: 'Salt', amount: '1/2 tsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp dipping', type: 'recommended' },
      ],
      steps: [
        { step_order: 1, title: 'Slice zucchini', description: 'Slice zucchini into 0.5cm rounds. Season with salt and let sit 5 minutes. Pat dry.' },
        { step_order: 2, title: 'Coat and fry', description: 'Dust slices in flour, then dip in beaten egg. Fry in a lightly oiled pan until golden on both sides.' },
        { step_order: 3, title: 'Serve', description: 'Serve with soy sauce for dipping.' },
      ]
    },
    {
      name_en: 'Jangjorim', name_ko: '장조림',
      description: 'Soy-braised beef — a classic Korean meal-prep side dish.',
      category: 'side_dishes', cooking_time_min: 45, difficulty: 'medium',
      servings: 4, calories: 200, protein_g: 22, carbs_g: 8, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Beef', amount: '400g', type: 'essential' },
        { name: 'Soy Sauce', amount: '4 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '5 cloves', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Egg', amount: '4 hard-boiled', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Boil the beef', description: 'Boil beef with green onion until tender, about 30 minutes. Reserve 1.5 cups broth.' },
        { step_order: 2, title: 'Shred', description: 'Let beef cool slightly, then shred or slice.' },
        { step_order: 3, title: 'Braise', description: 'Simmer beef in broth with soy sauce, sugar, and garlic for 10 minutes until sauce reduces.' },
        { step_order: 4, title: 'Add eggs', description: 'Add hard-boiled eggs and cook 5 more minutes. Store refrigerated for up to a week.' },
      ]
    },
    {
      name_en: 'Miyeok Guk', name_ko: '미역국',
      description: 'Korean seaweed soup — traditionally eaten on birthdays.',
      category: 'stews', cooking_time_min: 30, difficulty: 'easy',
      servings: 2, calories: 180, protein_g: 14, carbs_g: 8, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Beef', amount: '150g', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Salt', amount: '1 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Soak seaweed', description: 'Soak 30g dried seaweed in cold water for 20 minutes. Drain and cut into pieces.' },
        { step_order: 2, title: 'Sauté', description: 'Sauté beef strips in sesame oil. Add seaweed and soy sauce and stir-fry for 2 minutes.' },
        { step_order: 3, title: 'Simmer', description: 'Add 4 cups water and garlic. Simmer for 20 minutes.' },
        { step_order: 4, title: 'Season', description: 'Season with salt. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Sogogi Muguk', name_ko: '소고기뭇국',
      description: 'Clear radish and beef soup — clean, comforting, everyday Korean.',
      category: 'stews', cooking_time_min: 35, difficulty: 'easy',
      servings: 2, calories: 220, protein_g: 16, carbs_g: 14, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Beef', amount: '200g', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Salt', amount: '1/2 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
      ],
      steps: [
        { step_order: 1, title: 'Sauté beef', description: 'Sauté beef with sesame oil and soy sauce for 2 minutes.' },
        { step_order: 2, title: 'Add radish', description: 'Add cubed radish (200g) and 4 cups water. Bring to a boil.' },
        { step_order: 3, title: 'Simmer', description: 'Simmer 20 minutes until radish is tender and translucent.' },
        { step_order: 4, title: 'Season', description: 'Add garlic, season with salt. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Ramyeon Upgrade', name_ko: '라면 업그레이드',
      description: 'Elevate instant ramen with pantry staples.',
      category: 'noodles', cooking_time_min: 10, difficulty: 'easy',
      servings: 1, calories: 520, protein_g: 16, carbs_g: 72, fat_g: 18,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Egg', amount: '1', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'essential' },
        { name: 'Kimchi', amount: '1/2 cup', type: 'recommended' },
        { name: 'Spam', amount: '100g', type: 'optional' },
        { name: 'Mushroom', amount: '50g', type: 'optional' },
        { name: 'Sesame Oil', amount: '1/2 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Cook ramen', description: 'Cook instant ramen according to package. Add kimchi or mushrooms while boiling.' },
        { step_order: 2, title: 'Add egg', description: 'Crack egg directly into the pot in the last 2 minutes.' },
        { step_order: 3, title: 'Serve', description: 'Top with green onion, sesame oil, and Spam slices.' },
      ]
    },
    {
      name_en: 'Dubu Jorim', name_ko: '두부조림',
      description: 'Pan-fried braised tofu in a spicy soy glaze.',
      category: 'side_dishes', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 220, protein_g: 14, carbs_g: 12, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Tofu', amount: '300g firm', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Pan-fry tofu', description: 'Slice tofu and pan-fry on both sides until golden.' },
        { step_order: 2, title: 'Make sauce', description: 'Mix soy sauce, gochugaru, garlic, sesame oil, and 3 tbsp water.' },
        { step_order: 3, title: 'Braise', description: 'Pour sauce over tofu. Cook on medium heat until sauce is absorbed. Garnish with green onion and sesame seeds.' },
      ]
    },
    {
      name_en: 'Oi Muchim', name_ko: '오이무침',
      description: 'Spicy cucumber salad — refreshing and quick.',
      category: 'side_dishes', cooking_time_min: 10, difficulty: 'easy',
      servings: 2, calories: 50, protein_g: 2, carbs_g: 8, fat_g: 2,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Sugar', amount: '1/2 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prep cucumber', description: 'Slice cucumber thinly. Salt lightly and let sit 5 minutes. Squeeze out moisture.' },
        { step_order: 2, title: 'Season', description: 'Mix cucumbers with gochugaru, soy sauce, sesame oil, garlic, and sugar.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with green onion and sesame seeds. Best eaten immediately.' },
      ]
    },
    {
      name_en: 'Kimchi Jeon (Quick)', name_ko: '빠른 김치전',
      description: 'Even faster kimchi pancake when you need something quick.',
      category: 'side_dishes', cooking_time_min: 12, difficulty: 'easy',
      servings: 1, calories: 280, protein_g: 8, carbs_g: 38, fat_g: 10,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Kimchi', amount: '3/4 cup', type: 'essential' },
        { name: 'Egg', amount: '1', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp dipping', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make batter', description: 'Mix 1/2 cup flour, 1 egg, 1/2 cup water, and kimchi (with juice).' },
        { step_order: 2, title: 'Pan fry', description: 'Cook in oiled pan over medium-high heat, 3 minutes per side.' },
        { step_order: 3, title: 'Serve', description: 'Slice and serve with soy sauce.' },
      ]
    },
  ]

  for (const recipeData of recipesData) {
    const { ingredients: recipeIngredients, steps, ...recipeFields } = recipeData

    const { data: recipe, error: recipeErr } = await supabase
      .from('recipes')
      .insert(recipeFields)
      .select()
      .single()

    if (recipeErr) { console.error(`Recipe error (${recipeFields.name_en}):`, recipeErr); continue }

    const riRows = recipeIngredients
      .filter(ri => ingMap[ri.name])
      .map((ri, idx) => ({
        recipe_id: recipe.id,
        ingredient_id: ingMap[ri.name],
        amount: ri.amount,
        type: ri.type,
        sort_order: idx,
      }))

    const { error: riErr } = await supabase.from('recipe_ingredients').insert(riRows)
    if (riErr) console.error(`Recipe ingredients error (${recipe.name_en}):`, riErr)

    const stepRows = steps.map(s => ({ ...s, recipe_id: recipe.id }))
    const { error: stepErr } = await supabase.from('recipe_steps').insert(stepRows)
    if (stepErr) console.error(`Steps error (${recipe.name_en}):`, stepErr)

    console.log(`  ✅ ${recipe.name_en}`)
  }

  console.log('\n🎉 Seeding complete!')
}

seed()
