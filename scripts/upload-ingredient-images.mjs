import { createClient } from '@supabase/supabase-js'
import { readFileSync, readdirSync } from 'fs'
import { join, extname, basename } from 'path'

// Service role key bypasses RLS for storage + DB updates
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const IMAGE_DIR = 'C:/Users/msj15/Downloads/ingredients_v2/ingredients_v2'
const BUCKET = 'ingredients'

// green-onion.png → "Green Onion"
function filenameToName(filename) {
  return basename(filename, extname(filename))
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets()
  const exists = buckets?.some(b => b.name === BUCKET)
  if (!exists) {
    const { error } = await supabase.storage.createBucket(BUCKET, { public: true })
    if (error) throw new Error(`Failed to create bucket: ${error.message}`)
    console.log(`✅ Created bucket: ${BUCKET}`)
  } else {
    console.log(`✅ Bucket "${BUCKET}" already exists`)
  }
}

async function main() {
  await ensureBucket()

  const files = readdirSync(IMAGE_DIR).filter(f => extname(f) === '.png')
  console.log(`\n📦 ${files.length}개 이미지 업로드 시작...\n`)

  let uploaded = 0
  let updated = 0
  let errors = 0

  for (const file of files) {
    const ingredientName = filenameToName(file)
    const filePath = join(IMAGE_DIR, file)
    const fileData = readFileSync(filePath)
    const storagePath = file  // ingredients/<file>

    // 1. Upload to Supabase Storage (upsert: overwrite if exists)
    const { error: uploadErr } = await supabase.storage
      .from(BUCKET)
      .upload(storagePath, fileData, {
        contentType: 'image/png',
        upsert: true,
      })

    if (uploadErr) {
      console.error(`  ❌ Upload failed [${file}]: ${uploadErr.message}`)
      errors++
      continue
    }
    uploaded++

    // 2. Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(storagePath)

    // 3. Update ingredients table
    const { data, error: dbErr } = await supabase
      .from('ingredients')
      .update({ image_url: publicUrl })
      .eq('name', ingredientName)
      .select('id, name')

    if (dbErr) {
      console.error(`  ❌ DB update failed [${ingredientName}]: ${dbErr.message}`)
      errors++
    } else if (!data || data.length === 0) {
      console.warn(`  ⚠️  No ingredient found for "${ingredientName}" (${file})`)
    } else {
      console.log(`  ✅ ${ingredientName}`)
      updated++
    }
  }

  console.log(`
🎉 완료!
   업로드: ${uploaded}개
   DB 업데이트: ${updated}개
   오류: ${errors}개
  `)
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
