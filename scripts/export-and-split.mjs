import { createClient } from '@supabase/supabase-js'
import { writeFileSync } from 'fs'
import { join } from 'path'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const ROOT = 'C:/Users/msj15/OneDrive/바탕 화면/ClaudeCode/k-pantry'

function removeImageUrl(obj) {
  if (Array.isArray(obj)) return obj.map(removeImageUrl)
  if (obj && typeof obj === 'object') {
    const result = {}
    for (const [k, v] of Object.entries(obj)) {
      if (k === 'image_url' || k === 'hero_image_url') continue
      result[k] = removeImageUrl(v)
    }
    return result
  }
  return obj
}

async function main() {
  const { data: recipes, error: rErr } = await supabase
    .from('recipes').select('*').order('category').order('name_en')
  if (rErr) throw new Error(rErr.message)

  const { data: ingredients, error: iErr } = await supabase
    .from('recipe_ingredients')
    .select('recipe_id, amount, type, sort_order, ingredients(name)')
    .order('sort_order')
  if (iErr) throw new Error(iErr.message)

  const { data: steps, error: sErr } = await supabase
    .from('recipe_steps')
    .select('recipe_id, step_order, title, description')
    .order('step_order')
  if (sErr) throw new Error(sErr.message)

  const ingMap = {}
  ingredients.forEach(i => {
    if (!ingMap[i.recipe_id]) ingMap[i.recipe_id] = []
    ingMap[i.recipe_id].push({ name: i.ingredients?.name ?? null, amount: i.amount, type: i.type })
  })

  const stepMap = {}
  steps.forEach(s => {
    if (!stepMap[s.recipe_id]) stepMap[s.recipe_id] = []
    stepMap[s.recipe_id].push({ step_order: s.step_order, title: s.title, description: s.description })
  })

  const all = recipes.map(r => removeImageUrl({
    ...r,
    ingredients: ingMap[r.id] ?? [],
    steps: stepMap[r.id] ?? [],
  }))

  // recipes_export.json (전체)
  writeFileSync(join(ROOT, 'recipes_export.json'), JSON.stringify(all, null, 2), 'utf-8')
  console.log('recipes_export.json: ' + all.length + '개')

  // 카테고리별 분리
  const categories = ['meat', 'stews', 'noodles', 'rice', 'side_dishes', 'street_food', 'vegetables']
  for (const cat of categories) {
    const filtered = all.filter(r => r.category === cat)
    const filename = join(ROOT, `recipes_${cat}.json`)
    writeFileSync(filename, JSON.stringify(filtered, null, 2), 'utf-8')
    console.log(`recipes_${cat}.json: ${filtered.length}개`)
  }
}

main().catch(err => { console.error(err.message); process.exit(1) })
