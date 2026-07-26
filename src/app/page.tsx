import BottomNav from '@/components/layout/BottomNav'
import HaveIngredientsCard from '@/components/home/HaveIngredientsCard'
import WantToCookCard from '@/components/home/WantToCookCard'
import PopularDishes from '@/components/home/PopularDishes'

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#F5F0E8', minHeight: '100vh', paddingBottom: 100 }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '52px 20px 16px',
      }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" fill="#1A1A1A"/>
            <path d="M18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#1A1A1A"/>
          </svg>
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="#1A1A1A" strokeWidth="1.5"/>
            <path d="M4 20C4 17 7.58 14 12 14C16.42 14 20 17 20 20" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </header>

      <div style={{ padding: '0 20px 20px' }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 36,
          fontWeight: 700,
          color: '#1A1A1A',
          margin: 0,
          lineHeight: 1.1,
        }}>
          K-Pantry
        </h1>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 14,
          color: '#6B6B6B',
          margin: '4px 0 0',
        }}>
          Cook Korean with What You Have.
        </p>
      </div>

      <HaveIngredientsCard />
      <WantToCookCard />
      <PopularDishes />

      <BottomNav />
    </div>
  )
}
