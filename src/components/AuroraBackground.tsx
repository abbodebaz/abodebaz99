'use client'

export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Single subtle gradient - no animations, no blur = zero GPU cost */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
        }}
      />
    </div>
  )
}
