import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const RECIPES = [
  {
    name_en: 'Dak Twigim',
    description: 'Crispy Korean fried chicken without the sauce.',
    cooking_time_min: 30, calories: 210, protein_g: 15, carbs_g: 14, fat_g: 11, servings: 1,
    ingredients: [
      { name: 'Chicken',      amount: '250g',     type: 'essential' },
      { name: 'Salt',         amount: '0.5 tsp',  type: 'essential' },
      { name: 'Garlic',       amount: '1 clove',  type: 'essential' },
      { name: 'Cornstarch',   amount: '40g',      type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'recommended' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'optional' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Marinate the chicken', description: 'Season the boneless skinless chicken thigh pieces (250g) with salt (2g), minced garlic (5g), soy sauce (7.5ml, if using), and sesame oil (2.5ml, if using). Let it rest at room temperature for 15 minutes.' },
      { step_order: 2, title: 'Coat with cornstarch', description: 'Coat the marinated chicken pieces thoroughly in cornstarch (40g) until fully covered.' },
      { step_order: 3, title: 'Deep-fry',             description: 'Heat cooking oil in a deep pan to 170°C. Fry the coated chicken pieces for 12 minutes until golden brown and completely crispy. Remove and drain on a wire rack or paper towels.' },
      { step_order: 4, title: 'Garnish & serve',      description: 'Garnish with sesame seeds (1g) and chopped green onions (7.5g) before serving.' },
    ],
  },
  {
    name_en: 'Eomuk Tang',
    description: 'Fish cake skewers simmered in a savory broth — a beloved street food.',
    cooking_time_min: 20, calories: 60, protein_g: 3.3, carbs_g: 6.7, fat_g: 2, servings: 1,
    ingredients: [
      { name: 'Fish Cake',    amount: '100g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.67 tbsp',type: 'essential' },
      { name: 'Anchovy Broth',amount: '1.33 cups',type: 'essential' },
      { name: 'Green Onion',  amount: '10g',      type: 'recommended' },
      { name: 'Garlic',       amount: '3.3g',     type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.33 tsp', type: 'optional' },
      { name: 'Sesame Oil',   amount: '0.33 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the broth',       description: 'Bring the anchovy broth (330ml) to a rolling boil in a pot over medium-high heat (5 mins) with minced garlic (3.3g) and soy sauce (10ml).' },
      { step_order: 2, title: 'Simmer the fish cakes',description: 'Fold and thread the fish cake sheets (100g) onto wooden skewers, then submerge them into the boiling broth and simmer on medium heat for 10 minutes.' },
      { step_order: 3, title: 'Garnish & serve',      description: 'Garnish with chopped green onions (10g) and serve hot with the broth in a cup. Add gochugaru (1g) or sesame oil (1.6ml) if desired.' },
    ],
  },
  {
    name_en: 'Gunmandu',
    description: 'Pan-fried Korean dumplings — crispy on the bottom, juicy inside.',
    cooking_time_min: 25, calories: 107, protein_g: 4.7, carbs_g: 12, fat_g: 4.7, servings: 1,
    ingredients: [
      { name: 'Dumpling Wrappers', amount: '50g',  type: 'essential' },
      { name: 'Pork Shoulder',     amount: '67g',  type: 'essential' },
      { name: 'Tofu',              amount: '33g',  type: 'essential' },
      { name: 'Soy Sauce',         amount: '5ml',  type: 'essential' },
      { name: 'Sesame Oil',        amount: '1.6ml',type: 'essential' },
      { name: 'Garlic',            amount: '3.3g', type: 'essential' },
      { name: 'Green Onion',       amount: '10g',  type: 'recommended' },
      { name: 'Cabbage',           amount: '33g',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the filling',     description: 'In a mixing bowl, combine the ground pork (67g), crumbled firm tofu (33g), minced garlic (3.3g), soy sauce (5ml), sesame oil (1.6ml), chopped green onions (10g), and cabbage (33g, if using) until well blended to make the filling.' },
      { step_order: 2, title: 'Wrap the dumplings',   description: 'Place a small spoonful of filling in the center of each dumpling wrapper, wet the edges with water, fold in half, and pinch the edges firmly to seal.' },
      { step_order: 3, title: 'Pan-fry',              description: 'Heat 1 tbsp of oil in a skillet over medium-high heat (180°C). Place the dumplings flat-side down and pan-fry for 3 minutes until the bottoms turn golden brown.' },
      { step_order: 4, title: 'Steam to finish',      description: 'Carefully pour 0.25 cup (60ml) of water into the skillet, cover with a lid immediately, and steam on medium heat for 5 minutes until the water evaporates and the filling is fully cooked.' },
    ],
  },
  {
    name_en: 'Hotteok',
    description: 'Sweet Korean pancakes filled with brown sugar and cinnamon.',
    cooking_time_min: 40, calories: 320, protein_g: 6, carbs_g: 58, fat_g: 10, servings: 1,
    ingredients: [
      { name: 'Flour',           amount: '60g',      type: 'essential' },
      { name: 'Active Dry Yeast',amount: '1g',       type: 'essential' },
      { name: 'Sugar',           amount: '1g',       type: 'essential' },
      { name: 'Brown Sugar',     amount: '12g',      type: 'essential' },
      { name: 'Salt',            amount: '0.06 tsp', type: 'essential' },
      { name: 'Cinnamon',        amount: '0.25 tsp', type: 'essential' },
      { name: 'Sesame Seeds',    amount: '3.75g',    type: 'recommended' },
      { name: 'Peanuts',         amount: '3.75g',    type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the dough',      description: 'In a bowl, mix flour (60g), yeast (1g), sugar (1g), salt (0.3g), and warm water (45ml) to form a smooth dough. Cover and let it rest at room temperature for 1 hour to rise.' },
      { step_order: 2, title: 'Make the filling',    description: 'In a small bowl, prepare the filling by mixing brown sugar (12g), cinnamon (0.75g), sesame seeds (3.75g), and crushed peanuts (3.75g, if using).' },
      { step_order: 3, title: 'Shape & fill',        description: 'Punch down the risen dough to release air, divide into a portion, flatten it on your palm, and place a spoonful of the sugar filling in the center. Bring the edges up and pinch tightly to seal the ball completely.' },
      { step_order: 4, title: 'Pan-fry & flatten',   description: 'Heat a greased pan over medium heat (170°C). Place the dough ball seam-side down, let it cook for 1 minute, then flatten it firmly using a spatula. Pan-fry for 2-3 minutes per side until golden brown and crispy.' },
    ],
  },
  {
    name_en: 'Soondae Bokkeum',
    description: 'Spicy stir-fried blood sausage with vegetables.',
    cooking_time_min: 20, calories: 190, protein_g: 9, carbs_g: 16, fat_g: 9, servings: 1,
    ingredients: [
      { name: 'Korean Blood Sausage',amount: '150g',     type: 'essential' },
      { name: 'Gochujang',           amount: '1 tbsp',   type: 'essential' },
      { name: 'Gochugaru',           amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',           amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',              amount: '1 clove',  type: 'essential' },
      { name: 'Onion',               amount: '40g',      type: 'recommended' },
      { name: 'Green Onion',         amount: '15g',      type: 'recommended' },
      { name: 'Sesame Oil',          amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Slice the soondae',   description: 'Slice the soondae (150g) into bite-sized rounds (about 1.5cm thick).' },
      { step_order: 2, title: 'Stir-fry aromatics',  description: 'Heat a pan over high heat (190°C) with 1 tsp of oil. Stir-fry the minced garlic (5g) and sliced onions (40g) for 2 minutes until fragrant.' },
      { step_order: 3, title: 'Add soondae & sauce', description: 'Add the sliced soondae, gochujang (15g), gochugaru (3.5g), and soy sauce (7.5ml) into the pan. Stir-fry gently for 4-5 minutes, being careful not to break the soondae pieces.' },
      { step_order: 4, title: 'Finish & serve',      description: 'Toss with chopped green onions (15g) and a drizzle of sesame oil (2.5ml, if using) before removing from heat and serving.' },
    ],
  },
  {
    name_en: 'Sundae Tteokbokki',
    description: 'The ultimate Korean street food combo: tteokbokki with soondae.',
    cooking_time_min: 20, calories: 220, protein_g: 8, carbs_g: 31, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Korean Rice Cakes',   amount: '125g',     type: 'essential' },
      { name: 'Korean Blood Sausage',amount: '75g',      type: 'essential' },
      { name: 'Gochujang',           amount: '1 tbsp',   type: 'essential' },
      { name: 'Gochugaru',           amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sugar',               amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',           amount: '0.5 tbsp', type: 'essential' },
      { name: 'Green Onion',         amount: '15g',      type: 'recommended' },
      { name: 'Fish Cake',           amount: '50g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the sauce',      description: 'In a pan, mix gochujang (15g), gochugaru (3.5g), sugar (6g), and soy sauce (7.5ml) with 1 cup (250ml) of water.' },
      { step_order: 2, title: 'Cook the rice cakes', description: 'Bring the sauce to a boil over medium-high heat (5 mins), then add the rice cakes (125g) and sliced fish cakes (50g, if using). Cook for 10 minutes, stirring frequently until the rice cakes soften.' },
      { step_order: 3, title: 'Add soondae',         description: 'Add the sliced soondae (75g) into the pan and continue cooking for 3 more minutes until heated through and coated in the thick sauce.' },
      { step_order: 4, title: 'Garnish & serve',     description: 'Garnish with chopped green onions (15g) and serve immediately.' },
    ],
  },
  {
    name_en: 'Tteokbokki',
    description: 'Spicy, chewy rice cakes in a sweet and fiery gochujang sauce.',
    cooking_time_min: 20, calories: 160, protein_g: 4, carbs_g: 31, fat_g: 2, servings: 1,
    ingredients: [
      { name: 'Korean Rice Cakes', amount: '150g',     type: 'essential' },
      { name: 'Gochujang',         amount: '1 tbsp',   type: 'essential' },
      { name: 'Gochugaru',         amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sugar',             amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',         amount: '0.5 tbsp', type: 'essential' },
      { name: 'Green Onion',       amount: '15g',      type: 'recommended' },
      { name: 'Egg',               amount: '1',        type: 'optional' },
      { name: 'Spam',              amount: '50g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the sauce',      description: 'In a pan, combine gochujang (15g), gochugaru (3.5g), sugar (6g), soy sauce (7.5ml), and 1 cup (250ml) of water. Stir well.' },
      { step_order: 2, title: 'Cook rice cakes',     description: 'Bring the sauce mixture to a boil over medium-high heat (5 mins). Add the rice cakes (150g) and cubed Spam (50g, if using).' },
      { step_order: 3, title: 'Simmer until thick',  description: 'Cook on medium heat (170°C) for 10 to 15 minutes, stirring frequently to prevent the rice cakes from sticking to the bottom of the pan.' },
      { step_order: 4, title: 'Finish & serve',      description: 'Once the sauce thickens and tightly coats the chewy rice cakes, remove from heat. Garnish with chopped green onions (15g) and a hard-boiled egg (1, if using).' },
    ],
  },
  {
    name_en: 'Twigim',
    description: 'Korean street food fritters — vegetables and fish cake in crispy batter.',
    cooking_time_min: 25, calories: 113, protein_g: 2.7, carbs_g: 14, fat_g: 5.3, servings: 1,
    ingredients: [
      { name: 'Zucchini',  amount: '50g',      type: 'essential' },
      { name: 'Onion',     amount: '40g',      type: 'essential' },
      { name: 'Fish Cake', amount: '50g',      type: 'essential' },
      { name: 'Egg',       amount: '0.33',     type: 'essential' },
      { name: 'Flour',     amount: '40g',      type: 'essential' },
      { name: 'Salt',      amount: '0.08 tsp', type: 'essential' },
      { name: 'Soy Sauce', amount: '5ml',      type: 'recommended' },
      { name: 'Gochugaru', amount: '0.33 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the batter',     description: 'In a bowl, mix flour (40g), a third of a beaten egg (0.33), 0.25 cup (60ml) of cold water, and salt (0.5g) to create a light tempura-style batter.' },
      { step_order: 2, title: 'Coat the vegetables', description: 'Dip the sliced zucchini (50g), onions (40g), and fish cake strips (50g) into the batter to coat evenly.' },
      { step_order: 3, title: 'Fry until crispy',    description: 'Deep-fry or shallow-fry the coated items in hot oil heated to 170°C for 4 minutes until golden and crisp.' },
      { step_order: 4, title: 'Drain & serve',       description: 'Drain on paper towels and serve hot with a side of soy sauce (5ml) for dipping.' },
    ],
  },
]

async function main() {
  const { data: allIngredients } = await supabase.from('ingredients').select('id, name')
  const ingMap = {}
  allIngredients.forEach(i => { ingMap[i.name.toLowerCase()] = i.id })
  console.log('ingredients 로드:', allIngredients.length + '개')

  const { data: allRecipes } = await supabase.from('recipes').select('id, name_en')
  const recipeMap = {}
  allRecipes.forEach(r => { recipeMap[r.name_en] = r.id })
  console.log('recipes 로드:', allRecipes.length + '개\n')

  let okCount = 0, warnCount = 0

  for (const r of RECIPES) {
    const recipeId = recipeMap[r.name_en]
    if (!recipeId) { console.log('SKIP (레시피 없음):', r.name_en); continue }

    const { error: rErr } = await supabase.from('recipes').update({
      description:      r.description,
      cooking_time_min: r.cooking_time_min,
      calories:         r.calories,
      protein_g:        r.protein_g,
      carbs_g:          r.carbs_g,
      fat_g:            r.fat_g,
      servings:         r.servings,
    }).eq('id', recipeId)
    if (rErr) { console.log('ERROR recipes:', r.name_en, rErr.message); continue }

    const { data: existingSteps } = await supabase
      .from('recipe_steps').select('step_order, image_url').eq('recipe_id', recipeId)
    const imgUrlMap = {}
    existingSteps?.forEach(s => { if (s.image_url) imgUrlMap[s.step_order] = s.image_url })

    await supabase.from('recipe_ingredients').delete().eq('recipe_id', recipeId)
    const ingRows = [], missing = []
    r.ingredients.forEach((ing, idx) => {
      const ingId = ingMap[ing.name.toLowerCase()]
      if (!ingId) { missing.push(ing.name); return }
      ingRows.push({ recipe_id: recipeId, ingredient_id: ingId, amount: ing.amount, type: ing.type, sort_order: idx })
    })
    if (ingRows.length > 0) {
      const { error: iErr } = await supabase.from('recipe_ingredients').insert(ingRows)
      if (iErr) console.log('ERROR ingredients:', r.name_en, iErr.message)
    }

    await supabase.from('recipe_steps').delete().eq('recipe_id', recipeId)
    const stepRows = r.steps.map(s => ({
      recipe_id: recipeId, step_order: s.step_order, title: s.title,
      description: s.description, image_url: imgUrlMap[s.step_order] ?? null,
    }))
    const { error: sErr } = await supabase.from('recipe_steps').insert(stepRows)
    if (sErr) { console.log('ERROR steps:', r.name_en, sErr.message); continue }

    const warn = missing.length > 0 ? ' ⚠️  재료 미매핑: ' + missing.join(', ') : ''
    console.log('OK ' + r.name_en + ' (재료 ' + ingRows.length + '/' + r.ingredients.length + ', step ' + stepRows.length + '개)' + warn)
    if (missing.length > 0) warnCount++
    okCount++
  }

  console.log('\n완료: ' + okCount + '개 업데이트, 경고: ' + warnCount + '개')
}

main().catch(err => { console.error(err.message); process.exit(1) })
