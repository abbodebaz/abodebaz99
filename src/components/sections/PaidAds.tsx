'use client'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

/* ─── CountUp ─── */
function CountUp({ target, suffix = '' }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    // parse numeric part
    const raw = target.replace(/[^0-9.]/g, '')
    const num = parseFloat(raw)
    const hasK = target.includes('K')
    const hasM = target.includes('M')
    const decimals = raw.includes('.') ? 1 : 0
    const duration = 1600
    const steps = 50
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = (num * eased).toFixed(decimals)
      const suffix2 = hasM ? 'M' : hasK ? 'K' : ''
      setDisplay(current + suffix2)
      if (step >= steps) { setDisplay(target); clearInterval(timer) }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{display}{suffix}</span>
}

/* ─── Platform icons ─── */
const PLATFORMS = [
  {
    id: 'Meta',
    name: 'Meta',
    color: '#1877F2',
    bg: 'rgba(24,119,242,0.12)',
    border: 'rgba(24,119,242,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    id: 'Snapchat',
    name: 'Snapchat',
    color: '#E6C800',
    bg: 'rgba(230,200,0,0.08)',
    border: 'rgba(230,200,0,0.2)',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#E6C800">
        <path d="M12.166.006C9.338-.112 6.744 1.331 5.243 3.746c-.52.836-.78 1.835-.78 3.254v1.16c-.463.205-1.12.18-1.783.082-.224-.033-.392.207-.247.39.33.41.93.82 1.89.97l-.001.022c-.028.365-.15.68-.56.82-1.04.358-1.742.77-1.88 1.284-.056.21.074.424.287.451.56.073 1.12-.072 1.642.067.057.016.115.035.17.056-.38.59-1.37 1.6-2.32 2.043-.29.132-.27.544.033.642.553.182 1.19.275 1.92.374.088.012.127.094.144.168.052.237.067.482.274.682.195.188.466.168.695.135.574-.082 1.088-.299 1.642-.3.465-.001.888.154 1.31.364.71.353 1.382.94 2.353.94.954 0 1.63-.582 2.35-.94.42-.21.845-.364 1.31-.364.554.001 1.068.218 1.642.3.229.033.5.053.695-.135.207-.2.222-.445.274-.682.017-.074.056-.156.144-.168.73-.099 1.367-.192 1.92-.374.303-.098.323-.51.033-.642-.95-.443-1.94-1.453-2.32-2.043.055-.02.113-.04.17-.056.522-.14 1.082.006 1.642-.067.213-.027.343-.24.287-.451-.138-.514-.84-.926-1.88-1.284-.41-.14-.532-.455-.56-.82l-.001-.022c.96-.15 1.56-.56 1.89-.97.145-.183-.023-.423-.247-.39-.663.098-1.32.123-1.783-.082V6.991c0-3.516-2.626-6.851-6.133-6.985z"/>
      </svg>
    ),
  },
  {
    id: 'TikTok',
    name: 'TikTok',
    color: '#FF0050',
    bg: 'rgba(255,0,80,0.08)',
    border: 'rgba(255,0,80,0.2)',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.02a4.85 4.85 0 01-1-.33z"/>
      </svg>
    ),
  },
  {
    id: 'Google',
    name: 'Google',
    color: '#4285F4',
    bg: 'rgba(66,133,244,0.1)',
    border: 'rgba(66,133,244,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
  },
]

