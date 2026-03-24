'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef, useCallback, MouseEvent as ReactMouseEvent } from 'react'
import type { Variants } from 'framer-motion'
import Image from 'next/image'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
}

const delayedItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 } }
}

const ROLES = ['أحوّل الأفكار إلى أنظمة', 'أبني ما يصعب تقليده', 'أتمتة · AI · نتائج']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const magnetRef = useRef<HTMLDivElement>(null)
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(i => (i + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const handleEnter = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMagnetMove = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
    const el = magnetRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setMagnetPos({ x: (e.clientX - cx) * 0.35, y: (e.clientY - cy) * 0.35 })
  }, [])

  return (
    <section dir="rtl" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized: Use Next.js Image instead of Vimeo iframe */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-fallback.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
      </div>

      <div
        className="absolute inset-0 z-[1]"
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
          Abdulrahman
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
          onMouseLeave={() => setMagnetPos({ x: 0, y: 0 })}
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
