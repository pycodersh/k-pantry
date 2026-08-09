import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const RECIPES = [
  {
    name_en: 'Doraji Namul',
    description: 'Seasoned bellflower root — a traditional Korean side dish.',
    cooking_time_min: 15, calories: 35, protein_g: 1, carbs_g: 7, fat_g: 1, servings: 1,
    ingredients: [
      { name: 'Bellflower Root', amount: '67g',      type: 'essential' },
      { name: 'Sesame Oil',      amount: '0.33 tsp', type: 'essential' },
      { name: 'Salt',            amount: '0.17 tsp', type: 'essential' },
      { name: 'Garlic',          amount: '1.5g',     type: 'essential' },
      { name: 'Soy Sauce',       amount: '0.33 tsp', type: 'recommended' },
      { name: 'Sesame Seeds',    amount: '0.33 tsp', type: 'optional' },
      { name: 'Gochugaru',       amount: '0.33 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the root',    description: 'Rinse the bellflower root (67g) thoroughly in cold water, squeeze firmly to remove bitterness, and shred into thin strips.' },
      { step_order: 2, title: 'Sauté',           description: 'Heat a pan over medium heat with sesame oil (0.33 tsp) and minced garlic (1.5g), add the bellflower root, and sauté for 3 minutes until softened.' },
      { step_order: 3, title: 'Season',          description: 'Season with salt (1g) and soy sauce (1.6ml), tossing continuously for 1 minute.' },
      { step_order: 4, title: 'Garnish & serve', description: 'Garnish with sesame seeds and gochugaru (if using) before serving.' },
    ],
  },
  {
    name_en: 'Dubu Buchim',
    description: 'Simple pan-fried tofu with a savory soy dipping sauce.',
    cooking_time_min: 15, calories: 135, protein_g: 9, carbs_g: 5, fat_g: 9, servings: 1,
    ingredients: [
      { name: 'Tofu',         amount: '150g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '1 tbsp',   type: 'essential' },
      { name: 'Salt',         amount: '0.125 tsp',type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.5 tsp',  type: 'optional' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the tofu',      description: 'Slice the firm tofu (150g) into 1cm slabs and pat completely dry with paper towels.' },
      { step_order: 2, title: 'Pan-fry the tofu',   description: 'Lightly sprinkle salt (0.75g) over the tofu slices. Heat a pan over medium-high heat with 1 tsp of oil and pan-fry the tofu for 3–4 minutes per side until golden brown on both sides.' },
      { step_order: 3, title: 'Make dipping sauce', description: 'In a small bowl, mix soy sauce (1 tbsp), sesame oil (2.5ml), gochugaru (1g), and chopped green onion (7.5g) to create the dipping sauce.' },
      { step_order: 4, title: 'Serve',              description: 'Serve the pan-fried tofu hot with the dipping sauce on the side.' },
    ],
  },
  {
    name_en: 'Dubu Jorim',
    description: 'Pan-fried braised tofu in a spicy soy glaze.',
    cooking_time_min: 20, calories: 165, protein_g: 11, carbs_g: 9, fat_g: 9, servings: 1,
    ingredients: [
      { name: 'Tofu',         amount: '150g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '1 tbsp',   type: 'essential' },
      { name: 'Gochugaru',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',       amount: '1 clove',  type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'essential' },
      { name: 'Green Onion',  amount: '15g',      type: 'recommended' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Pan-fry the tofu',description: 'Slice the firm tofu (150g) into slabs, pat dry, and pan-fry in a pan with 1 tsp of oil over medium-high heat for 3 minutes per side until golden.' },
      { step_order: 2, title: 'Make the sauce',  description: 'In a small bowl, mix soy sauce (1 tbsp), gochugaru (3g), minced garlic (5g), sesame oil (2.5ml), and 1.5 tbsp (22.5ml) of water.' },
      { step_order: 3, title: 'Braise',          description: 'Pour the sauce mixture over the pan-fried tofu. Simmer on medium heat for 5 minutes until the sauce is fully absorbed.' },
      { step_order: 4, title: 'Garnish & serve', description: 'Garnish with chopped green onions (15g) and sesame seeds (1g, if using) before serving.' },
    ],
  },
  {
    name_en: 'Eomuk Bokkeum',
    description: 'Stir-fried fish cake — a classic Korean side dish.',
    cooking_time_min: 15, calories: 107, protein_g: 5, carbs_g: 11, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Fish Cake',    amount: '100g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.67 tbsp',type: 'essential' },
      { name: 'Sugar',        amount: '0.33 tsp', type: 'essential' },
      { name: 'Garlic',       amount: '1.5g',     type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.33 tsp', type: 'recommended' },
      { name: 'Green Onion',  amount: '10g',      type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.33 tsp', type: 'optional' },
      { name: 'Sesame Seeds', amount: '0.33 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Slice the fish cake',   description: 'Slice the fish cake (100g) into bite-sized strips or squares.' },
      { step_order: 2, title: 'Stir-fry',              description: 'Heat a pan over medium-high heat with 1 tsp of oil, add minced garlic (1.5g), and stir-fry the fish cake with soy sauce (10ml) and sugar (1.3g) for 3–4 minutes.' },
      { step_order: 3, title: 'Finish with sesame',    description: 'Turn off the heat, stir in the chopped green onions (10g) and sesame oil (1.6ml).' },
      { step_order: 4, title: 'Garnish & serve',       description: 'Garnish with sesame seeds and gochugaru (if using) before serving.' },
    ],
  },
  {
    name_en: 'Gaji Namul',
    description: 'Steamed eggplant seasoned with soy sauce and sesame oil.',
    cooking_time_min: 15, calories: 40, protein_g: 1, carbs_g: 5, fat_g: 2, servings: 1,
    ingredients: [
      { name: 'Eggplant',     amount: '150g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'essential' },
      { name: 'Garlic',       amount: '2.5g',     type: 'essential' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.5 tsp',  type: 'optional' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Cook the eggplant', description: 'Steam or microwave the eggplant (150g) for 4 minutes until completely soft. Let it cool slightly, then tear into long strips by hand.' },
      { step_order: 2, title: 'Season',            description: 'In a mixing bowl, combine the eggplant strips with soy sauce (7.5ml), sesame oil (2.5ml), minced garlic (2.5g), and gochugaru (1g, if using).' },
      { step_order: 3, title: 'Garnish & serve',   description: 'Toss gently to combine, garnish with chopped green onions (7.5g) and sesame seeds (1g, if using), and serve.' },
    ],
  },
  {
    name_en: 'Gamja Jorim',
    description: 'Sweet and sticky braised potatoes — a lunchbox staple.',
    cooking_time_min: 20, calories: 180, protein_g: 4, carbs_g: 36, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Potato',       amount: '130g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.67 tbsp',type: 'essential' },
      { name: 'Sugar',        amount: '0.33 tbsp',type: 'essential' },
      { name: 'Garlic',       amount: '3g',       type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.33 tsp', type: 'recommended' },
      { name: 'Sesame Seeds', amount: '0.33 tsp', type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.33 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the potatoes', description: 'Cut the potato (130g) into bite-sized cubes and rinse them in cold water for 1 minute to remove excess starch.' },
      { step_order: 2, title: 'Braise',            description: 'Place the potato cubes in a pan with soy sauce (10ml), sugar (4g), minced garlic (3g), and 0.25 cup (60ml) of water. Bring to a boil over medium-high heat (5 mins), then simmer on medium heat for 10 minutes until the liquid reduces.' },
      { step_order: 3, title: 'Finish & serve',    description: 'Stir constantly in the final 2 minutes until the potato cubes are glossy and glazed. Drizzle with sesame oil (1.6ml) and garnish with sesame seeds (0.3g).' },
    ],
  },
  {
    name_en: 'Gyeran Mari',
    description: 'Korean rolled omelette — a lunch box staple.',
    cooking_time_min: 15, calories: 80, protein_g: 6, carbs_g: 2, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Egg',         amount: '2',        type: 'essential' },
      { name: 'Salt',        amount: '0.125 tsp',type: 'essential' },
      { name: 'Green Onion', amount: '15g',      type: 'recommended' },
      { name: 'Carrot',      amount: '10g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Mix the egg batter', description: 'Crack the eggs (2) into a bowl, add salt (0.75g), finely chopped green onions (15g), and chopped carrots (10g, if using), and beat thoroughly with a fork.' },
      { step_order: 2, title: 'Roll the omelette',  description: 'Heat a non-stick pan over medium heat with 1 tsp of oil. Pour a thin layer of the egg mixture into the pan. When nearly set, roll it up from one side to the other. Push the roll to the side, grease the empty space lightly, and pour more egg mixture to attach to the roll. Repeat until all the egg mixture is used.' },
      { step_order: 3, title: 'Slice & serve',      description: 'Let the rolled omelette rest on a cutting board for 1 minute, slice into rounds, and serve.' },
    ],
  },
  {
    name_en: 'Hobak Jeon',
    description: 'Pan-fried zucchini fritters — light and savory.',
    cooking_time_min: 15, calories: 70, protein_g: 3, carbs_g: 8, fat_g: 3, servings: 1,
    ingredients: [
      { name: 'Zucchini',  amount: '100g',     type: 'essential' },
      { name: 'Egg',       amount: '1',        type: 'essential' },
      { name: 'Salt',      amount: '0.25 tsp', type: 'essential' },
      { name: 'Soy Sauce', amount: '0.5 tbsp', type: 'recommended' },
      { name: 'Flour',     amount: '2 tbsp',   type: 'recommended' },
    ],
    steps: [
      { step_order: 1, title: 'Season the zucchini', description: 'Slice the zucchini (100g) into 0.5cm thick rounds. Season with salt (1.5g), let sit for 5 minutes, and pat dry with paper towels.' },
      { step_order: 2, title: 'Coat in flour & egg', description: 'Lightly dust each zucchini slice in flour (15g), then dip them into a bowl containing the beaten egg (1).' },
      { step_order: 3, title: 'Pan-fry',             description: 'Heat a pan over medium heat with 1 tsp of oil and fry the coated zucchini slices for 2–3 minutes per side until golden on both sides.' },
      { step_order: 4, title: 'Serve',               description: 'Serve warm with soy sauce (7.5ml) for dipping.' },
    ],
  },
  {
    name_en: 'Jangjorim',
    description: 'Soy-braised beef — a classic Korean meal-prep side dish.',
    cooking_time_min: 45, calories: 50, protein_g: 5.5, carbs_g: 2, fat_g: 2, servings: 1,
    ingredients: [
      { name: 'Beef',        amount: '100g',     type: 'essential' },
      { name: 'Soy Sauce',   amount: '1 tbsp',   type: 'essential' },
      { name: 'Sugar',       amount: '0.25 tbsp',type: 'essential' },
      { name: 'Garlic',      amount: '6g',       type: 'essential' },
      { name: 'Green Onion', amount: '7.5g',     type: 'recommended' },
      { name: 'Egg',         amount: '1',        type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Boil the beef',  description: 'Place the beef (100g) and green onion (7.5g) in a pot with 2 cups of water, bring to a boil over high heat (5 mins), then simmer on medium heat for 25 minutes until tender. Remove the beef and reserve 0.38 cup (90ml) of the broth.' },
      { step_order: 2, title: 'Shred the beef', description: 'Let the cooked beef cool slightly, then shred it into thin strips along the grain.' },
      { step_order: 3, title: 'Simmer in sauce',description: 'Return the shredded beef to the pot with the reserved broth, soy sauce (15ml), sugar (3g), and minced garlic (6g). Simmer on medium-low heat for 10 minutes until the sauce reduces.' },
      { step_order: 4, title: 'Add egg & store',description: 'Add a hard-boiled egg (1, if using) into the pot and cook for 5 more minutes. Store refrigerated for up to a week.' },
    ],
  },
  {
    name_en: 'Kimchi Jeon (Quick)',
    description: 'Even faster kimchi pancake when you need something quick.',
    cooking_time_min: 12, calories: 280, protein_g: 8, carbs_g: 38, fat_g: 10, servings: 1,
    ingredients: [
      { name: 'Kimchi',    amount: '120g',     type: 'essential' },
      { name: 'Egg',       amount: '1',        type: 'essential' },
      { name: 'Flour',     amount: '60g',      type: 'essential' },
      { name: 'Soy Sauce', amount: '0.5 tbsp', type: 'recommended' },
      { name: 'Green Onion',amount: '15g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the batter',    description: 'In a mixing bowl, combine flour (60g), egg (1), water (120ml), and the chopped fermented kimchi along with a splash of kimchi juice. Add chopped green onions (15g, if using) and mix into a smooth batter.' },
      { step_order: 2, title: 'Pour into hot pan',  description: 'Heat a pan over medium-high heat with 1.5 tbsp of oil. Pour the batter evenly into the pan to form a thin pancake.' },
      { step_order: 3, title: 'Fry until golden',   description: 'Cook for 3 minutes per side until crispy and golden brown.' },
      { step_order: 4, title: 'Slice & serve',      description: 'Slice into wedges and serve with soy sauce (7.5ml) for dipping.' },
    ],
  },
  {
    name_en: 'Kimchi Pajeon',
    description: 'Green onion and kimchi pancake — extra crispy.',
    cooking_time_min: 20, calories: 150, protein_g: 4, carbs_g: 21, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Kimchi',      amount: '40g',      type: 'essential' },
      { name: 'Green Onion', amount: '38g',      type: 'essential' },
      { name: 'Egg',         amount: '0.5',      type: 'essential' },
      { name: 'Salt',        amount: '0.125 tsp',type: 'essential' },
      { name: 'Flour',       amount: '60g',      type: 'essential' },
      { name: 'Soy Sauce',   amount: '0.5 tbsp', type: 'recommended' },
      { name: 'Gochugaru',   amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the batter',  description: 'In a bowl, mix flour (60g), half of a beaten egg (0.5), water (90ml), salt (0.75g), chopped fermented kimchi (40g), and green onions (38g). Add gochugaru (1g, if using) for extra spice.' },
      { step_order: 2, title: 'Cook the pancake', description: 'Heat a skillet over medium-high heat with 1.5 tbsp of oil. Pour the pancake batter into the pan and spread it out evenly.' },
      { step_order: 3, title: 'Flip & crisp',     description: 'Cook for 4 minutes per side until the edges are crispy and golden.' },
      { step_order: 4, title: 'Slice & serve',    description: 'Slice and serve hot with soy sauce (7.5ml) for dipping.' },
    ],
  },
  {
    name_en: 'Kimchi Pancake',
    description: 'Crispy, savory pancake loaded with tangy kimchi.',
    cooking_time_min: 20, calories: 155, protein_g: 4.5, carbs_g: 21, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Kimchi',      amount: '80g',      type: 'essential' },
      { name: 'Egg',         amount: '0.5',      type: 'essential' },
      { name: 'Salt',        amount: '0.125 tsp',type: 'essential' },
      { name: 'Flour',       amount: '60g',      type: 'essential' },
      { name: 'Green Onion', amount: '15g',      type: 'recommended' },
      { name: 'Gochugaru',   amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the batter', description: 'In a mixing bowl, whisk together flour (60g), half an egg (0.5), water (90ml), and salt (0.75g). Stir in the chopped fermented kimchi and a splash of kimchi juice for enhanced flavor. Add chopped green onions (15g, if using).' },
      { step_order: 2, title: 'Fry the pancake', description: 'Pour the batter into a hot oiled pan heated to 185°C over medium-high heat. Press flat with a spatula and cook for 3 to 4 minutes per side until golden brown and crispy.' },
      { step_order: 3, title: 'Serve',           description: 'Slice into portions and serve with a side of soy sauce for dipping.' },
    ],
  },
  {
    name_en: 'Kongjorim',
    description: 'Sweet and savory braised black soybeans — a traditional banchan.',
    cooking_time_min: 40, calories: 40, protein_g: 2.5, carbs_g: 5, fat_g: 1, servings: 1,
    ingredients: [
      { name: 'Black Soybeans', amount: '45g',      type: 'essential' },
      { name: 'Soy Sauce',      amount: '0.75 tbsp',type: 'essential' },
      { name: 'Sugar',          amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',     amount: '0.25 tsp', type: 'recommended' },
      { name: 'Sesame Seeds',   amount: '0.25 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Soak the beans',  description: 'Soak the black soybeans (45g) in water overnight, then drain.' },
      { step_order: 2, title: 'Boil the beans',  description: 'Boil the soaked beans in a pot of water for 30 minutes until tender. Drain the beans, but reserve 0.13 cup (30ml) of the cooking liquid.' },
      { step_order: 3, title: 'Braise in sauce', description: 'Return the beans to the pot along with the soy sauce (11ml), sugar (6g), and the reserved cooking liquid. Simmer on medium-low heat for 10 minutes until the sauce is completely absorbed and the beans are glazed.' },
      { step_order: 4, title: 'Finish & serve',  description: 'Drizzle with sesame oil (1.2ml) and garnish with sesame seeds (0.25g, if using) before serving.' },
    ],
  },
  {
    name_en: 'Kongnamul Guk',
    description: 'Clear soybean sprout soup — light, clean, and restorative.',
    cooking_time_min: 15, calories: 40, protein_g: 3, carbs_g: 4, fat_g: 1.5, servings: 1,
    ingredients: [
      { name: 'Bean Sprouts', amount: '100g',     type: 'essential' },
      { name: 'Garlic',       amount: '1 clove',  type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Salt',         amount: '0.25 tsp', type: 'essential' },
      { name: 'Green Onion',  amount: '15g',      type: 'recommended' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'optional' },
      { name: 'Gochugaru',    amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Boil sprouts',   description: 'Place the soybean sprouts (100g) and minced garlic (5g) into a pot with 1.5 cups (375ml) of cold water. Bring to a boil over medium-high heat WITHOUT opening the lid, letting it boil for 5 minutes.' },
      { step_order: 2, title: 'Season the soup', description: 'Season the broth with soy sauce (7.5ml) and salt (1.5g).' },
      { step_order: 3, title: 'Garnish & serve', description: 'Turn off the heat, garnish with chopped green onions (15g), and finish with a drizzle of sesame oil (2.5ml) and gochugaru (1g) if desired.' },
    ],
  },
  {
    name_en: 'Kongnamul Muchim',
    description: 'Seasoned soybean sprouts — simple, crunchy, and full of flavor.',
    cooking_time_min: 10, calories: 40, protein_g: 3, carbs_g: 4, fat_g: 1.5, servings: 1,
    ingredients: [
      { name: 'Bean Sprouts', amount: '150g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'essential' },
      { name: 'Garlic',       amount: '2.5g',     type: 'essential' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.5 tsp',  type: 'optional' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch the sprouts', description: 'Boil the soybean sprouts (150g) in a pot of water for 2 to 3 minutes. Drain immediately and let cool slightly.' },
      { step_order: 2, title: 'Season',            description: 'In a mixing bowl, toss the blanched sprouts with soy sauce (7.5ml), sesame oil (2.5ml), minced garlic (2.5g), and gochugaru (1g, if using).' },
      { step_order: 3, title: 'Garnish & serve',   description: 'Garnish with chopped green onions (7.5g) and sesame seeds (1g, if using). Serve warm or chilled.' },
    ],
  },
  {
    name_en: 'Mu Jorim',
    description: 'Braised radish in a sweet soy glaze — tender and full of flavor.',
    cooking_time_min: 25, calories: 33, protein_g: 0.7, carbs_g: 7, fat_g: 0.7, servings: 1,
    ingredients: [
      { name: 'Radish',       amount: '133g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '1 tbsp',   type: 'essential' },
      { name: 'Sugar',        amount: '0.33 tbsp',type: 'essential' },
      { name: 'Garlic',       amount: '3g',       type: 'essential' },
      { name: 'Gochugaru',    amount: '0.33 tbsp',type: 'recommended' },
      { name: 'Sesame Oil',   amount: '0.33 tsp', type: 'recommended' },
      { name: 'Green Onion',  amount: '5g',       type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the radish', description: 'Cut the radish (133g) into thick rounds or rectangular chunks.' },
      { step_order: 2, title: 'Braise',          description: 'Place the radish pieces in a pan with soy sauce (15ml), sugar (4g), minced garlic (3g), gochugaru (3g), and 0.17 cup (40ml) of water. Cook on medium heat for 20 minutes until the radish is tender and translucent.' },
      { step_order: 3, title: 'Finish & serve',  description: 'Drizzle with sesame oil (1.6ml) and garnish with chopped green onions (5g) before serving.' },
    ],
  },
  {
    name_en: 'Musaengchae',
    description: 'Spicy radish salad — crunchy, refreshing, and mildly sweet.',
    cooking_time_min: 10, calories: 20, protein_g: 0.7, carbs_g: 4, fat_g: 0.7, servings: 1,
    ingredients: [
      { name: 'Radish',       amount: '100g',     type: 'essential' },
      { name: 'Gochugaru',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Vinegar',      amount: '1 tsp',    type: 'essential' },
      { name: 'Sugar',        amount: '0.33 tsp', type: 'essential' },
      { name: 'Salt',         amount: '0.17 tsp', type: 'essential' },
      { name: 'Garlic',       amount: '1.5g',     type: 'recommended' },
      { name: 'Green Onion',  amount: '5g',       type: 'optional' },
      { name: 'Sesame Seeds', amount: '0.33 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Julienne the radish', description: 'Cut the radish (100g) into thin matchstick strips.' },
      { step_order: 2, title: 'Season & toss',        description: 'In a mixing bowl, toss the radish strips with gochugaru (5g), vinegar (5ml), sugar (1.3g), salt (1g), and minced garlic (1.5g).' },
      { step_order: 3, title: 'Garnish & serve',      description: 'Garnish with chopped green onions (5g) and sesame seeds (0.3g, if using). Best served chilled.' },
    ],
  },
  {
    name_en: 'Oi Muchim',
    description: 'Spicy cucumber salad — refreshing and quick.',
    cooking_time_min: 10, calories: 25, protein_g: 1, carbs_g: 4, fat_g: 1, servings: 1,
    ingredients: [
      { name: 'Cucumber',     amount: '75g',      type: 'essential' },
      { name: 'Gochugaru',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'essential' },
      { name: 'Garlic',       amount: '2.5g',     type: 'essential' },
      { name: 'Sugar',        amount: '0.25 tsp', type: 'essential' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'recommended' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the cucumber', description: 'Slice the cucumber (75g) thinly. Lightly sprinkle with salt, let sit for 5 minutes, and squeeze firmly to remove excess moisture.' },
      { step_order: 2, title: 'Season & toss',     description: 'In a bowl, mix the cucumbers with gochugaru (5g), soy sauce (7.5ml), sesame oil (2.5ml), minced garlic (2.5g), and sugar (1g).' },
      { step_order: 3, title: 'Garnish & serve',   description: 'Garnish with chopped green onions (7.5g) and sesame seeds (1g, if using). Best eaten immediately.' },
    ],
  },
  {
    name_en: 'Sigeumchi Namul',
    description: 'Lightly seasoned blanched spinach — a clean, simple side dish.',
    cooking_time_min: 10, calories: 30, protein_g: 2, carbs_g: 3, fat_g: 1.5, servings: 1,
    ingredients: [
      { name: 'Spinach',      amount: '150g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'essential' },
      { name: 'Garlic',       amount: '2.5g',     type: 'essential' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch the spinach', description: 'Boil the spinach (150g) in a pot of water for 30 seconds. Drain immediately and squeeze out excess water with your hands.' },
      { step_order: 2, title: 'Season',            description: 'In a bowl, mix the blanched spinach with soy sauce (7.5ml), sesame oil (2.5ml), and minced garlic (2.5g).' },
      { step_order: 3, title: 'Garnish & serve',   description: 'Garnish with sesame seeds (1g) and chopped green onions (7.5g, if using) before serving.' },
    ],
  },
  {
    name_en: 'Spinach Doenjang Soup',
    description: 'Light soybean paste soup with fresh spinach.',
    cooking_time_min: 15, calories: 40, protein_g: 3, carbs_g: 4, fat_g: 1.5, servings: 1,
    ingredients: [
      { name: 'Spinach',      amount: '100g',      type: 'essential' },
      { name: 'Doenjang',     amount: '0.75 tbsp', type: 'essential' },
      { name: 'Garlic',       amount: '2.5g',      type: 'essential' },
      { name: 'Anchovy Broth',amount: '1.5 cups',  type: 'recommended' },
      { name: 'Green Onion',  amount: '7.5g',      type: 'recommended' },
      { name: 'Tofu',         amount: '50g',       type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the broth',  description: 'Bring the anchovy broth (375ml) to a boil in a pot over medium-high heat (5 mins), then dissolve the doenjang (11g) into the broth.' },
      { step_order: 2, title: 'Add vegetables',  description: 'Add the spinach (100g), minced garlic (2.5g), and diced tofu (50g, if using) into the pot. Cook for 3 minutes.' },
      { step_order: 3, title: 'Garnish & serve', description: 'Garnish with chopped green onions (7.5g) and serve hot.' },
    ],
  },
  {
    name_en: 'Steamed Egg',
    description: 'Fluffy, custardy steamed egg — a beloved Korean side dish.',
    cooking_time_min: 15, calories: 60, protein_g: 5, carbs_g: 1, fat_g: 3.5, servings: 1,
    ingredients: [
      { name: 'Egg',         amount: '1.5',      type: 'essential' },
      { name: 'Salt',        amount: '0.25 tsp', type: 'essential' },
      { name: 'Green Onion', amount: '7.5g',     type: 'recommended' },
      { name: 'Sesame Oil',  amount: '0.25 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Mix the egg',    description: 'Whisk the eggs (1.5) with 0.5 cup (125ml) of water and salt (1.5g) until completely combined.' },
      { step_order: 2, title: 'Steam',          description: 'Pour the mixture into a clay pot or a small oven-safe bowl. Steam over low heat for 10 to 12 minutes until just set.' },
      { step_order: 3, title: 'Garnish & serve',description: 'Top with chopped green onions (7.5g) and a light drizzle of sesame oil (1.2ml). Serve immediately.' },
    ],
  },
  {
    name_en: 'Sukju Namul',
    description: 'Seasoned mung bean sprouts — light and crunchy.',
    cooking_time_min: 10, calories: 30, protein_g: 2, carbs_g: 3, fat_g: 1.5, servings: 1,
    ingredients: [
      { name: 'Mung Bean Sprouts', amount: '150g',      type: 'essential' },
      { name: 'Soy Sauce',         amount: '0.5 tbsp',  type: 'essential' },
      { name: 'Sesame Oil',        amount: '0.5 tsp',   type: 'essential' },
      { name: 'Garlic',            amount: '2.5g',      type: 'essential' },
      { name: 'Salt',              amount: '0.125 tsp', type: 'recommended' },
      { name: 'Green Onion',       amount: '7.5g',      type: 'recommended' },
      { name: 'Sesame Seeds',      amount: '0.5 tsp',   type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch the sprouts', description: 'Blanch the mung bean sprouts (150g) in boiling water for 1 minute. Drain immediately and cool with cold water.' },
      { step_order: 2, title: 'Season',            description: 'In a mixing bowl, toss the sprouts with soy sauce (7.5ml), sesame oil (2.5ml), minced garlic (2.5g), and salt (0.75g).' },
      { step_order: 3, title: 'Garnish & serve',   description: 'Garnish with chopped green onions (7.5g) and sesame seeds (1g, if using) before serving.' },
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
