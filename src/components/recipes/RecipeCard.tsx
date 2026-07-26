'use client'
import { useRouter } from 'next/navigation'

interface RecipeCardProps {
  id: string
  nameEn: string
  nameKo?: string
  description?: string
  cookingTimeMin?: number
  difficulty?: string
  calories?: number
  heroImageUrl?: string
  missingIngredients?: string[]
  variant?: 'default' | 'featured' | 'horizontal' | 'pantry'
}

export default function RecipeCard({
  id, nameEn, nameKo, description,
  cookingTimeMin, difficulty, calories,
  heroImageUrl, missingIngredients = [],
  variant = 'default',
}: RecipeCardProps) {
  const router = useRouter()

  if (variant === 'pantry') {
    return (
      <div
        onClick={() => router.push(`/recipes/${id}`)}
        style={{
          flexShrink: 0,
          width: 160,
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid #E8E0D0',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        {missingIngredients.length > 0 && (
          <div style={{
            position: 'absolute',
            top: 8,
            left: 8,
            zIndex: 2,
            backgroundColor: 'rgba(255,255,255,0.92)',
            borderRadius: 20,
            padding: '3px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            border: '1px solid #E8E0D0',
          }}>
            <span style={{ fontSize: 12 }}>+</span>
            {missingIngredients.map((ing, i) => (
              <span key={i} style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                color: '#C4622D',
              }}>
                {ing}{i < missingIngredients.length - 1 ? ' +' : ''}
              </span>
            ))}
          </div>
        )}

        <div style={{
          height: 110,
          backgroundColor: '#F5E8D8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 44,
        }}>
          🍲
        </div>

        <div style={{ padding: '10px 10px 12px' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            fontWeight: 600,
            color: '#1A1A1A',
            margin: 0,
          }}>
            {nameEn}
          </p>
          <div style={{ display: 'flex', gap: 6, marginTop: 6, alignItems: 'center' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6B6B6B' }}>
              ⏱ {cookingTimeMin} min
            </span>
            {difficulty && (
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                color: difficulty === 'easy' ? '#2D5016' : '#C4622D',
                fontWeight: 500,
              }}>
                📊 {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'horizontal') {
    return (
      <div
        onClick={() => router.push(`/recipes/${id}`)}
        style={{
          display: 'flex',
          gap: 12,
          backgroundColor: '#FFFFFF',
          borderRadius: 14,
          padding: '12px',
          border: '1px solid #E8E0D0',
          cursor: 'pointer',
          alignItems: 'center',
        }}
      >
        <div style={{
          width: 64,
          height: 64,
          borderRadius: 10,
          backgroundColor: '#F5E8D8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          flexShrink: 0,
        }}>
          🍲
        </div>
        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            color: '#1A1A1A',
            margin: 0,
          }}>
            {nameEn}
          </p>
          {nameKo && (
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: '#9E9E9E',
              margin: '2px 0 4px',
            }}>
              {nameKo}
            </p>
          )}
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6B6B6B' }}>
              ⏱ {cookingTimeMin} min
            </span>
            {calories && (
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6B6B6B' }}>
                🔥 {calories} kcal
              </span>
            )}
          </div>
        </div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
          <path d="M4 3H16C16.55 3 17 3.45 17 4V18L10 14.5L3 18V4C3 3.45 3.45 3 4 3Z"
            stroke="#9E9E9E" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
    )
  }

  return (
    <div
      onClick={() => router.push(`/recipes/${id}`)}
      style={{
        flexShrink: 0,
        width: 150,
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
        fontSize: 40,
      }}>
        🍲
      </div>
      <div style={{ padding: '10px 10px 12px' }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 13,
          fontWeight: 600,
          color: '#1A1A1A',
          margin: 0,
        }}>
          {nameEn}
        </p>
        {description && (
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            color: '#9E9E9E',
            margin: '2px 0 4px',
          }}>
            {description}
          </p>
        )}
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6B6B6B' }}>
            ⏱ {cookingTimeMin} min
          </span>
          {calories && (
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6B6B6B' }}>
              🔥 {calories} kcal
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
