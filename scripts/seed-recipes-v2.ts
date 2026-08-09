import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function seedRecipes() {
  console.log('🌱 Loading ingredient map...')

  const { data: allIngredients } = await supabase
    .from('ingredients')
    .select('id, name')

  const ingMap: Record<string, string> = {}
  allIngredients?.forEach(i => { ingMap[i.name] = i.id })

  console.log(`✅ ${Object.keys(ingMap).length}개 재료 로드 완료`)

  const newRecipes: any[] = [
    {
      name_en: 'Dakgalbi Bokkeumbap', name_ko: '닭갈비볶음밥',
      description: 'Spicy stir-fried rice with chicken and gochujang sauce.',
      category: 'rice', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 450, protein_g: 28, carbs_g: 55, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: true,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Chicken', amount: '200g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Cheese', amount: '2 slices', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Cook chicken', description: 'Stir-fry chicken with gochujang, soy sauce, and garlic until cooked.' },
        { step_order: 2, title: 'Add rice', description: 'Add cooked rice and stir-fry everything together for 3 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Drizzle sesame oil, top with green onion. Add cheese if desired.' },
      ]
    },
    {
      name_en: 'Kimchi Bokkeumbap Deluxe', name_ko: '김치볶음밥 디럭스',
      description: 'Upgraded kimchi fried rice with pork belly and cheese.',
      category: 'rice', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 420, protein_g: 18, carbs_g: 58, fat_g: 14,
      is_popular: false, is_featured: false, is_recently_added: true,
      ingredients: [
        { name: 'Kimchi', amount: '1 cup', type: 'essential' },
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Pork Belly', amount: '150g', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Cheese', amount: '2 slices', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Cook pork', description: 'Stir-fry pork belly until crispy.' },
        { step_order: 2, title: 'Add kimchi and rice', description: 'Add kimchi and rice. Stir-fry on high heat for 4 minutes.' },
        { step_order: 3, title: 'Top and serve', description: 'Top with fried egg, sesame oil, green onion, and cheese.' },
      ]
    },
    {
      name_en: 'Gimbap', name_ko: '김밥',
      description: 'Korean seaweed rice rolls filled with colorful vegetables and egg.',
      category: 'rice', cooking_time_min: 40, difficulty: 'medium',
      servings: 2, calories: 380, protein_g: 14, carbs_g: 62, fat_g: 10,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Seaweed Sheet', amount: '4 sheets', type: 'essential' },
        { name: 'Egg', amount: '3', type: 'essential' },
        { name: 'Sesame Oil', amount: '2 tbsp', type: 'essential' },
        { name: 'Salt', amount: '1 tsp', type: 'essential' },
        { name: 'Carrot', amount: '1', type: 'recommended' },
        { name: 'Spinach', amount: '100g', type: 'recommended' },
        { name: 'Crab Stick', amount: '4 sticks', type: 'optional' },
        { name: 'Pickled Radish', amount: '4 strips', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prepare fillings', description: 'Make egg strips, blanch spinach, sauté carrots with salt and sesame oil.' },
        { step_order: 2, title: 'Season rice', description: 'Mix cooked rice with sesame oil and salt.' },
        { step_order: 3, title: 'Roll', description: 'Spread rice on seaweed sheet, add fillings, roll tightly.' },
        { step_order: 4, title: 'Slice and serve', description: 'Brush outside with sesame oil. Slice into rounds and serve.' },
      ]
    },
    {
      name_en: 'Tuna Mayo Rice Bowl', name_ko: '참치마요 덮밥',
      description: 'Quick rice bowl with creamy tuna mayo.',
      category: 'rice', cooking_time_min: 10, difficulty: 'easy',
      servings: 1, calories: 420, protein_g: 22, carbs_g: 52, fat_g: 16,
      is_popular: false, is_featured: false, is_recently_added: true,
      ingredients: [
        { name: 'Rice', amount: '1 cup cooked', type: 'essential' },
        { name: 'Tuna', amount: '1 can', type: 'essential' },
        { name: 'Mayonnaise', amount: '2 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Mix tuna', description: 'Drain tuna and mix with mayonnaise, soy sauce, and sesame oil.' },
        { step_order: 2, title: 'Assemble', description: 'Place tuna mixture on rice. Top with green onion and sesame seeds.' },
      ]
    },
    {
      name_en: 'Doenjang Bibimbap', name_ko: '된장비빔밥',
      description: 'Rustic bibimbap seasoned with savory soybean paste.',
      category: 'rice', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 380, protein_g: 12, carbs_g: 65, fat_g: 10,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Doenjang', amount: '2 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Zucchini', amount: '1/2', type: 'essential' },
        { name: 'Bean Sprouts', amount: '100g', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'recommended' },
        { name: 'Spinach', amount: '100g', type: 'recommended' },
        { name: 'Garlic', amount: '1 clove', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prep vegetables', description: 'Sauté zucchini and blanch bean sprouts and spinach separately.' },
        { step_order: 2, title: 'Fry egg', description: 'Fry eggs sunny-side up.' },
        { step_order: 3, title: 'Assemble', description: 'Place rice in bowl, arrange vegetables, top with egg and doenjang mixed with sesame oil.' },
      ]
    },
    {
      name_en: 'Jeyuk Dupbap', name_ko: '제육덮밥',
      description: 'Spicy stir-fried pork served over steamed rice.',
      category: 'rice', cooking_time_min: 25, difficulty: 'easy',
      servings: 2, calories: 480, protein_g: 28, carbs_g: 55, fat_g: 18,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Pork', amount: '300g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '3 cloves', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Marinate pork', description: 'Mix pork with gochujang, soy sauce, garlic, and sesame oil. Marinate 15 minutes.' },
        { step_order: 2, title: 'Stir-fry', description: 'Stir-fry pork with onion over high heat until cooked and slightly caramelized.' },
        { step_order: 3, title: 'Serve', description: 'Serve over rice, garnish with green onion.' },
      ]
    },
    {
      name_en: 'Sundubu Dupbap', name_ko: '순두부덮밥',
      description: 'Silky soft tofu in spicy broth served over rice.',
      category: 'rice', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 320, protein_g: 16, carbs_g: 48, fat_g: 10,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Tofu', amount: '300g soft', type: 'essential' },
        { name: 'Gochugaru', amount: '2 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make sauce', description: 'Sauté garlic and gochugaru in oil. Add 1 cup water and soy sauce.' },
        { step_order: 2, title: 'Add tofu', description: 'Gently add soft tofu. Simmer 5 minutes.' },
        { step_order: 3, title: 'Serve', description: 'Crack egg into broth, cook 1 minute. Serve over rice.' },
      ]
    },
    {
      name_en: 'Curry Rice', name_ko: '카레라이스',
      description: 'Korean-style mild curry with tender vegetables and chicken.',
      category: 'rice', cooking_time_min: 35, difficulty: 'easy',
      servings: 3, calories: 460, protein_g: 20, carbs_g: 68, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '3 cups cooked', type: 'essential' },
        { name: 'Curry Powder', amount: '3 tbsp', type: 'essential' },
        { name: 'Potato', amount: '2 medium', type: 'essential' },
        { name: 'Carrot', amount: '1', type: 'essential' },
        { name: 'Onion', amount: '1', type: 'essential' },
        { name: 'Chicken', amount: '300g', type: 'recommended' },
        { name: 'Garlic', amount: '2 cloves', type: 'recommended' },
      ],
      steps: [
        { step_order: 1, title: 'Sauté vegetables', description: 'Sauté onion, potato, carrot, and chicken in oil until lightly browned.' },
        { step_order: 2, title: 'Add water', description: 'Add 3 cups water. Bring to boil and simmer 15 minutes.' },
        { step_order: 3, title: 'Add curry', description: 'Add curry powder and stir. Simmer 10 more minutes until thick.' },
        { step_order: 4, title: 'Serve', description: 'Serve over rice.' },
      ]
    },
    {
      name_en: 'Omurice', name_ko: '오므라이스',
      description: 'Korean-style omelette rice with ketchup-seasoned fried rice.',
      category: 'rice', cooking_time_min: 25, difficulty: 'medium',
      servings: 2, calories: 480, protein_g: 18, carbs_g: 58, fat_g: 20,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Egg', amount: '4', type: 'essential' },
        { name: 'Ketchup', amount: '3 tbsp', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'essential' },
        { name: 'Chicken', amount: '150g', type: 'recommended' },
        { name: 'Carrot', amount: '1/4', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make ketchup rice', description: 'Stir-fry chicken, onion, and carrot. Add rice and ketchup. Mix well.' },
        { step_order: 2, title: 'Make omelette', description: 'Beat 2 eggs and pour into pan. Cook until just set, place rice inside and fold.' },
        { step_order: 3, title: 'Serve', description: 'Drizzle ketchup on top. Serve immediately.' },
      ]
    },
    {
      name_en: 'Ssamjang Veggie Bowl', name_ko: '쌈장 채소 덮밥',
      description: 'Healthy rice bowl with sautéed vegetables and ssamjang dipping sauce.',
      category: 'rice', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 300, protein_g: 10, carbs_g: 52, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Ssamjang', amount: '2 tbsp', type: 'essential' },
        { name: 'Zucchini', amount: '1/2', type: 'essential' },
        { name: 'Mushroom', amount: '100g', type: 'essential' },
        { name: 'Spinach', amount: '100g', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Egg', amount: '2', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Sauté vegetables', description: 'Sauté zucchini and mushrooms with a little oil and salt.' },
        { step_order: 2, title: 'Assemble', description: 'Place rice in bowl, arrange vegetables on top.' },
        { step_order: 3, title: 'Serve', description: 'Add ssamjang on the side. Top with egg if desired.' },
      ]
    },
    {
      name_en: 'Kongnamul Bibimbap', name_ko: '콩나물비빔밥',
      description: 'Simple bibimbap topped with seasoned soybean sprouts.',
      category: 'rice', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 320, protein_g: 10, carbs_g: 58, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Bean Sprouts', amount: '200g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'recommended' },
        { name: 'Egg', amount: '2', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Season sprouts', description: 'Blanch bean sprouts. Toss with soy sauce, sesame oil, and garlic.' },
        { step_order: 2, title: 'Fry egg', description: 'Fry eggs sunny-side up.' },
        { step_order: 3, title: 'Assemble', description: 'Place rice in bowl. Top with sprouts, egg, and gochujang. Mix before eating.' },
      ]
    },
    {
      name_en: 'Bibim Gimbap', name_ko: '비빔김밥',
      description: 'Spicy mixed rice wrapped in seaweed.',
      category: 'rice', cooking_time_min: 30, difficulty: 'medium',
      servings: 2, calories: 360, protein_g: 12, carbs_g: 58, fat_g: 10,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice', amount: '2 cups cooked', type: 'essential' },
        { name: 'Seaweed Sheet', amount: '4 sheets', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'recommended' },
        { name: 'Carrot', amount: '1/2', type: 'recommended' },
        { name: 'Spinach', amount: '100g', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prepare fillings', description: 'Make egg strips, blanch spinach, sauté carrots.' },
        { step_order: 2, title: 'Season rice', description: 'Mix rice with gochujang and sesame oil.' },
        { step_order: 3, title: 'Roll and serve', description: 'Spread rice on seaweed, add fillings, roll tightly. Slice and serve.' },
      ]
    },

    // ── NOODLES (10개) ────────────────────────────────────────────
    {
      name_en: 'Mul Naengmyeon', name_ko: '물냉면',
      description: 'Cold buckwheat noodles in a refreshing icy broth.',
      category: 'noodles', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 320, protein_g: 10, carbs_g: 62, fat_g: 4,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Buckwheat Noodles', amount: '200g', type: 'essential' },
        { name: 'Beef Broth', amount: '4 cups', type: 'essential' },
        { name: 'Vinegar', amount: '2 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Egg', amount: '2 hard-boiled', type: 'recommended' },
        { name: 'Pickled Radish', amount: '50g', type: 'recommended' },
        { name: 'Cucumber', amount: '1/2', type: 'recommended' },
        { name: 'Mustard', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prepare broth', description: 'Mix beef broth with vinegar, sugar, and soy sauce. Chill or add ice.' },
        { step_order: 2, title: 'Cook noodles', description: 'Boil buckwheat noodles for 3 minutes. Rinse with cold water until very cold.' },
        { step_order: 3, title: 'Assemble', description: 'Place noodles in bowl. Add cold broth. Top with egg, cucumber, and pickled radish.' },
      ]
    },
    {
      name_en: 'Bibim Naengmyeon', name_ko: '비빔냉면',
      description: 'Spicy cold buckwheat noodles with gochujang sauce.',
      category: 'noodles', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 340, protein_g: 10, carbs_g: 64, fat_g: 6,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Buckwheat Noodles', amount: '200g', type: 'essential' },
        { name: 'Gochujang', amount: '3 tbsp', type: 'essential' },
        { name: 'Vinegar', amount: '2 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Egg', amount: '2 hard-boiled', type: 'recommended' },
        { name: 'Cucumber', amount: '1/2', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make sauce', description: 'Mix gochujang, vinegar, sugar, and sesame oil.' },
        { step_order: 2, title: 'Cook noodles', description: 'Boil noodles, rinse with cold water until very cold.' },
        { step_order: 3, title: 'Mix and serve', description: 'Toss noodles with sauce. Top with egg and cucumber.' },
      ]
    },
    {
      name_en: 'Kalguksu', name_ko: '칼국수',
      description: 'Hand-cut wheat noodles in a light anchovy broth.',
      category: 'noodles', cooking_time_min: 30, difficulty: 'medium',
      servings: 2, calories: 380, protein_g: 14, carbs_g: 68, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: true,
      ingredients: [
        { name: 'Wheat Noodles', amount: '200g', type: 'essential' },
        { name: 'Anchovy Broth', amount: '4 cups', type: 'essential' },
        { name: 'Zucchini', amount: '1/2', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Potato', amount: '1 small', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prepare broth', description: 'Bring anchovy broth to boil with garlic and soy sauce.' },
        { step_order: 2, title: 'Add vegetables', description: 'Add zucchini, onion, and potato. Simmer for 10 minutes.' },
        { step_order: 3, title: 'Add noodles', description: 'Add noodles and cook 5 minutes. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Jjajangmyeon', name_ko: '짜장면',
      description: 'Korean-Chinese noodles in a rich black bean sauce.',
      category: 'noodles', cooking_time_min: 30, difficulty: 'medium',
      servings: 2, calories: 520, protein_g: 22, carbs_g: 78, fat_g: 14,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Wheat Noodles', amount: '200g', type: 'essential' },
        { name: 'Black Bean Paste', amount: '4 tbsp', type: 'essential' },
        { name: 'Pork', amount: '200g', type: 'essential' },
        { name: 'Onion', amount: '1', type: 'essential' },
        { name: 'Zucchini', amount: '1/2', type: 'essential' },
        { name: 'Potato', amount: '1 medium', type: 'recommended' },
        { name: 'Cucumber', amount: '1/2', type: 'recommended' },
        { name: 'Sugar', amount: '1 tbsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Stir-fry', description: 'Stir-fry pork until cooked. Add onion, zucchini, and potato.' },
        { step_order: 2, title: 'Add black bean paste', description: 'Add black bean paste and 1 cup water. Simmer 10 minutes until thick.' },
        { step_order: 3, title: 'Cook noodles', description: 'Boil noodles, drain. Pour sauce on top. Garnish with cucumber strips.' },
      ]
    },
    {
      name_en: 'Jjamppong', name_ko: '짬뽕',
      description: 'Spicy Korean-Chinese seafood noodle soup.',
      category: 'noodles', cooking_time_min: 30, difficulty: 'medium',
      servings: 2, calories: 440, protein_g: 26, carbs_g: 58, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Wheat Noodles', amount: '200g', type: 'essential' },
        { name: 'Gochugaru', amount: '3 tbsp', type: 'essential' },
        { name: 'Seafood Mix', amount: '300g', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'essential' },
        { name: 'Garlic', amount: '3 cloves', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Cabbage', amount: '100g', type: 'recommended' },
        { name: 'Mushroom', amount: '100g', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Sauté aromatics', description: 'Stir-fry garlic and gochugaru in oil until fragrant.' },
        { step_order: 2, title: 'Add vegetables and seafood', description: 'Add onion, cabbage, mushroom, and seafood. Stir-fry 3 minutes.' },
        { step_order: 3, title: 'Add broth and noodles', description: 'Add 4 cups water and soy sauce. Boil. Add noodles. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Kongguksu', name_ko: '콩국수',
      description: 'Cold noodles in a creamy chilled soy milk broth — a summer classic.',
      category: 'noodles', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 360, protein_g: 18, carbs_g: 52, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Wheat Noodles', amount: '200g', type: 'essential' },
        { name: 'Soy Milk', amount: '3 cups unsweetened', type: 'essential' },
        { name: 'Salt', amount: '1 tsp', type: 'essential' },
        { name: 'Cucumber', amount: '1/2', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tbsp', type: 'recommended' },
        { name: 'Tomato', amount: '1/2', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Chill broth', description: 'Season soy milk with salt. Refrigerate until very cold.' },
        { step_order: 2, title: 'Cook noodles', description: 'Boil noodles, rinse with cold water until cold.' },
        { step_order: 3, title: 'Assemble', description: 'Place noodles in bowl. Pour cold soy milk broth. Top with cucumber and sesame seeds.' },
      ]
    },
    {
      name_en: 'Kimchi Ramen', name_ko: '김치 라면',
      description: 'Instant ramen elevated with fermented kimchi and a soft egg.',
      category: 'noodles', cooking_time_min: 12, difficulty: 'easy',
      servings: 1, calories: 540, protein_g: 18, carbs_g: 74, fat_g: 20,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Kimchi', amount: '1/2 cup', type: 'essential' },
        { name: 'Egg', amount: '1', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1/2 tsp', type: 'recommended' },
        { name: 'Spam', amount: '100g', type: 'optional' },
        { name: 'Cheese', amount: '1 slice', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Cook ramen', description: 'Cook instant ramen with kimchi in the broth.' },
        { step_order: 2, title: 'Add egg', description: 'Crack egg directly into pot in last 2 minutes.' },
        { step_order: 3, title: 'Serve', description: 'Top with green onion, sesame oil, Spam, or cheese.' },
      ]
    },
    {
      name_en: 'Anchovy Noodle Soup', name_ko: '잔치국수',
      description: 'Light wheat noodle soup in a clear anchovy broth — served at celebrations.',
      category: 'noodles', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 310, protein_g: 12, carbs_g: 56, fat_g: 6,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Wheat Noodles', amount: '200g', type: 'essential' },
        { name: 'Anchovy Broth', amount: '4 cups', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Zucchini', amount: '1/2', type: 'recommended' },
        { name: 'Egg', amount: '2', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prepare broth', description: 'Heat anchovy broth with garlic and soy sauce.' },
        { step_order: 2, title: 'Cook noodles', description: 'Cook noodles in boiling water, drain.' },
        { step_order: 3, title: 'Assemble', description: 'Place noodles in bowl, ladle hot broth. Top with zucchini, egg strips, and green onion.' },
      ]
    },
    {
      name_en: 'Tteok Ramen', name_ko: '떡라면',
      description: 'Instant ramen with chewy rice cakes added for extra texture.',
      category: 'noodles', cooking_time_min: 15, difficulty: 'easy',
      servings: 1, calories: 560, protein_g: 14, carbs_g: 86, fat_g: 16,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice Cake', amount: '150g', type: 'essential' },
        { name: 'Egg', amount: '1', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Cheese', amount: '1 slice', type: 'optional' },
        { name: 'Spam', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Cook ramen and rice cakes', description: 'Cook instant ramen with rice cakes in the same pot.' },
        { step_order: 2, title: 'Add egg', description: 'Crack egg in during last 2 minutes.' },
        { step_order: 3, title: 'Serve', description: 'Top with green onion, cheese, or Spam.' },
      ]
    },
    {
      name_en: 'Ojingeo Bokkeum Noodles', name_ko: '오징어볶음 국수',
      description: 'Spicy stir-fried squid tossed with wheat noodles.',
      category: 'noodles', cooking_time_min: 25, difficulty: 'medium',
      servings: 2, calories: 420, protein_g: 24, carbs_g: 58, fat_g: 10,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Wheat Noodles', amount: '200g', type: 'essential' },
        { name: 'Squid', amount: '300g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prep squid', description: 'Clean and slice squid into rings.' },
        { step_order: 2, title: 'Stir-fry', description: 'Stir-fry garlic, add squid and onion. Add gochujang, gochugaru, and soy sauce.' },
        { step_order: 3, title: 'Add noodles', description: 'Boil noodles separately, drain. Toss with squid mixture and sesame oil.' },
      ]
    },

    // ── STEWS (15개) ──────────────────────────────────────────────
    {
      name_en: 'Yukgaejang', name_ko: '육개장',
      description: 'Fiery shredded beef soup with bean sprouts.',
      category: 'stews', cooking_time_min: 60, difficulty: 'hard',
      servings: 3, calories: 360, protein_g: 28, carbs_g: 12, fat_g: 18,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Beef', amount: '400g', type: 'essential' },
        { name: 'Bean Sprouts', amount: '200g', type: 'essential' },
        { name: 'Gochugaru', amount: '3 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '4 cloves', type: 'essential' },
        { name: 'Sesame Oil', amount: '2 tbsp', type: 'essential' },
        { name: 'Green Onion', amount: '3 stalks', type: 'recommended' },
        { name: 'Egg', amount: '2', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Boil beef', description: 'Boil beef until tender, about 40 minutes. Reserve broth. Shred beef.' },
        { step_order: 2, title: 'Sauté', description: 'Sauté gochugaru and garlic in sesame oil. Add shredded beef.' },
        { step_order: 3, title: 'Simmer', description: 'Add beef broth, bean sprouts, and soy sauce. Simmer 15 minutes.' },
        { step_order: 4, title: 'Finish', description: 'Add green onion. Adjust seasoning. Serve hot with rice.' },
      ]
    },
    {
      name_en: 'Haemul Sundubu Jjigae', name_ko: '해물순두부찌개',
      description: 'Soft tofu stew loaded with fresh seafood.',
      category: 'stews', cooking_time_min: 20, difficulty: 'medium',
      servings: 2, calories: 260, protein_g: 20, carbs_g: 8, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: true,
      ingredients: [
        { name: 'Tofu', amount: '300g soft', type: 'essential' },
        { name: 'Seafood Mix', amount: '200g', type: 'essential' },
        { name: 'Gochugaru', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Sauté', description: 'Sauté garlic and gochugaru in sesame oil.' },
        { step_order: 2, title: 'Add seafood', description: 'Add seafood and stir-fry briefly. Add 2 cups water and soy sauce.' },
        { step_order: 3, title: 'Add tofu', description: 'Gently add soft tofu. Simmer 5 minutes. Crack egg in. Garnish and serve.' },
      ]
    },
    {
      name_en: 'Kimchi Sundubu Jjigae', name_ko: '김치순두부찌개',
      description: 'Soft tofu stew with tangy kimchi for extra depth.',
      category: 'stews', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 270, protein_g: 14, carbs_g: 10, fat_g: 14,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Tofu', amount: '300g soft', type: 'essential' },
        { name: 'Kimchi', amount: '1/2 cup', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Pork', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Cook', description: 'Sauté kimchi, garlic, and pork. Add water and soy sauce.' },
        { step_order: 2, title: 'Add tofu', description: 'Add tofu and simmer 5 minutes. Add egg. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Doenjang Sundubu Jjigae', name_ko: '된장순두부찌개',
      description: 'Soft tofu stew with earthy soybean paste broth.',
      category: 'stews', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 240, protein_g: 14, carbs_g: 10, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Tofu', amount: '300g soft', type: 'essential' },
        { name: 'Doenjang', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Anchovy Broth', amount: '2 cups', type: 'essential' },
        { name: 'Zucchini', amount: '1/4', type: 'recommended' },
        { name: 'Mushroom', amount: '80g', type: 'recommended' },
        { name: 'Egg', amount: '2', type: 'optional' },
        { name: 'Green Onion', amount: '1 stalk', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make broth', description: 'Dissolve doenjang in anchovy broth with garlic.' },
        { step_order: 2, title: 'Add vegetables and tofu', description: 'Add zucchini, mushroom, and soft tofu. Simmer 8 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Add egg if desired. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Budae Jjigae Deluxe', name_ko: '부대찌개 디럭스',
      description: 'Upgraded army stew with extra toppings and rice cakes.',
      category: 'stews', cooking_time_min: 25, difficulty: 'medium',
      servings: 3, calories: 520, protein_g: 28, carbs_g: 50, fat_g: 22,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Spam', amount: '200g', type: 'essential' },
        { name: 'Kimchi', amount: '1 cup', type: 'essential' },
        { name: 'Tofu', amount: '150g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Rice Cake', amount: '150g', type: 'recommended' },
        { name: 'Mushroom', amount: '100g', type: 'recommended' },
        { name: 'Cheese', amount: '2 slices', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Arrange', description: 'Arrange all ingredients in a wide pot.' },
        { step_order: 2, title: 'Add broth', description: 'Mix gochujang and soy sauce with 3 cups water. Pour over.' },
        { step_order: 3, title: 'Boil and finish', description: 'Bring to boil, cook 15 minutes. Top with cheese before serving.' },
      ]
    },
    {
      name_en: 'Haemul Doenjang Jjigae', name_ko: '해물된장찌개',
      description: 'Soybean paste stew with fresh seafood and tofu.',
      category: 'stews', cooking_time_min: 25, difficulty: 'medium',
      servings: 2, calories: 240, protein_g: 18, carbs_g: 12, fat_g: 10,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Doenjang', amount: '2 tbsp', type: 'essential' },
        { name: 'Seafood Mix', amount: '200g', type: 'essential' },
        { name: 'Tofu', amount: '150g', type: 'essential' },
        { name: 'Zucchini', amount: '1/2', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Anchovy Broth', amount: '2 cups', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make broth', description: 'Dissolve doenjang in anchovy broth with garlic.' },
        { step_order: 2, title: 'Add ingredients', description: 'Add zucchini, seafood, and tofu. Simmer 12 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Gochujang Jjigae', name_ko: '고추장찌개',
      description: 'Bold fiery stew built on gochujang with pork and vegetables.',
      category: 'stews', cooking_time_min: 25, difficulty: 'easy',
      servings: 2, calories: 290, protein_g: 16, carbs_g: 18, fat_g: 14,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Gochujang', amount: '3 tbsp', type: 'essential' },
        { name: 'Pork', amount: '200g', type: 'essential' },
        { name: 'Zucchini', amount: '1/2', type: 'essential' },
        { name: 'Potato', amount: '1 small', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Tofu', amount: '150g', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Mushroom', amount: '80g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Sauté pork', description: 'Stir-fry pork with garlic and gochujang.' },
        { step_order: 2, title: 'Simmer', description: 'Add 2 cups water, potato, and zucchini. Simmer 15 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Add tofu and mushroom. Cook 5 more minutes. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Dakgalbi Jjigae', name_ko: '닭갈비찌개',
      description: 'Spicy braised chicken stew with vegetables.',
      category: 'stews', cooking_time_min: 30, difficulty: 'medium',
      servings: 2, calories: 380, protein_g: 28, carbs_g: 22, fat_g: 16,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Chicken', amount: '400g', type: 'essential' },
        { name: 'Gochujang', amount: '3 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '3 cloves', type: 'essential' },
        { name: 'Potato', amount: '1 medium', type: 'recommended' },
        { name: 'Onion', amount: '1/2', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Marinate', description: 'Mix chicken with gochujang, gochugaru, soy sauce, and garlic.' },
        { step_order: 2, title: 'Braise', description: 'Cook chicken with potato and onion in 1.5 cups water. Simmer 20 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Thicken sauce. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Samgyetang', name_ko: '삼계탕',
      description: 'Whole chicken stuffed with rice and ginseng, simmered to perfection.',
      category: 'stews', cooking_time_min: 90, difficulty: 'hard',
      servings: 2, calories: 480, protein_g: 42, carbs_g: 28, fat_g: 18,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Whole Chicken', amount: '1 small', type: 'essential' },
        { name: 'Rice', amount: '1/2 cup', type: 'essential' },
        { name: 'Garlic', amount: '6 cloves', type: 'essential' },
        { name: 'Salt', amount: '1 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Ginseng', amount: '1 root', type: 'optional' },
        { name: 'Jujube', amount: '4 pieces', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Stuff chicken', description: 'Stuff chicken cavity with rice, garlic, and ginseng.' },
        { step_order: 2, title: 'Simmer', description: 'Place in pot, cover with water. Simmer 1 hour until chicken is very tender.' },
        { step_order: 3, title: 'Season and serve', description: 'Season broth with salt. Serve whole chicken in the broth with green onion.' },
      ]
    },
    {
      name_en: 'Haejang Guk', name_ko: '해장국',
      description: 'Korean hangover soup with bean sprouts and dried cabbage.',
      category: 'stews', cooking_time_min: 40, difficulty: 'medium',
      servings: 2, calories: 320, protein_g: 22, carbs_g: 16, fat_g: 14,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Beef', amount: '200g', type: 'essential' },
        { name: 'Bean Sprouts', amount: '200g', type: 'essential' },
        { name: 'Doenjang', amount: '1 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '3 cloves', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Egg', amount: '2', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make beef broth', description: 'Boil beef until tender. Reserve broth. Slice beef.' },
        { step_order: 2, title: 'Add vegetables', description: 'Add bean sprouts, doenjang, gochugaru, garlic, and soy sauce to broth. Simmer 15 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Add beef back. Garnish with green onion. Add egg if desired.' },
      ]
    },
    {
      name_en: 'Kimchi Guk', name_ko: '김칫국',
      description: 'Light kimchi soup — simpler and brothier than kimchi jjigae.',
      category: 'stews', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 180, protein_g: 10, carbs_g: 12, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Kimchi', amount: '1 cup', type: 'essential' },
        { name: 'Tofu', amount: '150g', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Simmer kimchi', description: 'Add kimchi and garlic to 3 cups water. Bring to boil, simmer 10 minutes.' },
        { step_order: 2, title: 'Add tofu', description: 'Add tofu and soy sauce. Cook 5 more minutes.' },
        { step_order: 3, title: 'Finish', description: 'Drizzle sesame oil. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Kkori Gomtang', name_ko: '꼬리곰탕',
      description: 'Rich oxtail bone broth soup, slow-simmered for hours.',
      category: 'stews', cooking_time_min: 180, difficulty: 'hard',
      servings: 4, calories: 420, protein_g: 36, carbs_g: 8, fat_g: 22,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Oxtail', amount: '1kg', type: 'essential' },
        { name: 'Garlic', amount: '5 cloves', type: 'essential' },
        { name: 'Green Onion', amount: '3 stalks', type: 'essential' },
        { name: 'Salt', amount: '1 tsp', type: 'essential' },
        { name: 'Onion', amount: '1', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Blanch oxtail', description: 'Boil oxtail briefly, rinse thoroughly.' },
        { step_order: 2, title: 'Slow simmer', description: 'Cover with fresh water, add garlic and onion. Simmer 2.5-3 hours.' },
        { step_order: 3, title: 'Season', description: 'Season with salt. Garnish with green onion. Serve with rice.' },
      ]
    },
    {
      name_en: 'Altang', name_ko: '알탕',
      description: 'Spicy fish roe soup — a beloved Korean comfort stew.',
      category: 'stews', cooking_time_min: 20, difficulty: 'medium',
      servings: 2, calories: 220, protein_g: 18, carbs_g: 8, fat_g: 10,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Fish Roe', amount: '200g', type: 'essential' },
        { name: 'Gochugaru', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'essential' },
        { name: 'Tofu', amount: '150g', type: 'recommended' },
        { name: 'Mushroom', amount: '80g', type: 'optional' },
        { name: 'Perilla Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make broth', description: 'Boil 3 cups water with garlic, gochugaru, and soy sauce.' },
        { step_order: 2, title: 'Add roe and tofu', description: 'Add fish roe and tofu. Simmer 10 minutes gently.' },
        { step_order: 3, title: 'Finish', description: 'Add green onion and perilla oil. Serve hot.' },
      ]
    },
    {
      name_en: 'Kongbiji Jjigae', name_ko: '콩비지찌개',
      description: 'Creamy ground soybean stew with kimchi.',
      category: 'stews', cooking_time_min: 30, difficulty: 'medium',
      servings: 2, calories: 260, protein_g: 16, carbs_g: 14, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Soybean Pulp', amount: '300g', type: 'essential' },
        { name: 'Kimchi', amount: '1/2 cup', type: 'essential' },
        { name: 'Pork', amount: '100g', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Sauté', description: 'Sauté pork, garlic, and kimchi with sesame oil.' },
        { step_order: 2, title: 'Add soybean pulp', description: 'Add soybean pulp and 1 cup water. Simmer 15 minutes stirring often.' },
        { step_order: 3, title: 'Season', description: 'Add soy sauce. Garnish with green onion.' },
      ]
    },

    // ── MEAT (11개) ───────────────────────────────────────────────
    {
      name_en: 'Samgyeopsal', name_ko: '삼겹살',
      description: 'Grilled pork belly — the quintessential Korean BBQ experience.',
      category: 'meat', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 520, protein_g: 28, carbs_g: 4, fat_g: 42,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Pork Belly', amount: '400g', type: 'essential' },
        { name: 'Salt', amount: '1 tsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '6 cloves', type: 'recommended' },
        { name: 'Ssamjang', amount: '3 tbsp', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Lettuce', amount: '1 head', type: 'optional' },
        { name: 'Kimchi', amount: '1/2 cup', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prepare', description: 'Slice pork belly into bite-sized pieces. Season lightly with salt.' },
        { step_order: 2, title: 'Grill', description: 'Grill pork belly on a hot pan or grill until crispy on both sides.' },
        { step_order: 3, title: 'Serve', description: 'Wrap in lettuce with garlic, ssamjang, and kimchi. Drizzle sesame oil.' },
      ]
    },
    {
      name_en: 'Galbi Jjim', name_ko: '갈비찜',
      description: 'Braised beef short ribs in a rich soy-based sauce.',
      category: 'meat', cooking_time_min: 90, difficulty: 'hard',
      servings: 4, calories: 520, protein_g: 40, carbs_g: 24, fat_g: 26,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Beef', amount: '1kg short ribs', type: 'essential' },
        { name: 'Soy Sauce', amount: '5 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '5 cloves', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Carrot', amount: '1', type: 'recommended' },
        { name: 'Potato', amount: '2 medium', type: 'recommended' },
        { name: 'Mushroom', amount: '100g', type: 'optional' },
        { name: 'Green Onion', amount: '2 stalks', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Parboil ribs', description: 'Boil ribs briefly, rinse. Score the meat.' },
        { step_order: 2, title: 'Braise', description: 'Add ribs to pot with soy sauce, sugar, garlic, and 2 cups water. Simmer 1 hour.' },
        { step_order: 3, title: 'Add vegetables', description: 'Add potato, carrot, and mushroom. Cook 20 more minutes.' },
        { step_order: 4, title: 'Finish', description: 'Drizzle sesame oil. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Buldak', name_ko: '불닭',
      description: 'Fiery grilled chicken drenched in an ultra-spicy sauce.',
      category: 'meat', cooking_time_min: 25, difficulty: 'medium',
      servings: 2, calories: 380, protein_g: 32, carbs_g: 16, fat_g: 18,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Chicken', amount: '500g', type: 'essential' },
        { name: 'Gochugaru', amount: '3 tbsp', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '3 cloves', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Cheese', amount: '2 slices', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Marinate', description: 'Mix chicken with all sauce ingredients. Marinate 30 minutes.' },
        { step_order: 2, title: 'Grill', description: 'Grill or pan-fry chicken over medium-high heat until charred and cooked through.' },
        { step_order: 3, title: 'Serve', description: 'Top with green onion and melted cheese if desired.' },
      ]
    },
    {
      name_en: 'Jeyuk Bokkeum', name_ko: '제육볶음',
      description: 'Spicy stir-fried pork — the most popular Korean BBQ dish to make at home.',
      category: 'meat', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 420, protein_g: 28, carbs_g: 14, fat_g: 26,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Pork', amount: '300g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '3 cloves', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Marinate pork', description: 'Mix pork with all sauce ingredients. Rest 15 minutes.' },
        { step_order: 2, title: 'Stir-fry', description: 'Stir-fry pork with onion on high heat until cooked and slightly caramelized.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with green onion. Serve with rice and lettuce wraps.' },
      ]
    },
    {
      name_en: 'Dak Bokkeum Tang', name_ko: '닭볶음탕',
      description: 'Braised spicy chicken in a thick, glossy sauce.',
      category: 'meat', cooking_time_min: 40, difficulty: 'medium',
      servings: 3, calories: 400, protein_g: 32, carbs_g: 22, fat_g: 18,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Chicken', amount: '600g', type: 'essential' },
        { name: 'Gochujang', amount: '3 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '4 cloves', type: 'essential' },
        { name: 'Potato', amount: '2 medium', type: 'recommended' },
        { name: 'Onion', amount: '1', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Mushroom', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Parboil chicken', description: 'Blanch chicken pieces briefly. Drain.' },
        { step_order: 2, title: 'Make sauce', description: 'Mix gochujang, soy sauce, sugar, garlic, and 1.5 cups water.' },
        { step_order: 3, title: 'Braise', description: 'Add chicken, potato, onion to sauce in a pot. Simmer 25 minutes.' },
        { step_order: 4, title: 'Finish', description: 'Add green onion and mushroom. Cook 5 more minutes.' },
      ]
    },
    {
      name_en: 'Ojingeo Bokkeum', name_ko: '오징어볶음',
      description: 'Spicy stir-fried squid with vegetables in gochujang sauce.',
      category: 'meat', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 280, protein_g: 22, carbs_g: 16, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Squid', amount: '300g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prep squid', description: 'Clean squid and score/slice into pieces.' },
        { step_order: 2, title: 'Stir-fry', description: 'Stir-fry garlic and onion. Add squid, gochujang, gochugaru, and soy sauce. Cook 4 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Add green onion. Drizzle sesame oil. Garnish with sesame seeds.' },
      ]
    },
    {
      name_en: 'Dak Gangjeong', name_ko: '닭강정',
      description: 'Crispy fried chicken glazed in a sweet and spicy sauce.',
      category: 'meat', cooking_time_min: 35, difficulty: 'medium',
      servings: 3, calories: 480, protein_g: 30, carbs_g: 42, fat_g: 20,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Chicken', amount: '500g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '2 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '3 cloves', type: 'essential' },
        { name: 'Vinegar', amount: '1 tbsp', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tbsp', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Fry chicken', description: 'Coat chicken in starch and fry until crispy.' },
        { step_order: 2, title: 'Make glaze', description: 'Cook gochujang, sugar, soy sauce, garlic, and vinegar until sticky.' },
        { step_order: 3, title: 'Glaze and serve', description: 'Toss fried chicken in glaze. Garnish with sesame seeds.' },
      ]
    },
    {
      name_en: 'Andong Jjimdak', name_ko: '안동찜닭',
      description: 'Sweet-savory braised chicken with glass noodles from Andong.',
      category: 'meat', cooking_time_min: 45, difficulty: 'medium',
      servings: 3, calories: 460, protein_g: 36, carbs_g: 40, fat_g: 16,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Chicken', amount: '600g', type: 'essential' },
        { name: 'Soy Sauce', amount: '5 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '4 cloves', type: 'essential' },
        { name: 'Glass Noodles', amount: '100g', type: 'essential' },
        { name: 'Potato', amount: '2 medium', type: 'recommended' },
        { name: 'Carrot', amount: '1', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Soak noodles', description: 'Soak glass noodles in warm water for 20 minutes.' },
        { step_order: 2, title: 'Cook chicken', description: 'Add chicken, potato, and carrot to sauce. Braise 25 minutes.' },
        { step_order: 3, title: 'Add noodles', description: 'Add noodles and green onion. Cook 5 more minutes until noodles are translucent.' },
      ]
    },
    {
      name_en: 'Dwaeji Galbi', name_ko: '돼지갈비',
      description: 'Marinated pork ribs grilled to sticky perfection.',
      category: 'meat', cooking_time_min: 40, difficulty: 'medium',
      servings: 3, calories: 480, protein_g: 32, carbs_g: 18, fat_g: 28,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Pork', amount: '600g ribs', type: 'essential' },
        { name: 'Soy Sauce', amount: '4 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '2 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '4 cloves', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Score and marinate', description: 'Score pork ribs. Mix with soy sauce, sugar, garlic, and sesame oil. Marinate 1 hour.' },
        { step_order: 2, title: 'Cook', description: 'Grill or pan-fry on medium heat, turning often, for 20-25 minutes.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with green onion and sesame seeds. Serve with rice.' },
      ]
    },
    {
      name_en: 'Haemul Pajeon', name_ko: '해물파전',
      description: 'Crispy seafood and green onion pancake.',
      category: 'meat', cooking_time_min: 20, difficulty: 'medium',
      servings: 2, calories: 320, protein_g: 18, carbs_g: 32, fat_g: 14,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Seafood Mix', amount: '200g', type: 'essential' },
        { name: 'Green Onion', amount: '8 stalks', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'essential' },
        { name: 'Salt', amount: '1/2 tsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp dipping', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make batter', description: 'Mix 1 cup flour, eggs, 3/4 cup water, and salt. Add seafood.' },
        { step_order: 2, title: 'Arrange', description: 'Lay green onions in pan, pour batter over. Cook on medium-high 4 minutes per side.' },
        { step_order: 3, title: 'Serve', description: 'Slice and serve with soy dipping sauce.' },
      ]
    },

    // ── SIDE DISHES (12개) ────────────────────────────────────────
    {
      name_en: 'Gamja Jorim', name_ko: '감자조림',
      description: 'Sweet and sticky braised potatoes — a lunchbox staple.',
      category: 'side_dishes', cooking_time_min: 20, difficulty: 'easy',
      servings: 3, calories: 180, protein_g: 4, carbs_g: 36, fat_g: 4,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Potato', amount: '3 medium', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Cube potatoes', description: 'Cut potatoes into bite-sized cubes. Rinse in cold water.' },
        { step_order: 2, title: 'Braise', description: 'Add potatoes to pan with soy sauce, sugar, garlic, and 1/2 cup water. Cook on medium until sauce reduces.' },
        { step_order: 3, title: 'Glaze', description: 'Stir constantly in final minutes until potatoes are glazed. Drizzle sesame oil and sesame seeds.' },
      ]
    },
    {
      name_en: 'Eomuk Bokkeum', name_ko: '어묵볶음',
      description: 'Stir-fried fish cake — a classic Korean side dish.',
      category: 'side_dishes', cooking_time_min: 15, difficulty: 'easy',
      servings: 3, calories: 160, protein_g: 8, carbs_g: 16, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Fish Cake', amount: '300g', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prep fish cake', description: 'Slice fish cake into strips or bite-sized pieces.' },
        { step_order: 2, title: 'Stir-fry', description: 'Stir-fry fish cake with garlic, soy sauce, and sugar for 3-4 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Add green onion and sesame oil. Garnish with sesame seeds.' },
      ]
    },
    {
      name_en: 'Musaengchae', name_ko: '무생채',
      description: 'Spicy radish salad — crunchy, refreshing, and mildly sweet.',
      category: 'side_dishes', cooking_time_min: 10, difficulty: 'easy',
      servings: 3, calories: 60, protein_g: 2, carbs_g: 12, fat_g: 2,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Radish', amount: '300g', type: 'essential' },
        { name: 'Gochugaru', amount: '1.5 tbsp', type: 'essential' },
        { name: 'Vinegar', amount: '1 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tsp', type: 'essential' },
        { name: 'Salt', amount: '1/2 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'optional' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Julienne radish', description: 'Cut radish into thin matchstick strips.' },
        { step_order: 2, title: 'Season', description: 'Mix with gochugaru, vinegar, sugar, salt, and garlic.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with green onion and sesame seeds. Best served chilled.' },
      ]
    },
    {
      name_en: 'Sukju Namul', name_ko: '숙주나물',
      description: 'Seasoned mung bean sprouts — light and crunchy.',
      category: 'side_dishes', cooking_time_min: 10, difficulty: 'easy',
      servings: 2, calories: 60, protein_g: 4, carbs_g: 6, fat_g: 3,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Mung Bean Sprouts', amount: '300g', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Salt', amount: '1/4 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Blanch', description: 'Blanch mung bean sprouts in boiling water for 1 minute. Drain and cool.' },
        { step_order: 2, title: 'Season', description: 'Mix with soy sauce, sesame oil, garlic, and salt.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with green onion and sesame seeds.' },
      ]
    },
    {
      name_en: 'Gaji Namul', name_ko: '가지나물',
      description: 'Steamed eggplant seasoned with soy sauce and sesame oil.',
      category: 'side_dishes', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 80, protein_g: 2, carbs_g: 10, fat_g: 4,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Eggplant', amount: '2 medium', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Steam eggplant', description: 'Steam or microwave eggplant until soft. Tear into strips.' },
        { step_order: 2, title: 'Season', description: 'Mix with soy sauce, sesame oil, garlic, and gochugaru.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with green onion and sesame seeds.' },
      ]
    },
    {
      name_en: 'Dubu Buchim', name_ko: '두부부침',
      description: 'Simple pan-fried tofu with a savory soy dipping sauce.',
      category: 'side_dishes', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 180, protein_g: 12, carbs_g: 6, fat_g: 12,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Tofu', amount: '300g firm', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Salt', amount: '1/4 tsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Slice tofu', description: 'Slice tofu into 1cm slabs. Pat dry with paper towel.' },
        { step_order: 2, title: 'Pan-fry', description: 'Fry in oil over medium-high heat until golden on both sides.' },
        { step_order: 3, title: 'Dipping sauce', description: 'Mix soy sauce, sesame oil, gochugaru, and green onion. Serve alongside.' },
      ]
    },
    {
      name_en: 'Kimchi Pajeon', name_ko: '김치파전',
      description: 'Green onion and kimchi pancake — extra crispy.',
      category: 'side_dishes', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 300, protein_g: 8, carbs_g: 42, fat_g: 10,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Kimchi', amount: '1/2 cup', type: 'essential' },
        { name: 'Green Onion', amount: '5 stalks', type: 'essential' },
        { name: 'Egg', amount: '1', type: 'essential' },
        { name: 'Salt', amount: '1/4 tsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp dipping', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make batter', description: 'Mix 1 cup flour, egg, 3/4 cup water, salt, kimchi, and green onion.' },
        { step_order: 2, title: 'Pan-fry', description: 'Pour into hot oiled pan. Cook on medium-high 4 minutes per side until crispy.' },
        { step_order: 3, title: 'Serve', description: 'Slice and serve with soy sauce.' },
      ]
    },
    {
      name_en: 'Kongjorim', name_ko: '콩조림',
      description: 'Sweet and savory braised black soybeans — a traditional banchan.',
      category: 'side_dishes', cooking_time_min: 40, difficulty: 'easy',
      servings: 4, calories: 160, protein_g: 10, carbs_g: 20, fat_g: 4,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Black Soybeans', amount: '1 cup', type: 'essential' },
        { name: 'Soy Sauce', amount: '3 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '2 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Soak beans', description: 'Soak black soybeans overnight. Drain.' },
        { step_order: 2, title: 'Cook', description: 'Boil beans until tender, about 30 minutes. Drain, reserve 1/2 cup liquid.' },
        { step_order: 3, title: 'Braise', description: 'Add beans back with soy sauce, sugar, and reserved liquid. Cook until glazed. Drizzle sesame oil.' },
      ]
    },
    {
      name_en: 'Mu Jorim', name_ko: '무조림',
      description: 'Braised radish in a sweet soy glaze — tender and full of flavor.',
      category: 'side_dishes', cooking_time_min: 25, difficulty: 'easy',
      servings: 3, calories: 100, protein_g: 2, carbs_g: 22, fat_g: 2,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Radish', amount: '400g', type: 'essential' },
        { name: 'Soy Sauce', amount: '3 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Cut radish', description: 'Cut radish into thick rounds or rectangles.' },
        { step_order: 2, title: 'Braise', description: 'Add radish, soy sauce, sugar, garlic, gochugaru, and 1/2 cup water. Cook on medium 20 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Drizzle sesame oil. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Doraji Namul', name_ko: '도라지나물',
      description: 'Seasoned bellflower root — a traditional Korean side dish.',
      category: 'side_dishes', cooking_time_min: 15, difficulty: 'easy',
      servings: 3, calories: 70, protein_g: 2, carbs_g: 14, fat_g: 2,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Bellflower Root', amount: '200g', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Salt', amount: '1/2 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tsp', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prep', description: 'Rinse bellflower root, squeeze out bitterness. Shred into strips.' },
        { step_order: 2, title: 'Sauté', description: 'Sauté with garlic and sesame oil until softened.' },
        { step_order: 3, title: 'Season', description: 'Season with salt and soy sauce. Garnish with sesame seeds.' },
      ]
    },
    {
      name_en: 'Spinach Doenjang Soup', name_ko: '시금치된장국',
      description: 'Light soybean paste soup with fresh spinach.',
      category: 'side_dishes', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 80, protein_g: 6, carbs_g: 8, fat_g: 3,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Spinach', amount: '200g', type: 'essential' },
        { name: 'Doenjang', amount: '1.5 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Anchovy Broth', amount: '3 cups', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Tofu', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make broth', description: 'Bring anchovy broth (or water) to boil. Dissolve doenjang.' },
        { step_order: 2, title: 'Add spinach', description: 'Add spinach and garlic. Cook 3 minutes.' },
        { step_order: 3, title: 'Finish', description: 'Add tofu if using. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Kongnamul Guk', name_ko: '콩나물국',
      description: 'Clear soybean sprout soup — light, clean, and restorative.',
      category: 'side_dishes', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 80, protein_g: 6, carbs_g: 8, fat_g: 3,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Bean Sprouts', amount: '200g', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Salt', amount: '1/2 tsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make broth', description: 'Add bean sprouts and garlic to 3 cups cold water. Bring to boil WITHOUT opening the lid for 5 minutes.' },
        { step_order: 2, title: 'Season', description: 'Season with soy sauce and salt.' },
        { step_order: 3, title: 'Finish', description: 'Garnish with green onion and sesame oil.' },
      ]
    },

    // ── STREET FOOD (7개) ─────────────────────────────────────────
    {
      name_en: 'Hotteok', name_ko: '호떡',
      description: 'Sweet Korean pancakes filled with brown sugar and cinnamon.',
      category: 'street_food', cooking_time_min: 40, difficulty: 'medium',
      servings: 4, calories: 320, protein_g: 6, carbs_g: 58, fat_g: 10,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Sugar', amount: '4 tbsp brown sugar', type: 'essential' },
        { name: 'Salt', amount: '1/4 tsp', type: 'essential' },
        { name: 'Cinnamon', amount: '1 tsp', type: 'essential' },
        { name: 'Sesame Seeds', amount: '2 tbsp', type: 'recommended' },
        { name: 'Peanuts', amount: '2 tbsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make dough', description: 'Mix 2 cups flour, 1 tsp yeast, 1 tsp sugar, 3/4 cup warm water. Rest 1 hour.' },
        { step_order: 2, title: 'Make filling', description: 'Mix brown sugar, cinnamon, and sesame seeds.' },
        { step_order: 3, title: 'Pan-fry', description: 'Flatten dough, add filling, seal. Pan-fry until golden, pressing flat with spatula.' },
      ]
    },
    {
      name_en: 'Eomuk Tang', name_ko: '어묵탕',
      description: 'Fish cake skewers simmered in a savory broth — a beloved street food.',
      category: 'street_food', cooking_time_min: 20, difficulty: 'easy',
      servings: 3, calories: 180, protein_g: 10, carbs_g: 20, fat_g: 6,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Fish Cake', amount: '300g', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Anchovy Broth', amount: '4 cups', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Garlic', amount: '2 cloves', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make broth', description: 'Bring anchovy broth to boil with garlic and soy sauce.' },
        { step_order: 2, title: 'Add fish cakes', description: 'Thread fish cakes on skewers and simmer in broth 10 minutes.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with green onion. Serve with broth in a cup.' },
      ]
    },
    {
      name_en: 'Twigim', name_ko: '튀김',
      description: 'Korean street food fritters — vegetables and fish cake in crispy batter.',
      category: 'street_food', cooking_time_min: 25, difficulty: 'medium',
      servings: 3, calories: 340, protein_g: 8, carbs_g: 42, fat_g: 16,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Zucchini', amount: '1/2', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'essential' },
        { name: 'Fish Cake', amount: '150g', type: 'essential' },
        { name: 'Egg', amount: '1', type: 'essential' },
        { name: 'Salt', amount: '1/4 tsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
        { name: 'Soy Sauce', amount: '1 tbsp dipping', type: 'recommended' },
      ],
      steps: [
        { step_order: 1, title: 'Make batter', description: 'Mix 1 cup flour, 1 egg, 3/4 cup cold water, and salt.' },
        { step_order: 2, title: 'Coat and fry', description: 'Dip vegetables and fish cake in batter. Deep or shallow fry until golden.' },
        { step_order: 3, title: 'Serve', description: 'Drain on paper towel. Serve with soy sauce dip.' },
      ]
    },
    {
      name_en: 'Gunmandu', name_ko: '군만두',
      description: 'Pan-fried Korean dumplings — crispy on the bottom, juicy inside.',
      category: 'street_food', cooking_time_min: 25, difficulty: 'medium',
      servings: 3, calories: 320, protein_g: 14, carbs_g: 36, fat_g: 14,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Dumpling Wrappers', amount: '20 pieces', type: 'essential' },
        { name: 'Pork', amount: '200g ground', type: 'essential' },
        { name: 'Tofu', amount: '100g', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Cabbage', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make filling', description: 'Mix pork, crumbled tofu, garlic, soy sauce, sesame oil, and green onion.' },
        { step_order: 2, title: 'Wrap', description: 'Place filling in wrappers, fold and seal edges.' },
        { step_order: 3, title: 'Pan-fry', description: 'Fry in oiled pan until bottom is golden. Add 1/4 cup water, cover and steam 5 minutes.' },
      ]
    },
    {
      name_en: 'Soondae Bokkeum', name_ko: '순대볶음',
      description: 'Spicy stir-fried blood sausage with vegetables.',
      category: 'street_food', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 380, protein_g: 18, carbs_g: 32, fat_g: 18,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Soondae', amount: '300g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Onion', amount: '1/2', type: 'recommended' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Slice soondae', description: 'Slice soondae into bite-sized pieces.' },
        { step_order: 2, title: 'Stir-fry', description: 'Stir-fry garlic and onion. Add soondae, gochujang, gochugaru, and soy sauce.' },
        { step_order: 3, title: 'Finish', description: 'Toss with green onion and sesame oil.' },
      ]
    },
    {
      name_en: 'Sundae Tteokbokki', name_ko: '순대떡볶이',
      description: 'The ultimate Korean street food combo: tteokbokki with soondae.',
      category: 'street_food', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 440, protein_g: 16, carbs_g: 62, fat_g: 14,
      is_popular: true, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Rice Cake', amount: '250g', type: 'essential' },
        { name: 'Soondae', amount: '150g', type: 'essential' },
        { name: 'Gochujang', amount: '2 tbsp', type: 'essential' },
        { name: 'Gochugaru', amount: '1 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Green Onion', amount: '2 stalks', type: 'recommended' },
        { name: 'Fish Cake', amount: '100g', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make sauce', description: 'Mix gochujang, gochugaru, sugar, and soy sauce with 2 cups water.' },
        { step_order: 2, title: 'Cook rice cakes', description: 'Boil rice cakes in sauce for 10 minutes.' },
        { step_order: 3, title: 'Add soondae', description: 'Add soondae and fish cake. Cook 3 more minutes. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Dak Twigim', name_ko: '닭튀김',
      description: 'Crispy Korean fried chicken without the sauce.',
      category: 'street_food', cooking_time_min: 30, difficulty: 'medium',
      servings: 2, calories: 420, protein_g: 30, carbs_g: 28, fat_g: 22,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Chicken', amount: '500g', type: 'essential' },
        { name: 'Salt', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
        { name: 'Green Onion', amount: '1 stalk', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Season chicken', description: 'Season chicken with salt and garlic. Rest 15 minutes.' },
        { step_order: 2, title: 'Coat and fry', description: 'Coat in starch and fry until golden and crispy, about 12 minutes.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with sesame seeds and green onion.' },
      ]
    },

    // ── VEGETABLES (10개) ─────────────────────────────────────────
    {
      name_en: 'Homemade Kimchi', name_ko: '홈메이드 김치',
      description: 'Traditional homemade napa cabbage kimchi.',
      category: 'vegetables', cooking_time_min: 60, difficulty: 'hard',
      servings: 10, calories: 30, protein_g: 2, carbs_g: 6, fat_g: 0,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Napa Cabbage', amount: '1 head', type: 'essential' },
        { name: 'Gochugaru', amount: '5 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '8 cloves', type: 'essential' },
        { name: 'Salt', amount: '4 tbsp', type: 'essential' },
        { name: 'Green Onion', amount: '5 stalks', type: 'essential' },
        { name: 'Fish Sauce', amount: '2 tbsp', type: 'recommended' },
        { name: 'Ginger', amount: '1 tbsp grated', type: 'recommended' },
        { name: 'Sugar', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Salt cabbage', description: 'Quarter cabbage and salt between leaves. Let sit 2 hours, turning occasionally. Rinse and drain.' },
        { step_order: 2, title: 'Make paste', description: 'Mix gochugaru, garlic, ginger, fish sauce, and sugar into a paste.' },
        { step_order: 3, title: 'Mix', description: 'Toss cabbage and green onion with paste, coating every leaf.' },
        { step_order: 4, title: 'Ferment', description: 'Pack into jar. Leave at room temperature 1-2 days, then refrigerate.' },
      ]
    },
    {
      name_en: 'Hobak Doenjang Muchim', name_ko: '호박된장무침',
      description: 'Zucchini seasoned with doenjang — nutty and savory.',
      category: 'vegetables', cooking_time_min: 10, difficulty: 'easy',
      servings: 2, calories: 70, protein_g: 3, carbs_g: 10, fat_g: 3,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Zucchini', amount: '1 medium', type: 'essential' },
        { name: 'Doenjang', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Slice zucchini', description: 'Slice zucchini into half-moons. Sauté in a little oil until soft.' },
        { step_order: 2, title: 'Season', description: 'Mix with doenjang, sesame oil, and garlic.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with green onion and sesame seeds.' },
      ]
    },
    {
      name_en: 'Mu Doenjang Guk', name_ko: '무된장국',
      description: 'Simple radish and doenjang soup.',
      category: 'vegetables', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 90, protein_g: 4, carbs_g: 14, fat_g: 3,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Radish', amount: '200g', type: 'essential' },
        { name: 'Doenjang', amount: '1.5 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Anchovy Broth', amount: '3 cups', type: 'recommended' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Tofu', amount: '100g', type: 'optional' },
        { name: 'Salt', amount: '1/4 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make broth', description: 'Bring anchovy broth to boil. Dissolve doenjang.' },
        { step_order: 2, title: 'Add radish', description: 'Add cubed radish and garlic. Simmer 12 minutes until tender.' },
        { step_order: 3, title: 'Finish', description: 'Add tofu if using. Garnish with green onion.' },
      ]
    },
    {
      name_en: 'Broccoli Muchim', name_ko: '브로콜리무침',
      description: 'Blanched broccoli tossed in a garlicky soy dressing.',
      category: 'vegetables', cooking_time_min: 10, difficulty: 'easy',
      servings: 2, calories: 60, protein_g: 4, carbs_g: 8, fat_g: 2,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Broccoli', amount: '300g', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '2 cloves', type: 'essential' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
        { name: 'Sugar', amount: '1/2 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Blanch', description: 'Blanch broccoli florets for 2 minutes. Drain and cool.' },
        { step_order: 2, title: 'Season', description: 'Mix with soy sauce, sesame oil, and garlic.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with sesame seeds.' },
      ]
    },
    {
      name_en: 'Cabbage Doenjang Muchim', name_ko: '양배추된장무침',
      description: 'Quick cabbage salad with doenjang dressing.',
      category: 'vegetables', cooking_time_min: 10, difficulty: 'easy',
      servings: 2, calories: 60, protein_g: 3, carbs_g: 10, fat_g: 2,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Cabbage', amount: '200g', type: 'essential' },
        { name: 'Doenjang', amount: '1 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Vinegar', amount: '1 tsp', type: 'recommended' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Shred cabbage', description: 'Shred cabbage thinly. Blanch briefly or eat raw.' },
        { step_order: 2, title: 'Mix dressing', description: 'Mix doenjang, sesame oil, garlic, and vinegar.' },
        { step_order: 3, title: 'Toss and serve', description: 'Toss cabbage with dressing. Garnish with sesame seeds.' },
      ]
    },
    {
      name_en: 'Oi Naengchae', name_ko: '오이냉채',
      description: 'Cold cucumber salad with a tangy-sweet dressing.',
      category: 'vegetables', cooking_time_min: 10, difficulty: 'easy',
      servings: 2, calories: 50, protein_g: 1, carbs_g: 10, fat_g: 2,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Cucumber', amount: '2 medium', type: 'essential' },
        { name: 'Vinegar', amount: '2 tbsp', type: 'essential' },
        { name: 'Sugar', amount: '1 tbsp', type: 'essential' },
        { name: 'Salt', amount: '1/2 tsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Prep cucumber', description: 'Slice cucumber thinly. Salt and let sit 5 minutes. Squeeze out moisture.' },
        { step_order: 2, title: 'Season', description: 'Mix with vinegar, sugar, sesame oil, and gochugaru.' },
        { step_order: 3, title: 'Serve', description: 'Garnish with sesame seeds. Serve immediately chilled.' },
      ]
    },
    {
      name_en: 'Buchu Jeon', name_ko: '부추전',
      description: 'Crispy chive pancakes — simple and satisfying.',
      category: 'vegetables', cooking_time_min: 15, difficulty: 'easy',
      servings: 2, calories: 180, protein_g: 6, carbs_g: 24, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Chives', amount: '200g', type: 'essential' },
        { name: 'Egg', amount: '2', type: 'essential' },
        { name: 'Salt', amount: '1/4 tsp', type: 'essential' },
        { name: 'Soy Sauce', amount: '1 tbsp dipping', type: 'recommended' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'recommended' },
        { name: 'Gochugaru', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make batter', description: 'Mix 1/2 cup flour, eggs, 1/2 cup water, and salt. Add chopped chives.' },
        { step_order: 2, title: 'Pan-fry', description: 'Cook in oiled pan over medium-high heat until golden on both sides.' },
        { step_order: 3, title: 'Serve', description: 'Serve with soy sauce dip.' },
      ]
    },
    {
      name_en: 'Gamja Guk', name_ko: '감자국',
      description: 'Simple potato soup in a light anchovy broth.',
      category: 'vegetables', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 120, protein_g: 4, carbs_g: 22, fat_g: 3,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Potato', amount: '2 medium', type: 'essential' },
        { name: 'Anchovy Broth', amount: '3 cups', type: 'essential' },
        { name: 'Doenjang', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'essential' },
        { name: 'Green Onion', amount: '1 stalk', type: 'recommended' },
        { name: 'Salt', amount: '1/4 tsp', type: 'optional' },
        { name: 'Sesame Oil', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Make broth', description: 'Bring anchovy broth to boil. Dissolve doenjang with garlic.' },
        { step_order: 2, title: 'Add potato', description: 'Add cubed potato. Simmer 12 minutes until tender.' },
        { step_order: 3, title: 'Finish', description: 'Season with salt. Garnish with green onion and sesame oil.' },
      ]
    },
    {
      name_en: 'Japchae Namul Bowl', name_ko: '잡채나물 덮밥',
      description: 'Light noodle and vegetable bowl seasoned with soy and sesame.',
      category: 'vegetables', cooking_time_min: 20, difficulty: 'easy',
      servings: 2, calories: 280, protein_g: 8, carbs_g: 48, fat_g: 8,
      is_popular: false, is_featured: false, is_recently_added: false,
      ingredients: [
        { name: 'Glass Noodles', amount: '150g', type: 'essential' },
        { name: 'Spinach', amount: '100g', type: 'essential' },
        { name: 'Bean Sprouts', amount: '100g', type: 'essential' },
        { name: 'Soy Sauce', amount: '2 tbsp', type: 'essential' },
        { name: 'Sesame Oil', amount: '1 tbsp', type: 'essential' },
        { name: 'Garlic', amount: '1 clove', type: 'recommended' },
        { name: 'Carrot', amount: '1/2', type: 'optional' },
        { name: 'Sesame Seeds', amount: '1 tsp', type: 'optional' },
      ],
      steps: [
        { step_order: 1, title: 'Cook noodles and veg', description: 'Cook glass noodles 3 minutes, drain. Blanch spinach and sprouts separately.' },
        { step_order: 2, title: 'Season', description: 'Toss everything with soy sauce, sesame oil, and garlic.' },
        { step_order: 3, title: 'Serve', description: 'Plate and garnish with sesame seeds.' },
      ]
    },
  ]

  console.log(`\n🌱 Seeding ${newRecipes.length} new recipes...`)

  let successCount = 0
  let errorCount = 0

  for (const recipeData of newRecipes) {
    const { ingredients: recipeIngredients, steps, ...recipeFields } = recipeData

    const { data: recipe, error: recipeErr } = await supabase
      .from('recipes')
      .insert(recipeFields)
      .select()
      .single()

    if (recipeErr) {
      console.error(`❌ ${recipeFields.name_en}:`, recipeErr.message)
      errorCount++
      continue
    }

    const riRows = recipeIngredients
      .filter((ri: any) => ingMap[ri.name])
      .map((ri: any, idx: number) => ({
        recipe_id: recipe.id,
        ingredient_id: ingMap[ri.name],
        amount: ri.amount,
        type: ri.type,
        sort_order: idx,
      }))

    const missing = recipeIngredients.filter((ri: any) => !ingMap[ri.name])
    if (missing.length > 0) {
      console.warn(`  ⚠️  Missing ingredients for ${recipe.name_en}:`, missing.map((r: any) => r.name))
    }

    if (riRows.length > 0) {
      const { error: riErr } = await supabase.from('recipe_ingredients').insert(riRows)
      if (riErr) console.error(`  recipe_ingredients error:`, riErr.message)
    }

    const stepRows = steps.map((s: any) => ({ ...s, recipe_id: recipe.id }))
    const { error: stepErr } = await supabase.from('recipe_steps').insert(stepRows)
    if (stepErr) console.error(`  recipe_steps error:`, stepErr.message)

    console.log(`  ✅ ${recipe.name_en} (${recipe.category})`)
    successCount++
  }

  console.log(`\n🎉 완료: ${successCount}개 성공, ${errorCount}개 실패`)
}

seedRecipes()
