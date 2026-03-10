'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const traits = [
  "\u0623\u0641\u0643\u0631 \u0628\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0642\u0628\u0644 \u0623\u064A \u0634\u064A\u0621",
  "\u0645\u0647\u0648\u0648\u0633 \u0628\u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064A\u0627\u0633",
  "\u0627\u0644\u062C\u0633\u0631 \u0628\u064A\u0646 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630",
  "\u0628\u0646\u064A\u062A \u0623\u0646\u0638\u0645\u0629 \u0641\u064A \u0623\u0643\u062B\u0631 \u0645\u0646 \u0664 \u0642\u0637\u0627\u0639\u0627\u062A",
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
                <p className="font-arabic text-[#9CA3AF] text-xs mt-0.5">{'\u0642\u0637\u0627\u0639'}</p>
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
              {'\u0645\u0646 \u0623\u0646\u0627'}
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="font-arabic font-sora text-3xl md:text-4xl font-bold text-white mb-6 leading-snug"
            >
              {'\u0645\u0627 \u0623\u0643\u062A\u0641\u064A \u0628\u0627\u0644\u0646\u0635\u064A\u062D\u0629.'}
              <br />
              <span className="text-accent">{'\u0623\u0628\u0646\u064A.'}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-arabic text-[#9CA3AF] text-base leading-relaxed mb-6"
              style={{ direction: 'rtl' }}
            >
              أنا Abdulrahman Bazarah — قائد تطوير أعمال ومهندس أنظمة من السعودية. أشتغل عند تقاطع الاستراتيجية والتقنية والعمليات لمساعدة الشركات على النمو من خلال أنظمة أفضل.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="font-arabic text-[#9CA3AF] text-base leading-relaxed mb-8"
              style={{ direction: 'rtl' }}
            >
              معظم الاستشاريين يخبرونك بما تسوي. أنا أصمم النظام، أبني البنية التحتية، وأضمن أنه يشتغل — وأسلّمه وهو شغّال.
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
