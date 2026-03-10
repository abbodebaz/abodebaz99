'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const steps = [
  {
    number: "01",
    title: "فهم الأعمال",
    description: "أتعمق في العمليات والعقبات وأهداف النمو قبل ما أمس أي أداة."
  },
  {
    number: "02",
    title: "رسم النظام",
    description: "أوثّق كل عملية وتدفق بيانات ونقطة تكامل. أبني المخطط قبل البناء."
  },
  {
    number: "03",
    title: "أتمتة العمليات",
    description: "أستبدل العمل اليدوي بأتمتة ذكية. أحرر الفريق للتركيز على ما يهم."
  },
  {
    number: "04",
    title: "ربط البيانات",
    description: "أوحّد كل مصادر البيانات. مصدر حقيقة واحد للقرارات عبر المنظمة."
  },
  {
    number: "05",
    title: "قياس الأثر",
    description: "أحدد KPIs قبل الإطلاق. أتابع وأكرر وأحسّن باستمرار."
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
