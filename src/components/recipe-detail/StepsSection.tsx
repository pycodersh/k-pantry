interface Step {
  id: string
  step_order: number
  title: string
  description: string
  image_url?: string
}

interface StepsSectionProps {
  steps: Step[]
}

export default function StepsSection({ steps }: StepsSectionProps) {
  return (
    <section style={{ padding: '0 16px 20px' }}>
      <h2 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 18,
        fontWeight: 700,
        color: '#1A1A1A',
        margin: '0 0 16px',
      }}>
        Steps
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {steps.map((step) => (
          <div
            key={step.id}
            style={{
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
            }}
          >
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#F5F0E8',
              border: '1.5px solid #E8E0D0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              fontWeight: 600,
              color: '#6B6B6B',
              flexShrink: 0,
              marginTop: 2,
            }}>
              {step.step_order}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: 12,
                  backgroundColor: '#F5E8D8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  flexShrink: 0,
                  overflow: 'hidden',
                }}>
                  {step.image_url ? (
                    <img src={step.image_url} alt={step.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    (['🔪', '🥣', '🍳', '🍽'][step.step_order - 1] ?? '🍳')
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#1A1A1A',
                    margin: '0 0 4px',
                  }}>
                    {step.title}
                  </p>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 13,
                    color: '#6B6B6B',
                    margin: 0,
                    lineHeight: 1.5,
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {step.step_order < steps.length && (
                <div style={{
                  marginTop: 16,
                  height: 1,
                  backgroundColor: '#F0EAD8',
                }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
