import { createClient } from '@supabase/supabase-js'

const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const KEYWORD_OVERRIDES = {
  'Kimchi Fried Rice':   'kimchi bokkeumbap korean fried rice',
  'Bibimbap':            'bibimbap korean rice bowl',
  'Gimbap':              'gimbap korean rice rolls',
  'Japchae':             'japchae korean glass noodles',
  'Tteokbokki':          'tteokbokki spicy rice cakes',
  'Kimchi Jjigae':       'kimchi jjigae korean stew',
  'Doenjang Jjigae':     'doenjang jjigae korean soybean stew',
  'Sundubu Jjigae':      'sundubu jjigae soft tofu stew',
  'Budae Jjigae':        'budae jjigae army stew',
  'Samgyetang':          'samgyetang korean ginseng chicken soup',
  'Galbitang':           'galbitang korean short rib soup',
  'Yukgaejang':          'yukgaejang spicy beef soup',
  'Bulgogi':             'bulgogi korean marinated beef',
  'Samgyeopsal':         'samgyeopsal korean pork belly bbq',
  'Dakgalbi':            'dakgalbi spicy korean chicken',
  'Dak Gangjeong':       'dak gangjeong korean fried chicken',
  'Jjajangmyeon':        'jjajangmyeon black bean noodles',
  'Jjamppong':           'jjamppong korean seafood noodle soup',
  'Mul Naengmyeon':      'naengmyeon korean cold noodles',
  'Hotteok':             'hotteok korean sweet pancake',
  'Gunmandu':            'mandu korean dumplings',
  'Homemade Kimchi':     'homemade kimchi jar fermented',
  'Galbi Jjim':          'galbijjim korean braised short ribs',
  'Andong Jjimdak':      'jjimdak korean braised chicken',
}

function getKeyword(name_en) {
  return KEYWORD_OVERRIDES[name_en] ?? `korean ${name_en.toLowerCase()}`
}

async function getUnsplashImage(query) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
  })
  if (res.status === 429) throw new Error('429 rate limit')
  if (!res.ok) throw new Error(`Unsplash ${res.status}`)
  const data = await res.json()
  return data.results[0]?.urls?.regular ?? null
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function main() {
  const { data: recipes, error } = await supabase
    .from('recipes')
    .select('id, name_en')
    .is('hero_image_url', null)
    .order('name_en')

  if (error) { console.error('DB error:', error.message); process.exit(1) }

  console.log(`📸 hero_image_url 없는 레시피: ${recipes.length}개\n`)

  let done = 0, skipped = 0, failed = 0

  for (const recipe of recipes) {
    const keyword = getKeyword(recipe.name_en)
    try {
      const imgUrl = await getUnsplashImage(keyword)
      if (imgUrl) {
        await supabase.from('recipes').update({ hero_image_url: imgUrl }).eq('id', recipe.id)
        console.log(`  ✅ ${recipe.name_en}`)
        done++
      } else {
        console.log(`  ⚠️  No result — ${recipe.name_en} (${keyword})`)
        skipped++
      }
      await sleep(1200)
    } catch (err) {
      if (err.message.includes('429')) {
        console.log(`\n⏸  Rate limit! ${done}개 완료. 1시간 후 재실행하면 남은 것만 처리됩니다.`)
        process.exit(0)
      }
      console.error(`  ❌ ${recipe.name_en}: ${err.message}`)
      failed++
      await sleep(1200)
    }
  }

  console.log(`\n🎉 완료 — 업데이트: ${done}, 결과없음: ${skipped}, 오류: ${failed}`)
}

main()