/* ─── Ad data ─── */
const adResults = [
  {
    platform: 'Snapchat',
    platformColor: '#E6C800',
    metric: '1.42M',
    metricLabel: 'ظهور',
    badge: 'CTR أعلى من المتوسط',
    stats: [
      { label: 'نقرة', value: '38,600' },
      { label: 'CTR', value: '2.71%' },
      { label: 'تكلفة النقرة', value: '$0.043' },
    ],
    sector: 'متجر إلكتروني',
    image: '/images/ads/snap.png',
    detail: 'حملة توعية ومبيعات لمتجر إلكتروني. اعتمدنا على إعلانات Story + Spotlight مع استهداف دقيق حسب الاهتمامات والمناطق. تكلفة النقرة جاءت أقل من المعدل الصناعي بـ 60٪.',
  },
  {
    platform: 'TikTok',
    platformColor: '#FF0050',
    metric: '1.28M',
    metricLabel: 'ظهور',
    badge: 'أعلى CTR في القطاع',
    stats: [
      { label: 'CTR', value: '3.13%' },
      { label: 'CPM', value: '3.12 SAR' },
      { label: 'حملات نشطة', value: '4' },
    ],
    sector: 'متعدد القطاعات',
    image: '/images/ads/tiktok.png',
    detail: '4 حملات متزامنة عبر قطاعات مختلفة. استخدمنا In-Feed Ads مع تغيير الـ creatives أسبوعياً للحفاظ على معدل التفاعل. CPM منخفض يعكس جودة الاستهداف.',
  },
  {
    platform: 'Meta',
    platformColor: '#1877F2',
    metric: '174K',
    metricLabel: 'وصول',
    badge: 'تكلفة نتيجة ممتازة',
    stats: [
      { label: 'نتيجة', value: '2,701' },
      { label: 'تكلفة النتيجة', value: '$0.23' },
    ],
    sector: 'متعدد القطاعات',
    image: '/images/ads/meta.png',
    detail: 'حملات Conversion و Lead Generation على Facebook و Instagram. الـ A/B testing على الـ creatives خفّض تكلفة النتيجة من $0.80 إلى $0.23 خلال 3 أسابيع.',
  },
  {
    platform: 'Google',
    platformColor: '#4285F4',
    metric: '99.5K',
    metricLabel: 'ظهور',
    badge: 'نسبة نقر قوية',
    stats: [
      { label: 'نقرة', value: '2,460' },
      { label: 'الإنفاق', value: '1.97K SAR' },
    ],
    sector: 'حملات بحث',
    image: '/images/ads/google.png',
    detail: 'حملات Search Ads مبنية على بحث كلمات مفتاحية دقيق. اعتمدنا على Exact + Phrase Match مع negative keywords لتصفية الزوار غير المهتمين وتحسين جودة النقرات.',
  },
]

