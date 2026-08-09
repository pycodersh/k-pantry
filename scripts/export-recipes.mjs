import { createClient } from '@supabase/supabase-js'
import { writeFileSync } from 'fs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

async function main() {
  // 1. recipes 전체
  const { data: recipes, error: rErr } = await supabase
    .from('recipes')
    .select('*')
    .order('category')
    .order('name_en')
  if (rErr) throw new Error('recipes: ' + rErr.message)
  console.log('recipes:', recipes.length + '개')

  // 2. recipe_ingredients (ingredient name 포함)
  const { data: ingredients, error: iErr } = await supabase
    .from('recipe_ingredients')
    .select('recipe_id, amount, type, sort_order, ingredients(name)')
    .order('sort_order')
  if (iErr) throw new Error('recipe_ingredients: ' + iErr.message)
  console.log('recipe_ingredients:', ingredients.length + '개')

  // 3. recipe_steps
  const { data: steps, error: sErr } = await supabase
    .from('recipe_steps')
    .select('recipe_id, step_order, title, description, image_url')
    .order('step_order')
  if (sErr) throw new Error('recipe_steps: ' + sErr.message)
  console.log('recipe_steps:', steps.length + '개')

  // recipe_id 기준으로 그룹핑
  const ingMap = {}
  ingredients.forEach(i => {
    if (!ingMap[i.recipe_id]) ingMap[i.recipe_id] = []
    ingMap[i.recipe_id].push({
      name: i.ingredients?.name ?? null,
      amount: i.amount,
      type: i.type,
    })
  })

  const stepMap = {}
  steps.forEach(s => {
    if (!stepMap[s.recipe_id]) stepMap[s.recipe_id] = []
    stepMap[s.recipe_id].push({
      step_order: s.step_order,
      title: s.title,
      description: s.description,
      image_url: s.image_url,
    })
  })

  // 조합
  const output = recipes.map(r => ({
    ...r,
    ingredients: ingMap[r.id] ?? [],
    steps: stepMap[r.id] ?? [],
  }))

  // 파일 저장
  const outPath = 'recipes_export.json'
  writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8')
  console.log('\n저장 완료:', outPath)
  console.log('총', output.length + '개 레시피')
}

main().catch(err => { console.error(err.message); process.exit(1) })
