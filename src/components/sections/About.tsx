'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const traits = [
  "أفكر بالأنظمة قبل الحلول",
  "أركّز على نتائج قابلة للقياس",
  "أحوّل الاستراتيجية إلى تنفيذ فعلي",
  "بنيت أنظمة تشغيل في أكثر من ٤ قطاعات",
]

export default function About() {
  return (
    <section id="about" dir="rtl" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-30"
        style={{ background: 'linear-gradient(to bottom, transparent, #3B82F6)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center md:justify-start order-1 md:order-2"
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)' }}
              />

              <div
                className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(59,130,246,0.2)' }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Abdulrahman Bazarah"
                  fill
                  className="object-cover object-top"
                  priority
                  unoptimized
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)'
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-5 -left-5 px-4 py-3 rounded-xl backdrop-blur-md"
                style={{
                  background: 'rgba(10,10,10,0.9)',
                  border: '1px solid rgba(59,130,246,0.25)',
                }}
              >
                <p className="text-white font-sora font-bold text-lg leading-none">4+</p>
                <p className="font-arabic text-[#9CA3AF] text-xs mt-0.5">قطاع</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-4 -left-4 px-3 py-2 rounded-xl backdrop-blur-md flex items-center gap-2"
                style={{
                  background: 'rgba(10,10,10,0.9)',
                  border: '1px solid rgba(16,185,129,0.3)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-green-400 text-xs font-medium font-arabic">متاح للعمل</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-2 md:order-1"
          >
            <motion.span
              variants={fadeInUp}
              className="font-arabic inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4"
            >
              من أنا
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="font-arabic font-sora text-3xl md:text-4xl font-bold text-white mb-6 leading-snug"
            >
              لا أقدّم توصيات فقط.
              <br />
              <span className="text-accent">أبني الأنظمة التي تجعلها تعمل.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-arabic text-[#9CA3AF] text-base leading-relaxed mb-6"
              style={{ direction: 'rtl' }}
            >
              أنا عبدالرحمن بازرعة — قائد تطوير أعمال ومهندس أنظمة أعمل عند تقاطع الاستراتيجية، التقنية، والعمليات لمساعدة الشركات على النمو عبر بناء أنظمة فعّالة وقابلة للتوسع.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="font-arabic text-[#9CA3AF] text-base leading-relaxed mb-8"
              style={{ direction: 'rtl' }}
            >
              بدلاً من تقديم توصيات نظرية، أقوم بتصميم وبناء البنية التشغيلية والتقنية التي تجعل الاستراتيجية قابلة للتنفيذ — ثم أضمن أنها تعمل.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-3">
              {traits.map((trait) => (
                <motion.li
                  key={trait}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <span className="font-arabic text-[#D1D5DB] text-sm" style={{ direction: 'rtl' }}>{trait}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
