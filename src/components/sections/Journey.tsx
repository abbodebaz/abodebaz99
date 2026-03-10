'use client'
import { motion } from 'framer-motion'
import { Search, Building2, Link, Bot } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const phases = [
  {
    number: "01",
    icon: Search,
    title: "فهم الأعمال",
    description: "بدأت بدراسة كيف تشتغل الشركات — عملياتها، عقباتها، وعوائق نموها. كل نظام يبدأ بفهم الأعمال أولاً."
  },
  {
    number: "02",
    icon: Building2,
    title: "بناء الأنظمة الرقمية",
    description: "ترجمت احتياجات الأعمال إلى بنية رقمية — CRMs ولوحات بيانات وأدوات تشغيل. أنظمة استبدلت العمل اليدوي وأوجدت نظاماً واضحاً."
  },
  {
    number: "03",
    icon: Link,
    title: "ربط البيانات",
    description: "دمجت الأدوات والمنصات المتفرقة لإنشاء تدفق موحد للبيانات. رؤية فورية عبر العمليات والمبيعات والتسويق."
  },
  {
    number: "04",
    icon: Bot,
    title: "الذكاء الاصطناعي والأتمتة",
    description: "طبّقت AI والأتمتة للتخلص من المهام المتكررة، والتنبؤ بالأنماط، وجعل الشركات أسرع وأذكى."
  }
]

export default function Journey() {
  return (
    <section id="journey" dir="rtl" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="font-arabic font-sora text-3xl md:text-5xl font-bold text-white mb-4">
            مسيرتي في بناء الأنظمة
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-arabic text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            من فهم الأعمال إلى بناء الأنظمة التي تكبّرها.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(59,130,246,0.2)] hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={phase.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: isLeft ? 50 : -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
                  }}
                  className={`relative md:flex md:items-center md:mb-16 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}
                >
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg-primary z-10" />

                  <div className={`md:w-[45%] ${isLeft ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="p-8 rounded-xl" style={{
                      background: 'rgba(255,255,255,0.02)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(59,130,246,0.12)',
                      borderRightWidth: '3px',
                      borderRightColor: '#3B82F6',
                    }}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent font-sora font-bold text-sm">{phase.number}</span>
                        <Icon className="text-accent" size={22} />
                      </div>
                      <h3 className="font-arabic font-sora text-xl font-semibold text-white mb-3">{phase.title}</h3>
                      <p className="font-arabic text-[#9CA3AF] text-sm leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
