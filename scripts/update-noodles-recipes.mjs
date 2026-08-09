import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const RECIPES = [
  {
    name_en: 'Anchovy Noodle Soup',
    description: 'Light wheat noodle soup in a clear anchovy broth — served at celebrations.',
    cooking_time_min: 20, calories: 155, protein_g: 6, carbs_g: 28, fat_g: 3, servings: 1,
    ingredients: [
      { name: 'Wheat Noodles',  amount: '100g',     type: 'essential' },
      { name: 'Anchovy Broth',  amount: '2 cups',   type: 'essential' },
      { name: 'Soy Sauce',      amount: '1 tbsp',   type: 'essential' },
      { name: 'Garlic',         amount: '1 clove',  type: 'essential' },
      { name: 'Zucchini',       amount: '50g',      type: 'recommended' },
      { name: 'Egg',            amount: '1',        type: 'recommended' },
      { name: 'Green Onion',    amount: '15g',      type: 'recommended' },
      { name: 'Sesame Oil',     amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prepare the broth',   description: 'Bring 2 cups (500ml) of anchovy broth to a rolling boil in a pot over medium-high heat (5 mins), adding minced garlic (1 clove) and soy sauce (1 tbsp).' },
      { step_order: 2, title: 'Cook the zucchini',   description: 'Add the julienned zucchini (50g) to the boiling broth and cook for 3 minutes until tender. Reduce heat to low to keep warm.' },
      { step_order: 3, title: 'Cook the noodles',    description: 'In a separate pot, bring 4 cups of water to a boil over high heat (5 mins). Add the wheat noodles (100g) and cook for 4 minutes, stirring occasionally to prevent sticking.' },
      { step_order: 4, title: 'Rinse the noodles',   description: 'Drain the cooked noodles thoroughly in a colander and rinse them under cold running water for 30 seconds to remove excess starch.' },
      { step_order: 5, title: 'Make egg strips',     description: 'Crack the egg (1) into a small bowl and beat it lightly with a fork. Heat a non-stick skillet over medium heat with a few drops of oil, pour in the egg, cook for 1 minute per side to make a thin omelet, and slice it into thin strips.' },
      { step_order: 6, title: 'Assemble & serve',    description: 'Place the rinsed noodles into a serving bowl, pour the hot anchovy broth and zucchini over them, and top with the egg strips, sliced green onions, and a drizzle of sesame oil (0.5 tsp).' },
    ],
  },
  {
    name_en: 'Bibim Naengmyeon',
    description: 'Spicy cold buckwheat noodles with gochujang sauce.',
    cooking_time_min: 15, calories: 170, protein_g: 5, carbs_g: 32, fat_g: 3, servings: 1,
    ingredients: [
      { name: 'Buckwheat Noodles', amount: '100g',     type: 'essential' },
      { name: 'Gochujang',         amount: '1.5 tbsp', type: 'essential' },
      { name: 'Vinegar',           amount: '1 tbsp',   type: 'essential' },
      { name: 'Sugar',             amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',        amount: '0.5 tbsp', type: 'essential' },
      { name: 'Egg',               amount: '1',        type: 'recommended' },
      { name: 'Cucumber',          amount: '40g',      type: 'recommended' },
      { name: 'Sesame Seeds',      amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make the sauce',    description: 'In a small mixing bowl, combine gochujang (1.5 tbsp), vinegar (1 tbsp), sugar (0.5 tbsp), and sesame oil (0.5 tbsp). Whisk thoroughly until the sugar is completely dissolved, then set the sauce aside.' },
      { step_order: 2, title: 'Cook the noodles',  description: 'Bring a pot of water to a rolling boil over high heat (5 mins). Add the buckwheat noodles (100g) and cook for 3 minutes, stirring continuously to prevent clumping.' },
      { step_order: 3, title: 'Chill the noodles', description: 'Drain the noodles immediately and rinse them vigorously under ice-cold running water for 1 minute until completely chilled. Drain thoroughly to remove all excess water.' },
      { step_order: 4, title: 'Toss with sauce',   description: 'Place the chilled noodles in a serving bowl, pour the prepared gochujang sauce directly over the top, and toss well using chopsticks until every strand is evenly coated.' },
      { step_order: 5, title: 'Garnish & serve',   description: 'Garnish the noodles with the halved hard-boiled egg (1) and julienned cucumber (40g). Sprinkle with sesame seeds (0.5 tsp) before serving.' },
    ],
  },
  {
    name_en: 'Japchae',
    description: 'Stir-fried glass noodles with colorful vegetables and beef.',
    cooking_time_min: 30, calories: 145, protein_g: 5, carbs_g: 24, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Glass Noodles',    amount: '100g',   type: 'essential' },
      { name: 'Soy Sauce',        amount: '1.5 tbsp', type: 'essential' },
      { name: 'Sugar',            amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',       amount: '1 tbsp', type: 'essential' },
      { name: 'Spinach',          amount: '50g',    type: 'essential' },
      { name: 'Carrot',           amount: '30g',    type: 'recommended' },
      { name: 'Shiitake Mushroom',amount: '75g',    type: 'recommended' },
      { name: 'Onion',            amount: '40g',    type: 'recommended' },
      { name: 'Beef',             amount: '75g',    type: 'optional' },
      { name: 'Egg',              amount: '0.5',    type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Soak the noodles',       description: 'Soak the glass noodles (100g) in warm water for 20 minutes to soften. Drain well and cut them in half with kitchen shears for easier eating.' },
      { step_order: 2, title: 'Blanch the spinach',     description: 'Blanch the spinach (50g) in boiling water for 30 seconds, rinse under cold water, squeeze out all excess moisture, and toss with a pinch of salt.' },
      { step_order: 3, title: 'Sauté vegetables',       description: 'Heat a skillet over medium heat with 1 tsp of oil. Sauté the sliced carrots (30g), onions (40g), and mushrooms (75g) separately with a pinch of salt and minced garlic for 2 minutes each, setting them aside on a plate.' },
      { step_order: 4, title: 'Cook the beef',          description: 'If using beef (75g), stir-fry it in the same skillet over high heat for 3 minutes until fully cooked, then set aside.' },
      { step_order: 5, title: 'Cook noodles in sauce',  description: 'Bring 2 cups of water mixed with soy sauce (1.5 tbsp) and sugar (0.5 tbsp) to a boil in a pan. Add the soaked glass noodles and cook for 3 minutes over medium heat until the liquid is absorbed and the noodles are tender and translucent.' },
      { step_order: 6, title: 'Combine & serve',        description: 'Turn off the heat, add the sautéed vegetables, beef, sesame oil (1 tbsp), and mix everything together thoroughly. Garnish with optional egg strips.' },
    ],
  },
  {
    name_en: 'Japchae with Beef',
    description: 'Premium japchae with tender marinated beef.',
    cooking_time_min: 35, calories: 190, protein_g: 9, carbs_g: 26, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Glass Noodles',    amount: '100g',     type: 'essential' },
      { name: 'Beef',             amount: '100g',     type: 'essential' },
      { name: 'Soy Sauce',        amount: '1.5 tbsp', type: 'essential' },
      { name: 'Sugar',            amount: '0.5 tbsp', type: 'essential' },
      { name: 'Sesame Oil',       amount: '1 tbsp',   type: 'essential' },
      { name: 'Spinach',          amount: '50g',      type: 'recommended' },
      { name: 'Shiitake Mushroom',amount: '75g',      type: 'recommended' },
      { name: 'Carrot',           amount: '30g',      type: 'recommended' },
      { name: 'Egg',              amount: '0.5',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Marinate the beef',   description: 'In a small bowl, combine the thinly sliced beef tenderloin (100g) with soy sauce (0.5 tbsp), sugar (0.25 tbsp), and a few drops of sesame oil. Let it marinate for 15 minutes at room temperature.' },
      { step_order: 2, title: 'Soak the noodles',    description: 'Soak the glass noodles (100g) in warm water for 20 minutes, drain, and set aside.' },
      { step_order: 3, title: 'Blanch the spinach',  description: 'Bring a pot of water to a boil over high heat, blanch the spinach (50g) for 30 seconds, rinse under cold water, and squeeze dry.' },
      { step_order: 4, title: 'Stir-fry the beef',   description: 'Heat a skillet over medium-high heat with 1 tsp of oil. Stir-fry the marinated beef for 3–4 minutes until fully browned, then remove from the pan.' },
      { step_order: 5, title: 'Sauté vegetables',    description: 'In the same skillet, briefly sauté the mushrooms (75g) and carrots (30g) for 2 minutes with a pinch of salt.' },
      { step_order: 6, title: 'Combine & serve',     description: 'Boil the glass noodles in a pot of water for 3 minutes, drain well, and toss with the remaining soy sauce (1 tbsp), sugar, and sesame oil (1 tbsp) in a large bowl. Add the cooked beef, spinach, and vegetables, mixing everything together thoroughly before serving.' },
    ],
  },
  {
    name_en: 'Jjajangmyeon',
    description: 'Korean-Chinese noodles in a rich black bean sauce.',
    cooking_time_min: 30, calories: 260, protein_g: 11, carbs_g: 39, fat_g: 7, servings: 1,
    ingredients: [
      { name: 'Wheat Noodles',    amount: '100g',   type: 'essential' },
      { name: 'Black Bean Paste', amount: '2 tbsp', type: 'essential' },
      { name: 'Pork Shoulder',    amount: '100g',   type: 'essential' },
      { name: 'Onion',            amount: '50g',    type: 'essential' },
      { name: 'Zucchini',         amount: '40g',    type: 'essential' },
      { name: 'Potato',           amount: '50g',    type: 'recommended' },
      { name: 'Cucumber',         amount: '30g',    type: 'recommended' },
      { name: 'Sugar',            amount: '0.5 tbsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Cook the pork',           description: 'Heat a wok or large skillet over medium-high heat with 1 tbsp of oil. Add the diced pork shoulder (100g) and stir-fry for 4 minutes until completely cooked and lightly browned.' },
      { step_order: 2, title: 'Add vegetables',          description: 'Add the diced onions (50g), zucchini (40g), and potatoes (50g) to the wok. Stir-fry together for 4 minutes until the vegetables begin to soften.' },
      { step_order: 3, title: 'Fry the black bean paste',description: 'Push the ingredients to one side of the wok, add the black bean paste (2 tbsp) into the cleared space, and fry the paste in the oil for 2 minutes to remove any bitter flavor, then mix it into the meat and vegetables.' },
      { step_order: 4, title: 'Simmer the sauce',        description: 'Pour 1 cup (250ml) of water and sugar (0.5 tbsp, if using) into the wok. Bring to a boil over high heat (3 mins), then reduce heat to medium-low, cover, and simmer for 10 minutes until the potatoes are tender and the sauce thickens.' },
      { step_order: 5, title: 'Cook the noodles',        description: 'In a separate pot, boil 4 cups of water over high heat, add the wheat noodles (100g), and cook for 5 minutes. Drain thoroughly.' },
      { step_order: 6, title: 'Serve',                   description: 'Place the cooked noodles in a bowl, ladle the hot black bean sauce generously over the top, and garnish with fresh cucumber strips (30g).' },
    ],
  },
  {
    name_en: 'Jjamppong',
    description: 'Spicy Korean-Chinese seafood noodle soup.',
    cooking_time_min: 30, calories: 220, protein_g: 13, carbs_g: 29, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Wheat Noodles',    amount: '100g',     type: 'essential' },
      { name: 'Gochugaru',        amount: '1.5 tbsp', type: 'essential' },
      { name: 'Seafood Mix',      amount: '150g',     type: 'essential' },
      { name: 'Onion',            amount: '40g',      type: 'essential' },
      { name: 'Garlic',           amount: '1.5 cloves', type: 'essential' },
      { name: 'Soy Sauce',        amount: '1 tbsp',   type: 'essential' },
      { name: 'Cabbage',          amount: '50g',      type: 'recommended' },
      { name: 'Shiitake Mushroom',amount: '50g',      type: 'recommended' },
      { name: 'Green Onion',      amount: '15g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Make chili oil',      description: 'Heat a wok over medium-high heat with 1 tbsp of cooking oil. Add the minced garlic and gochugaru (1.5 tbsp), stir-frying carefully for 30 seconds to create a fragrant chili oil without burning it.' },
      { step_order: 2, title: 'Sauté vegetables',    description: 'Add the sliced onions (40g), chopped cabbage (50g), and sliced mushrooms (50g) to the wok. Stir-fry on high heat for 3 minutes until the vegetables start to wilt.' },
      { step_order: 3, title: 'Add the seafood',     description: 'Add the seafood mix (150g) and soy sauce (1 tbsp) to the wok, tossing everything together continuously for 2 minutes.' },
      { step_order: 4, title: 'Build the broth',     description: 'Pour 2.5 cups (600ml) of water into the wok. Bring the mixture to a rolling boil over high heat (5 mins), then reduce to medium heat and let it simmer for 5 minutes to develop a deep, spicy broth.' },
      { step_order: 5, title: 'Cook the noodles',    description: 'In a separate pot, boil water and cook the wheat noodles (100g) for 4 minutes. Drain and place into a serving bowl.' },
      { step_order: 6, title: 'Serve',               description: 'Ladle the piping hot spicy seafood soup directly over the noodles, garnish with chopped green onions, and serve immediately.' },
    ],
  },
  {
    name_en: 'Kalguksu',
    description: 'Hand-cut wheat noodles in a light anchovy broth.',
    cooking_time_min: 30, calories: 190, protein_g: 7, carbs_g: 34, fat_g: 4, servings: 1,
    ingredients: [
      { name: 'Wheat Noodles',  amount: '100g',     type: 'essential' },
      { name: 'Anchovy Broth',  amount: '2 cups',   type: 'essential' },
      { name: 'Zucchini',       amount: '40g',      type: 'essential' },
      { name: 'Onion',          amount: '30g',      type: 'essential' },
      { name: 'Soy Sauce',      amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',         amount: '1 clove',  type: 'recommended' },
      { name: 'Green Onion',    amount: '10g',      type: 'recommended' },
      { name: 'Potato',         amount: '30g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Season the broth',    description: 'In a pot, combine the anchovy broth (2 cups/500ml), minced garlic (1 clove), and soy sauce (0.5 tbsp). Bring to a boil over medium-high heat (5 mins).' },
      { step_order: 2, title: 'Simmer vegetables',   description: 'Add the sliced onions (30g), julienned zucchini (40g), and thin potato slices (30g, if using) to the boiling broth. Reduce heat to medium and simmer for 10 minutes until the vegetables are tender.' },
      { step_order: 3, title: 'Add the noodles',     description: 'Gently shake off any excess flour from the wheat noodles (100g) and add them directly into the simmering broth.' },
      { step_order: 4, title: 'Cook in broth',       description: 'Cook the noodles uncovered for 5 minutes over medium heat, stirring gently with chopsticks to prevent them from sticking to the bottom of the pot.' },
      { step_order: 5, title: 'Garnish & serve',     description: 'Once the noodles turn soft and translucent, turn off the heat, garnish with chopped green onions, and serve hot in a bowl.' },
    ],
  },
  {
    name_en: 'Kimchi Ramen',
    description: 'Instant ramen elevated with fermented kimchi and a soft egg.',
    cooking_time_min: 12, calories: 540, protein_g: 18, carbs_g: 74, fat_g: 20, servings: 1,
    ingredients: [
      { name: 'Instant Ramen Noodles', amount: '1 packet', type: 'essential' },
      { name: 'Kimchi',         amount: '80g',      type: 'essential' },
      { name: 'Egg',            amount: '1',        type: 'essential' },
      { name: 'Green Onion',    amount: '15g',      type: 'recommended' },
      { name: 'Sesame Oil',     amount: '0.5 tsp',  type: 'recommended' },
      { name: 'Spam',           amount: '50g',      type: 'optional' },
      { name: 'American Cheese',amount: '1 slice',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Boil the water',       description: 'Pour 2.5 cups (600ml) of water into a pot and bring it to a rolling boil over high heat (4 mins).' },
      { step_order: 2, title: 'Add noodles & kimchi', description: 'Add the instant ramen noodles, seasoning packet, and chopped fermented kimchi (0.5 cup) into the boiling water. If using Spam (50g), add it now as well.' },
      { step_order: 3, title: 'Cook the ramen',       description: 'Cook the mixture on medium-high heat for 3 minutes, stirring occasionally to separate the noodles.' },
      { step_order: 4, title: 'Add the egg',          description: 'Crack the egg (1) directly into the center of the pot without stirring, and let it cook for 2 minutes to achieve a soft-boiled yolk.' },
      { step_order: 5, title: 'Season & serve',       description: 'Turn off the heat, drizzle with sesame oil (0.5 tsp), top with chopped green onions and a slice of cheese (if using), and serve hot.' },
    ],
  },
  {
    name_en: 'Kongguksu',
    description: 'Cold noodles in a creamy chilled soy milk broth — a summer classic.',
    cooking_time_min: 20, calories: 180, protein_g: 9, carbs_g: 26, fat_g: 6, servings: 1,
    ingredients: [
      { name: 'Wheat Noodles',  amount: '100g',      type: 'essential' },
      { name: 'Soy Milk',       amount: '1.5 cups',  type: 'essential' },
      { name: 'Salt',           amount: '0.5 tsp',   type: 'essential' },
      { name: 'Cucumber',       amount: '30g',       type: 'recommended' },
      { name: 'Sesame Seeds',   amount: '0.5 tbsp',  type: 'recommended' },
      { name: 'Tomato',         amount: '40g',       type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Chill the soy milk',  description: 'In a bowl, mix the unsweetened soy milk (1.5 cups/375ml) with salt (0.5 tsp) until dissolved. Place it in the refrigerator to chill thoroughly until ready to use.' },
      { step_order: 2, title: 'Cook the noodles',    description: 'Bring a pot of water to a rolling boil over high heat (5 mins). Add the wheat noodles (100g) and cook for 4 minutes, stirring frequently.' },
      { step_order: 3, title: 'Chill the noodles',   description: 'Drain the noodles and rinse them vigorously under cold running water for 1 minute until completely cold. Drain well.' },
      { step_order: 4, title: 'Assemble',            description: 'Place the cold noodles into a serving bowl, pour the chilled salted soy milk broth directly over the top.' },
      { step_order: 5, title: 'Garnish & serve',     description: 'Garnish the dish with julienned cucumbers (30g), toasted sesame seeds (0.5 tbsp), and tomato wedges (40g, if using) before serving.' },
    ],
  },
  {
    name_en: 'Mul Naengmyeon',
    description: 'Cold buckwheat noodles in a refreshing icy broth.',
    cooking_time_min: 15, calories: 160, protein_g: 5, carbs_g: 31, fat_g: 2, servings: 1,
    ingredients: [
      { name: 'Buckwheat Noodles',  amount: '100g',     type: 'essential' },
      { name: 'Beef Broth',         amount: '2 cups',   type: 'essential' },
      { name: 'Vinegar',            amount: '1 tbsp',   type: 'essential' },
      { name: 'Sugar',              amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',          amount: '0.5 tbsp', type: 'essential' },
      { name: 'Egg',                amount: '1',        type: 'recommended' },
      { name: 'Pickled Radish',     amount: '25g',      type: 'recommended' },
      { name: 'Cucumber',           amount: '30g',      type: 'recommended' },
      { name: 'Korean Mustard Paste', amount: '0.5 tsp', type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prepare the broth',   description: 'In a bowl, combine the beef broth (2 cups/500ml), vinegar (1 tbsp), sugar (0.5 tbsp), and soy sauce (0.5 tbsp). Stir until the sugar dissolves completely, then place in the freezer for 10 minutes to ice slightly.' },
      { step_order: 2, title: 'Cook the noodles',    description: 'Bring a pot of water to a boil over high heat (5 mins). Add the buckwheat noodles (100g) and cook for 3 minutes, stirring constantly.' },
      { step_order: 3, title: 'Chill the noodles',   description: 'Drain the noodles and rinse them thoroughly under ice-cold running water for 1 minute to remove starch and chill them completely.' },
      { step_order: 4, title: 'Assemble the bowl',   description: 'Place the noodles in a serving bowl and pour the ice-cold seasoned beef broth over them.' },
      { step_order: 5, title: 'Add toppings',        description: 'Top with the halved hard-boiled egg (1), pickled radish (25g), julienned cucumber (30g), and a dab of mustard paste (0.5 tsp, if using) on the side.' },
    ],
  },
  {
    name_en: 'Ojingeo Bokkeum Noodles',
    description: 'Spicy stir-fried squid tossed with wheat noodles.',
    cooking_time_min: 25, calories: 210, protein_g: 12, carbs_g: 29, fat_g: 5, servings: 1,
    ingredients: [
      { name: 'Wheat Noodles',  amount: '100g',     type: 'essential' },
      { name: 'Squid',          amount: '150g',     type: 'essential' },
      { name: 'Gochujang',      amount: '1 tbsp',   type: 'essential' },
      { name: 'Gochugaru',      amount: '0.5 tbsp', type: 'essential' },
      { name: 'Soy Sauce',      amount: '0.5 tbsp', type: 'essential' },
      { name: 'Garlic',         amount: '1 clove',  type: 'essential' },
      { name: 'Onion',          amount: '30g',      type: 'recommended' },
      { name: 'Green Onion',    amount: '15g',      type: 'recommended' },
      { name: 'Sesame Oil',     amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the squid',       description: 'Clean the squid (150g) and slice it cleanly into thin rings or bite-sized pieces.' },
      { step_order: 2, title: 'Make the sauce',       description: 'In a small bowl, mix together gochujang (1 tbsp), gochugaru (0.5 tbsp), soy sauce (0.5 tbsp), and minced garlic (1 clove) to form a paste.' },
      { step_order: 3, title: 'Stir-fry squid',       description: 'Heat a skillet over high heat with 1 tbsp of oil. Add the sliced onions (30g) and squid rings, stir-frying for 2 minutes.' },
      { step_order: 4, title: 'Add sauce',            description: 'Add the sauce mixture to the skillet and stir-fry everything together for another 2 minutes until the squid is opaque and completely coated in the spicy sauce.' },
      { step_order: 5, title: 'Cook the noodles',     description: 'In a separate pot, boil water and cook the wheat noodles (100g) for 4 minutes. Drain thoroughly.' },
      { step_order: 6, title: 'Toss & serve',         description: 'Add the cooked noodles directly into the skillet with the spicy squid, drizzle with sesame oil (0.5 tsp), toss well on low heat for 1 minute, garnish with green onions, and serve.' },
    ],
  },
  {
    name_en: 'Ramyeon Upgrade',
    description: 'Elevate instant ramen with pantry staples.',
    cooking_time_min: 10, calories: 520, protein_g: 16, carbs_g: 72, fat_g: 18, servings: 1,
    ingredients: [
      { name: 'Instant Ramen Noodles', amount: '1 packet', type: 'essential' },
      { name: 'Egg',              amount: '1',        type: 'essential' },
      { name: 'Green Onion',      amount: '15g',      type: 'essential' },
      { name: 'Kimchi',           amount: '80g',      type: 'recommended' },
      { name: 'Spam',             amount: '50g',      type: 'optional' },
      { name: 'Shiitake Mushroom',amount: '30g',      type: 'optional' },
      { name: 'Sesame Oil',       amount: '0.5 tsp',  type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Boil the water',       description: 'Pour 2.5 cups (600ml) of water into a pot and bring to a rolling boil over high heat (4 mins).' },
      { step_order: 2, title: 'Add all ingredients',  description: 'Add the ramen noodles, seasoning packet, chopped kimchi (0.5 cup), sliced mushrooms (30g, if using), and Spam cubes (50g, if using) into the boiling water.' },
      { step_order: 3, title: 'Cook the ramen',       description: 'Cook the mixture over medium-high heat for 3 minutes, stirring to loosen the noodles.' },
      { step_order: 4, title: 'Add the egg',          description: 'Crack the egg (1) directly into the bubbling broth without breaking the yolk, and cook for 2 minutes.' },
      { step_order: 5, title: 'Season & serve',       description: 'Remove from heat, drizzle with sesame oil (0.5 tsp), garnish with fresh chopped green onions, and serve immediately.' },
    ],
  },
  {
    name_en: 'Tteok Ramen',
    description: 'Instant ramen with chewy rice cakes added for extra texture.',
    cooking_time_min: 15, calories: 560, protein_g: 14, carbs_g: 86, fat_g: 16, servings: 1,
    ingredients: [
      { name: 'Instant Ramen Noodles', amount: '1 packet', type: 'essential' },
      { name: 'Korean Rice Cakes', amount: '150g',     type: 'essential' },
      { name: 'Egg',               amount: '1',        type: 'essential' },
      { name: 'Green Onion',       amount: '15g',      type: 'recommended' },
      { name: 'American Cheese',   amount: '1 slice',  type: 'optional' },
      { name: 'Spam',              amount: '50g',      type: 'optional' },
    ],
    steps: [
      { step_order: 1, title: 'Prep the rice cakes',         description: 'If the rice cakes (150g) are frozen, soak them in warm water for 10 minutes to soften, then drain.' },
      { step_order: 2, title: 'Boil the water',              description: 'Pour 2.5 cups (600ml) of water into a pot and bring to a rolling boil over high heat (4 mins).' },
      { step_order: 3, title: 'Cook noodles & rice cakes',   description: 'Add the instant ramen noodles, seasoning packet, and softened rice cakes into the boiling water. Cook on medium-high heat for 3 minutes.' },
      { step_order: 4, title: 'Add the egg',                 description: 'Crack the egg (1) gently into the pot and let it cook for 2 minutes undisturbed.' },
      { step_order: 5, title: 'Serve',                       description: 'Turn off the heat, top with a slice of cheese (if using), Spam slices (if using), and chopped green onions. Serve hot.' },
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
