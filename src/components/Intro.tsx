'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)

  const stableOnComplete = useCallback(onComplete, [onComplete])

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 3000),
      setTimeout(() => stableOnComplete(), 3800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [stableOnComplete])

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {phase >= 1 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 0.8], opacity: [0, 1, 0.6] }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="absolute w-32 h-32 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
          )}

          {phase >= 2 && (
            <motion.h1
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
              animate={
                phase === 3
                  ? { opacity: 0, scale: 1.5, filter: 'blur(30px)', y: -20 }
                  : { opacity: 1, scale: 1, filter: 'blur(0px)' }
              }
              transition={{ duration: phase === 3 ? 0.8 : 0.5, ease: "easeOut" as const }}
              className="font-sora text-[120px] md:text-[180px] font-bold text-white relative z-10"
              style={{
                textShadow: '0 0 80px rgba(59,130,246,0.8), 0 0 30px rgba(59,130,246,0.4)',
                letterSpacing: '-0.04em',
              }}
            >
              AB
            </motion.h1>
          )}

          {phase >= 2 && (
            <>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: [0, 1, 0], opacity: [0, 0.4, 0] }}
                  transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" as const }}
                  className="absolute h-px w-40 origin-left"
                  style={{
                    background: 'linear-gradient(to right, rgba(59,130,246,0.8), transparent)',
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
