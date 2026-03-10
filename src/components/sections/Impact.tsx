'use client'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

const stats = [
  { value: 60, suffix: "%", label: "Online Sales Growth" },
  { value: 30, suffix: "%", label: "Operational Efficiency" },
  { value: 20, suffix: "%", label: "Revenue Growth" },
  { value: 4, suffix: "+", label: "Industries Transformed" },
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
    <section id="impact" className="py-24 md:py-32 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="section-label">
            Results That Speak
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-sora text-3xl md:text-5xl font-bold text-white mb-4">
            The Numbers
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#9CA3AF] text-lg">
            Every system I build is measured by business impact.
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
              <p className="text-[#9CA3AF] text-sm mt-4 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center border-l-2 border-accent pl-6"
        >
          <p className="text-[#9CA3AF] text-lg italic leading-relaxed">
            &ldquo;Systems don&rsquo;t just solve problems. They multiply what&rsquo;s possible.&rdquo;
          </p>
          <p className="text-[#4B5563] text-sm mt-3">— Abdulrahman Bazarah</p>
        </motion.div>
      </div>
    </section>
  )
}
