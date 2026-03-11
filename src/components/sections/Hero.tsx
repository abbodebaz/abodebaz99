'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import type { Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
}

const delayedItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.6 } }
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMouse = useCallback((e: MouseEvent) => {
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59,130,246,0.05), transparent 40%)`
    }
  }, [])

  useEffect(() => {
    setMounted(true)
    setTimeout(() => setVideoReady(true), 800)
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [handleMouse])

  const particles = useMemo(() => {
    function seededRandom(seed: number) {
      const x = Math.sin(seed + 1) * 10000
      return x - Math.floor(x)
    }
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${seededRandom(i * 3) * 100}%`,
      top: `${seededRandom(i * 3 + 1) * 100}%`,
      delay: seededRandom(i * 3 + 2) * 5,
      duration: 3 + seededRandom(i * 7) * 4,
    }))
  }, [])

  const handleEnter = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section dir="rtl" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-fallback.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {videoReady && (
          <iframe
            src="https://player.vimeo.com/video/1172103667?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1&controls=0&transparent=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '177.78vh',
              minWidth: '100%',
              height: '56.25vw',
              minHeight: '100%',
            }}
            title="Hero Background"
          />
        )}
      </div>

      <div
        className="absolute inset-0 z-[1] bg-[#00000014]"
        style={{ background: 'rgba(10,10,10,0.58)' }}
      />

      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.4) 40%, transparent 70%)',
        }}
      />

      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, transparent 30%)',
        }}
      />

      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />

      <div ref={glowRef} className="pointer-events-none fixed inset-0 z-[3] transition-opacity duration-300" />

      {mounted && particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-[2px] h-[2px] rounded-full z-[3]"
          style={{ left: p.left, top: p.top, background: 'rgba(59,130,246,0.6)' }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ paddingTop: '18vh' }}
      >
        <motion.h1
          variants={delayedItem}
          className="font-sora font-bold text-white mb-6 leading-tight"
          style={{ direction: 'ltr', fontSize: 'clamp(32px, 5vw, 64px)' }}
        >
          Abdulrahman Bazarah
        </motion.h1>

        <motion.p
          variants={delayedItem}
          className="font-arabic text-[#9CA3AF]"
          style={{ direction: 'rtl', fontFamily: 'var(--font-arabic)', letterSpacing: 'normal' }}
        >
          قائد تطوير أعمال &middot; مهندس أنظمة &middot; باني أتمتة و AI
        </motion.p>

        <motion.div
          variants={delayedItem}
          className="flex items-center gap-2 justify-center mt-6 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-arabic text-[#4B5563] text-xs tracking-widest" style={{ direction: 'rtl' }}>
            متاح لمشاريع جديدة
          </span>
        </motion.div>

        <motion.div variants={delayedItem} className="relative inline-block">
          <button
            onClick={handleEnter}
            className="font-arabic relative border border-accent/50 bg-black/40 backdrop-blur-sm text-white px-9 py-3.5 tracking-[0.08em] text-sm transition-all duration-300 hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            style={{ direction: 'rtl' }}
          >
            اكتشف أكثر &larr;
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-[#4B5563]" size={28} />
      </motion.div>
    </section>
  )
}
