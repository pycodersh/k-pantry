import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const RECIPES = [
  {
    name_en: 'Andong Jjimdak',
    description: 'A delicious, sweet and savory braised chicken dish with tender vegetables and chewy glass noodles, originating from the city of Andong.',
    cooking_time_min: 50, calories: 520, protein_g: 38, carbs_g: 52, fat_g: 18, servings: 1,
    ingredients: [
      { name: 'Chicken',      amount: '200g',   type: 'essential' },
      { name: 'Soy Sauce',    amount: '2 tbsp', type: 'essential' },
      { name: 'Sugar',        amount: '1 tbsp', type: 'essential' },
      { name: 'Garlic',       amount: '1 tbsp', type: 'essential' },
      { name: 'Glass Noodles',amount: '35g',    type: 'essential' },
      { name: 'Potato',       amount: '100g',   type: 'recommended' },
      { name: 'Carrot',       amount: '50g',    type: 'recommended' },
      { name: 'Onion',        amount: '50g',    type: 'recommended' },
      { name: 'Green Onion',  amount: '15g',    type: 'recommended' },
      { name: 'Gochugaru',    amount: '1 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Soak the noodles',   description: 'Soak glass noodles in cold water for 20 minutes to soften. Drain and set aside.' },
      { step_order: 2, title: 'Make the sauce',     description: 'In a small bowl, whisk together: soy sauce (2 tbsp/30ml), sugar (1 tbsp/12g), minced garlic (1 tbsp/15g), and 150ml of water.' },
      { step_order: 3, title: 'Braise the chicken', description: 'Place chicken and sauce in a pan. Bring to a boil over medium-high heat (3 mins), then cover, reduce heat to medium-low, and simmer for 15 minutes.' },
      { step_order: 4, title: 'Add vegetables',     description: 'Add potato, carrot, and onion to the pan. Cover and continue to simmer on medium-low heat for 12 minutes until vegetables are tender.' },
      { step_order: 5, title: 'Add noodles & finish', description: 'Add the soaked glass noodles, green onions, and gochugaru (if using). Simmer uncovered on medium heat for 5 minutes, stirring occasionally, until the sauce thickens and coats the chicken and noodles.' },
    ],
  },
  {
    name_en: 'Buldak',
    description: 'An intensely flavorful and fiery grilled chicken dish that is perfect for those who love a serious spicy kick.',
    cooking_time_min: 45, calories: 410, protein_g: 35, carbs_g: 18, fat_g: 20, servings: 1,
    ingredients: [
      { name: 'Chicken',          amount: '250g',     type: 'essential' },
      { name: 'Gochugaru',        amount: '1.5 tbsp', type: 'essential' },
      { name: 'Gochujang',        amount: '1 tbsp',   type: 'essential' },
      { name: 'Soy Sauce',        amount: '1 tbsp',   type: 'essential' },
      { name: 'Sugar',            amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',           amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',       amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Green Onion',      amount: '10g',      type: 'recommended' },
      { name: 'Mozzarella Cheese',amount: '30g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the marinade',  description: 'In a bowl, thoroughly mix gochugaru (1.5 tbsp), gochujang (1 tbsp), soy sauce (1 tbsp), sugar (0.5 tbsp), minced garlic (1 tbsp), and sesame oil (0.5 tsp).' },
      { step_order: 2, title: 'Marinate the chicken', description: 'Add chicken pieces to the sauce. Mix well until evenly coated. Cover and refrigerate for at least 30 minutes.' },
      { step_order: 3, title: 'Cook the chicken',   description: 'Heat a skillet over medium-high heat. Add chicken and cook for 8–10 minutes, stirring frequently, until fully cooked through and slightly charred.' },
      { step_order: 4, title: 'Add cheese & serve', description: 'If using cheese, sprinkle mozzarella over the chicken, cover the pan, and cook on low heat for 2 minutes until melted. Garnish with sliced green onion.' },
    ],
  },
  {
    name_en: 'Bulgogi',
    description: 'Thinly sliced beef marinated in a sweet and savory sauce, then quickly seared to perfection.',
    cooking_time_min: 25, calories: 380, protein_g: 26, carbs_g: 18, fat_g: 22, servings: 1,
    ingredients: [
      { name: 'Beef',           amount: '150g',     type: 'essential' },
      { name: 'Onion',          amount: '40g',      type: 'essential' },
      { name: 'Green Onion',    amount: '10g',      type: 'essential' },
      { name: 'Soy Sauce',      amount: '1.5 tbsp', type: 'essential' },
      { name: 'Sugar',          amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',         amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',     amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Seeds',   amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Shiitake Mushroom', amount: '50g',   type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the marinade', description: 'In a bowl, mix soy sauce (1.5 tbsp), sugar (0.5 tbsp), minced garlic (0.5 tbsp), and sesame oil (0.5 tbsp).' },
      { step_order: 2, title: 'Marinate the beef', description: 'Combine the thinly sliced beef with the marinade and sliced onion. Toss well and let it sit for at least 15 minutes.' },
      { step_order: 3, title: 'Stir-fry',          description: 'Heat a large skillet or wok over high heat. Add the marinated beef and onions (and mushrooms, if using). Stir-fry for 4–5 minutes until the beef is fully cooked and the sauce has caramelized.' },
      { step_order: 4, title: 'Garnish & serve',   description: 'Remove from heat, garnish with chopped green onion and sesame seeds, and serve hot with steamed rice.' },
    ],
  },
  {
    name_en: 'Dak Bokkeum Tang',
    description: 'A comforting, hearty, and spicy chicken stew featuring tender chicken and root vegetables in a thick, glossy red sauce.',
    cooking_time_min: 50, calories: 450, protein_g: 35, carbs_g: 28, fat_g: 20, servings: 1,
    ingredients: [
      { name: 'Chicken',          amount: '200g',     type: 'essential' },
      { name: 'Gochujang',        amount: '1 tbsp',   type: 'essential' },
      { name: 'Soy Sauce',        amount: '1 tbsp',   type: 'essential' },
      { name: 'Sugar',            amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',           amount: '1 tbsp',   type: 'essential' },
      { name: 'Potato',           amount: '80g',      type: 'recommended' },
      { name: 'Onion',            amount: '50g',      type: 'recommended' },
      { name: 'Green Onion',      amount: '15g',      type: 'recommended' },
      { name: 'Shiitake Mushroom',amount: '30g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch the chicken', description: 'Bring a pot of water to a boil. Add the chicken pieces and blanch for 3 minutes to remove impurities. Drain and rinse under cold water.' },
      { step_order: 2, title: 'Make the sauce',     description: 'In a small bowl, mix gochujang (1 tbsp), soy sauce (1 tbsp), sugar (0.5 tbsp), minced garlic (1 tbsp), and 200ml of water.' },
      { step_order: 3, title: 'Simmer',             description: 'Place blanched chicken, potatoes, and onions in a pot. Pour the sauce mixture over. Cover and simmer over medium-high heat for 15 minutes, then reduce heat to low and simmer for another 10 minutes.' },
      { step_order: 4, title: 'Finish',             description: 'Add the green onions and mushrooms (if using). Simmer for an additional 5 minutes without the lid to allow the sauce to thicken properly.' },
    ],
  },
  {
    name_en: 'Dak Gangjeong',
    description: 'Irresistibly crispy fried chicken pieces tossed in a sweet, sticky, and slightly spicy Korean glaze.',
    cooking_time_min: 40, calories: 550, protein_g: 25, carbs_g: 50, fat_g: 28, servings: 1,
    ingredients: [
      { name: 'Chicken',      amount: '200g',     type: 'essential' },
      { name: 'Cornstarch',   amount: '50g',      type: 'essential' },
      { name: 'Gochujang',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sugar',        amount: '1 tbsp',   type: 'essential' },
      { name: 'Soy Sauce',    amount: '1 tbsp',   type: 'essential' },
      { name: 'Garlic',       amount: '1 tsp',    type: 'essential' },
      { name: 'Vinegar',      amount: '0.5 tbsp', type: 'recommended' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Fry the chicken', description: 'Coat chicken pieces thoroughly in cornstarch. Heat oil in a pan to 170°C. Fry the chicken for 6–8 minutes until golden and crispy. Remove and drain on paper towels.' },
      { step_order: 2, title: 'Make the glaze',  description: 'In a separate pan, combine gochujang (0.5 tbsp), sugar (1 tbsp), soy sauce (1 tbsp), minced garlic (1 tsp), vinegar (0.5 tbsp), and 1 tbsp of water. Cook on medium-low heat until bubbly and slightly thickened (2 minutes).' },
      { step_order: 3, title: 'Coat & serve',    description: 'Add the fried chicken to the pan and toss quickly over low heat for 1 minute until completely coated in the glaze. Sprinkle with sesame seeds and serve.' },
    ],
  },
  {
    name_en: 'Dakdoritang',
    description: 'A popular, rustic braised chicken stew with tender potatoes, perfect for a hearty meal.',
    cooking_time_min: 50, calories: 480, protein_g: 35, carbs_g: 35, fat_g: 22, servings: 1,
    ingredients: [
      { name: 'Chicken',          amount: '200g',   type: 'essential' },
      { name: 'Potato',           amount: '100g',   type: 'essential' },
      { name: 'Gochujang',        amount: '1 tbsp', type: 'essential' },
      { name: 'Gochugaru',        amount: '1 tbsp', type: 'essential' },
      { name: 'Soy Sauce',        amount: '1 tbsp', type: 'essential' },
      { name: 'Garlic',           amount: '1 tbsp', type: 'essential' },
      { name: 'Onion',            amount: '50g',    type: 'recommended' },
      { name: 'Green Onion',      amount: '15g',    type: 'recommended' },
      { name: 'Shiitake Mushroom',amount: '30g',    type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch the chicken', description: 'Bring a pot of water to a boil and add the chicken pieces. Blanch for 3 minutes, then drain and rinse thoroughly under cold water.' },
      { step_order: 2, title: 'Make the sauce',     description: 'In a bowl, mix together gochujang (1 tbsp), gochugaru (1 tbsp), soy sauce (1 tbsp), minced garlic (1 tbsp), and 200ml of water.' },
      { step_order: 3, title: 'Braise',             description: 'Place the chicken, potatoes, and onions in a pot. Pour the sauce mixture over them. Bring to a boil over medium-high heat, then cover, reduce heat to medium-low, and simmer for 25 minutes.' },
      { step_order: 4, title: 'Reduce & serve',     description: 'Remove the lid and cook for another 5 minutes over medium heat to reduce the sauce slightly. Garnish with green onions and serve.' },
    ],
  },
  {
    name_en: 'Dakgalbi',
    description: 'Spicy, savory stir-fried chicken with chewy rice cakes and fresh vegetables in a signature bold sauce.',
    cooking_time_min: 35, calories: 480, protein_g: 32, carbs_g: 45, fat_g: 18, servings: 1,
    ingredients: [
      { name: 'Chicken',           amount: '200g',     type: 'essential' },
      { name: 'Gochujang',         amount: '1.5 tbsp', type: 'essential' },
      { name: 'Gochugaru',         amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',         amount: '1 tbsp',   type: 'essential' },
      { name: 'Sugar',             amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',            amount: '1 tbsp',   type: 'essential' },
      { name: 'Korean Rice Cakes', amount: '75g',      type: 'recommended' },
      { name: 'Green Onion',       amount: '15g',      type: 'recommended' },
    ],
    steps: [
      { step_order: 1, title: 'Make the marinade',    description: 'In a bowl, mix gochujang (1.5 tbsp), gochugaru (0.5 tbsp), soy sauce (1 tbsp), sugar (0.5 tbsp), and minced garlic (1 tbsp). Add the chicken pieces and coat well. Let it marinate for 20 minutes.' },
      { step_order: 2, title: 'Cook the chicken',     description: 'Heat a large pan over medium-high heat. Add the marinated chicken and stir-fry for 6–8 minutes until mostly cooked.' },
      { step_order: 3, title: 'Add rice cakes & finish', description: 'Add the soaked rice cakes and sliced green onions. Stir-fry for another 3–4 minutes until the rice cakes are soft and the sauce is thick and caramelized around the chicken.' },
    ],
  },
  {
    name_en: 'Dwaeji Galbi',
    description: 'Tender pork ribs marinated in a sweet, savory, and aromatic glaze, then grilled until sticky and perfectly charred.',
    cooking_time_min: 80, calories: 550, protein_g: 35, carbs_g: 25, fat_g: 32, servings: 1,
    ingredients: [
      { name: 'Pork Ribs',    amount: '200g',     type: 'essential' },
      { name: 'Soy Sauce',    amount: '1.5 tbsp', type: 'essential' },
      { name: 'Sugar',        amount: '1 tbsp',   type: 'essential' },
      { name: 'Garlic',       amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tbsp', type: 'essential' },
      { name: 'Onion',        amount: '20g',      type: 'recommended' },
      { name: 'Green Onion',  amount: '10g',      type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Marinate the ribs', description: 'Make small scores in the pork ribs. In a bowl, combine soy sauce (1.5 tbsp), sugar (1 tbsp), minced garlic (1 tbsp), sesame oil (0.5 tbsp), and grated onion (20g). Mix the ribs with the marinade and refrigerate for at least 1 hour.' },
      { step_order: 2, title: 'Grill the ribs',    description: 'Heat a pan over medium heat. Add the marinated ribs (with some marinade) and cook for 20–25 minutes, turning frequently to ensure even cooking and caramelization, until the sauce is sticky.' },
      { step_order: 3, title: 'Garnish & serve',   description: 'Remove from heat, garnish with sliced green onions and sesame seeds (if desired), and serve hot with rice.' },
    ],
  },
  {
    name_en: 'Galbi Jjim',
    description: 'A sophisticated and tender braised beef short rib dish, rich in savory-sweet flavor and perfect for special occasions.',
    cooking_time_min: 120, calories: 600, protein_g: 45, carbs_g: 30, fat_g: 30, servings: 1,
    ingredients: [
      { name: 'Beef Short Ribs',  amount: '250g',     type: 'essential' },
      { name: 'Soy Sauce',        amount: '1.5 tbsp', type: 'essential' },
      { name: 'Sugar',            amount: '1 tbsp',   type: 'essential' },
      { name: 'Garlic',           amount: '1 tbsp',   type: 'essential' },
      { name: 'Sesame Oil',       amount: '0.5 tbsp', type: 'essential' },
      { name: 'Carrot',           amount: '50g',      type: 'recommended' },
      { name: 'Potato',           amount: '50g',      type: 'recommended' },
      { name: 'Shiitake Mushroom',amount: '30g',      type: 'optional' },
      { name: 'Green Onion',      amount: '10g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Blanch the ribs',  description: 'Boil the ribs in water for 5 minutes to remove impurities. Drain and rinse well under cold water. Score the meat with a knife.' },
      { step_order: 2, title: 'Braise the ribs',  description: 'Place the ribs in a pot with soy sauce (1.5 tbsp), sugar (1 tbsp), minced garlic (1 tbsp), and 300ml of water. Bring to a boil, then reduce heat to low and simmer, covered, for 1 hour until the beef is tender.' },
      { step_order: 3, title: 'Add vegetables',   description: 'Add potato, carrot, and mushroom. Continue to cook for another 20 minutes until the vegetables are soft.' },
      { step_order: 4, title: 'Finish',           description: 'Stir in the sesame oil (0.5 tbsp). Cook for an additional 5 minutes to let the sauce thicken. Garnish with green onions.' },
    ],
  },
  {
    name_en: 'Haemul Pajeon',
    description: 'A crispy, savory Korean pancake packed with fresh seafood and aromatic green onions.',
    cooking_time_min: 25, calories: 350, protein_g: 20, carbs_g: 35, fat_g: 16, servings: 1,
    ingredients: [
      { name: 'Seafood Mix',  amount: '100g',      type: 'essential' },
      { name: 'Green Onion',  amount: '40g',       type: 'essential' },
      { name: 'Egg',          amount: '1',         type: 'essential' },
      { name: 'Flour',        amount: '60g',       type: 'essential' },
      { name: 'Salt',         amount: '0.25 tsp',  type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp',  type: 'recommended' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',   type: 'recommended' },
      { name: 'Gochugaru',    amount: '0.5 tsp',   type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the batter',       description: 'Whisk together flour (60g), salt (0.25 tsp), and 80ml of water until smooth. Stir in the seafood mix.' },
      { step_order: 2, title: 'Set up the pancake',    description: 'Heat a pan with oil over medium-high heat. Lay the green onion stalks flat in the pan. Pour the batter and seafood mixture evenly over the onions. Pour the beaten egg over the top.' },
      { step_order: 3, title: 'Cook & serve',          description: 'Cook for 4–5 minutes until the bottom is crispy and golden. Flip carefully and cook for another 3–4 minutes. Serve hot with a dipping sauce made of soy sauce, a drop of sesame oil, and a pinch of gochugaru.' },
    ],
  },
  {
    name_en: 'Jeyuk Bokkeum',
    description: 'The ultimate Korean home-cooking dish: thin, spicy, stir-fried pork that\'s perfectly balanced and flavorful.',
    cooking_time_min: 25, calories: 450, protein_g: 30, carbs_g: 18, fat_g: 28, servings: 1,
    ingredients: [
      { name: 'Pork Belly',   amount: '150g',     type: 'essential' },
      { name: 'Gochujang',    amount: '1 tbsp',   type: 'essential' },
      { name: 'Gochugaru',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',    amount: '1 tbsp',   type: 'essential' },
      { name: 'Sugar',        amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',       amount: '0.5 tbsp', type: 'essential' },
      { name: 'Onion',        amount: '40g',      type: 'recommended' },
      { name: 'Green Onion',  amount: '15g',      type: 'recommended' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the marinade', description: 'In a bowl, mix gochujang (1 tbsp), gochugaru (0.5 tbsp), soy sauce (1 tbsp), sugar (0.5 tbsp), and minced garlic (0.5 tbsp). Add the pork slices and toss well to coat. Let it marinate for 15 minutes.' },
      { step_order: 2, title: 'Stir-fry',          description: 'Heat a skillet over high heat. Add the marinated pork and sliced onion. Stir-fry for 5–6 minutes until the pork is cooked through and the edges are slightly crispy/caramelized.' },
      { step_order: 3, title: 'Season & serve',    description: 'Remove from heat, drizzle with sesame oil (0.5 tsp), and garnish with chopped green onions. Serve with rice and fresh lettuce leaves for wrapping.' },
    ],
  },
  {
    name_en: 'Ojingeo Bokkeum',
    description: 'Tender squid and fresh vegetables stir-fried in a bold, spicy, and addictively delicious gochujang sauce.',
    cooking_time_min: 20, calories: 300, protein_g: 25, carbs_g: 18, fat_g: 12, servings: 1,
    ingredients: [
      { name: 'Squid',        amount: '150g',     type: 'essential' },
      { name: 'Gochujang',    amount: '1 tbsp',   type: 'essential' },
      { name: 'Gochugaru',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',    amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',       amount: '1 tsp',    type: 'essential' },
      { name: 'Onion',        amount: '40g',      type: 'recommended' },
      { name: 'Green Onion',  amount: '15g',      type: 'recommended' },
      { name: 'Sesame Oil',   amount: '0.5 tsp',  type: 'optional' },
      { name: 'Sesame Seeds', amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the sauce', description: 'In a small bowl, mix gochujang (1 tbsp), gochugaru (0.5 tbsp), soy sauce (0.5 tbsp), and minced garlic (1 tsp).' },
      { step_order: 2, title: 'Stir-fry',       description: 'Heat a skillet over high heat. Add the sliced onion and squid. Stir-fry for 2–3 minutes. Add the sauce mixture and continue to stir-fry for 1–2 minutes until the squid is just cooked and well-coated.' },
      { step_order: 3, title: 'Finish & serve', description: 'Remove from heat, toss in the green onions, and drizzle with sesame oil. Garnish with sesame seeds and serve immediately.' },
    ],
  },
  {
    name_en: 'Samgyeopsal',
    description: 'Juicy, grilled pork belly strips that offer the ultimate Korean BBQ experience right in your own kitchen.',
    cooking_time_min: 20, calories: 550, protein_g: 30, carbs_g: 5, fat_g: 45, servings: 1,
    ingredients: [
      { name: 'Pork Belly',   amount: '200g',      type: 'essential' },
      { name: 'Salt',         amount: '0.5 tsp',   type: 'essential' },
      { name: 'Sesame Oil',   amount: '0.5 tbsp',  type: 'essential' },
      { name: 'Garlic',       amount: '3 cloves',  type: 'recommended' },
      { name: 'Ssamjang',     amount: '1.5 tbsp',  type: 'recommended' },
      { name: 'Green Onion',  amount: '10g',       type: 'recommended' },
      { name: 'Lettuce',      amount: '4-5 leaves',type: 'optional' },
      { name: 'Kimchi',       amount: '50g',       type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Season the pork', description: 'Lightly sprinkle both sides of the pork belly slices with salt (0.5 tsp).' },
      { step_order: 2, title: 'Grill the pork',  description: 'Heat a heavy skillet or grill pan over medium-high heat. Arrange the pork slices in a single layer and grill for 3–4 minutes per side, until crispy and golden brown. If using sliced garlic or kimchi, add them to the pan to grill alongside the pork.' },
      { step_order: 3, title: 'Serve',           description: 'Serve the crispy pork hot. Dip pieces in sesame oil mixed with a pinch of salt. For the full experience, wrap a piece of pork, some kimchi, and a bit of ssamjang in a lettuce leaf.' },
    ],
  },
]

async function main() {
  // 1. ingredient name → id 맵
  const { data: allIngredients } = await supabase.from('ingredients').select('id, name')
  const ingMap = {}
  allIngredients.forEach(i => { ingMap[i.name.toLowerCase()] = i.id })
  console.log('ingredients 로드:', allIngredients.length + '개')

  // 2. name_en → recipe_id 맵
  const { data: allRecipes } = await supabase.from('recipes').select('id, name_en')
  const recipeMap = {}
  allRecipes.forEach(r => { recipeMap[r.name_en] = r.id })
  console.log('recipes 로드:', allRecipes.length + '개\n')

  let okCount = 0
  let warnCount = 0

  for (const r of RECIPES) {
    const recipeId = recipeMap[r.name_en]
    if (!recipeId) {
      console.log('SKIP (레시피 없음):', r.name_en)
      continue
    }

    // --- recipes 업데이트 ---
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

    // --- 기존 image_url 보존 (step_order → image_url) ---
    const { data: existingSteps } = await supabase
      .from('recipe_steps').select('step_order, image_url').eq('recipe_id', recipeId)
    const imgUrlMap = {}
    existingSteps?.forEach(s => { if (s.image_url) imgUrlMap[s.step_order] = s.image_url })

    // --- recipe_ingredients 교체 ---
    await supabase.from('recipe_ingredients').delete().eq('recipe_id', recipeId)
    const ingRows = []
    const missing = []
    r.ingredients.forEach((ing, idx) => {
      const ingId = ingMap[ing.name.toLowerCase()]
      if (!ingId) { missing.push(ing.name); return }
      ingRows.push({ recipe_id: recipeId, ingredient_id: ingId, amount: ing.amount, type: ing.type, sort_order: idx })
    })
    if (ingRows.length > 0) {
      const { error: iErr } = await supabase.from('recipe_ingredients').insert(ingRows)
      if (iErr) console.log('ERROR ingredients:', r.name_en, iErr.message)
    }

    // --- recipe_steps 교체 ---
    await supabase.from('recipe_steps').delete().eq('recipe_id', recipeId)
    const stepRows = r.steps.map(s => ({
      recipe_id:   recipeId,
      step_order:  s.step_order,
      title:       s.title,
      description: s.description,
      image_url:   imgUrlMap[s.step_order] ?? null,
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
