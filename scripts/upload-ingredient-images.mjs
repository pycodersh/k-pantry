import { createClient } from '@supabase/supabase-js'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const IMG_DIR = 'C:\\Users\\msj15\\Downloads\\ingredients_v3\\ingredients_v3'
const BUCKET  = 'ingredients'

// "korean-rice-cakes.png" → "Korean Rice Cakes"
function fileNameToIngredientName(filename) {
  return filename
    .replace(/\.png$/i, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

const files = readdirSync(IMG_DIR).filter(f => f.endsWith('.png'))
console.log(`파일 ${files.length}개 발견\n`)

const { data: allIngredients } = await supabase
  .from('ingredients')
  .select('id, name, image_url')
const ingMap = {}
allIngredients.forEach(i => { ingMap[i.name.toLowerCase()] = i })

let uploaded = 0, skipped = 0, errors = 0

for (const file of files) {
  const ingName = fileNameToIngredientName(file)
  const ing = ingMap[ingName.toLowerCase()]

  if (!ing) {
    console.log(`⚠️  재료 없음: ${file} → "${ingName}"`)
    skipped++
    continue
  }

  const fileBuffer = readFileSync(join(IMG_DIR, file))
  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(file, fileBuffer, { contentType: 'image/png', upsert: true })

  if (uploadError) {
    console.log(`❌ 업로드 실패: ${file} — ${uploadError.message}`)
    errors++
    continue
  }

  const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${file}`

  const { error: dbError } = await supabase
    .from('ingredients')
    .update({ image_url: publicUrl })
    .eq('id', ing.id)

  if (dbError) {
    console.log(`❌ DB 실패: ${ingName} — ${dbError.message}`)
    errors++
    continue
  }

  console.log(`✅ ${ingName}`)
  uploaded++
}

console.log(`\n완료: ${uploaded}개 업로드+업데이트, 스킵: ${skipped}개, 오류: ${errors}개`)
