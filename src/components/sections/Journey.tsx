'use client'
import { motion } from 'framer-motion'
import { Search, Building2, Link, Bot } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const phases = [
  {
    number: "01",
    icon: Search,
    title: "\u0641\u0647\u0645 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",
    description: "\u0628\u062F\u0623\u062A \u0628\u062F\u0631\u0627\u0633\u0629 \u0643\u064A\u0641 \u062A\u0634\u062A\u063A\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u2014 \u0639\u0645\u0644\u064A\u0627\u062A\u0647\u0627\u060C \u0639\u0642\u0628\u0627\u062A\u0647\u0627\u060C \u0648\u0639\u0648\u0627\u0626\u0642 \u0646\u0645\u0648\u0647\u0627. \u0643\u0644 \u0646\u0638\u0627\u0645 \u064A\u0628\u062F\u0623 \u0628\u0641\u0647\u0645 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0623\u0648\u0644\u0627\u064B."
  },
  {
    number: "02",
    icon: Building2,
    title: "\u0628\u0646\u0627\u0621 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629",
    description: "\u062A\u0631\u062C\u0645\u062A \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0625\u0644\u0649 \u0628\u0646\u064A\u0629 \u0631\u0642\u0645\u064A\u0629 \u2014 CRMs \u0648\u0644\u0648\u062D\u0627\u062A \u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0623\u062F\u0648\u0627\u062A \u062A\u0634\u063A\u064A\u0644. \u0623\u0646\u0638\u0645\u0629 \u0627\u0633\u062A\u0628\u062F\u0644\u062A \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u064A\u062F\u0648\u064A \u0648\u0623\u0648\u062C\u062F\u062A \u0646\u0638\u0627\u0645\u0627\u064B \u0648\u0627\u0636\u062D\u0627\u064B."
  },
  {
    number: "03",
    icon: Link,
    title: "\u0631\u0628\u0637 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
    description: "\u062F\u0645\u062C\u062A \u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0648\u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0627\u0644\u0645\u062A\u0641\u0631\u0642\u0629 \u0644\u0625\u0646\u0634\u0627\u0621 \u062A\u062F\u0641\u0642 \u0645\u0648\u062D\u062F \u0644\u0644\u0628\u064A\u0627\u0646\u0627\u062A. \u0631\u0624\u064A\u0629 \u0641\u0648\u0631\u064A\u0629 \u0639\u0628\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u062A\u0633\u0648\u064A\u0642."
  },
  {
    number: "04",
    icon: Bot,
    title: "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0627\u0644\u0623\u062A\u0645\u062A\u0629",
    description: "\u0637\u0628\u0651\u0642\u062A AI \u0648\u0627\u0644\u0623\u062A\u0645\u062A\u0629 \u0644\u0644\u062A\u062E\u0644\u0635 \u0645\u0646 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u062A\u0643\u0631\u0631\u0629\u060C \u0648\u0627\u0644\u062A\u0646\u0628\u0624 \u0628\u0627\u0644\u0623\u0646\u0645\u0627\u0637\u060C \u0648\u062C\u0639\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0623\u0633\u0631\u0639 \u0648\u0623\u0630\u0643\u0649."
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
