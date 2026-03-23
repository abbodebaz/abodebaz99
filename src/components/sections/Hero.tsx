'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useMemo, useState, useEffect, useRef, useCallback, MouseEvent as ReactMouseEvent } from 'react'
import type { Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
}

const delayedItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.6 } }
}

const ROLES = ['أحوّل الأفكار إلى أنظمة', 'أبني ما يصعب تقليده', 'أتمتة · AI · نتائج']

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const glowRef = useRef<HTMLDivElement>(null)
  const magnetRef = useRef<HTMLDivElement>(null)
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 })

  const handleMouse = useCallback((e: MouseEvent) => {
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(59,130,246,0.18), rgba(59,130,246,0.05) 40%, transparent 70%)`
    }
  }, [])

  useEffect(() => {
    setMounted(true)
    setTimeout(() => setVideoReady(true), 800)
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [handleMouse])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(i => (i + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

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

  const handleMagnetMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = magnetRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    setMagnetPos({ x: dx * 0.35, y: dy * 0.35 })
  }

  const handleMagnetLeave = () => {
    setMagnetPos({ x: 0, y: 0 })
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
          style={{ direction: 'ltr', fontSize: 'clamp(28px, 4.5vw, 64px)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          Abdulrahman Bazarah
        </motion.h1>

        <motion.div
          variants={delayedItem}
          style={{ minHeight: '1.8em', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-arabic"
              style={{
                direction: 'rtl',
                fontFamily: 'var(--font-arabic)',
                fontSize: 'clamp(15px, 1.8vw, 20px)',
                color: 'rgba(156,163,175,0.9)',
              }}
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={delayedItem}
          className="flex items-center gap-2 justify-center mt-6 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-arabic text-sm" style={{ direction: 'rtl', color: 'rgba(255,255,255,0.6)' }}>
            متاح لمشاريع جديدة
          </span>
        </motion.div>

        <motion.div
          ref={magnetRef}
          variants={delayedItem}
          className="relative inline-block"
          onMouseMove={handleMagnetMove}
          onMouseLeave={handleMagnetLeave}
          animate={{ x: magnetPos.x, y: magnetPos.y }}
          transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.5 }}
        >
          <button
            onClick={handleEnter}
            className="font-arabic relative border border-accent/50 bg-black/40 backdrop-blur-sm text-white px-9 py-3.5 tracking-[0.08em] text-sm transition-all duration-300 hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            style={{ direction: 'rtl', borderRadius: '100px' }}
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
        <ChevronDown className="text-white/40" size={28} />
      </motion.div>
    </section>
  )
}
