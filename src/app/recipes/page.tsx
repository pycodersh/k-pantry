'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import BottomNav from '@/components/layout/BottomNav'
import ExploreView from '@/components/recipes/ExploreView'
import PantryResultsView from '@/components/recipes/PantryResultsView'

function RecipesContent() {
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode')
  const isPantryMode = mode === 'pantry'

  return (
    <div style={{ backgroundColor: '#F5F0E8', minHeight: '100vh', paddingBottom: 100 }}>
      {isPantryMode ? <PantryResultsView /> : <ExploreView />}
      <BottomNav />
    </div>
  )
}

export default function RecipesPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9E9E9E' }}>Loading...</p>
      </div>
    }>
      <RecipesContent />
    </Suspense>
  )
}
