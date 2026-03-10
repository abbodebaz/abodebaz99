'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const steps = [
  {
    number: "01",
    title: "Understand the Business",
    description: "Deep dive into workflows, bottlenecks, and growth goals before touching any tool."
  },
  {
    number: "02",
    title: "Map the System",
    description: "Document every process, data flow, and integration point. Build the blueprint before building."
  },
  {
    number: "03",
    title: "Automate Processes",
    description: "Replace manual work with smart automation. Free the team to focus on what matters."
  },
  {
    number: "04",
    title: "Connect the Data",
    description: "Unify all data sources. One source of truth for decisions across the entire organization."
  },
  {
    number: "05",
    title: "Measure Impact",
    description: "Define KPIs before launch. Track, iterate, and optimize continuously."
  }
]

export default function Framework() {
  return (
    <section id="framework" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="font-sora text-3xl md:text-5xl font-bold text-white mb-4">
            How I Design Systems
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#9CA3AF] text-lg">
            A repeatable methodology that works across industries.
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
                <h3 className="font-sora text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
