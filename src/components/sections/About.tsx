'use client'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { useRef, useEffect, useState, useCallback } from 'react'

const traits = [
  "بدل ما الفريق يضيع وقته في شغل عادي، أتمتة الكل وأحرره يركز على المهم",
  "ما أقول خلاص الا لما أشوف الأرقام فعلاً تتحسن — بيانات حقيقية",
  "من أول ما أفهم المشكلة لما تشتغل الحل — أنا أتابع كل خطوة",
  "اشتغلت مع شركات في مجالات مختلفة جداً، فأنا فاهم التحديات",
]

function CountUp({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const steps = 40
    const increment = target / steps
    const interval = (duration * 1000) / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count}</span>
}

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const scale = useMotionValue(1)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
    const cx = x - rect.width / 2
    const cy = y - rect.height / 2
    rotateY.set((cx / (rect.width / 2)) * 12)
    rotateX.set(-(cy / (rect.height / 2)) * 8)
  }, [rotateX, rotateY])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
    animate(scale, 1.03, { type: 'spring', stiffness: 300, damping: 20 })
  }, [scale])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    animate(rotateX, 0, { type: 'spring', stiffness: 300, damping: 25 })
    animate(rotateY, 0, { type: 'spring', stiffness: 300, damping: 25 })
    animate(scale, 1, { type: 'spring', stiffness: 300, damping: 20 })
  }, [rotateX, rotateY, scale])

  const handleContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style jsx global>{`
        @keyframes spinBorder {
          to { transform: rotate(360deg); }
        }

        .spinning-border-wrap {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          padding: 2px;
        }

        .spinning-border-bg {
          position: absolute;
          inset: -100%;
          background: conic-gradient(from 0deg, #3B82F6 0%, #06B6D4 20%, #8B5CF6 40%, #3B82F6 60%, #06B6D4 80%, #3B82F6 100%);
          animation: spinBorder 4s linear infinite;
        }

        .spinning-border-inner {
          position: relative;
          z-index: 1;
          border-radius: 16px;
          overflow: hidden;
          background: #060810;
          height: 100%;
        }
      `}</style>

      <section id="about" dir="rtl" className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-30"
          style={{ background: 'linear-gradient(to bottom, transparent, #3B82F6)' }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center md:justify-start md:order-2"
            >
              <div className="relative">
                {/* Ambient glow */}
                <div
                  className="absolute -inset-8 rounded-2xl opacity-25 blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.7) 0%, transparent 70%)' }}
                />

                {/* Mouse-tracking card wrapper */}
                <div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ perspective: '900px', cursor: 'default' }}
                >
                  <motion.div
                    style={{
                      rotateX,
                      rotateY,
                      scale,
                      transformStyle: 'preserve-3d',
                      position: 'relative',
                    }}
                  >
                    {/* Card with rotating border */}
                    <div className="relative w-72 h-80 md:w-80 md:h-96">

                      {/* Spinning border — clipped separately so badges aren't affected */}
                      <div className="absolute -inset-[2px] rounded-[18px] overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
                        <div className="spinning-border-bg" />
                      </div>

                      {/* Image card */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ background: '#060810', zIndex: 1 }}>
                        <Image
                          src="/images/profile.jpg"
                          alt="Abdulrahman Bazarah"
                          fill
                          className="object-cover object-top"
                          priority
                          unoptimized
                        />

                        {/* Bottom gradient */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{ background: 'linear-gradient(to top, rgba(6,8,16,0.65) 0%, transparent 50%)' }}
                        />

                        {/* Cursor spotlight */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: isHovering
                              ? `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.3) 0%, transparent 70%)`
                              : 'transparent',
                            transition: 'background 0.06s',
                            zIndex: 5,
                          }}
                        />
                      </div>
                    </div>

                    {/* Badge: +4 قطاعات */}
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
                        zIndex: 10,
                      }}
                    >
                      <p className="text-white font-sora font-bold text-lg leading-none">+<CountUp target={4} /></p>
                      <p className="text-[#9CA3AF] text-xs mt-0.5 font-arabic" style={{ fontFamily: 'var(--font-arabic)' }}>قطاعات</p>
                    </motion.div>

                    {/* Badge: +8 سنوات */}
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
                        zIndex: 10,
                      }}
                    >
                      <p className="text-white font-sora font-bold text-lg leading-none">+<CountUp target={8} /></p>
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
                        zIndex: 10,
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <p className="text-green-400 text-xs font-medium font-arabic" style={{ fontFamily: 'var(--font-arabic)' }}>متاح للعمل</p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Text column */}
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
                من الفكرة إلى النظام —{' '}
                <span style={{ color: '#3B82F6' }}>أنا الجسر.</span>
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
                إذا شركتك تنمو لكن العمليات تعيق النمو — أنا من يحل هذا.
              </motion.p>

              <motion.ul variants={staggerContainer} className="space-y-3 mb-10">
                {traits.map((trait) => (
                  <motion.li
                    key={trait}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="font-arabic text-[#D1D5DB] text-sm" style={{ direction: 'rtl' }}>{trait}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp}>
                <button
                  onClick={handleContact}
                  className="font-arabic relative border border-accent/50 bg-black/40 backdrop-blur-sm text-white px-8 py-3 text-sm transition-all duration-300 hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  style={{ direction: 'rtl', borderRadius: '100px' }}
                >
                  ابدأ معي ←
                </button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
