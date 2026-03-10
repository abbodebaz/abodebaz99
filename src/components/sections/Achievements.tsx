'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Zap, BarChart3 } from 'lucide-react'
import Image from 'next/image'
import type { Variants } from 'framer-motion'

const achievements = [
  {
    id: 1,
    category: "نظام عمليات",
    title: "بنيت لوحة عمليات التوصيل اللحظية",
    metric: "+30%",
    metricLabel: "كفاءة تشغيلية",
    description: "صممت ونشرت OneStation — لوحة تتبع توصيل فورية مع فلاتر متقدمة وتحديث تلقائي كل ٥ دقائق. وحّدت رؤية الطلبات عبر فرق التوصيل وألغت المتابعة اليدوية.",
    tags: ["لوحة فورية", "تخزين ذكي", "عمليات"],
    icon: Zap,
    image: "/images/system-delivery.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    liveUrl: "https://ebaaptl.com/onestation/row/home.html",
    color: "#3B82F6",
  },
  {
    id: 2,
    category: "بيانات وأتمتة",
    title: "بنيت منصة أتمتة بيانات الأعمال",
    metric: "5x",
    metricLabel: "قرارات أسرع",
    description: "Databay Talebaa — منصة حلول بيانات متكاملة تقدم تدفقات أتمتة وتقارير ذكاء أعمال ولوحات دعم قرار. قلّصت المهام اليدوية وسرّعت قرارات الفريق.",
    tags: ["أتمتة البيانات", "تقارير BI", "تدفقات AI"],
    icon: BarChart3,
    image: "/images/system-data.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    liveUrl: "http://databaytalebaa.com/",
    color: "#8B5CF6",
  },
]

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

function AchievementImage({
  src, fallback, alt, color,
}: {
  src: string; fallback: string; alt: string; color: string
}) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.src = fallback
        }}
        unoptimized
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.2), rgba(10,10,10,0.05))' }} />
      <div className="absolute inset-0" style={{ background: `${color}10` }} />
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" dir="rtl" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
          style={{ direction: 'rtl', textAlign: 'right' }}
        >
          <motion.span variants={fadeInUp} className="font-arabic inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4" style={{ fontFamily: 'var(--font-arabic)' }}>
            أبرز الأنظمة
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-arabic font-sora text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', textAlign: 'right' }}>
            أنظمة بنيتها
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-arabic text-[#9CA3AF] text-lg max-w-2xl" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', textAlign: 'right' }}>
            مو مواقع. مو تطبيقات. أنظمة — مبنية لأتمتة العمل، وتوحيد البيانات، وتحقيق نتائج أعمال قابلة للقياس.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {achievements.map((item, index) => {
            const Icon = item.icon
            const isReversed = index % 2 !== 0

            return (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariant}
                className="group grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                style={{ border: '1px solid rgba(59,130,246,0.1)', background: 'rgba(255,255,255,0.02)' }}
              >
                <div className={`relative overflow-hidden ${isReversed ? 'md:order-2' : ''} h-64 md:h-auto min-h-[300px]`}>
                  <AchievementImage src={item.image} fallback={item.fallbackImage} alt={item.title} color={item.color} />

                  <div className="absolute top-6 right-6 z-10">
                    <div
                      className="px-4 py-3 rounded-xl backdrop-blur-md"
                      style={{ background: 'rgba(0,0,0,0.75)', border: `1px solid ${item.color}40`, boxShadow: `0 0 20px ${item.color}20` }}
                    >
                      <span className="font-sora text-3xl font-bold block leading-none" style={{ color: item.color }}>
                        {item.metric}
                      </span>
                      <p className="font-arabic text-white/60 text-xs mt-1" style={{ fontFamily: 'var(--font-arabic)', textAlign: 'right', direction: 'rtl' }}>{item.metricLabel}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 z-10">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-arabic text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 transition-all hover:opacity-80"
                      style={{ background: 'rgba(0,0,0,0.7)', color: item.color, border: `1px solid ${item.color}40`, fontFamily: 'var(--font-arabic)', direction: 'rtl', flexDirection: 'row-reverse' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: item.color }} />
                      شاهد المشروع &larr;
                    </a>
                  </div>
                </div>

                <div className={`p-8 md:p-12 flex flex-col justify-center ${isReversed ? 'md:order-1' : ''}`} style={{ direction: 'rtl', textAlign: 'right', width: '100%', overflow: 'visible' }}>
                  <div className="flex items-center gap-3 mb-5" style={{ justifyContent: 'flex-end' }}>
                    <span className="font-arabic text-xs uppercase tracking-[0.2em] font-medium" style={{ color: item.color, fontFamily: 'var(--font-arabic)' }}>
                      {item.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${item.color}20` }}>
                      <Icon size={17} style={{ color: item.color }} />
                    </div>
                  </div>

                  <h3 className="font-arabic font-sora text-xl md:text-2xl font-semibold text-white mb-4 leading-snug" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', textAlign: 'right' }}>
                    {item.title}
                  </h3>

                  <p className="font-arabic text-[#9CA3AF] text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', textAlign: 'right', width: '100%', overflow: 'visible' }}>
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2" style={{ justifyContent: 'flex-end' }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-arabic text-xs px-3 py-1.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#9CA3AF', fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
