import { createClient } from '@supabase/supabase-js'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const IMAGE_DIR = 'C:/Users/msj15/Downloads/all_batches/all_batches'
const BUCKET = 'recipe-images'

async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets()
  const exists = buckets?.some(b => b.name === BUCKET)
  if (!exists) {
    const { error } = await supabase.storage.createBucket(BUCKET, { public: true })
    if (error) throw new Error(`버킷 생성 실패: ${error.message}`)
    console.log(`✅ 버킷 생성: ${BUCKET}`)
  } else {
    console.log(`✅ 버킷 "${BUCKET}" 확인`)
  }
}

async function main() {
  await ensureBucket()

  const files = readdirSync(IMAGE_DIR).filter(f => f.endsWith('.png'))
  console.log(`\n📦 ${files.length}개 파일 업로드 시작...\n`)

  let uploaded = 0
  let skipped = 0
  const failed = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const filePath = join(IMAGE_DIR, file)
    const fileData = readFileSync(filePath)

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(file, fileData, {
        contentType: 'image/png',
        upsert: true,
      })

    if (error) {
      failed.push({ file, error: error.message })
      skipped++
    } else {
      uploaded++
    }

    if ((i + 1) % 50 === 0 || i + 1 === files.length) {
      console.log(`  [${i + 1}/${files.length}] ✅ ${uploaded}개 완료, ❌ ${skipped}개 실패`)
    }
  }

  console.log(`\n🎉 완료! 업로드: ${uploaded}개, 실패: ${skipped}개`)

  if (failed.length > 0) {
    console.log('\n❌ 실패 목록:')
    failed.forEach(f => console.log(`  - ${f.file}: ${f.error}`))
  }
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})
