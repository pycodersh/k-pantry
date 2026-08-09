import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const NEW_INGREDIENTS = [
  { name: 'Pork Neck Bones', category: 'meat_seafood' },
  { name: 'Dried Seaweed',   category: 'pantry'       },
  { name: 'Dried Jujubes',   category: 'pantry'       },
]

const { data: existing } = await supabase.from('ingredients').select('name')
const existingNames = new Set(existing.map(i => i.name.toLowerCase()))

const toInsert = NEW_INGREDIENTS.filter(i => !existingNames.has(i.name.toLowerCase()))
const skipped  = NEW_INGREDIENTS.filter(i =>  existingNames.has(i.name.toLowerCase()))

if (skipped.length)  skipped.forEach(i => console.log(`SKIP (이미 존재): ${i.name}`))
if (!toInsert.length) { console.log('추가할 재료 없음.'); process.exit(0) }

const { data, error } = await supabase.from('ingredients').insert(toInsert).select()
if (error) { console.error('ERROR:', error.message); process.exit(1) }
data.forEach(i => console.log(`✅ 추가: ${i.name} (${i.category}) id=${i.id}`))

const { data: final } = await supabase.from('ingredients').select('name')
console.log(`\n최종 ingredients 총 개수: ${final.length}개`)
