import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const NEW_INGREDIENTS = [
  { name: 'Shiitake Mushroom',    category: 'vegetables'   },
  { name: 'Seaweed Sheet',        category: 'pantry'       },
  { name: 'Instant Ramen Noodles',category: 'pantry'       },
  { name: 'Pork Ribs',            category: 'meat_seafood' },
  { name: 'Beef Short Ribs',      category: 'meat_seafood' },
  { name: 'Cornstarch',           category: 'pantry'       },
  { name: 'Flour',                category: 'pantry'       },
  { name: 'Soft Tofu',            category: 'pantry'       },
  { name: 'Canned Tuna',          category: 'pantry'       },
  { name: 'Mozzarella Cheese',    category: 'pantry'       },
  { name: 'Pork Shoulder',        category: 'meat_seafood' },
  { name: 'American Cheese',      category: 'pantry'       },
  { name: 'Korean Mustard Paste', category: 'pantry'       },
  { name: 'Korean Rice Cakes',    category: 'pantry'       },
  { name: 'Korean Blood Sausage', category: 'meat_seafood' },
  { name: 'Active Dry Yeast',     category: 'pantry'       },
  { name: 'Brown Sugar',          category: 'pantry'       },
  { name: 'Garlic Chives',        category: 'vegetables'   },
]

const { data: existing } = await supabase.from('ingredients').select('name')
const existingNames = new Set(existing.map(i => i.name.toLowerCase()))

const toInsert = NEW_INGREDIENTS.filter(i => !existingNames.has(i.name.toLowerCase()))
const skipped  = NEW_INGREDIENTS.filter(i =>  existingNames.has(i.name.toLowerCase()))

console.log(`\n기존 ingredients: ${existing.length}개`)
console.log(`추가 대상: ${toInsert.length}개 / 스킵(이미 있음): ${skipped.length}개\n`)

if (skipped.length > 0) {
  console.log('SKIP (이미 존재):')
  skipped.forEach(i => console.log(`  - ${i.name}`))
  console.log()
}

if (toInsert.length > 0) {
  const { data, error } = await supabase.from('ingredients').insert(toInsert).select()
  if (error) {
    console.error('ERROR:', error.message)
    process.exit(1)
  }
  console.log('INSERT 완료:')
  data.forEach(i => console.log(`  ✅ ${i.name} (${i.category}) id=${i.id}`))
} else {
  console.log('추가할 재료 없음 (모두 이미 존재).')
}

const { data: final } = await supabase.from('ingredients').select('name')
console.log(`\n최종 ingredients 총 개수: ${final.length}개`)
