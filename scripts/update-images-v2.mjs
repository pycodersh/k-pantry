import { createClient } from '@supabase/supabase-js'

const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const INGREDIENT_KEYWORDS = {
  'Gochugaru': 'korean red pepper flakes',
  'Gochujang': 'korean red pepper paste',
  'Doenjang': 'korean soybean paste',
  'Rice Cake': 'tteok korean rice cake',
  'Anchovy Broth': 'anchovy stock',
  'Perilla Oil': 'perilla seeds oil',
  'Glass Noodles': 'korean glass noodles',
  'Ssamjang': 'korean bbq dipping sauce',
  'Buckwheat Noodles': 'naengmyeon noodles',
  'Black Bean Paste': 'chinese black bean paste',
  'Bellflower Root': 'doraji korean root',
  'Soybean Pulp': 'white bean paste',
  'Soondae': 'korean blood sausage',
  'Fish Roe': 'salmon fish roe',
  'Ginseng': 'korean ginseng root',
  'Jujube': 'red jujube dates',
  'Mung Bean Sprouts': 'mung bean sprouts',
  'Pork Belly': 'pork belly sliced',
  'Whole Chicken': 'whole raw chicken',
  'Oxtail': 'beef oxtail',
  'Dumpling Wrappers': 'dumpling gyoza wrappers',
  'Black Soybeans': 'black soybeans dried',
  'Pickled Radish': 'yellow pickled daikon',
  'Crab Stick': 'imitation crab stick',
  'Beef Broth': 'beef broth soup',
  'Soy Milk': 'plain soy milk',
}

const RECIPE_KEYWORDS = {
  'Homemade Kimchi': 'homemade kimchi jar',
  'Kongbiji Jjigae': 'kongbiji soybean stew',
  'Altang': 'korean fish roe soup',
  'Kkori Gomtang': 'korean oxtail soup',
  'Haejang Guk': 'korean hangover soup',
  'Samgyetang': 'korean ginseng chicken soup samgyetang',
  'Mul Naengmyeon': 'korean cold noodles naengmyeon',
  'Bibim Naengmyeon': 'korean spicy cold noodles',
  'Kongguksu': 'korean cold soy milk noodles',
  'Jjamppong': 'korean seafood spicy noodle soup',
  'Jjajangmyeon': 'korean black bean noodles',
  'Kalguksu': 'korean knife cut noodles soup',
  'Gunmandu': 'korean pan fried dumplings',
  'Hotteok': 'korean hotteok sweet pancake',
  'Eomuk Tang': 'korean fish cake skewer soup',
  'Dak Gangjeong': 'korean crispy fried chicken gangjeong',
  'Sundae Tteokbokki': 'korean tteokbokki soondae',
  'Gimbap': 'korean gimbap rice rolls',
  'Omurice': 'korean omurice rice omelette',
  'Tuna Mayo Rice Bowl': 'tuna mayo rice bowl',
  'Curry Rice': 'korean curry rice',
  'Samgyeopsal': 'korean pork belly bbq samgyeopsal',
  'Haemul Pajeon': 'korean seafood pancake pajeon',
  'Dwaeji Galbi': 'korean marinated pork ribs',
  'Galbi Jjim': 'korean braised beef short ribs',
}

async function getUnsplashImage(query) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=squarish`
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Unsplash error ${res.status}: ${text}`)
  }
  const data = await res.json()
  return data.results[0]?.urls?.regular ?? null
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function updateNewIngredients() {
  console.log('\n📸 Updating new ingredient images...')

  const { data: ingredients } = await supabase
    .from('ingredients')
    .select('id, name')
    .is('image_url', null)

  console.log(`Found ${ingredients?.length ?? 0} ingredients without images`)

  let count = 0
  for (const ing of (ingredients ?? [])) {
    const keyword = INGREDIENT_KEYWORDS[ing.name] ?? ing.name.toLowerCase()
    try {
      const url = await getUnsplashImage(keyword)
      if (url) {
        await supabase.from('ingredients').update({ image_url: url }).eq('id', ing.id)
        console.log(`  ✅ ${ing.name} → ${keyword}`)
      } else {
        console.log(`  ⚠️  No image found for ${ing.name}`)
      }
      count++
      await sleep(1200)
    } catch (err) {
      if (err.message.includes('429')) {
        console.log(`\n⏸️  Rate limit reached after ${count} requests. Wait 1 hour and run again.`)
        process.exit(0)
      }
      console.error(`  ❌ ${ing.name}:`, err.message)
    }
  }
}

async function updateNewRecipes() {
  console.log('\n📸 Updating new recipe images...')

  const { data: recipes } = await supabase
    .from('recipes')
    .select('id, name_en')
    .is('hero_image_url', null)

  console.log(`Found ${recipes?.length ?? 0} recipes without images`)

  let count = 0
  for (const recipe of (recipes ?? [])) {
    const keyword = RECIPE_KEYWORDS[recipe.name_en] ?? `korean ${recipe.name_en.toLowerCase()}`
    try {
      const url = await getUnsplashImage(keyword)
      if (url) {
        await supabase.from('recipes').update({ hero_image_url: url }).eq('id', recipe.id)
        console.log(`  ✅ ${recipe.name_en} → ${keyword}`)
      } else {
        console.log(`  ⚠️  No image found for ${recipe.name_en}`)
      }
      count++
      await sleep(1200)
    } catch (err) {
      if (err.message.includes('429')) {
        console.log(`\n⏸️  Rate limit reached after ${count} requests. Wait 1 hour and run again.`)
        process.exit(0)
      }
      console.error(`  ❌ ${recipe.name_en}:`, err.message)
    }
  }
}

async function main() {
  await updateNewIngredients()
  await updateNewRecipes()
  console.log('\n🎉 All done!')
}

main()
