'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, MessageCircle, Mail } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Contact() {
  const [imageReady, setImageReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setImageReady(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: '#060810' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {imageReady && (
          <img
            src="/images/contact-hero.jpg"
            alt="Contact background"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.5,
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      {/* Gradient overlay — keeps text readable but lets video breathe */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(6,8,16,0.65) 0%, rgba(6,8,16,0.55) 50%, rgba(6,8,16,0.75) 100%)',
        }}
      />

      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-[2]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.6), transparent)' }}
      />

      {/* Ambient blue glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] z-[2] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(59,130,246,0.2) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[2]" aria-hidden="true">
        <span
          className="font-sora font-black opacity-[0.025] whitespace-nowrap"
          style={{ fontSize: 'clamp(80px, 18vw, 220px)', color: 'white', letterSpacing: '-0.04em' }}
        >
          ابدأ
        </span>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        {/* Label */}
        <motion.span
          variants={fadeInUp}
          className="font-arabic inline-block text-xs uppercase tracking-[0.3em] text-accent mb-6"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          تواصل معي
        </motion.span>

        {/* Headline */}
        <motion.h2
          variants={fadeInUp}
          className="font-arabic font-bold text-white mb-6"
          style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: 'clamp(32px, 5.5vw, 72px)',
            lineHeight: 1.45,
            textShadow: '0 2px 40px rgba(0,0,0,0.5)',
          }}
        >
          فكرتك تستحق
          <br />
          <span style={{ color: '#3B82F6' }}>نظاماً حقيقياً.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          className="font-arabic text-white/60 text-lg mb-14 leading-relaxed"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          إذا حسيت إن شركتك تشتغل بجهد أكثر من اللازم — أنا من تبحث عنه.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          {/* Primary — LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/abdulrhman-bazarah/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center gap-3 px-10 py-4 rounded-2xl font-sora font-bold text-base text-white overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
              boxShadow: '0 0 40px rgba(59,130,246,0.45), 0 8px 32px rgba(0,0,0,0.4)',
              minWidth: '180px',
            }}
          >
            {/* shine sweep */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
              }}
            />
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </motion.a>

          {/* Secondary — WhatsApp */}
          <motion.a
            href="https://wa.me/966552898232"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center gap-3 px-10 py-4 rounded-2xl font-sora font-bold text-base text-white overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
              boxShadow: '0 0 40px rgba(34,197,94,0.35), 0 8px 32px rgba(0,0,0,0.4)',
              minWidth: '180px',
            }}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
              }}
            />
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </motion.a>

          {/* Ghost — Email */}
          <motion.a
            href="mailto:abodebaz@gmail.com"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-sora font-medium text-sm transition-colors duration-200"
            style={{
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Mail size={17} />
            <span>abodebaz@gmail.com</span>
          </motion.a>
        </motion.div>

        {/* Reply time */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block', boxShadow: '0 0 8px #22C55E' }} />
          <p className="font-arabic text-white/30 text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>
            عادةً أرد خلال ٢٤ ساعة
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
