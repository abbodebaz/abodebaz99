'use client'
import { motion } from 'framer-motion'
import { Search, Building2, Link, Bot } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Understanding Business",
    description: "I started by deeply studying how businesses operate — their workflows, bottlenecks, and growth blockers. Every system starts with understanding the business first."
  },
  {
    number: "02",
    icon: Building2,
    title: "Building Digital Systems",
    description: "Translated business needs into digital infrastructure — CRMs, dashboards, operations tools. Systems that replaced manual work and created structure."
  },
  {
    number: "03",
    icon: Link,
    title: "Connecting Data",
    description: "Integrated disconnected tools and platforms to create unified data flows. Real-time visibility across operations, sales, and marketing."
  },
  {
    number: "04",
    icon: Bot,
    title: "AI & Automation",
    description: "Applied AI and automation to eliminate repetitive work, predict patterns, and make businesses faster and smarter at scale."
  }
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="font-sora text-3xl md:text-5xl font-bold text-white mb-4">
            My Journey Building Systems
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            From understanding businesses to building the systems that scale them.
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
                    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
                  }}
                  className={`relative md:flex md:items-center md:mb-16 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg-primary z-10" />

                  <div className={`md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="p-8 rounded-xl border-l-[3px] border-l-accent" style={{
                      background: 'rgba(255,255,255,0.02)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(59,130,246,0.12)',
                      borderLeftWidth: '3px',
                      borderLeftColor: '#3B82F6',
                    }}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent font-sora font-bold text-sm">{phase.number}</span>
                        <Icon className="text-accent" size={22} />
                      </div>
                      <h3 className="font-sora text-xl font-semibold text-white mb-3">{phase.title}</h3>
                      <p className="text-[#9CA3AF] text-sm leading-relaxed">{phase.description}</p>
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
