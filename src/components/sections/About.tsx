'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const traits = [
  "أفكر بالأنظمة قبل الحلول",
  "أركّز على نتائج قابلة للقياس",
  "أحوّل الاستراتيجية إلى تنفيذ فعلي",
  "بنيت أنظمة تشغيل في أكثر من ٤ قطاعات",
]

export default function About() {
  return (
    <section id="about" dir="rtl" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-30"
        style={{ background: 'linear-gradient(to bottom, transparent, #3B82F6)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center md:justify-start md:order-2"
            style={{ perspective: '1000px' }}
          >
            <div className="relative">
              {/* Ambient glow */}
              <div
                className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)' }}
              />

              {/* 3D tilt wrapper */}
              <motion.div
                whileHover={{ rotateY: -6, rotateX: 4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image frame */}
                <div
                  className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(59,130,246,0.2)' }}
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Abdulrahman Bazarah"
                    fill
                    className="object-cover object-top"
                    priority
                    unoptimized
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)' }}
                  />

                  {/* Shine layer on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, transparent 50%, rgba(59,130,246,0.04) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>

                {/* Badge: +٤ قطاعات */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-5 -left-5 px-4 py-3 rounded-xl backdrop-blur-md"
                  style={{
                    background: 'rgba(10,10,10,0.9)',
                    border: '1px solid rgba(59,130,246,0.25)',
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(20px)',
                  }}
                >
                  <p className="text-white font-sora font-bold text-lg leading-none">+٤</p>
                  <p className="text-[#9CA3AF] text-xs mt-0.5 font-arabic" style={{ fontFamily: 'var(--font-arabic)' }}>قطاعات</p>
                </motion.div>

                {/* Badge: +٨ سنوات */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-5 -right-5 px-4 py-3 rounded-xl backdrop-blur-md"
                  style={{
                    background: 'rgba(10,10,10,0.9)',
                    border: '1px solid rgba(59,130,246,0.25)',
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(20px)',
                  }}
                >
                  <p className="text-white font-sora font-bold text-lg leading-none">+٨</p>
                  <p className="text-[#9CA3AF] text-xs mt-0.5 font-arabic" style={{ fontFamily: 'var(--font-arabic)' }}>سنوات</p>
                </motion.div>

                {/* Badge: متاح للعمل */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-4 -left-4 px-3 py-2 rounded-xl backdrop-blur-md flex items-center gap-2"
                  style={{
                    background: 'rgba(10,10,10,0.9)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(20px)',
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-green-400 text-xs font-medium font-arabic" style={{ fontFamily: 'var(--font-arabic)' }}>متاح للعمل</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-2 md:order-1"
          >
            <motion.span
              variants={fadeInUp}
              className="font-arabic inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4"
            >
              من أنا
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="font-arabic font-bold text-white mb-6"
              style={{
                direction: 'rtl',
                fontFamily: 'var(--font-arabic)',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                lineHeight: 1.5,
                letterSpacing: '-0.01em',
              }}
            >
              أبني الأنظمة،{' '}
              <span style={{ color: '#3B82F6' }}>لا أبيع الأفكار.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-arabic text-base leading-relaxed mb-8"
              style={{
                color: 'rgba(255,255,255,0.55)',
                direction: 'rtl',
                fontFamily: 'var(--font-arabic)',
                fontSize: '17px',
                lineHeight: 1.9,
                fontWeight: 400,
              }}
            >
              كل ما تتخيله قابل للبناء — هذا ما أؤمن به وأعمله.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-3">
              {traits.map((trait) => (
                <motion.li
                  key={trait}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <span className="font-arabic text-[#D1D5DB] text-sm" style={{ direction: 'rtl' }}>{trait}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
