'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const caseStudies = [
  {
    tag: "Operations",
    title: "Delivery Operations System",
    problem: "Delivery operations were fragmented with no central tracking. Teams worked in silos, orders were lost, management had zero visibility.",
    solution: "Built a centralized dashboard integrating order management, team assignment, and real-time status tracking across all operations.",
    impact: "+30% Delivery Efficiency",
    impactDetail: "within 60 days of launch"
  },
  {
    tag: "E-Commerce",
    title: "Online Sales Growth System",
    problem: "Online store had traffic but poor conversion. No data on customer behavior, no retargeting, no structured sales funnel.",
    solution: "Redesigned the customer journey, implemented analytics, built automated email sequences, connected ad platforms to CRM data.",
    impact: "+60% Online Sales Growth",
    impactDetail: "over 3 months"
  },
  {
    tag: "Revenue Operations",
    title: "Revenue Growth Framework",
    problem: "Sales team lacked structure. No pipeline visibility, inconsistent follow-ups, no performance metrics for leadership.",
    solution: "Implemented full CRM with automated follow-up sequences, sales stage tracking, and performance dashboards.",
    impact: "+20% Revenue Growth",
    impactDetail: "in Q1 after launch"
  },
  {
    tag: "Digital Transformation",
    title: "Business Digitization Program",
    problem: "Core business processes were manual and paper-based. Scaling was impossible without digital infrastructure.",
    solution: "Mapped all processes, digitized operations step by step, trained teams, built reporting systems for real-time decisions.",
    impact: "−25% Operational Costs",
    impactDetail: "enabled 2x growth capacity"
  }
]

export default function Systems() {
  return (
    <section id="systems" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="font-sora text-3xl md:text-5xl font-bold text-white mb-4">
            Systems I Built
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#9CA3AF] text-lg">
            Real problems. Real solutions. Measurable impact.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-2 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              variants={fadeInUp}
              className="group rounded-xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)] cursor-default"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(59,130,246,0.12)',
              }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
                {study.tag}
              </span>
              <h3 className="font-sora text-xl font-semibold text-white mb-6">{study.title}</h3>

              <div className="mb-4 pl-4 border-l-2 border-red-500/40">
                <p className="text-xs uppercase tracking-wider text-red-400/70 mb-1 font-medium">Problem</p>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{study.problem}</p>
              </div>

              <div className="mb-6 pl-4 border-l-2 border-accent/40">
                <p className="text-xs uppercase tracking-wider text-accent/70 mb-1 font-medium">Solution</p>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{study.solution}</p>
              </div>

              <div className="pt-4 border-t border-[rgba(59,130,246,0.08)]">
                <span className="text-success font-sora font-bold text-lg">{study.impact}</span>
                <span className="text-[#4B5563] text-sm ml-2">{study.impactDetail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
