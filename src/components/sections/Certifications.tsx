'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ShieldCheck, Award } from 'lucide-react'

const featured = [
  {
    title: 'Project Management Professional (PMP)®',
    titleAr: 'إدارة المشاريع الاحترافية',
    issuer: 'Project Management Institute',
    year: '2021',
    category: 'إدارة المشاريع',
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.25)',
    border: 'rgba(139,92,246,0.3)',
    icon: '🏆',
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    titleAr: 'الهاكر الأخلاقي المعتمد',
    issuer: 'EC-Council',
    year: '2022',
    category: 'أمن المعلومات',
    color: '#EF4444',
    glow: 'rgba(239,68,68,0.22)',
    border: 'rgba(239,68,68,0.3)',
    icon: '🛡️',
  },
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    titleAr: 'محلل بيانات Power BI',
    issuer: 'Microsoft',
    year: '2024',
    category: 'تحليل البيانات',
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.2)',
    border: 'rgba(245,158,11,0.3)',
    icon: '📊',
  },
  {
    title: 'Generative AI: Prompt Engineering Basics',
    titleAr: 'الذكاء الاصطناعي التوليدي',
    issuer: 'Coursera',
    year: '2026',
    category: 'ذكاء اصطناعي',
    color: '#06B6D4',
    glow: 'rgba(6,182,212,0.2)',
    border: 'rgba(6,182,212,0.3)',
    icon: '🤖',
  },
]

const rest = [
  { title: 'Generative AI: Introduction and Applications', issuer: 'Coursera', year: '2026', category: 'ذكاء اصطناعي' },
  { title: 'AI Agents for Beginners', issuer: 'Simplilearn', year: '2025', category: 'ذكاء اصطناعي' },
  { title: 'Deep Learning Fundamentals', issuer: 'Cognitive Class', year: '2024', category: 'ذكاء اصطناعي' },
  { title: 'Data Science and Analytics', issuer: 'HP', year: '2024', category: 'تحليل البيانات' },
  { title: 'The Fundamentals of Digital Marketing', issuer: 'Google Digital Garage', year: '2018', category: 'تسويق' },
  { title: 'Social Media Marketing: Strategy and Optimization', issuer: 'LinkedIn', year: '2022', category: 'تسويق' },
  { title: 'SEO: Ecommerce Strategies', issuer: 'LinkedIn', year: '2022', category: 'تسويق' },
  { title: 'Project Management Skills for Leaders', issuer: 'LinkedIn', year: '2022', category: 'إدارة المشاريع' },
  { title: 'Emotional Intelligence', issuer: 'إدراك', year: '2023', category: 'قيادة' },
  { title: 'Foundation of UX Design', issuer: 'Coursera', year: '2021', category: 'تطوير' },
  { title: 'Full Stack Developer Track', issuer: 'Udacity', year: '2018', category: 'تطوير' },
  { title: 'Full Stack Web Developing Diploma', issuer: 'Russian Culture Center', year: '2019', category: 'تطوير' },
  { title: 'Become a PHP Master - CMS Project', issuer: 'Udemy', year: '2018', category: 'تطوير' },
  { title: 'Building a Headless WordPress Site with Gatsby', issuer: 'LinkedIn', year: '2022', category: 'تطوير' },
]

const categoryColors: Record<string, { text: string; bg: string }> = {
  'ذكاء اصطناعي': { text: '#06B6D4', bg: 'rgba(6,182,212,0.1)' },
  'تحليل البيانات': { text: '#F59E0B', bg: 'rgba(245,158,11,0.1)' },
  'تسويق':         { text: '#10B981', bg: 'rgba(16,185,129,0.1)' },
  'إدارة المشاريع':{ text: '#8B5CF6', bg: 'rgba(139,92,246,0.1)' },
  'أمن المعلومات': { text: '#EF4444', bg: 'rgba(239,68,68,0.1)' },
  'تطوير':         { text: '#60A5FA', bg: 'rgba(59,130,246,0.1)' },
  'قيادة':         { text: '#F472B6', bg: 'rgba(244,114,182,0.1)' },
}

export default function Certifications() {
  return (
    <section id="certifications" dir="rtl" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12"
          style={{ direction: 'rtl', textAlign: 'right' }}
        >
          <motion.span
            variants={fadeInUp}
            className="font-arabic inline-block text-xs uppercase tracking-widest text-accent mb-4"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            الشهادات والاعتمادات
          </motion.span>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <motion.h2
              variants={fadeInUp}
              className="font-arabic font-bold text-white"
              style={{ fontFamily: 'var(--font-arabic)', fontSize: 'clamp(26px, 4vw, 44px)' }}
            >
              مهارات موثّقة بشهادات دولية
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2"
              style={{ color: '#4B5563' }}
            >
              <Award size={14} />
              <span className="font-arabic text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>
                {featured.length + rest.length}+ شهادة معتمدة
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 gap-5 mb-8"
        >
          {featured.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeInUp}
              className="relative p-6 rounded-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${cert.glow} 0%, rgba(255,255,255,0.015) 100%)`,
                border: `1px solid ${cert.border}`,
              }}
              whileHover={{ y: -4, borderColor: cert.color + '66' }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow blob */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: cert.glow, filter: 'blur(40px)' }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-arabic text-xs px-3 py-1 rounded-full"
                    style={{
                      background: cert.glow,
                      color: cert.color,
                      border: `1px solid ${cert.border}`,
                      fontFamily: 'var(--font-arabic)',
                    }}
                  >
                    {cert.category}
                  </span>
                  <span className="text-2xl">{cert.icon}</span>
                </div>

                <h3
                  className="font-arabic font-bold text-white mb-1 leading-snug"
                  style={{ fontFamily: 'var(--font-arabic)', fontSize: '1rem' }}
                >
                  {cert.titleAr}
                </h3>
                <p
                  className="text-xs mb-4 leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.45)', direction: 'ltr', textAlign: 'left' }}
                >
                  {cert.title}
                </p>

                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={12} style={{ color: cert.color }} />
                    <span className="font-arabic text-xs" style={{ color: cert.color, fontFamily: 'var(--font-arabic)' }}>
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rest of certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {rest.map((cert) => {
            const colors = categoryColors[cert.category] ?? { text: '#60A5FA', bg: 'rgba(59,130,246,0.08)' }
            return (
              <motion.div
                key={cert.title}
                variants={fadeInUp}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                whileHover={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ background: colors.bg }}
                >
                  <Award size={14} style={{ color: colors.text }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-arabic text-xs font-medium text-white truncate"
                    style={{ fontFamily: 'var(--font-arabic)', direction: 'ltr', textAlign: 'left' }}
                  >
                    {cert.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-arabic text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-arabic)' }}>
                      {cert.issuer}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '10px' }}>·</span>
                    <span
                      className="font-arabic text-xs px-1.5 py-0.5 rounded"
                      style={{ background: colors.bg, color: colors.text, fontFamily: 'var(--font-arabic)', fontSize: '10px' }}
                    >
                      {cert.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
