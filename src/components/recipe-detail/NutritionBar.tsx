interface NutritionBarProps {
  calories: number
  proteinG: number
  carbsG: number
  fatG: number
  servings: number
}

const NUTRITION_ITEMS = [
  { key: 'calories', label: 'Per serving', icon: '🔥', unit: 'kcal', color: '#C4622D' },
  { key: 'proteinG', label: 'Protein', icon: '💪', unit: 'g', color: '#2D5016' },
  { key: 'carbsG', label: 'Carbs', icon: '🌾', unit: 'g', color: '#B8860B' },
  { key: 'fatG', label: 'Fat', icon: '💧', unit: 'g', color: '#6B6B6B' },
  { key: 'servings', label: 'Servings', icon: '🍽', unit: '', color: '#4A7C2F' },
]

export default function NutritionBar({
  calories, proteinG, carbsG, fatG, servings
}: NutritionBarProps) {
  const values: Record<string, number> = { calories, proteinG, carbsG, fatG, servings }

  return (
    <div style={{
      margin: '0 16px',
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: '16px',
      border: '1px solid #E8E0D0',
      display: 'flex',
      justifyContent: 'space-between',
      transform: 'translateY(-20px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    }}>
      {NUTRITION_ITEMS.map(item => (
        <div key={item.key} style={{ textAlign: 'center', flex: 1 }}>
          <span style={{ fontSize: 20 }}>{item.icon}</span>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 15,
            fontWeight: 700,
            color: item.color,
            margin: '4px 0 2px',
          }}>
            {values[item.key]}{item.unit}
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            color: '#9E9E9E',
            margin: 0,
          }}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}
