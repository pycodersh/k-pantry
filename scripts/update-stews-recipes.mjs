import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const RECIPES = [
  {
    name_en: 'Altang',
    description: 'Spicy fish roe soup — a beloved Korean comfort stew.',
    cooking_time_min: 20, calories: 110, protein_g: 9, carbs_g: 4, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Fish Roe',    amount: '100g',     type: 'essential' },
      { name: 'Gochugaru',   amount: '1 tbsp',   type: 'essential' },
      { name: 'Garlic',      amount: '1 clove',  type: 'essential' },
      { name: 'Soy Sauce',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Green Onion', amount: '15g',      type: 'essential' },
      { name: 'Tofu',        amount: '75g',      type: 'recommended' },
      { name: 'Mushroom',    amount: '40g',      type: 'optional' },
      { name: 'Perilla Oil', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the broth base', description: 'In a pot, bring 1.5 cups (375ml) of water to a boil over medium-high heat (5 mins) with minced garlic (5g), gochugaru (7g), and soy sauce (7.5ml).' },
      { step_order: 2, title: 'Add roe & tofu',      description: 'Gently add the fish roe (100g), firm tofu (75g), and sliced mushrooms (40g, if using) into the boiling broth.' },
      { step_order: 3, title: 'Simmer',              description: 'Reduce heat to medium and simmer gently for 10 minutes until the fish roe is fully cooked through.' },
      { step_order: 4, title: 'Garnish & serve',     description: 'Stir in the chopped green onions (15g) and a drizzle of perilla oil (2.5ml, if using). Serve hot.' },
    ],
  },
  {
    name_en: 'Budae Jjigae',
    description: 'Army stew — a fusion of Korean and American flavors.',
    cooking_time_min: 25, calories: 160, protein_g: 9, carbs_g: 14, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Spam',              amount: '67g',      type: 'essential' },
      { name: 'Kimchi',            amount: '50g',      type: 'essential' },
      { name: 'Tofu',              amount: '50g',      type: 'essential' },
      { name: 'Gochujang',         amount: '0.67 tbsp',type: 'essential' },
      { name: 'Gochugaru',         amount: '0.33 tbsp',type: 'essential' },
      { name: 'Soy Sauce',         amount: '0.33 tbsp',type: 'essential' },
      { name: 'Korean Rice Cakes', amount: '50g',      type: 'recommended' },
      { name: 'Mushroom',          amount: '33g',      type: 'recommended' },
      { name: 'Green Onion',       amount: '10g',      type: 'recommended' },
    ],
    steps: [
      { step_order: 1, title: 'Arrange ingredients', description: 'Arrange sliced Spam (67g), chopped kimchi (50g), firm tofu (50g), sliced mushrooms (33g), and soaked rice cakes (50g) side by side in a small pot.' },
      { step_order: 2, title: 'Mix the broth',       description: 'In a small bowl, whisk together gochujang (10g), gochugaru (2.3g), and soy sauce (5ml) with 1 cup (250ml) of water, then pour the mixture evenly over the ingredients in the pot.' },
      { step_order: 3, title: 'Simmer the stew',     description: 'Bring the stew to a boil over medium-high heat, then reduce heat to medium and cook for 15 minutes until all ingredients are tender and cooked through.' },
      { step_order: 4, title: 'Garnish & serve',     description: 'Garnish with chopped green onions (10g). Mix lightly and eat directly from the pot.' },
    ],
  },
  {
    name_en: 'Budae Jjigae Deluxe',
    description: 'Upgraded army stew with extra toppings and rice cakes.',
    cooking_time_min: 25, calories: 173, protein_g: 9, carbs_g: 17, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Spam',              amount: '67g',      type: 'essential' },
      { name: 'Kimchi',            amount: '50g',      type: 'essential' },
      { name: 'Tofu',              amount: '50g',      type: 'essential' },
      { name: 'Gochujang',         amount: '0.67 tbsp',type: 'essential' },
      { name: 'Soy Sauce',         amount: '0.33 tbsp',type: 'essential' },
      { name: 'Korean Rice Cakes', amount: '50g',      type: 'recommended' },
      { name: 'Mushroom',          amount: '33g',      type: 'recommended' },
      { name: 'American Cheese',   amount: '10g',      type: 'recommended' },
      { name: 'Green Onion',       amount: '10g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Arrange ingredients',   description: 'Arrange the sliced Spam (67g), chopped kimchi (50g), firm tofu (50g), mushrooms (33g), and rice cakes (50g) in a wide pot.' },
      { step_order: 2, title: 'Add seasoned broth',    description: 'Mix gochujang (10g) and soy sauce (5ml) with 1 cup (250ml) of water, and pour the mixture over the arranged ingredients.' },
      { step_order: 3, title: 'Cook the stew',         description: 'Bring to a boil over medium-high heat and cook for 15 minutes.' },
      { step_order: 4, title: 'Top with cheese & serve',description: 'Place the slice of American cheese (10g) on top to melt from the residual heat, garnish with chopped green onions (10g, if using), and serve.' },
    ],
  },
  {
    name_en: 'Dakgalbi Jjigae',
    description: 'Spicy braised chicken stew with vegetables.',
    cooking_time_min: 30, calories: 190, protein_g: 14, carbs_g: 11, fat_g: 8, servings: 1,
    ingredients: [
      { name: 'Chicken',   amount: '200g',     type: 'essential' },
      { name: 'Gochujang', amount: '1.5 tbsp', type: 'essential' },
      { name: 'Gochugaru', amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce', amount: '1 tbsp',   type: 'essential' },
      { name: 'Garlic',    amount: '7.5g',     type: 'essential' },
      { name: 'Potato',    amount: '75g',      type: 'recommended' },
      { name: 'Onion',     amount: '40g',      type: 'recommended' },
      { name: 'Green Onion',amount: '15g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Marinate the chicken', description: 'In a mixing bowl, combine the boneless skinless chicken thigh pieces (200g) with gochujang (22.5g), gochugaru (3.5g), soy sauce (15ml), and minced garlic (7.5g) to marinate.' },
      { step_order: 2, title: 'Transfer to pot',      description: 'Transfer the marinated chicken to a pot along with the diced potato (75g) and sliced onion (40g). Add 0.75 cup (180ml) of water.' },
      { step_order: 3, title: 'Simmer the stew',      description: 'Bring to a boil over medium-high heat (5 mins), then cover, reduce heat to medium-low, and simmer for 20 minutes until the chicken and potatoes are thoroughly cooked.' },
      { step_order: 4, title: 'Reduce & garnish',     description: 'Uncover and cook for 3 more minutes to slightly thicken the sauce. Garnish with chopped green onions (15g) before serving.' },
    ],
  },
  {
    name_en: 'Doenjang Jjigae',
    description: 'Hearty soybean paste stew with tofu and vegetables.',
    cooking_time_min: 25, calories: 135, protein_g: 7, carbs_g: 9, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Doenjang',     amount: '1 tbsp',   type: 'essential' },
      { name: 'Tofu',         amount: '100g',     type: 'essential' },
      { name: 'Zucchini',     amount: '40g',      type: 'essential' },
      { name: 'Onion',        amount: '40g',      type: 'essential' },
      { name: 'Garlic',       amount: '2.5g',     type: 'essential' },
      { name: 'Mushroom',     amount: '50g',      type: 'recommended' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'recommended' },
      { name: 'Anchovy Broth',amount: '1 cup',    type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Bring broth to boil', description: 'Bring 1 cup (250ml) of water or anchovy broth to a boil in a pot over medium-high heat (5 mins).' },
      { step_order: 2, title: 'Dissolve doenjang',   description: 'Dissolve the doenjang (15g) completely into the boiling broth, then add the minced garlic (2.5g).' },
      { step_order: 3, title: 'Add vegetables',      description: 'Add the diced onions (40g), zucchini (40g), and sliced mushrooms (50g) to the pot. Simmer on medium heat for 10 minutes.' },
      { step_order: 4, title: 'Add tofu & finish',   description: 'Add the cubed firm tofu (100g) and simmer for 5 more minutes. Garnish with chopped green onions (7.5g) and serve hot.' },
    ],
  },
  {
    name_en: 'Doenjang Sundubu Jjigae',
    description: 'Soft tofu stew with earthy soybean paste broth.',
    cooking_time_min: 20, calories: 120, protein_g: 7, carbs_g: 5, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Soft Tofu',    amount: '150g',   type: 'essential' },
      { name: 'Doenjang',     amount: '1 tbsp', type: 'essential' },
      { name: 'Garlic',       amount: '1 clove',type: 'essential' },
      { name: 'Anchovy Broth',amount: '1 cup',  type: 'essential' },
      { name: 'Zucchini',     amount: '20g',    type: 'recommended' },
      { name: 'Mushroom',     amount: '40g',    type: 'recommended' },
      { name: 'Egg',          amount: '1',      type: 'optional' },
      { name: 'Green Onion',  amount: '7.5g',   type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prepare the broth', description: 'Bring the anchovy broth (250ml) to a boil in a pot over medium-high heat (5 mins). Dissolve the doenjang (15g) into the broth along with the minced garlic (5g).' },
      { step_order: 2, title: 'Add vegetables & tofu', description: 'Add the diced zucchini (20g), sliced mushrooms (40g), and soft tofu (150g, gently spooned in) to the pot.' },
      { step_order: 3, title: 'Simmer',            description: 'Simmer on medium heat for 8 minutes.' },
      { step_order: 4, title: 'Add egg & garnish', description: 'If using an egg (1), crack it directly into the bubbling stew and cook for 1 minute. Garnish with chopped green onions (7.5g) and serve.' },
    ],
  },
  {
    name_en: 'Galbitang',
    description: 'Clear, rich beef short rib soup — a special occasion classic.',
    cooking_time_min: 80, calories: 112, protein_g: 9.5, carbs_g: 2.5, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Beef Short Ribs', amount: '200g',     type: 'essential' },
      { name: 'Garlic',          amount: '6g',       type: 'essential' },
      { name: 'Green Onion',     amount: '11g',      type: 'essential' },
      { name: 'Salt',            amount: '0.25 tsp', type: 'essential' },
      { name: 'Onion',           amount: '50g',      type: 'recommended' },
      { name: 'Sesame Oil',      amount: '0.25 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Soak the ribs',   description: 'Soak the beef short ribs (200g) in cold water for 1 hour to draw out any blood. Drain thoroughly.' },
      { step_order: 2, title: 'Blanch the ribs', description: 'Blanch the ribs in a pot of boiling water for 3 minutes, then drain and rinse completely under cold running water.' },
      { step_order: 3, title: 'Slow simmer',     description: 'Return the cleaned ribs to a large pot with 3 cups (750ml) of clean water, minced garlic (6g), and quartered onion (50g). Bring to a boil over high heat, then reduce heat to low and simmer covered for 1 hour until the beef is tender.' },
      { step_order: 4, title: 'Season & serve',  description: 'Remove the onion pieces, season the clear broth with salt (1.5g), ladle into a bowl, garnish with chopped green onions (11g), and finish with a drop of sesame oil (1.2ml, if using).' },
    ],
  },
  {
    name_en: 'Gamja Tang',
    description: 'Rich pork bone soup with potatoes and greens.',
    cooking_time_min: 60, calories: 130, protein_g: 10.5, carbs_g: 8, fat_g: 5.5, servings: 1,
    ingredients: [
      { name: 'Pork Neck Bones', amount: '150g',     type: 'essential' },
      { name: 'Potato',          amount: '100g',     type: 'essential' },
      { name: 'Gochugaru',       amount: '0.75 tbsp',type: 'essential' },
      { name: 'Doenjang',        amount: '0.25 tbsp',type: 'essential' },
      { name: 'Garlic',          amount: '6g',       type: 'essential' },
      { name: 'Green Onion',     amount: '11g',      type: 'recommended' },
      { name: 'Perilla Oil',     amount: '0.25 tbsp',type: 'optional' },
      { name: 'Sesame Seeds',    amount: '0.25 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch the bones',       description: 'Blanch the pork neck bones (150g) in a pot of boiling water for 5 minutes, then drain and rinse thoroughly under cold water.' },
      { step_order: 2, title: 'Simmer the broth',       description: 'Place the clean bones into a pot with 1.5 cups (375ml) of water and minced garlic (6g). Bring to a boil, then simmer over medium-low heat for 30 minutes.' },
      { step_order: 3, title: 'Add seasoning & potato', description: 'Add the gochugaru (5g), doenjang (3.75g), and potato chunks (100g) to the pot. Simmer for another 20 minutes until the potatoes are fork-tender.' },
      { step_order: 4, title: 'Garnish & serve',        description: 'Drizzle with perilla oil (3.75ml, if using) and garnish with chopped green onions (11g) and sesame seeds (0.25g, if using) before serving.' },
    ],
  },
  {
    name_en: 'Gochujang Jjigae',
    description: 'Bold fiery stew built on gochujang with pork and vegetables.',
    cooking_time_min: 25, calories: 145, protein_g: 8, carbs_g: 9, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Gochujang',  amount: '1.5 tbsp', type: 'essential' },
      { name: 'Pork Belly', amount: '100g',     type: 'essential' },
      { name: 'Zucchini',   amount: '40g',      type: 'essential' },
      { name: 'Potato',     amount: '50g',      type: 'essential' },
      { name: 'Garlic',     amount: '1 clove',  type: 'essential' },
      { name: 'Tofu',       amount: '75g',      type: 'recommended' },
      { name: 'Green Onion',amount: '7.5g',     type: 'recommended' },
      { name: 'Mushroom',   amount: '40g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Stir-fry pork',     description: 'Heat a pot over medium-high heat with 1 tsp of oil. Stir-fry the sliced pork (100g) with minced garlic (5g) and gochujang (22.5g) for 2 minutes.' },
      { step_order: 2, title: 'Add water & veg',   description: 'Pour 1 cup (250ml) of water into the pot, add the diced potatoes (50g) and zucchini (40g). Bring to a boil, then reduce heat to medium and simmer for 15 minutes.' },
      { step_order: 3, title: 'Add tofu',          description: 'Add the cubed firm tofu (75g) and sliced mushrooms (40g, if using) to the pot. Cook for 5 more minutes.' },
      { step_order: 4, title: 'Garnish & serve',   description: 'Garnish with chopped green onions (7.5g) and serve hot.' },
    ],
  },
  {
    name_en: 'Haejang Guk',
    description: 'Korean hangover soup with bean sprouts and dried cabbage.',
    cooking_time_min: 40, calories: 160, protein_g: 11, carbs_g: 8, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Beef',         amount: '100g',     type: 'essential' },
      { name: 'Bean Sprouts', amount: '100g',     type: 'essential' },
      { name: 'Doenjang',     amount: '0.5 tbsp', type: 'essential' },
      { name: 'Gochugaru',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',       amount: '7.5g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Green Onion',  amount: '15g',      type: 'recommended' },
      { name: 'Egg',          amount: '1',        type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Boil the beef',      description: 'Boil the beef (100g) in 1.5 cups (375ml) of water for 25 minutes until tender. Remove the beef, slice it thinly, and reserve the broth.' },
      { step_order: 2, title: 'Season the broth',   description: 'Add the bean sprouts (100g), doenjang (7.5g), gochugaru (3.5g), minced garlic (7.5g), and soy sauce (7.5ml) into the reserved beef broth. Bring to a boil, then simmer on medium heat for 15 minutes.' },
      { step_order: 3, title: 'Return beef & egg',  description: 'Return the sliced beef to the pot. If using an egg (1), crack it gently into the soup and cook for 2 minutes.' },
      { step_order: 4, title: 'Garnish & serve',    description: 'Garnish with chopped green onions (15g) and serve hot.' },
    ],
  },
  {
    name_en: 'Haemul Doenjang Jjigae',
    description: 'Soybean paste stew with fresh seafood and tofu.',
    cooking_time_min: 25, calories: 120, protein_g: 9, carbs_g: 6, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Doenjang',     amount: '1 tbsp',   type: 'essential' },
      { name: 'Seafood Mix',  amount: '100g',     type: 'essential' },
      { name: 'Tofu',         amount: '75g',      type: 'essential' },
      { name: 'Zucchini',     amount: '40g',      type: 'essential' },
      { name: 'Garlic',       amount: '1 clove',  type: 'essential' },
      { name: 'Anchovy Broth',amount: '1 cup',    type: 'recommended' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prepare the broth', description: 'Bring the anchovy broth (250ml) to a boil in a pot over medium-high heat (5 mins). Dissolve the doenjang (15g) into the broth along with minced garlic (5g).' },
      { step_order: 2, title: 'Add seafood & tofu',description: 'Add the diced zucchini (40g), seafood mix (100g), and firm tofu (75g) to the pot.' },
      { step_order: 3, title: 'Simmer',            description: 'Simmer on medium heat for 12 minutes until the seafood is fully cooked through.' },
      { step_order: 4, title: 'Garnish & serve',   description: 'Garnish with chopped green onions (7.5g) and a pinch of gochugaru (1g, if using) before serving.' },
    ],
  },
  {
    name_en: 'Haemul Sundubu Jjigae',
    description: 'Soft tofu stew loaded with fresh seafood.',
    cooking_time_min: 20, calories: 130, protein_g: 10, carbs_g: 4, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Soft Tofu',   amount: '150g',     type: 'essential' },
      { name: 'Seafood Mix', amount: '100g',     type: 'essential' },
      { name: 'Gochugaru',   amount: '1 tbsp',   type: 'essential' },
      { name: 'Garlic',      amount: '1 clove',  type: 'essential' },
      { name: 'Soy Sauce',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Egg',         amount: '1',        type: 'recommended' },
      { name: 'Green Onion', amount: '7.5g',     type: 'recommended' },
      { name: 'Sesame Oil',  amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make spicy oil base', description: 'Heat a small pot over medium heat with sesame oil (2.5ml, if using) or 1 tsp of cooking oil. Sauté the minced garlic (5g) and gochugaru (7g) for 1 minute to create a spicy oil base.' },
      { step_order: 2, title: 'Add seafood & broth', description: 'Add the seafood mix (100g) and stir-fry briefly for 1 minute. Pour in 0.75 cup (180ml) of water and soy sauce (7.5ml). Bring to a boil.' },
      { step_order: 3, title: 'Add soft tofu',       description: 'Gently add the soft tofu (150g) into the broth, breaking it up lightly with a spoon, and simmer for 5 minutes.' },
      { step_order: 4, title: 'Crack egg & serve',   description: 'Crack an egg (1) directly into the bubbling stew, cook for 1 minute until the white sets, garnish with chopped green onions (7.5g), and serve.' },
    ],
  },
  {
    name_en: 'Kimchi Guk',
    description: 'Light kimchi soup — simpler and brothier than kimchi jjigae.',
    cooking_time_min: 20, calories: 90, protein_g: 5, carbs_g: 6, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Kimchi',      amount: '80g',      type: 'essential' },
      { name: 'Tofu',        amount: '75g',      type: 'essential' },
      { name: 'Soy Sauce',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',      amount: '2.5g',     type: 'essential' },
      { name: 'Green Onion', amount: '7.5g',     type: 'recommended' },
      { name: 'Sesame Oil',  amount: '0.5 tsp',  type: 'optional' },
      { name: 'Gochugaru',   amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Boil kimchi broth', description: 'In a pot, combine chopped fermented kimchi (80g), minced garlic (2.5g), and 1.5 cups (375ml) of water. Bring to a boil over medium-high heat, then reduce heat and simmer for 10 minutes.' },
      { step_order: 2, title: 'Add tofu',          description: 'Add the cubed firm tofu (75g) and soy sauce (7.5ml) to the pot. Cook for 5 more minutes.' },
      { step_order: 3, title: 'Season & serve',    description: 'Turn off the heat, drizzle with sesame oil (2.5ml, if using), and garnish with chopped green onions (7.5g) and gochugaru (1g, if using) before serving.' },
    ],
  },
  {
    name_en: 'Kimchi Jjigae',
    description: 'A classic comfort stew that never gets old.',
    cooking_time_min: 25, calories: 160, protein_g: 9, carbs_g: 6, fat_g: 8, servings: 1,
    ingredients: [
      { name: 'Kimchi',      amount: '120g',     type: 'essential' },
      { name: 'Tofu',        amount: '100g',     type: 'essential' },
      { name: 'Pork Belly',  amount: '75g',      type: 'essential' },
      { name: 'Gochugaru',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Green Onion', amount: '7.5g',     type: 'recommended' },
      { name: 'Sesame Oil',  amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Brown the pork',  description: 'Heat a pot over medium-high heat with 1 tsp of oil and stir-fry the sliced pork (75g) until lightly browned.' },
      { step_order: 2, title: 'Add kimchi',      description: 'Add the chopped fermented kimchi (120g) and gochugaru (3.5g) to the pot. Stir-fry together for 2 minutes until the kimchi softens.' },
      { step_order: 3, title: 'Simmer the stew', description: 'Pour in 1 cup (250ml) of water and soy sauce (7.5ml). Bring to a boil over high heat, then reduce heat to medium and simmer for 15 minutes.' },
      { step_order: 4, title: 'Add tofu & serve',description: 'Add the cubed firm tofu (100g) and simmer for 5 more minutes. Drizzle with sesame oil (2.5ml, if using) and garnish with chopped green onions (7.5g) before serving.' },
    ],
  },
  {
    name_en: 'Kimchi Stew with Spam',
    description: 'A nostalgic twist on kimchi jjigae with savory Spam.',
    cooking_time_min: 25, calories: 180, protein_g: 9, carbs_g: 7, fat_g: 11, servings: 1,
    ingredients: [
      { name: 'Kimchi',      amount: '120g',     type: 'essential' },
      { name: 'Spam',        amount: '100g',     type: 'essential' },
      { name: 'Tofu',        amount: '75g',      type: 'essential' },
      { name: 'Gochugaru',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Green Onion', amount: '7.5g',     type: 'recommended' },
    ],
    steps: [
      { step_order: 1, title: 'Fry the Spam',    description: 'Cut the Spam (100g) into small cubes. In a pot over medium-high heat, lightly fry the Spam cubes for 2 minutes until golden on the edges.' },
      { step_order: 2, title: 'Add kimchi',      description: 'Add the chopped fermented kimchi (120g) and gochugaru (3.5g) directly into the pot with the Spam. Stir-fry for 2 minutes.' },
      { step_order: 3, title: 'Simmer the stew', description: 'Pour in 1 cup (250ml) of water and soy sauce (7.5ml). Bring to a boil, then reduce heat to medium and simmer for 15 minutes.' },
      { step_order: 4, title: 'Add tofu & serve',description: 'Add the cubed firm tofu (75g) and simmer for 5 more minutes. Top with chopped green onions (7.5g) and serve hot.' },
    ],
  },
  {
    name_en: 'Kimchi Sundubu Jjigae',
    description: 'Soft tofu stew with tangy kimchi for extra depth.',
    cooking_time_min: 20, calories: 135, protein_g: 7, carbs_g: 5, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Soft Tofu',   amount: '150g',     type: 'essential' },
      { name: 'Kimchi',      amount: '40g',      type: 'essential' },
      { name: 'Gochugaru',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',      amount: '1 clove',  type: 'essential' },
      { name: 'Soy Sauce',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Egg',         amount: '1',        type: 'recommended' },
      { name: 'Green Onion', amount: '7.5g',     type: 'recommended' },
      { name: 'Pork Belly',  amount: '50g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Sauté kimchi & pork', description: 'Heat a pot over medium-high heat with 1 tsp of oil. Sauté the chopped kimchi (40g), minced garlic (5g), and sliced pork (50g, if using) for 3 minutes.' },
      { step_order: 2, title: 'Add water & gochugaru',description: 'Pour in 0.75 cup (180ml) of water and soy sauce (7.5ml). Bring to a boil, then add the gochugaru (3.5g).' },
      { step_order: 3, title: 'Add soft tofu',       description: 'Gently slide in the soft tofu (150g) and simmer for 5 minutes.' },
      { step_order: 4, title: 'Crack egg & serve',   description: 'Crack an egg (1, if using) into the stew and cook for 1 minute. Garnish with chopped green onions (7.5g) and serve.' },
    ],
  },
  {
    name_en: 'Kkori Gomtang',
    description: 'Rich oxtail bone broth soup, slow-simmered for hours.',
    cooking_time_min: 180, calories: 105, protein_g: 9, carbs_g: 2, fat_g: 5.5, servings: 1,
    ingredients: [
      { name: 'Oxtail',      amount: '250g',     type: 'essential' },
      { name: 'Garlic',      amount: '6g',       type: 'essential' },
      { name: 'Green Onion', amount: '11g',      type: 'essential' },
      { name: 'Salt',        amount: '0.25 tsp', type: 'essential' },
      { name: 'Onion',       amount: '50g',      type: 'recommended' },
      { name: 'Sesame Oil',  amount: '0.25 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch the oxtail', description: 'Blanch the oxtail pieces (250g) in a pot of boiling water for 5 minutes, then drain and rinse thoroughly under cold water.' },
      { step_order: 2, title: 'Slow simmer',       description: 'Place the cleaned oxtail in a large pot with 3 cups (750ml) of water, minced garlic (6g), and quartered onion (50g). Bring to a boil, then reduce heat to low and simmer covered for 2.5 to 3 hours until the meat falls off the bone.' },
      { step_order: 3, title: 'Season the broth',  description: 'Discard the onion pieces. Season the rich broth with salt (1.5g).' },
      { step_order: 4, title: 'Garnish & serve',   description: 'Ladle into a bowl, garnish with chopped green onions (11g), add a drop of sesame oil (1.2ml, if using), and serve hot with rice.' },
    ],
  },
  {
    name_en: 'Kongbiji Jjigae',
    description: 'Creamy ground soybean stew with kimchi.',
    cooking_time_min: 30, calories: 130, protein_g: 8, carbs_g: 7, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Soybean Pulp', amount: '150g',     type: 'essential' },
      { name: 'Kimchi',       amount: '40g',      type: 'essential' },
      { name: 'Pork Belly',   amount: '50g',      type: 'essential' },
      { name: 'Garlic',       amount: '1 clove',  type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Green Onion',  amount: '7.5g',     type: 'recommended' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Sauté pork & kimchi', description: 'Heat a pot over medium-high heat with sesame oil (2.5ml). Sauté the sliced pork (50g), minced garlic (5g), and chopped kimchi (40g) for 3 minutes.' },
      { step_order: 2, title: 'Add soybean pulp',    description: 'Add the soybean pulp (150g) and 0.5 cup (125ml) of water to the pot. Stir well and simmer for 15 minutes over medium-low heat, stirring frequently to prevent sticking at the bottom.' },
      { step_order: 3, title: 'Season the stew',     description: 'Season with soy sauce (7.5ml) and add gochugaru (1g, if using) for extra heat.' },
      { step_order: 4, title: 'Garnish & serve',     description: 'Garnish with chopped green onions (7.5g) and serve hot.' },
    ],
  },
  {
    name_en: 'Miyeok Guk',
    description: 'Korean seaweed soup — traditionally eaten on birthdays.',
    cooking_time_min: 30, calories: 90, protein_g: 7, carbs_g: 4, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Beef',          amount: '75g',      type: 'essential' },
      { name: 'Dried Seaweed', amount: '15g',      type: 'essential' },
      { name: 'Soy Sauce',     amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',        amount: '1 clove',  type: 'essential' },
      { name: 'Salt',          amount: '0.5 tsp',  type: 'essential' },
      { name: 'Green Onion',   amount: '7.5g',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Soak the seaweed',       description: 'Soak the dried seaweed (15g) in cold water for 20 minutes until fully expanded. Drain thoroughly and cut into bite-sized pieces using kitchen shears.' },
      { step_order: 2, title: 'Stir-fry beef',          description: 'Heat a pot over medium-high heat with sesame oil (7.5ml). Add the sliced beef (75g) and stir-fry for 2 minutes until color changes.' },
      { step_order: 3, title: 'Add seaweed & soy sauce',description: 'Add the soaked seaweed and soy sauce (15ml) into the pot, continuing to stir-fry together for another 2 minutes.' },
      { step_order: 4, title: 'Simmer & season',        description: 'Pour in 2 cups (500ml) of water and minced garlic (5g). Bring to a boil, then reduce heat to medium and simmer for 20 minutes. Season with salt (3g) and garnish with chopped green onions (7.5g, if using).' },
    ],
  },
  {
    name_en: 'Samgyetang',
    description: 'Whole chicken stuffed with rice and ginseng, simmered to perfection.',
    cooking_time_min: 90, calories: 480, protein_g: 42, carbs_g: 28, fat_g: 18, servings: 1,
    ingredients: [
      { name: 'Chicken',      amount: '500g',     type: 'essential' },
      { name: 'Rice',         amount: '45g',      type: 'essential' },
      { name: 'Garlic',       amount: '3 cloves', type: 'essential' },
      { name: 'Salt',         amount: '0.5 tsp',  type: 'essential' },
      { name: 'Green Onion',  amount: '15g',      type: 'recommended' },
      { name: 'Ginseng',      amount: '0.5 root', type: 'optional' },
      { name: 'Dried Jujubes',amount: '2 pieces', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the chicken', description: 'Thoroughly rinse the small whole chicken (1 small) inside and out, trimming excess fat.' },
      { step_order: 2, title: 'Stuff the chicken',description: 'Stuff the cavity of the chicken tightly with uncooked rice (45g), peeled garlic cloves (15g), ginseng root (0.5 root, if using), and jujubes (2 pieces, if using). Secure the opening with a toothpick or kitchen twine.' },
      { step_order: 3, title: 'Bring to boil',    description: 'Place the stuffed chicken in a deep pot and cover completely with water (about 4 cups/1L). Bring to a rolling boil over high heat (10 mins).' },
      { step_order: 4, title: 'Simmer & season',  description: 'Reduce heat to low, cover the pot, and simmer gently for 1 hour until the chicken is exceptionally tender and the broth is rich. Season with salt (3g), garnish with chopped green onions (15g), and serve hot.' },
    ],
  },
  {
    name_en: 'Sogogi Muguk',
    description: 'Clear radish and beef soup — clean, comforting, everyday Korean.',
    cooking_time_min: 35, calories: 110, protein_g: 8, carbs_g: 7, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Beef',        amount: '100g',     type: 'essential' },
      { name: 'Radish',      amount: '100g',     type: 'essential' },
      { name: 'Soy Sauce',   amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',  amount: '0.5 tsp',  type: 'essential' },
      { name: 'Garlic',      amount: '1 clove',  type: 'essential' },
      { name: 'Salt',        amount: '0.25 tsp', type: 'essential' },
      { name: 'Green Onion', amount: '7.5g',     type: 'recommended' },
    ],
    steps: [
      { step_order: 1, title: 'Slice beef & radish', description: 'Slice the beef (100g) into thin bite-sized pieces and cut the radish (100g) into thin bite-sized rectangular cubes.' },
      { step_order: 2, title: 'Sauté the beef',      description: 'Heat a pot over medium-high heat with sesame oil (2.5ml). Sauté the beef with soy sauce (15ml) for 2 minutes until lightly browned.' },
      { step_order: 3, title: 'Add radish & water',  description: 'Add the cubed radish and 2 cups (500ml) of water to the pot. Bring to a boil over high heat (5 mins).' },
      { step_order: 4, title: 'Simmer & season',     description: 'Reduce heat to medium and simmer for 20 minutes until the radish pieces are tender and translucent. Add minced garlic (5g) and season with salt (1.5g). Garnish with chopped green onions (7.5g) and serve.' },
    ],
  },
  {
    name_en: 'Sundubu Jjigae',
    description: 'Silky soft tofu stew with a spicy, savory broth.',
    cooking_time_min: 20, calories: 120, protein_g: 7, carbs_g: 4, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Soft Tofu',   amount: '150g',     type: 'essential' },
      { name: 'Egg',         amount: '1',        type: 'essential' },
      { name: 'Gochugaru',   amount: '1 tbsp',   type: 'essential' },
      { name: 'Garlic',      amount: '1 clove',  type: 'essential' },
      { name: 'Soy Sauce',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',  amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Green Onion', amount: '7.5g',     type: 'recommended' },
      { name: 'Pork Belly',  amount: '50g',      type: 'optional' },
      { name: 'Mushroom',    amount: '50g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make spice base',   description: 'Heat a small pot over medium heat with sesame oil (2.5ml). Sauté minced garlic (5g), gochugaru (7g), and sliced pork (50g, if using) for 1 minute to release aromatic flavors.' },
      { step_order: 2, title: 'Add broth',         description: 'Pour in 0.75 cup (180ml) of water and soy sauce (7.5ml). Add sliced mushrooms (50g, if using) and bring to a boil over high heat (3 mins).' },
      { step_order: 3, title: 'Add soft tofu',     description: 'Gently spoon the soft tofu (150g) into the boiling broth. Simmer for 5 minutes without stirring aggressively.' },
      { step_order: 4, title: 'Crack egg & serve', description: 'Crack the egg (1) directly into the center of the stew and cook for 1 to 2 minutes until the white is set. Garnish with chopped green onions (7.5g) and serve immediately.' },
    ],
  },
  {
    name_en: 'Yukgaejang',
    description: 'Fiery shredded beef soup with bean sprouts.',
    cooking_time_min: 60, calories: 120, protein_g: 9.3, carbs_g: 4, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Beef',         amount: '133g',     type: 'essential' },
      { name: 'Bean Sprouts', amount: '67g',      type: 'essential' },
      { name: 'Gochugaru',    amount: '1 tbsp',   type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.67 tbsp',type: 'essential' },
      { name: 'Garlic',       amount: '6.5g',     type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.67 tbsp',type: 'essential' },
      { name: 'Green Onion',  amount: '15g',      type: 'recommended' },
      { name: 'Egg',          amount: '0.67',     type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Boil & shred beef',  description: 'Boil the beef (133g) in 2 cups of water for 40 minutes until tender. Remove the beef, let cool slightly, and shred it by hand. Reserve the cooking broth.' },
      { step_order: 2, title: 'Stir-fry in spices', description: 'Heat a pot over medium-high heat with sesame oil (10ml). Sauté gochugaru (7g) and minced garlic (6.5g) for 30 seconds, then add the shredded beef and toss to coat.' },
      { step_order: 3, title: 'Add broth & sprouts',description: 'Pour the reserved beef broth into the pot along with the bean sprouts (67g) and soy sauce (10ml). Bring to a boil, then reduce heat and simmer for 15 minutes.' },
      { step_order: 4, title: 'Finish with egg',    description: 'Stir in chopped green onions (15g). If using beaten eggs (0.67), drizzle them slowly into the soup and turn off the heat. Adjust seasoning and serve hot with rice.' },
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
