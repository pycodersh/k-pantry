import { createClient } from '@supabase/supabase-js'
import { readdirSync } from 'fs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const IMAGE_DIR = 'C:/Users/msj15/Downloads/all_batches/all_batches'
const BUCKET_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/recipe-images`

// 슬러그 → DB name_en 예외 매핑
const SLUG_MAP = {
  'andong-jjimdak': 'Andong Jjimdak',
  'bibim-gimbap': 'Bibim Gimbap',
  'bibim-naengmyeon': 'Bibim Naengmyeon',
  'bibimbap': 'Bibimbap',
  'broccoli-muchim': 'Broccoli Muchim',
  'buchu-jeon': 'Buchu Jeon',
  'budae-jjigae': 'Budae Jjigae',
  'budae-jjigae-deluxe': 'Budae Jjigae Deluxe',
  'buldak': 'Buldak',
  'bulgogi': 'Bulgogi',
  'cabbage-doenjang-muchim': 'Cabbage Doenjang Muchim',
  'curry-rice': 'Curry Rice',
  'dak-bokkeum-tang': 'Dak Bokkeum Tang',
  'dak-gangjeong': 'Dak Gangjeong',
  'dak-twigim': 'Dak Twigim',
  'dakdoritang': 'Dakdoritang',
  'dakgalbi': 'Dakgalbi',
  'dakgalbi-bokkeumbap': 'Dakgalbi Bokkeumbap',
  'dakgalbi-jjigae': 'Dakgalbi Jjigae',
  'doenjang-bibimbap': 'Doenjang Bibimbap',
  'doenjang-jjigae': 'Doenjang Jjigae',
  'doenjang-sundubu-jjigae': 'Doenjang Sundubu Jjigae',
  'doraji-namul': 'Doraji Namul',
  'dubu-buchim': 'Dubu Buchim',
  'dubu-jorim': 'Dubu Jorim',
  'dwaeji-galbi': 'Dwaeji Galbi',
  'egg-rice-bowl': 'Egg Rice Bowl',
  'eomuk-bokkeum': 'Eomuk Bokkeum',
  'eomuk-tang': 'Eomuk Tang',
  'gaji-namul': 'Gaji Namul',
  'galbi-jjim': 'Galbi Jjim',
  'galbitang': 'Galbitang',
  'gamja-guk': 'Gamja Guk',
  'gamja-jorim': 'Gamja Jorim',
  'gamja-tang': 'Gamja Tang',
  'gimbap': 'Gimbap',
  'gochujang-jjigae': 'Gochujang Jjigae',
  'gunmandu': 'Gunmandu',
  'gyeran-mari': 'Gyeran Mari',
  'haejang-guk': 'Haejang Guk',
  'haemul-doenjang-jjigae': 'Haemul Doenjang Jjigae',
  'haemul-pajeon': 'Haemul Pajeon',
  'haemul-sundubu-jjigae': 'Haemul Sundubu Jjigae',
  'hobak-doenjang-muchim': 'Hobak Doenjang Muchim',
  'hobak-jeon': 'Hobak Jeon',
  'homemade-kimchi': 'Homemade Kimchi',
  'hotteok': 'Hotteok',
  'japchae': 'Japchae',
  'japchae-namul-bowl': 'Japchae Namul Bowl',
  'japchae-with-beef': 'Japchae with Beef',
  'jangjorim': 'Jangjorim',
  'jeyuk-bokkeum': 'Jeyuk Bokkeum',
  'jeyuk-dupbap': 'Jeyuk Dupbap',
  'jjajangmyeon': 'Jjajangmyeon',
  'jjamppong': 'Jjamppong',
  'kalguksu': 'Kalguksu',
  'kimchi-bokkeumbap-deluxe': 'Kimchi Bokkeumbap Deluxe',
  'kimchi-fried-rice': 'Kimchi Fried Rice',
  'kimchi-guk': 'Kimchi Guk',
  'kimchi-jeon-quick': 'Kimchi Jeon (Quick)',
  'kimchi-jjigae': 'Kimchi Jjigae',
  'kimchi-pajeon': 'Kimchi Pajeon',
  'kimchi-pancake': 'Kimchi Pancake',
  'kimchi-ramen': 'Kimchi Ramen',
  'kimchi-stew-with-spam': 'Kimchi Stew with Spam',
  'kimchi-sundubu-jjigae': 'Kimchi Sundubu Jjigae',
  'kkori-gomtang': 'Kkori Gomtang',
  'kongbiji-jjigae': 'Kongbiji Jjigae',
  'kongjorim': 'Kongjorim',
  'kongnamul-bibimbap': 'Kongnamul Bibimbap',
  'kongnamul-guk': 'Kongnamul Guk',
  'kongnamul-muchim': 'Kongnamul Muchim',
  'kongguksu': 'Kongguksu',
  'mu-doenjang-guk': 'Mu Doenjang Guk',
  'mu-jorim': 'Mu Jorim',
  'mul-naengmyeon': 'Mul Naengmyeon',
  'musaengchae': 'Musaengchae',
  'miyeok-guk': 'Miyeok Guk',
  'oi-muchim': 'Oi Muchim',
  'oi-naengchae': 'Oi Naengchae',
  'ojingeo-bokkeum': 'Ojingeo Bokkeum',
  'ojingeo-bokkeum-noodles': 'Ojingeo Bokkeum Noodles',
  'omurice': 'Omurice',
  'ramyeon-upgrade': 'Ramyeon Upgrade',
  'samgyeopsal': 'Samgyeopsal',
  'samgyetang': 'Samgyetang',
  'sigeumchi-namul': 'Sigeumchi Namul',
  'sogogi-muguk': 'Sogogi Muguk',
  'soondae-bokkeum': 'Soondae Bokkeum',
  'spinach-doenjang-soup': 'Spinach Doenjang Soup',
  'ssamjang-veggie-bowl': 'Ssamjang Veggie Bowl',
  'steamed-egg': 'Steamed Egg',
  'sukju-namul': 'Sukju Namul',
  'sundae-tteokbokki': 'Sundae Tteokbokki',
  'sundubu-dupbap': 'Sundubu Dupbap',
  'sundubu-jjigae': 'Sundubu Jjigae',
  'tteok-ramen': 'Tteok Ramen',
  'tteokbokki': 'Tteokbokki',
  'tuna-mayo-rice-bowl': 'Tuna Mayo Rice Bowl',
  'twigim': 'Twigim',
  'yukgaejang': 'Yukgaejang',
  'altang': 'Altang',
  'anchovy-noodle-soup': 'Anchovy Noodle Soup',
  'altang': 'Altang',
}

// 파일명 파싱: { slug, type, stepOrder }
function parseFilename(filename) {
  const base = filename.replace(/\.png$/, '')

  const stepMatch = base.match(/^(.+)-step(\d+)$/)
  if (stepMatch) {
    return { slug: stepMatch[1], type: 'step', stepOrder: parseInt(stepMatch[2]) }
  }

  const doneMatch = base.match(/^(.+)-done$/)
  if (doneMatch) {
    return { slug: doneMatch[1], type: 'done', stepOrder: null }
  }

  return null
}

async function main() {
  // 1. recipes 전체 로드
  const { data: recipes, error: rErr } = await supabase
    .from('recipes')
    .select('id, name_en')
  if (rErr) throw new Error(`recipes 로드 실패: ${rErr.message}`)

  const recipeMap = {}   // name_en → id
  recipes.forEach(r => { recipeMap[r.name_en] = r.id })
  console.log(`✅ recipes ${recipes.length}개 로드`)

  // 2. recipe_steps 전체 로드
  const { data: steps, error: sErr } = await supabase
    .from('recipe_steps')
    .select('id, recipe_id, step_order')
  if (sErr) throw new Error(`recipe_steps 로드 실패: ${sErr.message}`)

  // stepMap[recipe_id][step_order] = step_id
  const stepMap = {}
  steps.forEach(s => {
    if (!stepMap[s.recipe_id]) stepMap[s.recipe_id] = {}
    stepMap[s.recipe_id][s.step_order] = s.id
  })
  console.log(`✅ recipe_steps ${steps.length}개 로드`)

  // 3. 파일 목록
  const files = readdirSync(IMAGE_DIR).filter(f => f.endsWith('.png'))
  console.log(`\n📦 ${files.length}개 파일 DB 업데이트 시작...\n`)

  let doneCount = 0
  let stepCount = 0
  let processed = 0
  const failed = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const imageUrl = `${BUCKET_URL}/${file}`
    const parsed = parseFilename(file)

    if (!parsed) {
      failed.push({ file, reason: '파일명 파싱 실패' })
      processed++
      continue
    }

    const nameEn = SLUG_MAP[parsed.slug]
    if (!nameEn) {
      failed.push({ file, reason: `슬러그 매핑 없음: "${parsed.slug}"` })
      processed++
      continue
    }

    const recipeId = recipeMap[nameEn]
    if (!recipeId) {
      failed.push({ file, reason: `DB에 레시피 없음: "${nameEn}"` })
      processed++
      continue
    }

    if (parsed.type === 'done') {
      // recipes.hero_image_url 업데이트
      const { error } = await supabase
        .from('recipes')
        .update({ hero_image_url: imageUrl })
        .eq('id', recipeId)
      if (error) {
        failed.push({ file, reason: `recipes 업데이트 오류: ${error.message}` })
      } else {
        doneCount++
      }
    } else {
      // recipe_steps.image_url 업데이트
      const stepId = stepMap[recipeId]?.[parsed.stepOrder]
      if (!stepId) {
        failed.push({ file, reason: `step 없음: ${nameEn} step_order=${parsed.stepOrder}` })
        processed++
        continue
      }
      const { error } = await supabase
        .from('recipe_steps')
        .update({ image_url: imageUrl })
        .eq('id', stepId)
      if (error) {
        failed.push({ file, reason: `recipe_steps 업데이트 오류: ${error.message}` })
      } else {
        stepCount++
      }
    }

    processed++

    if ((i + 1) % 50 === 0 || i + 1 === files.length) {
      console.log(`  [${i + 1}/${files.length}] hero: ${doneCount}개, steps: ${stepCount}개, 실패: ${failed.length}개`)
    }
  }

  console.log(`\n🎉 완료!`)
  console.log(`   hero_image_url 업데이트: ${doneCount}개`)
  console.log(`   step image_url 업데이트: ${stepCount}개`)
  console.log(`   실패: ${failed.length}개`)

  if (failed.length > 0) {
    console.log('\n❌ 매핑 실패 목록:')
    failed.forEach(f => console.log(`  - ${f.file}: ${f.reason}`))
  }
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})