/* ─── Card ─── */
function AdCard({
  result,
  dimmed,
  onClick,
}: {
  result: typeof adResults[0]
  dimmed: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      variants={fadeInUp}
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        border: `1px solid ${result.platformColor}25`,
        height: '360px',
      }}
      animate={{ opacity: dimmed ? 0.25 : 1, scale: dimmed ? 0.97 : 1 }}
      whileHover={!dimmed ? { borderColor: `${result.platformColor}70`, y: -8, scale: 1.01 } : {}}
      transition={{ duration: 0.35 }}
    >
      {/* Screenshot */}
      <div className="absolute inset-0">
        <img
          src={result.image}
          alt={result.platform}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.75) 68%, rgba(0,0,0,0.95) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(ellipse at top left, ${result.platformColor}40 0%, transparent 65%)` }}
        />
      </div>

      {/* Platform badge — top right */}
      <div className="absolute top-4 right-4 z-10">
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-semibold font-sora"
          style={{ background: `${result.platformColor}20`, border: `1px solid ${result.platformColor}55`, color: result.platformColor }}
        >
          {result.platform}
        </div>
      </div>

      {/* Sector badge — top left */}
      <div className="absolute top-4 left-4 z-10">
        <div
          className="px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-arabic"
          style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-arabic)' }}
        >
          {result.sector}
        </div>
      </div>

      {/* Result badge — slides up on hover */}
      <div className="absolute top-14 right-4 z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-arabic font-semibold"
          style={{ background: `${result.platformColor}15`, border: `1px solid ${result.platformColor}40`, color: result.platformColor, fontFamily: 'var(--font-arabic)' }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: result.platformColor, display: 'inline-block' }} />
          {result.badge}
        </div>
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        {/* Big metric */}
        <div className="flex items-baseline gap-2 mb-3">
          <span
            className="font-sora font-black leading-none"
            style={{ fontSize: '3rem', color: result.platformColor, textShadow: `0 0 30px ${result.platformColor}60` }}
          >
            <CountUp target={result.metric} />
          </span>
          <span className="font-arabic text-white/80 text-base font-semibold" style={{ fontFamily: 'var(--font-arabic)' }}>
            {result.metricLabel}
          </span>
        </div>

        {/* Stats pills */}
        <div className="flex flex-wrap gap-2">
          {result.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)' }}
            >
              <span className="font-sora text-xs font-semibold text-white">{stat.value}</span>
              <span className="font-arabic text-[10px] text-white/50" style={{ fontFamily: 'var(--font-arabic)' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Click hint */}
        <p className="font-arabic text-[10px] text-white/30 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'var(--font-arabic)' }}>
          اضغط لتفاصيل الحملة
        </p>
      </div>
    </motion.div>
  )
}

/* ─── Modal ─── */
function Modal({ result, onClose }: { result: typeof adResults[0]; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
        style={{ border: `1px solid ${result.platformColor}35`, background: '#0d0f1a' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={result.image}
            alt={result.platform}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 50%, #0d0f1a 100%)` }} />
          {/* Platform label */}
          <div className="absolute top-4 right-4">
            <div
              className="px-4 py-2 rounded-full font-sora text-sm font-bold"
              style={{ background: `${result.platformColor}20`, border: `1px solid ${result.platformColor}50`, color: result.platformColor }}
            >
              {result.platform}
            </div>
          </div>
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-4" dir="rtl">
          {/* Sector + Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-arabic text-xs text-white/50" style={{ fontFamily: 'var(--font-arabic)' }}>{result.sector}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span
              className="font-arabic text-xs font-semibold"
              style={{ color: result.platformColor, fontFamily: 'var(--font-arabic)' }}
            >
              {result.badge}
            </span>
          </div>

          {/* Big metric */}
          <div className="flex items-baseline gap-2 mb-5">
            <span
              className="font-sora font-black"
              style={{ fontSize: '3.5rem', color: result.platformColor, textShadow: `0 0 40px ${result.platformColor}50` }}
            >
              {result.metric}
            </span>
            <span className="font-arabic text-white/70 text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>{result.metricLabel}</span>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {result.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3 text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="font-sora font-bold text-white text-lg">{stat.value}</div>
                <div className="font-arabic text-xs text-white/40 mt-0.5" style={{ fontFamily: 'var(--font-arabic)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Detail text */}
          <p
            className="font-arabic text-sm text-white/60 leading-relaxed"
            style={{ fontFamily: 'var(--font-arabic)', lineHeight: 1.9 }}
          >
            {result.detail}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─── Main ─── */
export default function PaidAds() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<typeof adResults[0] | null>(null)

  return (
    <section id="paid-ads" dir="rtl" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.span variants={fadeInUp} className="font-arabic inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4" style={{ fontFamily: 'var(--font-arabic)' }}>
            الإعلانات المدفوعة
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-arabic font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-arabic)', fontSize: 'clamp(26px, 4vw, 48px)' }}
          >
            إعلانات تُحوّل الإنفاق إلى إيراد.
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-arabic text-[#9CA3AF]" style={{ fontFamily: 'var(--font-arabic)' }}>
            أبني الحملات على بيانات حقيقية — لا تخمين.
          </motion.p>
        </motion.div>

        {/* Total summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-10 py-5 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {[
            { value: '4M+', label: 'إجمالي الظهور' },
            { value: '41K+', label: 'إجمالي النقرات' },
            { value: '4', label: 'منصات نشطة' },
            { value: '3', label: 'قطاعات' },
          ].map((s) => (
            <div key={s.label} className="text-center px-5">
              <div className="font-sora font-black text-white text-2xl">{s.value}</div>
              <div className="font-arabic text-xs text-white/40 mt-0.5" style={{ fontFamily: 'var(--font-arabic)' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Platform filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {PLATFORMS.map((p) => {
            const isActive = activeFilter === p.id
            return (
              <motion.button
                key={p.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveFilter(isActive ? null : p.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  background: isActive ? `${p.color}20` : p.bg,
                  border: `1px solid ${isActive ? p.color : p.border}`,
                  boxShadow: isActive ? `0 0 16px ${p.color}30` : 'none',
                }}
              >
                {p.icon}
                <span className="font-sora text-sm font-medium text-white">{p.name}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* 2×2 Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {adResults.map((result, i) => {
            const dimmed = activeFilter !== null && activeFilter !== result.platform
            return (
              <AdCard
                key={result.platform}
                result={result}
                dimmed={dimmed}
                onClick={() => setSelectedCard(result)}
              />
            )
          })}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-arabic text-center text-[#374151] text-xs mt-8"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          * الأرقام مأخوذة من حملات حقيقية
        </motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <Modal result={selectedCard} onClose={() => setSelectedCard(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
