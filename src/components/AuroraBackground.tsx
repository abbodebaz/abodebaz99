'use client'

export default function AuroraBackground() {
  return (
    <>
      <style jsx global>{`
        @keyframes aurora1 {
          0%   { transform: translate(0%, 0%) scale(1); }
          33%  { transform: translate(8%, -12%) scale(1.15); }
          66%  { transform: translate(-6%, 8%) scale(0.95); }
          100% { transform: translate(0%, 0%) scale(1); }
        }
        @keyframes aurora2 {
          0%   { transform: translate(0%, 0%) scale(1.1); }
          33%  { transform: translate(-10%, 6%) scale(0.9); }
          66%  { transform: translate(7%, -10%) scale(1.2); }
          100% { transform: translate(0%, 0%) scale(1.1); }
        }
        @keyframes aurora3 {
          0%   { transform: translate(0%, 0%) scale(0.95); }
          50%  { transform: translate(5%, 10%) scale(1.1); }
          100% { transform: translate(0%, 0%) scale(0.95); }
        }
        @keyframes aurora4 {
          0%   { transform: translate(0%, 0%) scale(1); opacity: 0.35; }
          40%  { transform: translate(-8%, -5%) scale(1.15); opacity: 0.5; }
          80%  { transform: translate(6%, 8%) scale(0.9); opacity: 0.3; }
          100% { transform: translate(0%, 0%) scale(1); opacity: 0.35; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* Blob 1 — blue, top-left */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '70vw',
            height: '70vw',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, transparent 65%)',
            filter: 'blur(60px)',
            animation: 'aurora1 18s ease-in-out infinite',
          }}
        />

        {/* Blob 2 — purple, top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-15%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.14) 0%, transparent 65%)',
            filter: 'blur(80px)',
            animation: 'aurora2 22s ease-in-out infinite',
            animationDelay: '-7s',
          }}
        />

        {/* Blob 3 — cyan, mid */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '20%',
            width: '55vw',
            height: '55vw',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.10) 0%, transparent 65%)',
            filter: 'blur(90px)',
            animation: 'aurora3 26s ease-in-out infinite',
            animationDelay: '-12s',
          }}
        />

        {/* Blob 4 — blue, bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            right: '5%',
            width: '50vw',
            height: '50vw',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 65%)',
            filter: 'blur(70px)',
            animation: 'aurora4 20s ease-in-out infinite',
            animationDelay: '-4s',
          }}
        />
      </div>
    </>
  )
}
