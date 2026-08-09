import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const RECIPE_ID = '09e197dc-222f-49bd-9fad-61fce9953f76'

const newSteps = [
  {
    step_order: 1,
    title: 'Prep the chicken',
    description: 'Rinse chicken thighs and drumsticks under cold water. Pat dry with paper towel. Score the joints with a knife so the seasoning penetrates deeply.',
  },
  {
    step_order: 2,
    title: 'Soak the noodles',
    description: 'Soak glass noodles in cold water for 20 minutes until softened. Drain and set aside.',
  },
  {
    step_order: 3,
    title: 'Prep the vegetables',
    description: 'Cut potato and carrot into bite-sized chunks. Slice onion into thick strips. Cut green onion diagonally into 5cm pieces.',
  },
  {
    step_order: 4,
    title: 'Make the sauce',
    description: 'In a bowl mix: soy sauce (5 tbsp), sugar (2 tbsp), minced garlic (4 cloves), black pepper (pinch), water (200ml). Stir until sugar dissolves.',
  },
  {
    step_order: 5,
    title: 'Braise the chicken',
    description: 'Place chicken in a wide pan. Pour sauce over. Cover with lid and cook on medium heat for 15 minutes, turning chicken halfway through.',
  },
  {
    step_order: 6,
    title: 'Add vegetables',
    description: 'Add potato, carrot, and onion. Cook uncovered on medium-low for 10 minutes, stirring occasionally until sauce reduces and coats everything.',
  },
  {
    step_order: 7,
    title: 'Add noodles & finish',
    description: 'Add drained glass noodles and green onion. Cook 5 more minutes until noodles turn translucent. Drizzle sesame oil. Serve hot.',
  },
].map(s => ({ ...s, recipe_id: RECIPE_ID, image_url: null }))

async function main() {
  // 1. 기존 steps 삭제
  const { error: delErr } = await supabase
    .from('recipe_steps')
    .delete()
    .eq('recipe_id', RECIPE_ID)
  if (delErr) throw new Error('삭제 오류: ' + delErr.message)
  console.log('기존 steps 삭제 완료')

  // 2. 새 7개 insert
  const { data, error: insErr } = await supabase
    .from('recipe_steps')
    .insert(newSteps)
    .select('step_order, title')
  if (insErr) throw new Error('insert 오류: ' + insErr.message)

  data.forEach(s => console.log('  Step ' + s.step_order + ': ' + s.title))
  console.log('\n총 ' + data.length + '개 완료')
}

main().catch(err => { console.error(err.message); process.exit(1) })
