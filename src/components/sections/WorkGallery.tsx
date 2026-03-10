'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ExternalLink } from 'lucide-react'

const badgeColors: Record<string, { bg: string; text: string }> = {
  '\u0645\u062A\u062C\u0631':        { bg: 'rgba(16,185,129,0.12)',  text: '#10B981' },
  '\u062A\u0639\u0631\u064A\u0641\u064A':      { bg: 'rgba(59,130,246,0.12)',  text: '#60A5FA' },
  '\u062A\u0637\u0628\u064A\u0642 \u0648\u064A\u0628':   { bg: 'rgba(139,92,246,0.12)', text: '#A78BFA' },
  '\u0639\u0642\u0627\u0631\u064A':       { bg: 'rgba(245,158,11,0.12)',  text: '#FBBF24' },
  '\u062E\u062F\u0645\u0627\u062A':       { bg: 'rgba(236,72,153,0.12)',  text: '#F472B6' },
  '\u062F\u0648\u0631\u0627\u062A':       { bg: 'rgba(20,184,166,0.12)',  text: '#2DD4BF' },
  '\u0627\u0633\u062A\u0634\u0627\u0631\u0629':     { bg: 'rgba(99,102,241,0.12)',  text: '#818CF8' },
  '\u0634\u062E\u0635\u064A':        { bg: 'rgba(59,130,246,0.12)',  text: '#60A5FA' },
  '\u0645\u0646\u0635\u0629':        { bg: 'rgba(139,92,246,0.12)', text: '#A78BFA' },
  '\u0645\u0637\u0627\u0639\u0645':       { bg: 'rgba(251,146,60,0.12)',  text: '#FB923C' },
  '\u0634\u0631\u0643\u0629':        { bg: 'rgba(156,163,175,0.12)', text: '#9CA3AF' },
  '\u062A\u0642\u0646\u064A\u0629':       { bg: 'rgba(59,130,246,0.12)',  text: '#60A5FA' },
  '\u0645\u062C\u0645\u0648\u0639\u0629':      { bg: 'rgba(156,163,175,0.12)', text: '#9CA3AF' },
}

