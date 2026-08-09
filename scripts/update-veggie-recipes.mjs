import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const RECIPES = [
  {
    name_en: 'Broccoli Muchim',
    description: 'Blanched broccoli tossed in a garlicky soy dressing.',
    cooking_time_min: 10, calories: 30, protein_g: 2, carbs_g: 4, fat_g: 1, servings: 1,
    ingredients: [
      { name: 'Broccoli',     amount: '150g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'essential' },
      { name: 'Garlic',       amount: '1 clove',  type: 'essential' },
      { name: 'Sesame Seeds', amount: '1g',       type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.5 tsp',  type: 'optional' },
      { name: 'Sugar',        amount: '1.5g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch the broccoli',  description: 'Cut the broccoli into bite-sized florets. Bring a pot of water to a rolling boil over high heat (5 mins), add the broccoli, and blanch for 2 minutes.' },
      { step_order: 2, title: 'Drain & cool',          description: 'Drain the broccoli immediately and rinse under cold water to stop the cooking process; squeeze gently to remove excess moisture.' },
      { step_order: 3, title: 'Make the dressing',     description: 'In a mixing bowl, combine soy sauce (7.5ml), sesame oil (2.5ml), minced garlic (5g), sugar (1.5g, if using), and gochugaru (1g, if using).' },
      { step_order: 4, title: 'Toss & coat',           description: 'Add the blanched broccoli to the dressing and toss thoroughly until evenly coated.' },
      { step_order: 5, title: 'Garnish & serve',       description: 'Garnish with sesame seeds (1g) and serve.' },
    ],
  },
  {
    name_en: 'Buchu Jeon',
    description: 'Crispy chive pancakes — simple and satisfying.',
    cooking_time_min: 15, calories: 90, protein_g: 3, carbs_g: 12, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Garlic Chives', amount: '100g',     type: 'essential' },
      { name: 'Egg',           amount: '1',        type: 'essential' },
      { name: 'Salt',          amount: '0.125 tsp',type: 'essential' },
      { name: 'Flour',         amount: '30g',      type: 'essential' },
      { name: 'Soy Sauce',     amount: '0.5 tbsp', type: 'recommended' },
      { name: 'Sesame Oil',    amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Gochugaru',     amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the chives',    description: 'Wash the garlic chives (100g) and cut them into 5cm lengths.' },
      { step_order: 2, title: 'Make the batter',    description: 'In a mixing bowl, whisk together flour (30g), egg (1), water (60ml), and salt (0.75g) until a smooth batter forms. Add the chopped chives into the batter and mix well.' },
      { step_order: 3, title: 'Pan-fry',            description: 'Heat a skillet over medium-high heat (185°C) with 1 tbsp of oil. Pour the chive and batter mixture into the pan, spreading it out into a thin, even circle.' },
      { step_order: 4, title: 'Cook both sides',    description: 'Pan-fry for 3 to 4 minutes per side until golden brown and crispy on both sides.' },
      { step_order: 5, title: 'Make dipping sauce', description: 'Serve warm with a dipping sauce made from soy sauce (7.5ml), sesame oil (2.5ml), and gochugaru (1g, if using).' },
    ],
  },
  {
    name_en: 'Cabbage Doenjang Muchim',
    description: 'Quick cabbage salad with doenjang dressing.',
    cooking_time_min: 10, calories: 30, protein_g: 1.5, carbs_g: 5, fat_g: 1, servings: 1,
    ingredients: [
      { name: 'Cabbage',      amount: '100g',     type: 'essential' },
      { name: 'Doenjang',     amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'essential' },
      { name: 'Garlic',       amount: '2.5g',     type: 'essential' },
      { name: 'Vinegar',      amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Sesame Seeds', amount: '1g',       type: 'optional' },
      { name: 'Gochugaru',    amount: '1g',       type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the cabbage',  description: 'Shred the cabbage (100g) thinly. Blanch briefly in boiling water for 30 seconds or keep raw for a crunchy texture, then drain completely.' },
      { step_order: 2, title: 'Make the dressing', description: 'In a mixing bowl, combine doenjang (7.5g), sesame oil (2.5ml), minced garlic (2.5g), and vinegar (2.5ml) to create the dressing.' },
      { step_order: 3, title: 'Toss & coat',       description: 'Toss the shredded cabbage with the doenjang dressing until fully coated.' },
      { step_order: 4, title: 'Garnish & serve',   description: 'Garnish with sesame seeds (1g) and gochugaru (1g, if using) before serving.' },
    ],
  },
  {
    name_en: 'Gamja Guk',
    description: 'Simple potato soup in a light anchovy broth.',
    cooking_time_min: 20, calories: 60, protein_g: 2, carbs_g: 11, fat_g: 1.5, servings: 1,
    ingredients: [
      { name: 'Potato',        amount: '100g',     type: 'essential' },
      { name: 'Anchovy Broth', amount: '1.5 cups', type: 'essential' },
      { name: 'Doenjang',      amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',        amount: '2.5g',     type: 'essential' },
      { name: 'Green Onion',   amount: '7.5g',     type: 'recommended' },
      { name: 'Salt',          amount: '0.125 tsp',type: 'optional' },
      { name: 'Sesame Oil',    amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the potato',   description: 'Peel and cube the potato (100g) into bite-sized pieces.' },
      { step_order: 2, title: 'Make the broth',    description: 'In a pot, bring the anchovy broth (375ml) to a boil over medium-high heat (5 mins). Dissolve the doenjang (7.5g) and minced garlic (2.5g) into the broth.' },
      { step_order: 3, title: 'Cook the potato',   description: 'Add the cubed potatoes to the pot, reduce heat to medium (170°C), and simmer for 12 minutes until the potatoes are tender.' },
      { step_order: 4, title: 'Season',            description: 'Season with salt (0.75g, if needed).' },
      { step_order: 5, title: 'Garnish & serve',   description: 'Garnish with chopped green onions (7.5g) and a drizzle of sesame oil (2.5ml, if using) before serving.' },
    ],
  },
  {
    name_en: 'Hobak Doenjang Muchim',
    description: 'Zucchini seasoned with doenjang — nutty and savory.',
    cooking_time_min: 10, calories: 35, protein_g: 1.5, carbs_g: 5, fat_g: 1.5, servings: 1,
    ingredients: [
      { name: 'Zucchini',     amount: '100g',     type: 'essential' },
      { name: 'Doenjang',     amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'essential' },
      { name: 'Garlic',       amount: '2.5g',     type: 'essential' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'recommended' },
      { name: 'Sesame Seeds', amount: '1g',       type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Slice the zucchini', description: 'Slice the zucchini (100g) into half-moons.' },
      { step_order: 2, title: 'Sauté the zucchini', description: 'Heat a pan over medium-high heat (180°C) with 1 tsp of oil, add the zucchini slices, and sauté for 3 to 4 minutes until softened. Remove from heat and let cool slightly.' },
      { step_order: 3, title: 'Make the dressing',  description: 'In a bowl, mix together the doenjang (7.5g), sesame oil (2.5ml), and minced garlic (2.5g).' },
      { step_order: 4, title: 'Toss & coat',        description: 'Gently toss the sautéed zucchini with the doenjang mixture.' },
      { step_order: 5, title: 'Garnish & serve',    description: 'Garnish with chopped green onions (7.5g) and sesame seeds (1g, if using).' },
    ],
  },
  {
    name_en: 'Homemade Kimchi',
    description: 'Traditional homemade napa cabbage kimchi.',
    cooking_time_min: 60, calories: 30, protein_g: 2, carbs_g: 6, fat_g: 0, servings: 1,
    ingredients: [
      { name: 'Napa Cabbage', amount: '100g',     type: 'essential' },
      { name: 'Gochugaru',    amount: '10g',      type: 'essential' },
      { name: 'Garlic',       amount: '1 clove',  type: 'essential' },
      { name: 'Salt',         amount: '18g',      type: 'essential' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'essential' },
      { name: 'Fish Sauce',   amount: '3ml',      type: 'recommended' },
      { name: 'Ginger',       amount: '1.5g',     type: 'recommended' },
      { name: 'Sugar',        amount: '0.5g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Salt the cabbage',   description: 'Cut the napa cabbage portion (100g) into bite-sized pieces and salt between the leaves using a portion of the salt (18g). Let it sit at room temperature for 2 hours, turning occasionally, then rinse thoroughly with cold water and drain well in a colander.' },
      { step_order: 2, title: 'Make the paste',     description: 'In a small mixing bowl, combine gochugaru (10g), minced garlic (5g), grated ginger (1.5g), fish sauce (3ml), and sugar (0.5g, if using) into a smooth paste.' },
      { step_order: 3, title: 'Coat the cabbage',   description: 'In a large bowl, toss the drained cabbage and chopped green onions (7.5g) with the chili paste, ensuring every leaf is thoroughly coated.' },
      { step_order: 4, title: 'Ferment & store',    description: 'Pack the kimchi tightly into a clean glass jar. Leave it to ferment at room temperature for 1 to 2 days, then transfer it to the refrigerator.' },
    ],
  },
  {
    name_en: 'Japchae Namul Bowl',
    description: 'Light noodle and vegetable bowl seasoned with soy and sesame.',
    cooking_time_min: 20, calories: 140, protein_g: 4, carbs_g: 24, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Glass Noodles', amount: '75g',      type: 'essential' },
      { name: 'Spinach',       amount: '50g',      type: 'essential' },
      { name: 'Bean Sprouts',  amount: '50g',      type: 'essential' },
      { name: 'Soy Sauce',     amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',        amount: '2.5g',     type: 'recommended' },
      { name: 'Carrot',        amount: '25g',      type: 'optional' },
      { name: 'Sesame Seeds',  amount: '1g',       type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Cook the noodles',    description: 'Bring a pot of water to a boil over high heat (5 mins), add the glass noodles (75g), and cook for 3 minutes. Drain thoroughly and cut with scissors.' },
      { step_order: 2, title: 'Blanch vegetables',   description: 'In the same boiling water, blanch the spinach (50g) and bean sprouts (50g) separately for 30 seconds each, rinse under cold water, and squeeze out all excess moisture.' },
      { step_order: 3, title: 'Sauté carrots',       description: 'If using carrots (25g), sauté them in a pan with a drop of oil over medium heat (175°C) for 2 minutes.' },
      { step_order: 4, title: 'Season & toss',       description: 'In a large bowl, combine the cooked noodles, spinach, bean sprouts, and carrots with soy sauce (15ml), sesame oil (7.5ml), and minced garlic (2.5g). Toss thoroughly.' },
      { step_order: 5, title: 'Plate & garnish',     description: 'Plate the mixture and garnish with sesame seeds (1g, if using).' },
    ],
  },
  {
    name_en: 'Mu Doenjang Guk',
    description: 'Simple radish and doenjang soup.',
    cooking_time_min: 20, calories: 45, protein_g: 2, carbs_g: 7, fat_g: 1.5, servings: 1,
    ingredients: [
      { name: 'Radish',        amount: '100g',     type: 'essential' },
      { name: 'Doenjang',      amount: '0.75 tbsp',type: 'essential' },
      { name: 'Garlic',        amount: '2.5g',     type: 'essential' },
      { name: 'Anchovy Broth', amount: '1.5 cups', type: 'recommended' },
      { name: 'Green Onion',   amount: '7.5g',     type: 'recommended' },
      { name: 'Tofu',          amount: '50g',      type: 'optional' },
      { name: 'Salt',          amount: '0.125 tsp',type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the radish',   description: 'Cut the Korean radish (100g) into thin bite-sized rectangular cubes.' },
      { step_order: 2, title: 'Make the broth',    description: 'Bring the anchovy broth (375ml) to a boil in a pot over medium-high heat (5 mins). Dissolve the doenjang (11g) into the broth.' },
      { step_order: 3, title: 'Cook the radish',   description: 'Add the cubed radish and minced garlic (2.5g) to the pot, reduce heat to medium (170°C), and simmer for 12 minutes until the radish is tender.' },
      { step_order: 4, title: 'Add tofu & season', description: 'Add the diced firm tofu (50g, if using) and cook for 2 more minutes. Season with salt (0.75g) if additional seasoning is needed.' },
      { step_order: 5, title: 'Garnish & serve',   description: 'Garnish with chopped green onions (7.5g) and serve hot.' },
    ],
  },
  {
    name_en: 'Oi Naengchae',
    description: 'Cold cucumber salad with a tangy-sweet dressing.',
    cooking_time_min: 10, calories: 25, protein_g: 0.5, carbs_g: 5, fat_g: 1, servings: 1,
    ingredients: [
      { name: 'Cucumber',     amount: '100g',     type: 'essential' },
      { name: 'Vinegar',      amount: '1 tbsp',   type: 'essential' },
      { name: 'Sugar',        amount: '0.5 tbsp', type: 'essential' },
      { name: 'Salt',         amount: '0.25 tsp', type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Gochugaru',    amount: '1g',       type: 'optional' },
      { name: 'Sesame Seeds', amount: '1g',       type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Salt the cucumber', description: 'Slice the cucumber (100g) thinly. Toss with salt (1.5g) in a bowl and let sit for 5 minutes. Squeeze the cucumber firmly to remove excess moisture.' },
      { step_order: 2, title: 'Make the dressing', description: 'In a small mixing bowl, combine vinegar (15ml), sugar (6g), sesame oil (2.5ml), and gochugaru (1g, if using) until the sugar dissolves.' },
      { step_order: 3, title: 'Toss & dress',      description: 'Toss the seasoned, drained cucumber slices with the tangy-sweet dressing.' },
      { step_order: 4, title: 'Garnish & serve',   description: 'Garnish with sesame seeds (1g, if using) and serve immediately while chilled.' },
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
