'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const steps = [
  {
    number: "01",
    title: "فهم الأعمال",
    description: "أتعمق في العمليات والعقبات وأهداف النمو قبل ما أمس أي أداة.",
    color: '#3B82F6',
    glow: 'rgba(59,130,246,0.15)',
    border: 'rgba(59,130,246,0.25)',
  },
  {
    number: "02",
    title: "رسم النظام",
    description: "أوثّق كل عملية وتدفق بيانات ونقطة تكامل. أبني المخطط قبل البناء.",
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.15)',
    border: 'rgba(139,92,246,0.25)',
  },
  {
    number: "03",
    title: "أتمتة العمليات",
    description: "أستبدل العمل اليدوي بأتمتة ذكية. أحرر الفريق للتركيز على ما يهم.",
    color: '#06B6D4',
    glow: 'rgba(6,182,212,0.15)',
    border: 'rgba(6,182,212,0.25)',
  },
  {
    number: "04",
    title: "ربط البيانات",
    description: "أوحّد كل مصادر البيانات. مصدر حقيقة واحد للقرارات عبر المنظمة.",
    color: '#10B981',
    glow: 'rgba(16,185,129,0.15)',
    border: 'rgba(16,185,129,0.25)',
  },
  {
    number: "05",
    title: "قياس الأثر",
    description: "أحدد KPIs قبل الإطلاق. أتابع وأكرر وأحسّن باستمرار.",
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.15)',
    border: 'rgba(245,158,11,0.25)',
  },
]

export default function Framework() {
  return (
    <section id="framework" dir="rtl" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="font-arabic inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            المنهجية
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-arabic font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-arabic)', fontSize: 'clamp(26px, 4vw, 48px)' }}
          >
            كيف أصمم الأنظمة
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-arabic text-[#9CA3AF]"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            نفس الطريقة تشتغل مع الجميع — بغض النظر عن حجم الشركة أو القطاع.
          </motion.p>
        </motion.div>

        {/* Cards grid: 3 + 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {steps.slice(0, 3).map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
          {/* Row 2 — 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:max-w-2xl mx-auto">
            {steps.slice(3).map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative rounded-2xl p-6 group overflow-hidden"
      style={{
        background: step.glow,
        border: `1px solid ${step.border}`,
      }}
      whileHover={{ y: -6, borderColor: step.color + '60' }}
      transition={{ duration: 0.3 }}
    >
      {/* Background glow blob */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ background: step.color + '30' }}
      />

      {/* Number */}
      <div
        className="font-sora font-black mb-4 leading-none select-none"
        style={{ fontSize: '3.5rem', color: step.color, opacity: 0.2 }}
      >
        {step.number}
      </div>

      {/* Title */}
      <h3
        className="font-arabic font-bold text-white text-lg mb-2"
        style={{ fontFamily: 'var(--font-arabic)' }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="font-arabic text-sm text-white/50 leading-relaxed"
        style={{ fontFamily: 'var(--font-arabic)', lineHeight: 1.9 }}
      >
        {step.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 right-0 left-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to left, ${step.color}, transparent)` }}
      />
    </motion.div>
  )
}