const projects = [
  {
    title: "\u0645\u062A\u062C\u0631 \u0639\u0648\u062F\u064A\u0629",
    desc: "\u0645\u062A\u062C\u0631 \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0639\u0648\u062F: \u0635\u0641\u062D\u0627\u062A \u0645\u0646\u062A\u062C \u0645\u0642\u0646\u0639\u0629\u060C \u062A\u0628\u0633\u064A\u0637 \u062E\u0637\u0648\u0627\u062A \u0627\u0644\u0634\u0631\u0627\u0621\u060C \u0648\u0631\u0628\u0637 \u062F\u0641\u0639 \u0648\u0634\u062D\u0646.",
    badge: "\u0645\u062A\u062C\u0631",
    url: "https://oudeyah.com/",
  },
  {
    title: "Blessing Floral",
    desc: "\u0645\u062A\u062C\u0631 \u0632\u0647\u0648\u0631 \u0648\u0647\u062F\u0627\u064A\u0627 \u0645\u0639 \u0637\u0644\u0628\u0627\u062A \u0648\u062A\u0648\u0635\u064A\u0644 \u0648\u0631\u0633\u0627\u0626\u0644 \u062A\u0623\u0643\u064A\u062F \u2014 \u062A\u062C\u0631\u0628\u0629 \u0634\u0631\u0627\u0621 \u0645\u062E\u062A\u0635\u0631\u0629 \u0648\u0648\u0627\u0636\u062D\u0629.",
    badge: "\u0645\u062A\u062C\u0631",
    url: "https://blessingfloral.com/",
  },
  {
    title: "\u064A\u0644\u0627 \u0641\u0644\u0627\u0641\u0644 \u2014 \u062C\u062F\u0629",
    desc: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0646\u064A\u0648 \u0648\u0627\u0636\u062D\u0629 \u0648\u0631\u0648\u0627\u0628\u0637 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0645\u0639 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0641\u0631\u0648\u0639 \u0648\u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644.",
    badge: "\u0645\u0637\u0627\u0639\u0645",
    url: "https://yallafalafeljed.com/",
  },
  {
    title: "PLAB \u2014 \u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0630\u0643\u064A\u0629",
    desc: "\u0646\u0638\u0627\u0645 \u0637\u0628\u0627\u0639\u0629 \u062C\u0627\u0645\u0639\u064A: \u0631\u0641\u0639 \u0645\u0644\u0641\u0627\u062A\u060C \u062A\u062D\u0648\u064A\u0644 PDF\u060C \u0646\u0642\u0627\u0637 \u0644\u0644\u0637\u0644\u0627\u0628\u060C \u0648\u0637\u0628\u0627\u0639\u0629 \u0639\u0628\u0631 PrintNode.",
    badge: "\u062A\u0637\u0628\u064A\u0642 \u0648\u064A\u0628",
    url: "https://rpd-sa.com/",
  },
  {
    title: "Earth Hills",
    desc: "\u0639\u0631\u0636 \u0648\u062D\u062F\u0627\u062A \u0639\u0642\u0627\u0631\u064A\u0629 \u0628\u0641\u0644\u0627\u062A\u0631 \u0630\u0643\u064A\u0629\u060C \u0645\u0639\u0631\u0636 \u0635\u0648\u0631 \u0627\u062D\u062A\u0631\u0627\u0641\u064A \u0648\u062E\u0631\u064A\u0637\u0629\u060C \u0645\u0639 \u0646\u0645\u0648\u0630\u062C \u062A\u0648\u0627\u0635\u0644 \u0644\u062D\u0638\u064A.",
    badge: "\u0639\u0642\u0627\u0631\u064A",
    url: "https://earth-hills.com/",
  },
  {
    title: "Belleza \u2014 \u0639\u0642\u0627\u0631\u0627\u062A \u0641\u0627\u062E\u0631\u0629",
    desc: "\u0648\u0627\u062C\u0647\u0629 \u0623\u0646\u064A\u0642\u0629 \u0644\u0639\u0642\u0627\u0631\u0627\u062A \u0641\u0627\u062E\u0631\u0629: \u0628\u0637\u0627\u0642\u0627\u062A \u0639\u0642\u0627\u0631 \u0628\u0635\u0648\u0631 \u0639\u0627\u0644\u064A\u0629 \u0648\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0627\u0636\u062D\u0629.",
    badge: "\u0639\u0642\u0627\u0631\u064A",
    url: "https://ab2030.vip/real2/",
  },
  {
    title: "\u0633\u064A\u0631\u0627\u0641 \u0644\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0633\u064A\u0646\u0645\u0627\u0626\u064A",
    desc: "\u0645\u0648\u0642\u0639 \u0641\u062E\u0645 RTL \u0645\u0639 \u0639\u0631\u0636 \u0623\u0639\u0645\u0627\u0644 \u0633\u064A\u0646\u0645\u0627\u0626\u064A\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0645\u0633\u062A\u062E\u062F\u0645 \u0633\u0644\u0633\u0629 \u062A\u0639\u0643\u0633 \u0647\u0648\u064A\u0629 \u0627\u0644\u0634\u0631\u0643\u0629.",
    badge: "\u062A\u0639\u0631\u064A\u0641\u064A",
    url: "https://xd7d7.com/ser/",
  },
  {
    title: "Walid Alajlan",
    desc: "\u0645\u0648\u0642\u0639 \u0634\u062E\u0635\u064A \u0641\u0627\u062E\u0631 \u0645\u0639 \u062A\u0623\u062B\u064A\u0631\u0627\u062A Scroll-Snap \u0648\u0645\u0648\u0634\u0646 \u0623\u0646\u064A\u0642 \u064A\u0639\u0643\u0633 \u0627\u0644\u0647\u0648\u064A\u0629.",
    badge: "\u0634\u062E\u0635\u064A",
    url: "https://ab2030.vip/alajlan/",
  },
  {
    title: "Mazen AlSaleh",
    desc: "\u0628\u0648\u0631\u062A\u0641\u0648\u0644\u064A\u0648 \u0645\u0635\u0648\u0651\u0631 \u0633\u064A\u0646\u0645\u0627\u0626\u064A: \u0645\u0639\u0631\u0636 \u0623\u0639\u0645\u0627\u0644 \u0648\u0641\u064A\u062F\u064A\u0648 \u0648\u0631\u0648\u0627\u0628\u0637 \u062A\u0648\u0627\u0635\u0644 \u0628\u0634\u0643\u0644 \u0623\u0646\u064A\u0642 \u0648\u0633\u0631\u064A\u0639.",
    badge: "\u0634\u062E\u0635\u064A",
    url: "https://m2maz.com/",
  },
  {
    title: "House of PG",
    desc: "\u0639\u0631\u0636 \u0623\u0639\u0645\u0627\u0644 \u0648\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0645\u0639 \u062F\u0639\u0648\u0629 \u0648\u0627\u0636\u062D\u0629 \u0644\u0644\u062A\u0648\u0627\u0635\u0644.",
    badge: "\u062A\u0639\u0631\u064A\u0641\u064A",
    url: "http://houseofpg.com/",
  },
  {
    title: "Winner",
    desc: "\u062A\u0639\u0631\u064A\u0641 \u0628\u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u062E\u062F\u0645\u0627\u062A\u0647\u0627 \u0645\u0639 \u0623\u0642\u0633\u0627\u0645 \u0623\u0639\u0645\u0627\u0644 \u0648\u0622\u0631\u0627\u0621 \u0639\u0645\u0644\u0627\u0621 \u0648\u0646\u0645\u0648\u0630\u062C \u062A\u0648\u0627\u0635\u0644 \u0633\u0631\u064A\u0639.",
    badge: "\u062A\u0639\u0631\u064A\u0641\u064A",
    url: "https://ab2030.vip/winner/",
  },
  {
    title: "Beehive \u2014 \u0648\u0643\u0627\u0644\u0629 \u062A\u0633\u0648\u064A\u0642",
    desc: "\u0648\u0627\u062C\u0647\u0629 \u062C\u0630\u0627\u0628\u0629 \u0628\u0646\u0645\u0637 SaaS: \u0625\u0628\u0631\u0627\u0632 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0646\u0645\u0648\u0630\u062C \u062A\u0648\u0627\u0635\u0644 \u0645\u0648\u062C\u0647 \u0644\u0644\u062A\u062D\u0648\u064A\u0644.",
    badge: "\u062E\u062F\u0645\u0627\u062A",
    url: "https://beehivesa.com",
  },
  {
    title: "MEPAINTS \u2014 \u062F\u0647\u0627\u0646\u0627\u062A",
    desc: "\u0643\u062A\u0627\u0644\u0648\u062C \u0623\u0644\u0648\u0627\u0646 \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A\u060C \u0645\u0639\u0631\u0636 \u0623\u0639\u0645\u0627\u0644 \u0642\u0628\u0644/\u0628\u0639\u062F\u060C \u0648\u0646\u0645\u0648\u0630\u062C \u0639\u0631\u0636 \u0633\u0639\u0631 \u0645\u062A\u0635\u0644 \u0628\u0648\u0627\u062A\u0633\u0627\u0628.",
    badge: "\u062E\u062F\u0645\u0627\u062A",
    url: "https://ab2030.vip/mepaints/",
  },
  {
    title: "\u0634\u0631\u0643\u0629 \u0627\u0644\u0639\u0631\u064A\u0641\u064A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629",
    desc: "\u062A\u0639\u0631\u064A\u0641 \u0628\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0633\u0627\u0628\u0642\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0645\u0639 \u0635\u0641\u062D\u0627\u062A \u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u062A\u0648\u0627\u0635\u0644 \u0644\u0628\u062F\u0621 \u0627\u0644\u0634\u0631\u0627\u0643\u0627\u062A.",
    badge: "\u0634\u0631\u0643\u0629",
    url: "https://alorificompany.com/",
  },
  {
    title: "BOD \u2014 \u062D\u0644\u0648\u0644 \u0631\u0642\u0645\u064A\u0629",
    desc: "\u0634\u0631\u0643\u0629 \u062A\u0642\u0646\u064A\u0629 \u062A\u0642\u062F\u0651\u0645 \u062D\u0644\u0648\u0644 \u0648\u0645\u0646\u062A\u062C\u0627\u062A \u0631\u0642\u0645\u064A\u0629\u061B \u0635\u0641\u062D\u0627\u062A \u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0636\u062D\u0629 \u0648\u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u062A\u062D\u0648\u064A\u0644.",
    badge: "\u062A\u0642\u0646\u064A\u0629",
    url: "https://bod-sa.com/",
  },
  {
    title: "\u0645\u062C\u0645\u0648\u0639\u0629 \u0623\u062D\u0645\u062F \u0628\u0627\u0633\u0645\u062D",
    desc: "\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629: \u0646\u0628\u0630\u0629 \u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0648\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A\u0629.",
    badge: "\u0645\u062C\u0645\u0648\u0639\u0629",
    url: "https://a-basamhgrp.com/",
  },
  {
    title: "\u062F. \u0639\u0627\u0626\u0634\u0629 \u0627\u0644\u062F\u062E\u064A\u0644",
    desc: "\u0645\u0646\u0635\u0629 \u062F\u0648\u0631\u0627\u062A \u0631\u0642\u0645\u064A\u0629: \u0635\u0641\u062D\u0627\u062A \u0645\u0628\u064A\u0639\u0627\u062A \u0645\u0642\u0646\u0639\u0629\u060C \u0639\u0636\u0648\u064A\u0627\u062A\u060C \u062F\u0641\u0639 \u0622\u0645\u0646\u060C \u0648\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u062A\u0644\u0642\u0627\u0626\u064A\u0629.",
    badge: "\u062F\u0648\u0631\u0627\u062A",
    url: "https://draishaaldakhil.com/",
  },
  {
    title: "\u062F. \u0631\u064A\u0645\u0627 \u0627\u0644\u0634\u0644\u0647\u0648\u0628",
    desc: "\u062D\u062C\u0632 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0628\u062E\u0637\u0648\u0629 \u0648\u0627\u062D\u062F\u0629 \u0645\u0639 \u0646\u0645\u0648\u0630\u062C \u0645\u062A\u0635\u0644 \u0628\u0648\u0627\u062A\u0633\u0627\u0628 \u0648\u0623\u0633\u0626\u0644\u0629 \u062A\u0623\u0647\u064A\u0644\u064A\u0629.",
    badge: "\u0627\u0633\u062A\u0634\u0627\u0631\u0629",
    url: "https://ab2030.vip/drrema/",
  },
]

