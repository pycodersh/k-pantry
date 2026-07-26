import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function seedIngredients() {
  console.log('🌱 Seeding new ingredients...')

  const newIngredients = [
    // 채소류
    { name: 'Cabbage', name_ko: '양배추', category: 'vegetables', aliases: ['napa cabbage outer leaves'] },
    { name: 'Napa Cabbage', name_ko: '배추', category: 'vegetables', aliases: ['chinese cabbage', 'baechu'] },
    { name: 'Radish', name_ko: '무', category: 'vegetables', aliases: ['korean radish', 'daikon'] },
    { name: 'Eggplant', name_ko: '가지', category: 'vegetables', aliases: ['korean eggplant'] },
    { name: 'Broccoli', name_ko: '브로콜리', category: 'vegetables' },
    { name: 'Cucumber', name_ko: '오이', category: 'vegetables' },
    { name: 'Mung Bean Sprouts', name_ko: '숙주나물', category: 'vegetables', aliases: ['sukju namul'] },
    { name: 'Chives', name_ko: '부추', category: 'vegetables', aliases: ['buchu', 'korean chives'] },
    { name: 'Ginger', name_ko: '생강', category: 'vegetables', aliases: ['fresh ginger', 'minced ginger'] },
    { name: 'Lettuce', name_ko: '상추', category: 'vegetables', aliases: ['ssam lettuce', 'perilla leaf'] },
    { name: 'Wild Parsley', name_ko: '참나물', category: 'vegetables', aliases: ['korean parsley', 'chamnamul'] },
    { name: 'Bellflower Root', name_ko: '도라지', category: 'vegetables', aliases: ['doraji', 'balloon flower root'] },
    { name: 'Coriander', name_ko: '고수', category: 'vegetables', aliases: ['cilantro'] },
    { name: 'Tomato', name_ko: '토마토', category: 'vegetables' },

    // 육류/해산물
    { name: 'Pork Belly', name_ko: '삼겹살', category: 'meat_seafood', aliases: ['samgyeopsal'] },
    { name: 'Seafood Mix', name_ko: '해물모둠', category: 'meat_seafood', aliases: ['mixed seafood', 'haemul'] },
    { name: 'Squid', name_ko: '오징어', category: 'meat_seafood', aliases: ['ojingeo'] },
    { name: 'Fish Cake', name_ko: '어묵', category: 'meat_seafood', aliases: ['eomuk', 'odeng'] },
    { name: 'Fish Roe', name_ko: '생선알', category: 'meat_seafood', aliases: ['fish eggs', 'mentaiko'] },
    { name: 'Crab Stick', name_ko: '게맛살', category: 'meat_seafood', aliases: ['imitation crab', 'surimi'] },
    { name: 'Soondae', name_ko: '순대', category: 'meat_seafood', aliases: ['blood sausage', 'korean sausage'] },
    { name: 'Whole Chicken', name_ko: '통닭', category: 'meat_seafood', aliases: ['whole chicken', 'samgyetang chicken'] },
    { name: 'Oxtail', name_ko: '꼬리', category: 'meat_seafood', aliases: ['beef oxtail', 'kkori'] },
    { name: 'Fish Sauce', name_ko: '액젓', category: 'meat_seafood', aliases: ['myulchi aekjeot', 'anchovy sauce'] },

    // 팬트리
    { name: 'Buckwheat Noodles', name_ko: '메밀국수', category: 'pantry', aliases: ['naengmyeon noodles', 'soba'] },
    { name: 'Wheat Noodles', name_ko: '소면', category: 'pantry', aliases: ['somyeon', 'thin wheat noodles'] },
    { name: 'Black Bean Paste', name_ko: '춘장', category: 'pantry', aliases: ['chunjang', 'jjajang paste'] },
    { name: 'Ssamjang', name_ko: '쌈장', category: 'pantry', aliases: ['wrap sauce', 'bbq dipping sauce'] },
    { name: 'Curry Powder', name_ko: '카레 가루', category: 'pantry', aliases: ['korean curry powder'] },
    { name: 'Ketchup', name_ko: '케첩', category: 'pantry' },
    { name: 'Mayonnaise', name_ko: '마요네즈', category: 'pantry', aliases: ['mayo'] },
    { name: 'Vinegar', name_ko: '식초', category: 'pantry', aliases: ['rice vinegar', 'apple vinegar'] },
    { name: 'Cheese', name_ko: '치즈', category: 'pantry', aliases: ['mozzarella', 'american cheese'] },
    { name: 'Seaweed Sheet', name_ko: '김', category: 'pantry', aliases: ['gim', 'nori', 'roasted seaweed'] },
    { name: 'Pickled Radish', name_ko: '단무지', category: 'pantry', aliases: ['danmuji', 'yellow pickled radish'] },
    { name: 'Dumpling Wrappers', name_ko: '만두피', category: 'pantry', aliases: ['mandu wrappers', 'gyoza wrappers'] },
    { name: 'Black Soybeans', name_ko: '검은콩', category: 'pantry', aliases: ['black beans', 'kongjaban beans'] },
    { name: 'Soy Milk', name_ko: '두유', category: 'pantry', aliases: ['unsweetened soy milk', 'kongguksu base'] },
    { name: 'Beef Broth', name_ko: '소고기 육수', category: 'pantry', aliases: ['beef stock', 'naengmyeon broth'] },
    { name: 'Cinnamon', name_ko: '계피', category: 'pantry', aliases: ['cinnamon powder'] },
    { name: 'Peanuts', name_ko: '땅콩', category: 'pantry', aliases: ['roasted peanuts'] },
    { name: 'Mustard', name_ko: '겨자', category: 'pantry', aliases: ['korean mustard', 'yellow mustard'] },

    // 기타
    { name: 'Ginseng', name_ko: '인삼', category: 'etc', aliases: ['korean ginseng', 'fresh ginseng'] },
    { name: 'Jujube', name_ko: '대추', category: 'etc', aliases: ['red dates', 'korean jujube'] },
    { name: 'Soybean Pulp', name_ko: '콩비지', category: 'etc', aliases: ['kongbiji', 'okara', 'soybean residue'] },
  ]

  const { data, error } = await supabase
    .from('ingredients')
    .insert(newIngredients)
    .select()

  if (error) {
    console.error('Error:', error)
    return
  }

  console.log(`✅ ${data.length}개 신규 재료 입력 완료`)
}

seedIngredients()
