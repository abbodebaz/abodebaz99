'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useMemo, useState, useEffect } from 'react'

import type { Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
}

const delayedItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay: 1.6 } }
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const particles = useMemo(() => {
    function seededRandom(seed: number) {
      const x = Math.sin(seed + 1) * 10000
      return x - Math.floor(x)
    }
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${seededRandom(i * 3) * 100}%`,
      top: `${seededRandom(i * 3 + 1) * 100}%`,
      delay: seededRandom(i * 3 + 2) * 5,
      duration: 3 + seededRandom(i * 7) * 4,
    }))
  }, [])

  const handleEnter = () => {
    const el = document.querySelector('#journey')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {mounted && particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-[2px] h-[2px] rounded-full bg-accent"
          style={{ left: p.left, top: p.top, opacity: 0.3 }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p variants={item} className="text-[#9CA3AF] text-lg md:text-xl mb-2">
          Every company runs on systems.
        </motion.p>
        <motion.p variants={item} className="text-[#9CA3AF] text-lg md:text-xl mb-2">
          Most systems are broken.
        </motion.p>
        <motion.p variants={item} className="text-accent text-lg md:text-xl font-medium mb-12">
          My work is fixing them.
        </motion.p>

        <motion.h1
          variants={delayedItem}
          className="font-sora text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Abdulrahman Bazarah
        </motion.h1>

        <motion.p
          variants={delayedItem}
          className="text-[#9CA3AF] tracking-[0.2em] text-xs md:text-sm uppercase mb-12"
        >
          Business Development Leader · Systems Architect · AI & Automation Builder
        </motion.p>

        <motion.button
          variants={delayedItem}
          onClick={handleEnter}
          className="border border-accent bg-transparent text-white px-9 py-3.5 tracking-[0.08em] text-sm uppercase transition-all duration-300 hover:bg-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          Enter the Experience →
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-[#4B5563]" size={28} />
      </motion.div>
    </section>
  )
}