export default function WorkGallery() {
  return (
    <section id="work-gallery" className="pb-24 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1" style={{ background: 'rgba(59,130,246,0.15)' }} />
            <span className="text-xs uppercase tracking-[0.3em] text-[#4B5563]">More Work</span>
            <div className="h-px flex-1" style={{ background: 'rgba(59,130,246,0.15)' }} />
          </div>

          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <motion.span variants={fadeInUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent mb-3">
                All Projects
              </motion.span>
              <motion.h3 variants={fadeInUp} className="font-sora text-2xl md:text-3xl font-bold text-white">
                More Projects Delivered
              </motion.h3>
            </div>
            <motion.p variants={fadeInUp} className="text-[#4B5563] text-sm">
              {projects.length}+ projects across multiple industries
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => {
            const colors = badgeColors[project.badge] ?? { bg: 'rgba(59,130,246,0.1)', text: '#60A5FA' }

            return (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group relative p-5 rounded-xl flex flex-col gap-3 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(59,130,246,0.08)',
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(59,130,246,0.25)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] px-2.5 py-1 rounded-full font-medium uppercase tracking-wider"
                    style={{ background: colors.bg, color: colors.text }}
                  >
                    {project.badge}
                  </span>
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#3B82F6' }}
                  />
                </div>

                <h4 className="font-sora text-sm font-semibold text-white leading-snug">
                  {project.title}
                </h4>

                <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                <div
                  className="text-[11px] mt-auto pt-3 border-t flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderColor: 'rgba(59,130,246,0.1)', color: '#3B82F6' }}
                >
                  Visit Project &rarr;
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
