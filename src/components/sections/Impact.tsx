'use client'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

const stats = [
  { value: 60, suffix: "%", label: "\u0646\u0645\u0648 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629" },
  { value: 30, suffix: "%", label: "\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644" },
  { value: 20, suffix: "%", label: "\u0646\u0645\u0648 \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A" },
  { value: 4, suffix: "+", label: "\u0642\u0637\u0627\u0639 \u062A\u062D\u0648\u0651\u0644" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.round(v))
      })
      return controls.stop
    }
  }, [inView, motionValue, value])

  return (
    <span ref={ref} className="font-sora text-5xl md:text-6xl font-bold text-white relative z-10">
      {displayValue}{suffix}
    </span>
  )
}

export default function Impact() {
  return (
    <section id="impact" dir="rtl" className="py-24 md:py-32 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="font-arabic section-label">
            نتائج تتكلم
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-arabic font-sora text-3xl md:text-5xl font-bold text-white mb-4">
            الأرقام
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-arabic text-[#9CA3AF] text-lg">
            كل نظام أبنيه يُقاس بأثره على الأعمال.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="text-center p-8 rounded-2xl card-hover"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(59,130,246,0.1)',
              }}
            >
              <div className="relative inline-block">
                <Counter value={stat.value} suffix={stat.suffix} />
                <div
                  className="absolute -inset-4 rounded-full opacity-20 blur-xl"
                  style={{ background: '#3B82F6' }}
                />
              </div>
              <p className="font-arabic text-[#9CA3AF] text-sm mt-4 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center border-r-2 border-accent pr-6"
        >
          <p className="font-arabic text-[#9CA3AF] text-lg italic leading-relaxed" style={{ direction: 'rtl' }}>
            &ldquo;الأنظمة ما تحل المشاكل فقط. هي تضاعف الممكن.&rdquo;
          </p>
          <p className="text-[#4B5563] text-sm mt-3">— Abdulrahman Bazarah</p>
        </motion.div>
      </div>
    </section>
  )
}
