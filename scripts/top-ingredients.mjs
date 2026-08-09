import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

const { data } = await supabase
  .from('recipe_ingredients')
  .select('ingredient_id, ingredients(name)')

const counts = {}
data.forEach(row => {
  const name = row.ingredients?.name
  if (!name) return
  counts[name] = (counts[name] || 0) + 1
})

const top10 = Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)

console.log('순위 | 재료명                   | 사용 레시피 수')
console.log('-----|--------------------------|---------------')
top10.forEach(([name, count], i) => {
  console.log(`${String(i+1).padStart(2)}   | ${name.padEnd(25)} | ${count}`)
})
