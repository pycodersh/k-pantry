import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'K-Pantry',
  description: 'Cook Korean with What You Have.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: '#F5F0E8', margin: 0 }}>
        <main style={{ maxWidth: 430, margin: '0 auto', minHeight: '100vh', position: 'relative' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
