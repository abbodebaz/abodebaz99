'use client'
import { motion } from 'framer-motion'
import { Linkedin, MessageCircle, Mail } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0B0F19 0%, #0D1525 100%)',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 opacity-60"
        style={{ background: 'linear-gradient(to right, transparent, #3B82F6, transparent)' }}
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-sora text-[120px] md:text-[200px] font-bold opacity-[0.015] whitespace-nowrap"
          style={{ color: 'white' }}
        >
          LET&rsquo;S BUILD
        </span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <motion.h2 variants={fadeInUp} className="font-sora text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          The future belongs to companies<br />that build better systems.
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-[#9CA3AF] text-lg mb-12">
          Let&rsquo;s talk about what&rsquo;s broken in your business — and how to fix it.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <motion.a
            href="https://linkedin.com/in/abdulrahmanbazarah"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg font-medium text-sm tracking-wide transition-shadow btn-glow"
          >
            <Linkedin size={18} /> LinkedIn
          </motion.a>

          <motion.a
            href="https://wa.me/966XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3.5 border border-accent text-white rounded-lg font-medium text-sm tracking-wide bg-transparent transition-all hover:bg-accent/10"
          >
            <MessageCircle size={18} /> WhatsApp
          </motion.a>

          <motion.a
            href="mailto:hello@bazarah.dev"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3.5 text-[#9CA3AF] hover:text-white rounded-lg font-medium text-sm tracking-wide transition-colors"
          >
            <Mail size={18} /> Email
          </motion.a>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-[#4B5563] text-sm">
          Usually responds within 24 hours.
        </motion.p>
      </motion.div>
    </section>
  )
}
