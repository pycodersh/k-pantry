'use client'
import { useRouter } from 'next/navigation'

const POPULAR_DISHES = [
  { name: 'Kimchi Jjigae', desc: 'Spicy Kimchi Stew', time: '25 min', emoji: '🍲' },
  { name: 'Bibimbap', desc: 'Mixed Rice Bowl', time: '20 min', emoji: '🥗' },
  { name: 'Tteokbokki', desc: 'Spicy Rice Cakes', time: '20 min', emoji: '🍢' },
  { name: 'Japchae', desc: 'Stir-fried Glass Noodles', time: '25 min', emoji: '🍜' },
]

export default function PopularDishes() {
  const router = useRouter()

  return (
    <section style={{ padding: '8px 16px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 16,
          fontWeight: 600,
          color: '#1A1A1A',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          🔥 Popular Korean Dishes
        </h3>
        <button
          onClick={() => router.push('/recipes')}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            color: '#6B6B6B',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          View all
        </button>
      </div>

      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
        {POPULAR_DISHES.map((dish) => (
          <div
            key={dish.name}
            onClick={() => router.push(`/recipes/${dish.name.toLowerCase().replace(/ /g, '-')}`)}
            style={{
              flexShrink: 0,
              width: 140,
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid #E8E0D0',
              cursor: 'pointer',
            }}
          >
            <div style={{
              height: 100,
              backgroundColor: '#F5E8D8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
            }}>
              {dish.emoji}
            </div>
            <div style={{ padding: '10px 10px 12px' }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                color: '#1A1A1A',
                margin: 0,
              }}>
                {dish.name}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                color: '#9E9E9E',
                margin: '2px 0 4px',
              }}>
                {dish.desc}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                color: '#6B6B6B',
                margin: 0,
              }}>
                ⏱ {dish.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
