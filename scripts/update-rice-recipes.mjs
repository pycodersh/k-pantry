import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const RECIPES = [
  {
    name_en: 'Bibim Gimbap',
    description: 'Spicy mixed rice wrapped in seaweed.',
    cooking_time_min: 30, calories: 180, protein_g: 6, carbs_g: 29, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Rice',          amount: '150g',     type: 'essential' },
      { name: 'Seaweed Sheet', amount: '2 sheets', type: 'essential' },
      { name: 'Gochujang',     amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Egg',           amount: '1',        type: 'recommended' },
      { name: 'Carrot',        amount: '25g',      type: 'recommended' },
      { name: 'Spinach',       amount: '50g',      type: 'recommended' },
      { name: 'Sesame Seeds',  amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the sauce',    description: 'In a small bowl, mix gochujang (1 tbsp) and sesame oil (0.5 tbsp) together.' },
      { step_order: 2, title: 'Make egg strips',   description: 'Crack the egg (1) into a bowl, whisk thoroughly, pour into a skillet heated to 170°C with a few drops of oil, cook for 1.5 minutes per side, and cut into thin strips.' },
      { step_order: 3, title: 'Blanch the spinach',description: 'Blanch the spinach (50g) in boiling water for 30 seconds, rinse under cold water, squeeze out all excess moisture, and set aside.' },
      { step_order: 4, title: 'Sauté the carrots', description: 'Sauté the julienned carrots (25g) in a pan with 0.5 tsp of oil over medium heat for 2 minutes until tender.' },
      { step_order: 5, title: 'Season the rice',   description: 'Mix the cooked rice (1 cup/150g) thoroughly with the gochujang and sesame oil mixture.' },
      { step_order: 6, title: 'Roll & serve',       description: 'Place a seaweed sheet on a bamboo mat, spread the seasoned rice evenly over it leaving the top edge bare, add the egg strips, spinach, and carrots in a line, roll tightly, slice into rounds, and serve.' },
    ],
  },
  {
    name_en: 'Bibimbap',
    description: 'A colorful mixed rice bowl loaded with vegetables and gochujang.',
    cooking_time_min: 25, calories: 240, protein_g: 8, carbs_g: 36, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Rice',             amount: '150g',     type: 'essential' },
      { name: 'Egg',              amount: '1',        type: 'essential' },
      { name: 'Gochujang',        amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',       amount: '0.5 tbsp', type: 'essential' },
      { name: 'Spinach',          amount: '50g',      type: 'essential' },
      { name: 'Bean Sprouts',     amount: '50g',      type: 'essential' },
      { name: 'Carrot',           amount: '25g',      type: 'recommended' },
      { name: 'Shiitake Mushroom',amount: '50g',      type: 'recommended' },
      { name: 'Beef',             amount: '75g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch vegetables',       description: 'Blanch the spinach (50g) and bean sprouts (50g) separately in boiling water for 30 seconds, rinse under cold water, and drain completely.' },
      { step_order: 2, title: 'Sauté carrots & mushrooms', description: 'Sauté the sliced carrots (25g) and mushrooms (50g) separately in a pan with a drop of oil, soy sauce, and sesame oil over medium-high heat for 2 minutes.' },
      { step_order: 3, title: 'Cook the beef',           description: 'If using beef (75g), stir-fry it in a skillet over high heat for 3 minutes until fully cooked.' },
      { step_order: 4, title: 'Fry the egg',             description: 'Fry an egg sunny-side up in a pan over medium heat for 2 minutes.' },
      { step_order: 5, title: 'Assemble the bowl',       description: 'Place the warm rice (1 cup/150g) in a serving bowl, arrange each prepared vegetable and beef neatly in separate sections on top, and place the fried egg in the center.' },
      { step_order: 6, title: 'Mix & serve',             description: 'Add gochujang (1 tbsp) and sesame oil (0.5 tbsp), then mix everything together vigorously before eating.' },
    ],
  },
  {
    name_en: 'Curry Rice',
    description: 'Korean-style mild curry with tender vegetables and chicken.',
    cooking_time_min: 35, calories: 153, protein_g: 7, carbs_g: 23, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Rice',         amount: '150g',   type: 'essential' },
      { name: 'Curry Powder', amount: '1 tbsp', type: 'essential' },
      { name: 'Potato',       amount: '70g',    type: 'essential' },
      { name: 'Carrot',       amount: '35g',    type: 'essential' },
      { name: 'Onion',        amount: '50g',    type: 'essential' },
      { name: 'Chicken',      amount: '100g',   type: 'recommended' },
      { name: 'Garlic',       amount: '3g',     type: 'recommended' },
    ],
    steps: [
      { step_order: 1, title: 'Sauté everything',  description: 'Heat a pot over medium-high heat with 1 tsp of oil. Sauté the diced onion (50g), potato (70g), carrot (35g), minced garlic (3g), and chicken (100g) for 4 minutes until lightly browned.' },
      { step_order: 2, title: 'Add water & simmer',description: 'Pour 1 cup (250ml) of water into the pot, bring to a boil over high heat (4 mins), then reduce heat to medium-low, cover, and simmer for 15 minutes until vegetables are soft.' },
      { step_order: 3, title: 'Add curry powder',  description: 'Reduce heat to low, add the curry powder (1 tbsp), and stir continuously until completely dissolved and smooth.' },
      { step_order: 4, title: 'Thicken the curry', description: 'Simmer the curry uncovered for 10 more minutes over low heat until thick and glossy.' },
      { step_order: 5, title: 'Serve over rice',   description: 'Ladle the hot curry generously over a plate of cooked rice (1 cup/150g) and serve.' },
    ],
  },
  {
    name_en: 'Dakgalbi Bokkeumbap',
    description: 'Spicy stir-fried rice with chicken and gochujang sauce.',
    cooking_time_min: 20, calories: 225, protein_g: 14, carbs_g: 28, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Rice',             amount: '150g',     type: 'essential' },
      { name: 'Chicken',          amount: '100g',     type: 'essential' },
      { name: 'Gochujang',        amount: '1 tbsp',   type: 'essential' },
      { name: 'Soy Sauce',        amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',           amount: '1 clove',  type: 'essential' },
      { name: 'Green Onion',      amount: '15g',      type: 'recommended' },
      { name: 'Sesame Oil',       amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Mozzarella Cheese',amount: '15g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Cook the chicken',   description: 'Heat a skillet over medium-high heat with 1 tsp of oil. Stir-fry the chicken thigh pieces (100g) with gochujang (1 tbsp), soy sauce (0.5 tbsp), and minced garlic (1 clove) for 5 minutes until fully cooked.' },
      { step_order: 2, title: 'Stir-fry with rice', description: 'Add the cooked rice (1 cup/150g) directly into the skillet and stir-fry everything together vigorously for 3 minutes until evenly coated and heated through.' },
      { step_order: 3, title: 'Season',             description: 'Drizzle with sesame oil (0.5 tsp) and top with chopped green onions (15g).' },
      { step_order: 4, title: 'Add cheese & serve', description: 'If using cheese (1 slice/15g), place it on top, cover the pan for 1 minute on low heat until melted, and serve.' },
    ],
  },
  {
    name_en: 'Doenjang Bibimbap',
    description: 'Rustic bibimbap seasoned with savory soybean paste.',
    cooking_time_min: 20, calories: 190, protein_g: 6, carbs_g: 33, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Rice',         amount: '150g',     type: 'essential' },
      { name: 'Doenjang',     amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Zucchini',     amount: '40g',      type: 'essential' },
      { name: 'Bean Sprouts', amount: '50g',      type: 'essential' },
      { name: 'Egg',          amount: '1',        type: 'recommended' },
      { name: 'Spinach',      amount: '50g',      type: 'recommended' },
      { name: 'Garlic',       amount: '2.5g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Sauté zucchini',          description: 'Sauté the sliced zucchini (40g) in a pan with a pinch of salt over medium heat for 2 minutes until tender.' },
      { step_order: 2, title: 'Blanch sprouts & spinach', description: 'Blanch the bean sprouts (50g) and spinach (50g) separately in boiling water for 30 seconds, rinse with cold water, and squeeze dry.' },
      { step_order: 3, title: 'Fry the egg',             description: 'Fry an egg sunny-side up in a skillet with a drop of oil over medium heat for 2 minutes.' },
      { step_order: 4, title: 'Make the sauce',           description: 'In a small bowl, mix the doenjang (1 tbsp) with the sesame oil (0.5 tbsp) and minced garlic (2.5g, if using) to create the sauce.' },
      { step_order: 5, title: 'Assemble & serve',         description: 'Place the cooked rice (1 cup/150g) in a serving bowl, arrange the prepared zucchini, bean sprouts, and spinach around the edges, place the fried egg on top, and serve with the doenjang mixture on the side to mix in.' },
    ],
  },
  {
    name_en: 'Egg Rice Bowl',
    description: 'The simplest and most comforting Korean meal — rice topped with a runny egg.',
    cooking_time_min: 10, calories: 280, protein_g: 10, carbs_g: 48, fat_g: 8, servings: 1,
    ingredients: [
      { name: 'Rice',         amount: '150g',    type: 'essential' },
      { name: 'Egg',          amount: '1',       type: 'essential' },
      { name: 'Soy Sauce',    amount: '1 tbsp',  type: 'essential' },
      { name: 'Sesame Oil',   amount: '1 tsp',   type: 'essential' },
      { name: 'Sesame Seeds', amount: '0.5 tsp', type: 'recommended' },
      { name: 'Green Onion',  amount: '15g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Fry the egg',       description: 'Heat a non-stick skillet over medium heat with 1 tsp of oil and fry an egg to your preferred doneness (sunny-side up recommended for a runny yolk).' },
      { step_order: 2, title: 'Place egg on rice',  description: 'Place the hot cooked rice (1 cup/150g) in a serving bowl and lay the fried egg directly on top.' },
      { step_order: 3, title: 'Add seasoning',      description: 'Drizzle soy sauce (1 tbsp) and sesame oil (1 tsp) over the egg and rice.' },
      { step_order: 4, title: 'Garnish & serve',    description: 'Garnish with sesame seeds (0.5 tsp) and chopped green onions (15g, if using), then mix everything together thoroughly before eating.' },
    ],
  },
  {
    name_en: 'Gimbap',
    description: 'Korean seaweed rice rolls filled with colorful vegetables and egg.',
    cooking_time_min: 40, calories: 190, protein_g: 7, carbs_g: 31, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Rice',           amount: '150g',     type: 'essential' },
      { name: 'Seaweed Sheet',  amount: '2 sheets', type: 'essential' },
      { name: 'Egg',            amount: '1.5',      type: 'essential' },
      { name: 'Sesame Oil',     amount: '1 tbsp',   type: 'essential' },
      { name: 'Salt',           amount: '0.5 tsp',  type: 'essential' },
      { name: 'Carrot',         amount: '40g',      type: 'recommended' },
      { name: 'Spinach',        amount: '50g',      type: 'recommended' },
      { name: 'Crab Stick',     amount: '20g',      type: 'optional' },
      { name: 'Pickled Radish', amount: '20g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make egg strips',   description: 'Whisk the eggs (1.5), pour into a skillet heated to 170°C with oil, cook for 2 minutes per side, and cut into long strips.' },
      { step_order: 2, title: 'Blanch the spinach',description: 'Blanch the spinach (50g) in boiling water for 30 seconds, rinse with cold water, squeeze out moisture, and season with a pinch of salt.' },
      { step_order: 3, title: 'Sauté the carrots', description: 'Sauté the julienned carrots (40g) in a pan with oil and a pinch of salt over medium heat for 2 minutes.' },
      { step_order: 4, title: 'Season the rice',   description: 'Mix the warm cooked rice (1 cup/150g) thoroughly with salt (0.5 tsp) and half of the sesame oil (0.5 tbsp).' },
      { step_order: 5, title: 'Set up the roll',   description: 'Place a seaweed sheet shiny side down on a bamboo mat, spread an even layer of rice over it, and arrange the egg strips, spinach, carrots, crab sticks, and pickled radish on top.' },
      { step_order: 6, title: 'Roll & slice',       description: 'Roll the gimbap tightly, brush the outside with the remaining sesame oil (0.5 tbsp), slice into rounds, and serve.' },
    ],
  },
  {
    name_en: 'Jeyuk Dupbap',
    description: 'Spicy stir-fried pork served over steamed rice.',
    cooking_time_min: 25, calories: 240, protein_g: 14, carbs_g: 28, fat_g: 9, servings: 1,
    ingredients: [
      { name: 'Rice',       amount: '150g',     type: 'essential' },
      { name: 'Pork Belly', amount: '150g',     type: 'essential' },
      { name: 'Gochujang',  amount: '1 tbsp',   type: 'essential' },
      { name: 'Soy Sauce',  amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',     amount: '7.5g',     type: 'essential' },
      { name: 'Onion',      amount: '40g',      type: 'essential' },
      { name: 'Green Onion',amount: '15g',      type: 'recommended' },
      { name: 'Sesame Oil', amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Gochugaru',  amount: '3g',       type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Marinate the pork', description: 'In a bowl, combine the thinly sliced pork (150g) with gochujang (1 tbsp), soy sauce (0.5 tbsp), minced garlic (7.5g), sesame oil (0.5 tsp), and gochugaru (3g, if using). Marinate for 15 minutes.' },
      { step_order: 2, title: 'Stir-fry',          description: 'Heat a skillet over high heat. Add the marinated pork and sliced onions (40g), and stir-fry for 5 minutes until the pork is completely cooked through and the edges are slightly caramelized.' },
      { step_order: 3, title: 'Serve over rice',   description: 'Serve the spicy stir-fried pork hot directly over a bowl of cooked rice (1 cup/150g).' },
      { step_order: 4, title: 'Garnish',           description: 'Garnish with chopped green onions (15g) before eating.' },
    ],
  },
  {
    name_en: 'Kimchi Bokkeumbap Deluxe',
    description: 'Upgraded kimchi fried rice with pork belly and cheese.',
    cooking_time_min: 20, calories: 210, protein_g: 9, carbs_g: 29, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Kimchi',           amount: '80g',      type: 'essential' },
      { name: 'Rice',             amount: '150g',     type: 'essential' },
      { name: 'Pork Belly',       amount: '75g',      type: 'essential' },
      { name: 'Egg',              amount: '1',        type: 'essential' },
      { name: 'Soy Sauce',        amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',       amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Green Onion',      amount: '15g',      type: 'recommended' },
      { name: 'Mozzarella Cheese',amount: '15g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Crisp the pork belly',description: 'Heat a skillet over medium-high heat and stir-fry the sliced pork belly (75g) for 4 minutes until crispy and rendered.' },
      { step_order: 2, title: 'Add kimchi',           description: 'Add the chopped kimchi (80g) and soy sauce (0.5 tbsp) to the skillet, stir-frying together for 3 minutes until the kimchi softens.' },
      { step_order: 3, title: 'Stir-fry with rice',   description: 'Add the cooked rice (1 cup/150g) into the skillet and stir-fry everything vigorously on high heat for 4 minutes until well combined and slightly crisp.' },
      { step_order: 4, title: 'Fry the egg',          description: 'In a separate pan, fry an egg sunny-side up over medium heat for 2 minutes.' },
      { step_order: 5, title: 'Top & serve',          description: 'Top the fried rice with the fried egg, sesame oil (0.5 tsp), chopped green onions (15g), and a slice of cheese (15g, if using) to melt from the residual heat before serving.' },
    ],
  },
  {
    name_en: 'Kimchi Fried Rice',
    description: 'Crispy fried rice with tangy kimchi and a fried egg on top.',
    cooking_time_min: 15, calories: 190, protein_g: 6, carbs_g: 29, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Kimchi',       amount: '80g',      type: 'essential' },
      { name: 'Rice',         amount: '150g',     type: 'essential' },
      { name: 'Egg',          amount: '1',        type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'essential' },
      { name: 'Green Onion',  amount: '15g',      type: 'recommended' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Chop the kimchi',   description: 'Chop the fermented kimchi (80g) into small, bite-sized pieces.' },
      { step_order: 2, title: 'Stir-fry kimchi',   description: 'Heat 1 tbsp of oil in a pan over high heat, add the chopped kimchi, and stir-fry for 2 minutes.' },
      { step_order: 3, title: 'Add rice',          description: 'Add the cooked rice (1 cup/150g) and soy sauce (0.5 tbsp) to the pan, and stir-fry continuously for 3 to 4 minutes until the rice is evenly colored and slightly crispy.' },
      { step_order: 4, title: 'Fry the egg',       description: 'In a separate pan, fry an egg sunny-side up over medium heat for 2 minutes.' },
      { step_order: 5, title: 'Garnish & serve',   description: 'Top the kimchi fried rice with the fried egg, drizzle with sesame oil (0.5 tsp), and garnish with chopped green onions (15g) and sesame seeds (if using).' },
    ],
  },
  {
    name_en: 'Kongnamul Bibimbap',
    description: 'Simple bibimbap topped with seasoned soybean sprouts.',
    cooking_time_min: 20, calories: 160, protein_g: 5, carbs_g: 29, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Rice',         amount: '150g',     type: 'essential' },
      { name: 'Bean Sprouts', amount: '100g',     type: 'essential' },
      { name: 'Gochujang',    amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',       amount: '2.5g',     type: 'recommended' },
      { name: 'Egg',          amount: '1',        type: 'recommended' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Season bean sprouts',description: 'Blanch the bean sprouts (100g) in boiling water for 3 minutes, drain thoroughly, and toss in a bowl with soy sauce (0.5 tbsp), sesame oil (0.5 tbsp), and minced garlic (2.5g).' },
      { step_order: 2, title: 'Fry the egg',        description: 'In a separate skillet heated to 170°C with a drop of oil, fry an egg sunny-side up for 2 minutes.' },
      { step_order: 3, title: 'Place the rice',      description: 'Place the warm cooked rice (1 cup/150g) in a serving bowl.' },
      { step_order: 4, title: 'Assemble',           description: 'Top the rice with the seasoned bean sprouts and the fried egg, and add a dollop of gochujang (1 tbsp) on the side.' },
      { step_order: 5, title: 'Mix & serve',         description: 'Sprinkle with sesame seeds (if using) and mix everything together thoroughly before eating.' },
    ],
  },
  {
    name_en: 'Omurice',
    description: 'Korean-style omelette rice with ketchup-seasoned fried rice.',
    cooking_time_min: 25, calories: 240, protein_g: 9, carbs_g: 29, fat_g: 10, servings: 1,
    ingredients: [
      { name: 'Rice',       amount: '150g',     type: 'essential' },
      { name: 'Egg',        amount: '2',        type: 'essential' },
      { name: 'Ketchup',    amount: '1.5 tbsp', type: 'essential' },
      { name: 'Onion',      amount: '40g',      type: 'essential' },
      { name: 'Chicken',    amount: '75g',      type: 'recommended' },
      { name: 'Carrot',     amount: '20g',      type: 'recommended' },
      { name: 'Green Onion',amount: '7.5g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Cook chicken & veg', description: 'Heat 1 tsp of oil in a pan over medium-high heat, add the diced chicken (75g), onion (40g), and carrot (20g), and stir-fry for 4 minutes until cooked.' },
      { step_order: 2, title: 'Make ketchup rice',  description: 'Add the cooked rice (1 cup/150g) and ketchup (1.5 tbsp) to the pan, stirring well for 2 minutes until fully incorporated, then remove the fried rice to a plate.' },
      { step_order: 3, title: 'Wrap in omelette',   description: 'In a bowl, beat the eggs (2) thoroughly. Pour into a non-stick pan heated to 170°C with 1 tsp of oil, cook until the edges are just set, place the ketchup fried rice in the center, and carefully fold the omelette over the rice.' },
      { step_order: 4, title: 'Plate & garnish',    description: 'Slide the omurice onto a serving plate, drizzle extra ketchup on top, and garnish with chopped green onions (7.5g, if using).' },
    ],
  },
  {
    name_en: 'Ssamjang Veggie Bowl',
    description: 'Healthy rice bowl with sautéed vegetables and ssamjang dipping sauce.',
    cooking_time_min: 15, calories: 150, protein_g: 5, carbs_g: 26, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Rice',             amount: '150g',     type: 'essential' },
      { name: 'Ssamjang',         amount: '1 tbsp',   type: 'essential' },
      { name: 'Zucchini',         amount: '40g',      type: 'essential' },
      { name: 'Shiitake Mushroom',amount: '50g',      type: 'essential' },
      { name: 'Spinach',          amount: '50g',      type: 'recommended' },
      { name: 'Sesame Oil',       amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Egg',              amount: '1',        type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Sauté vegetables',  description: 'Heat a skillet over medium-high heat with 1 tsp of oil. Sauté the sliced zucchini (40g) and mushrooms (50g) with a pinch of salt for 3 minutes until tender, then remove.' },
      { step_order: 2, title: 'Blanch the spinach', description: 'Blanch the spinach (50g) in boiling water for 30 seconds, rinse with cold water, squeeze dry, and toss with sesame oil (0.5 tsp).' },
      { step_order: 3, title: 'Fry the egg',        description: 'If using an egg (1), fry it sunny-side up in a pan over medium heat for 2 minutes.' },
      { step_order: 4, title: 'Assemble',           description: 'Place the cooked rice (1 cup/150g) in a serving bowl, and arrange the sautéed zucchini, mushrooms, and spinach neatly on top.' },
      { step_order: 5, title: 'Serve with ssamjang',description: 'Serve with ssamjang (1 tbsp) on the side for mixing, topped with the fried egg if desired.' },
    ],
  },
  {
    name_en: 'Sundubu Dupbap',
    description: 'Silky soft tofu in spicy broth served over rice.',
    cooking_time_min: 15, calories: 160, protein_g: 8, carbs_g: 24, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Rice',       amount: '150g',     type: 'essential' },
      { name: 'Soft Tofu',  amount: '150g',     type: 'essential' },
      { name: 'Gochugaru',  amount: '1 tbsp',   type: 'essential' },
      { name: 'Soy Sauce',  amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',     amount: '1 clove',  type: 'essential' },
      { name: 'Egg',        amount: '1',        type: 'recommended' },
      { name: 'Green Onion',amount: '7.5g',     type: 'recommended' },
      { name: 'Sesame Oil', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make chili base',  description: 'Heat 1 tsp of oil in a small pot over medium heat. Sauté the minced garlic (1 clove) and gochugaru (1 tbsp) for 30 seconds to release flavors without burning.' },
      { step_order: 2, title: 'Build the broth',  description: 'Pour 0.5 cup (125ml) of water and soy sauce (0.5 tbsp) into the pot and bring to a boil over high heat (3 mins).' },
      { step_order: 3, title: 'Add the tofu',     description: 'Gently add the soft tofu (150g) into the bubbling broth, breaking it up slightly with a spoon. Simmer for 5 minutes.' },
      { step_order: 4, title: 'Cook the egg',     description: 'Crack the egg (1) directly into the broth, cover the pot, and cook for 1 minute until the egg white is set.' },
      { step_order: 5, title: 'Serve over rice',  description: 'Remove from heat, drizzle with sesame oil (0.5 tsp, if using), garnish with chopped green onions (7.5g), and serve hot over a bowl of cooked rice (1 cup/150g).' },
    ],
  },
  {
    name_en: 'Tuna Mayo Rice Bowl',
    description: 'Quick rice bowl with creamy tuna mayo.',
    cooking_time_min: 10, calories: 420, protein_g: 22, carbs_g: 52, fat_g: 16, servings: 1,
    ingredients: [
      { name: 'Rice',         amount: '150g',    type: 'essential' },
      { name: 'Canned Tuna',  amount: '75g',     type: 'essential' },
      { name: 'Mayonnaise',   amount: '2 tbsp',  type: 'essential' },
      { name: 'Soy Sauce',    amount: '1 tsp',   type: 'essential' },
      { name: 'Sesame Oil',   amount: '1 tsp',   type: 'recommended' },
      { name: 'Green Onion',  amount: '15g',     type: 'recommended' },
      { name: 'Sesame Seeds', amount: '0.5 tsp', type: 'optional' },
      { name: 'Gochugaru',    amount: '1 tsp',   type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Drain the tuna',  description: 'Drain the canned tuna thoroughly and place it into a small mixing bowl.' },
      { step_order: 2, title: 'Mix tuna mayo',   description: 'Add mayonnaise (2 tbsp), soy sauce (1 tsp), and sesame oil (1 tsp) to the tuna, mixing well until thoroughly combined and creamy.' },
      { step_order: 3, title: 'Prepare the bowl',description: 'Place the hot cooked rice (1 cup/150g) in a serving bowl.' },
      { step_order: 4, title: 'Top with tuna',   description: 'Scoop the creamy tuna mixture directly onto the center of the rice.' },
      { step_order: 5, title: 'Garnish & serve', description: 'Garnish with chopped green onions (15g), sesame seeds (if using), and a pinch of gochugaru (if using) before serving.' },
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
