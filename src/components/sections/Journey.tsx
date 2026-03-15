'use client'
import { motion } from 'framer-motion'
import { Search, Building2, Link, Bot } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const phases = [
  {
    number: "01",
    icon: Search,
    title: "فهمت الأعمال أولاً",
    description: "درست كيف تشتغل الشركات من الداخل — عملياتها وأين يتسرب النمو."
  },
  {
    number: "02",
    icon: Building2,
    title: "بنيت الأنظمة الرقمية",
    description: "حوّلت احتياجات الأعمال إلى CRMs ولوحات بيانات وأدوات تشغيل."
  },
  {
    number: "03",
    icon: Link,
    title: "وصّلت البيانات والإعلانات",
    description: "ربطت منصات الإعلانات المدفوعة بالـ CRM لرؤية موحدة عبر التسويق والمبيعات."
  },
  {
    number: "04",
    icon: Bot,
    title: "أتمتة + AI = نتائج",
    description: "طبّقت الأتمتة والذكاء الاصطناعي لتسريع دورة المبيعات وإلغاء المهام المتكررة."
  }
]

export default function Journey() {
  return (
    <section id="journey" dir="rtl" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="font-arabic inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4">
            المسيرة
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-arabic font-bold text-white mb-3" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}>
            كيف وصلت لهنا
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-arabic text-[#9CA3AF]">
            من فهم الأعمال إلى الأنظمة التي تكبّرها.
          </motion.p>
        </motion.div>

        {/* Cards + arrows row */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            const isLast = index === phases.length - 1

            return (
              <div key={phase.number} className="flex flex-row md:flex-row items-center flex-1 min-w-0">

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ borderColor: 'rgba(59,130,246,0.45)', background: 'rgba(59,130,246,0.05)' }}
                  className="flex-1 p-6 rounded-2xl transition-all duration-300 cursor-default h-full"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(59,130,246,0.12)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Step dot */}
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(59,130,246,0.12)',
                        border: '2px solid rgba(59,130,246,0.4)',
                        boxShadow: '0 0 10px rgba(59,130,246,0.25)',
                      }}
                    >
                      <motion.div
                        className="w-2.5 h-2.5 rounded-full bg-accent"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                    </div>
                    <span className="text-accent font-sora font-bold text-xs tracking-widest">{phase.number}</span>
                  </div>

                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(59,130,246,0.08)' }}>
                    <Icon className="text-accent" size={16} />
                  </div>

                  <h3 className="font-arabic font-bold text-white text-base mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>{phase.title}</h3>
                  <p className="font-arabic text-[#6B7280] text-xs leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>{phase.description}</p>
                </motion.div>

                {/* Arrow between cards */}
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.3 }}
                    className="hidden md:flex flex-col items-center justify-center shrink-0 px-2"
                  >
                    <div className="flex items-center gap-0.5">
                      <div className="w-6 h-px" style={{ background: 'rgba(59,130,246,0.5)' }} />
                      <div className="w-6 h-px" style={{ background: 'rgba(59,130,246,0.5)' }} />
                      {/* Arrow head pointing left (RTL) */}
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: '5px solid transparent',
                          borderBottom: '5px solid transparent',
                          borderRight: '8px solid rgba(59,130,246,0.7)',
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
