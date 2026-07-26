'use client'
import { useRouter } from 'next/navigation'

const SELECTED_DISH = {
  name: 'Bulgogi',
  cookingTime: '30 min',
  difficulty: 'Easy',
  emoji: '🥩',
}

export default function WantToCookCard() {
  const router = useRouter()

  return (
    <div style={{
      margin: '0 16px 12px',
      backgroundColor: '#FDF5EE',
      borderRadius: 20,
      padding: '20px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      border: '1px solid #F0E0D0',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            backgroundColor: '#FAE8D8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2Z" stroke="#C4622D" strokeWidth="1.5" fill="none"/>
              <path d="M8 22H16M10 14V22M14 14V22" stroke="#C4622D" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 22,
            fontWeight: 700,
            color: '#1A1A1A',
            margin: 0,
            lineHeight: 1.2,
          }}>
            I Want to<br />Cook
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            color: '#6B6B6B',
            margin: '6px 0 0',
          }}>
            Choose a dish you want<br />and get what you need.
          </p>
        </div>

        <div style={{
          width: 120,
          height: 120,
          borderRadius: 12,
          backgroundColor: '#F5E8D8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 52,
          flexShrink: 0,
        }}>
          🍜
        </div>
      </div>

      <div style={{
        marginTop: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        border: '1px solid #F0E0D0',
      }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          backgroundColor: '#F5E8D8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          flexShrink: 0,
        }}>
          {SELECTED_DISH.emoji}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 15,
            fontWeight: 600,
            color: '#1A1A1A',
            margin: 0,
          }}>
            {SELECTED_DISH.name}
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6B6B6B' }}>
              ⏱ {SELECTED_DISH.cookingTime}
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6B6B6B' }}>
              📊 {SELECTED_DISH.difficulty}
            </span>
          </div>
        </div>
        <button
          onClick={() => router.push('/dishes')}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            color: '#C4622D',
            fontWeight: 600,
            background: 'none',
            border: '1.5px solid #C4622D',
            borderRadius: 10,
            padding: '6px 12px',
            cursor: 'pointer',
          }}
        >
          Change
        </button>
      </div>

      <button
        onClick={() => router.push('/recipes/bulgogi')}
        style={{
          marginTop: 12,
          width: '100%',
          padding: '16px',
          backgroundColor: '#C4622D',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: 14,
          fontFamily: 'Inter, sans-serif',
          fontSize: 15,
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        📖 View Recipe
      </button>
    </div>
  )
}
