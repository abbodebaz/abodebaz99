'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { TrendingUp, Users, Zap, Globe } from 'lucide-react'
import type { Variants } from 'framer-motion'

const achievements = [
  {
    id: 1,
    category: "Digital Transformation",
    title: "Transformed a Traditional Retail Business Into a Digital-First Operation",
    metric: "+60%",
    metricLabel: "Online Revenue Growth",
    description: "Rebuilt the entire customer journey from discovery to delivery. Implemented CRM, e-commerce infrastructure, and marketing automation from scratch.",
    tags: ["E-Commerce", "CRM", "Automation"],
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "#10B981",
  },
  {
    id: 2,
    category: "Operations System",
    title: "Built a Centralized Delivery Operations Dashboard",
    metric: "+30%",
    metricLabel: "Efficiency Improvement",
    description: "Designed and deployed a real-time operations management system that unified order tracking, team management, and performance analytics.",
    tags: ["Operations", "Dashboard", "Real-time"],
    icon: Zap,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "#3B82F6",
  },
  {
    id: 3,
    category: "Revenue Operations",
    title: "Structured a Sales System That Grew Revenue 20% in One Quarter",
    metric: "+20%",
    metricLabel: "Revenue in Q1",
    description: "Implemented pipeline management, automated follow-ups, and leadership dashboards that gave the team full visibility and accountability.",
    tags: ["CRM", "Sales", "Analytics"],
    icon: Users,
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
    color: "#8B5CF6",
  },
  {
    id: 4,
    category: "AI & Automation",
    title: "Deployed AI Workflows That Saved 20+ Hours Per Week",
    metric: "20+",
    metricLabel: "Hours Saved Weekly",
    description: "Identified repetitive processes across marketing, operations, and reporting. Replaced them with AI-powered automation that runs 24/7.",
    tags: ["AI", "Automation", "Workflow"],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    color: "#F59E0B",
  },
]

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4"
          >
            Proof of Work
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-sora text-3xl md:text-5xl font-bold text-white mb-4"
          >
            What I&rsquo;ve Built
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#9CA3AF] text-lg max-w-2xl">
            Not projects. Transformations. Each one built to solve a real business problem and deliver measurable results.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {achievements.map((item, index) => {
            const Icon = item.icon
            const isReversed = index % 2 !== 0

            return (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariant}
                className="group grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
                style={{ border: '1px solid rgba(59,130,246,0.1)', background: 'rgba(255,255,255,0.02)' }}
              >
                <div className={`relative overflow-hidden ${isReversed ? 'md:order-2' : ''} h-64 md:h-auto min-h-[280px]`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(11,15,25,0.3), rgba(11,15,25,0.1))' }} />
                  <div className="absolute inset-0" style={{ background: `${item.color}15` }} />

                  <div className="absolute top-6 left-6">
                    <div
                      className="px-4 py-2 rounded-lg backdrop-blur-md"
                      style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${item.color}40` }}
                    >
                      <span className="font-sora text-3xl font-bold" style={{ color: item.color }}>
                        {item.metric}
                      </span>
                      <p className="text-xs text-white/70 mt-0.5">{item.metricLabel}</p>
                    </div>
                  </div>
                </div>

                <div className={`p-8 md:p-12 flex flex-col justify-center ${isReversed ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${item.color}20` }}
                    >
                      <Icon size={16} style={{ color: item.color }} />
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em]" style={{ color: item.color }}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-sora text-xl md:text-2xl font-semibold text-white mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#9CA3AF',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
