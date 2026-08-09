import { readFileSync, writeFileSync } from 'fs'

const data = JSON.parse(readFileSync('recipes_export.json', 'utf-8'))

// image_url 재귀 제거
function removeImageUrl(obj) {
  if (Array.isArray(obj)) return obj.map(removeImageUrl)
  if (obj && typeof obj === 'object') {
    const result = {}
    for (const [k, v] of Object.entries(obj)) {
      if (k === 'image_url') continue
      result[k] = removeImageUrl(v)
    }
    return result
  }
  return obj
}

const categories = ['meat', 'stews', 'noodles', 'rice', 'side_dishes', 'street_food', 'vegetables']

for (const cat of categories) {
  const filtered = data
    .filter(r => r.category === cat)
    .map(removeImageUrl)
  const filename = `recipes_${cat}.json`
  writeFileSync(filename, JSON.stringify(filtered, null, 2), 'utf-8')
  console.log(`${filename}: ${filtered.length}개`)
}
