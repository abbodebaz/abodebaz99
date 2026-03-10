'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const steps = [
  {
    number: "01",
    title: "\u0641\u0647\u0645 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",
    description: "\u0623\u062A\u0639\u0645\u0642 \u0641\u064A \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0627\u0644\u0639\u0642\u0628\u0627\u062A \u0648\u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u0646\u0645\u0648 \u0642\u0628\u0644 \u0645\u0627 \u0623\u0645\u0633 \u0623\u064A \u0623\u062F\u0627\u0629."
  },
  {
    number: "02",
    title: "\u0631\u0633\u0645 \u0627\u0644\u0646\u0638\u0627\u0645",
    description: "\u0623\u0648\u062B\u0651\u0642 \u0643\u0644 \u0639\u0645\u0644\u064A\u0629 \u0648\u062A\u062F\u0641\u0642 \u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0646\u0642\u0637\u0629 \u062A\u0643\u0627\u0645\u0644. \u0623\u0628\u0646\u064A \u0627\u0644\u0645\u062E\u0637\u0637 \u0642\u0628\u0644 \u0627\u0644\u0628\u0646\u0627\u0621."
  },
  {
    number: "03",
    title: "\u0623\u062A\u0645\u062A\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A",
    description: "\u0623\u0633\u062A\u0628\u062F\u0644 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u064A\u062F\u0648\u064A \u0628\u0623\u062A\u0645\u062A\u0629 \u0630\u0643\u064A\u0629. \u0623\u062D\u0631\u0631 \u0627\u0644\u0641\u0631\u064A\u0642 \u0644\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0645\u0627 \u064A\u0647\u0645."
  },
  {
    number: "04",
    title: "\u0631\u0628\u0637 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
    description: "\u0623\u0648\u062D\u0651\u062F \u0643\u0644 \u0645\u0635\u0627\u062F\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A. \u0645\u0635\u062F\u0631 \u062D\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F \u0644\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0639\u0628\u0631 \u0627\u0644\u0645\u0646\u0638\u0645\u0629."
  },
  {
    number: "05",
    title: "\u0642\u064A\u0627\u0633 \u0627\u0644\u0623\u062B\u0631",
    description: "\u0623\u062D\u062F\u062F KPIs \u0642\u0628\u0644 \u0627\u0644\u0625\u0637\u0644\u0627\u0642. \u0623\u062A\u0627\u0628\u0639 \u0648\u0623\u0643\u0631\u0631 \u0648\u0623\u062D\u0633\u0651\u0646 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631."
  }
]

export default function Framework() {
  return (
    <section id="framework" dir="rtl" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="font-arabic font-sora text-3xl md:text-5xl font-bold text-white mb-4">
            كيف أصمم الأنظمة
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-arabic text-[#9CA3AF] text-lg">
            منهجية قابلة للتكرار تشتغل في كل القطاعات.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="relative"
        >
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px border-t-2 border-dashed border-[rgba(59,130,246,0.2)]" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step) => (
              <motion.div key={step.number} variants={fadeInUp} className="relative text-center group">
                <div className="mx-auto w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] relative z-10 bg-bg-primary">
                  <span className="font-sora text-sm font-bold text-accent group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-arabic font-sora text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="font-arabic text-[#9CA3AF] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
