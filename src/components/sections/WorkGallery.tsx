'use client'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ExternalLink } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

function CountUp({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const steps = 40
    const increment = target / steps
    const interval = (duration * 1000) / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, interval)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count}</span>
}

const badgeColors: Record<string, { bg: string; text: string; gradient: string }> = {
  'متجر':       { bg: 'rgba(16,185,129,0.12)',  text: '#10B981', gradient: 'rgba(16,185,129,0.05)' },
  'تعريفي':     { bg: 'rgba(59,130,246,0.12)',  text: '#60A5FA', gradient: 'rgba(59,130,246,0.05)' },
  'تطبيق ويب':  { bg: 'rgba(139,92,246,0.12)', text: '#A78BFA', gradient: 'rgba(139,92,246,0.05)' },
  'عقاري':      { bg: 'rgba(245,158,11,0.12)',  text: '#FBBF24', gradient: 'rgba(245,158,11,0.05)' },
  'خدمات':      { bg: 'rgba(236,72,153,0.12)',  text: '#F472B6', gradient: 'rgba(236,72,153,0.05)' },
  'دورات':      { bg: 'rgba(20,184,166,0.12)',  text: '#2DD4BF', gradient: 'rgba(20,184,166,0.05)' },
  'استشارة':    { bg: 'rgba(99,102,241,0.12)',  text: '#818CF8', gradient: 'rgba(99,102,241,0.05)' },
  'شخصي':       { bg: 'rgba(59,130,246,0.12)',  text: '#60A5FA', gradient: 'rgba(59,130,246,0.05)' },
  'منصة':       { bg: 'rgba(139,92,246,0.12)', text: '#A78BFA', gradient: 'rgba(139,92,246,0.05)' },
  'مطاعم':      { bg: 'rgba(251,146,60,0.12)',  text: '#FB923C', gradient: 'rgba(251,146,60,0.05)' },
  'شركة':       { bg: 'rgba(156,163,175,0.12)', text: '#9CA3AF', gradient: 'rgba(156,163,175,0.05)' },
  'تقنية':      { bg: 'rgba(59,130,246,0.12)',  text: '#60A5FA', gradient: 'rgba(59,130,246,0.06)' },
  'مجموعة':     { bg: 'rgba(156,163,175,0.12)', text: '#9CA3AF', gradient: 'rgba(156,163,175,0.05)' },
}

const FILTERS = ['الكل', 'تقنية', 'متجر', 'تعريفي', 'خدمات', 'مطاعم', 'تطبيق ويب']

const projects = [
  // Featured — أقوى الأنظمة أولاً
  {
    title: "نظام CRM بيت الإباء",
    desc: "نظام إدارة علاقات عملاء متقدم: تتبع الفرص البيعية، إدارة جهات الاتصال، وتقارير أداء فورية.",
    badge: "تقنية",
    url: "https://ebaaptl.com/aa/crm/login.php",
  },
  {
    title: "نظام إباء بوت",
    desc: "روبوت ذكي متعدد الوظائف: خدمة عملاء تلقائية، إجابة على الاستفسارات، معالجة الطلبات 24/7.",
    badge: "تقنية",
    url: "https://ebaabot.com/",
  },
  // Grid
  {
    title: "OneStation — التوصيل والحجز",
    desc: "منصة توصيل وحجز مواعيد: نظام توزيع ذكي، تتبع حي، وإدارة الفنيين والمواعيد.",
    badge: "تطبيق ويب",
    url: "https://ebaaptl.com/onestation",
  },
  {
    title: "نظام KPI بيت الإباء",
    desc: "لوحة تحكم مؤشرات الأداء: تتبع الأهداف الاستراتيجية، تحليل البيانات، وتقارير إدارية فورية.",
    badge: "تقنية",
    url: "https://ebaaptl.com/kpi/",
  },
  {
    title: "نظام حجز الخزين بيت الإباء",
    desc: "إدارة المخزون المتقدمة: تتبع الأصناف، حجز تلقائي، توقعات الطلب، وإدارة المستودعات.",
    badge: "تطبيق ويب",
    url: "https://ebaaops.com/",
  },
  {
    title: "متجر عودية",
    desc: "متجر متخصص في العود: صفحات منتج مقنعة، تبسيط خطوات الشراء، وربط دفع وشحن.",
    badge: "متجر",
    url: "https://oudeyah.com/",
  },
  {
    title: "Blessing Floral",
    desc: "متجر زهور وهدايا مع طلبات وتوصيل ورسائل تأكيد — تجربة شراء مختصرة وواضحة.",
    badge: "متجر",
    url: "https://blessingfloral.com/",
  },
  {
    title: "PLAB — الطباعة الذكية",
    desc: "نظام طباعة جامعي: رفع ملفات، تحويل PDF، نقاط للطلاب، وطباعة عبر PrintNode.",
    badge: "تطبيق ويب",
    url: "https://rpd-sa.com/",
  },
  {
    title: "يلا فلافل — جدة",
    desc: "قائمة مينو واضحة وروابط تطبيقات التوصيل مع معلومات الفروع وأوقات العمل.",
    badge: "مطاعم",
    url: "https://yallafalafeljed.com/",
  },
  {
    title: "فوغو دي تشاو",
    desc: "موقع مطعم برازيلي فاخر: عرض قائمة الطعام، أوقات العمل، والحجز المباشر.",
    badge: "مطاعم",
    url: "https://ab2030.vip/fogo/",
  },
  {
    title: "ايقلون لاونج",
    desc: "صفحة لاونج أنيقة: عرض الأجواء والخدمات مع تجربة مستخدم سلسة للحجز.",
    badge: "مطاعم",
    url: "https://ab2030.vip/aiglon/",
  },
  {
    title: "كيمس كافي",
    desc: "صفحة كيمس كافي: لاندبيج  لخدمات مع تجربة مستخدم سلسة للحجز.",
    badge: "مطاعم",
    url: "https://ab2030.vip/kims/",
  },
  {
    title: "Byblos Xpress",
    desc: "موقع مطعم لبناني: قائمة طعام واضحة وتجربة طلب سريعة موجهة للتحويل.",
    badge: "مطاعم",
    url: "https://ab2030.vip/Byblos/",
  },
  {
    title: "مطعم القمرة",
    desc: "تجربة مطعم راقية: عرض الأطباق وأجواء المكان مع روابط حجز وتواصل مباشر.",
    badge: "مطاعم",
    url: "https://ab2030.vip/alqumrah/",
  },
  {
    title: "سيراف للإنتاج السينمائي",
    desc: "موقع فخم RTL مع عرض أعمال سينمائية وتجربة مستخدم سلسة تعكس هوية الشركة.",
    badge: "تعريفي",
    url: "https://syrf-abodebaz.replit.app/",
  },
  {
    title: "Mazen AlSaleh",
    desc: "بورتفوليو مصور سينمائي: معرض أعمال وفيديو وروابط تواصل بشكل أنيق وسريع.",
    badge: "شخصي",
    url: "https://m2maz.com/",
  },
  {
    title: "Winner",
    desc: "تعريف بالشركة وخدماتها مع أقسام أعمال وآراء عملاء ونموذج تواصل سريع.",
    badge: "تعريفي",
    url: "https://ab2030.vip/winner/",
  },
  {
    title: "Beehive — وكالة تسويق",
    desc: "واجهة جذابة بنمط SaaS: إبراز الخدمات والمشاريع ونموذج تواصل موجه للتحويل.",
    badge: "خدمات",
    url: "https://beehivesa.com",
  },
  {
    title: "MEPAINTS — دهانات",
    desc: "كتالوج ألوان وتطبيقات، معرض أعمال قبل/بعد، ونموذج عرض سعر متصل بواتساب.",
    badge: "خدمات",
    url: "https://ab2030.vip/mepaints/",
  },
  {
    title: "مجموعة أحمد باسمح",
    desc: "موقع المجموعة: نبذة عن الشركات التابعة والتواصل والإعلانات الإعلامية.",
    badge: "مجموعة",
    url: "#",
  },
  {
    title: "د. عائشة الدخيل",
    desc: "منصة دورات رقمية: صفحات مبيعات مقنعة، عضويات، دفع آمن، وتنبيهات تلقائية.",
    badge: "دورات",
    url: "https://draishaaldakhil.com/",
  },
  {
    title: "د. ريما الشلهوب",
    desc: "حجز استشارة بخطوة واحدة مع نموذج متصل بواتساب وأسئلة تأهيلية.",
    badge: "استشارة",
    url: "https://ab2030.vip/drrema/",
  },
  {
    title: "مركز ريما الشلهوب للإرشاد النفسي",
    desc: "منصة حجوزات متكاملة للمركز: جلسات فردية وأسرية، نظام حجز ذكي، ودفع آمن.",
    badge: "استشارة",
    url: "https://reemashcenter.com/",
  },
  {
    title: "نظام جودة الحياة والعافية",
    desc: "منصة شاملة للصحة واللياقة: برامج تدريب، تتبع الصحة، استشارات متخصصة، وتقارير تقدم شخصية.",
    badge: "خدمات",
    url: "https://thewellnesszone.center/",
  },
  {
    title: "دار النخبة الثقافية",
    desc: "منصة ثقافية متكاملة: عرض فعاليات، حجز التذاكر، مكتبة محتوى ثقافي، وإدارة العضويات.",
    badge: "تعريفي",
    url: "https://darnokhba.com/",
  },
]

type Project = typeof projects[0]

function getFavicon(url: string) {
  try {
    const domain = new URL(url).hostname
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
  } catch {
    return ''
  }
}

function LiveDot() {
  return (
    <span className="flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      <span className="text-green-400 text-xs font-arabic" style={{ fontFamily: 'var(--font-arabic)' }}>مباشر</span>
    </span>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  const colors = badgeColors[project.badge] ?? { bg: 'rgba(59,130,246,0.1)', text: '#60A5FA', gradient: 'rgba(59,130,246,0.04)' }

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative p-8 rounded-2xl flex flex-col min-h-[280px] transition-all duration-300 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.gradient} 0%, rgba(255,255,255,0.015) 100%)`,
        border: '1px solid rgba(59,130,246,0.1)',
        direction: 'rtl',
      }}
      whileHover={{ y: -6, borderColor: 'rgba(59,130,246,0.3)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between mb-6">
        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#3B82F6' }} />
        <div className="flex items-center gap-3">
          <LiveDot />
          <span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: colors.bg, color: colors.text, fontFamily: 'var(--font-arabic)' }}>
            {project.badge}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <img
          src={getFavicon(project.url)}
          alt=""
          width={32}
          height={32}
          className="rounded-lg shrink-0"
          style={{ background: 'rgba(255,255,255,0.06)', padding: '4px' }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <h3 className="font-arabic text-xl font-bold text-white" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}>
          {project.title}
        </h3>
      </div>

      <p className="font-arabic text-[#6B7280] text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}>
        {project.desc}
      </p>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '12px',
          color: '#3B82F6',
          fontFamily: 'var(--font-arabic)',
          direction: 'rtl',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginTop: 'auto',
          paddingTop: '12px',
          borderTop: '1px solid rgba(59,130,246,0.08)',
        }}
      >
        زيارة المشروع ←
      </a>
    </motion.div>
  )
}

function GridCard({ project }: { project: Project }) {
  const colors = badgeColors[project.badge] ?? { bg: 'rgba(59,130,246,0.1)', text: '#60A5FA', gradient: 'rgba(59,130,246,0.04)' }
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '100px' })
  const [isExpanded, setIsExpanded] = useState(false)
  const maxDescLength = 70
  const isTruncated = project.desc.length > maxDescLength

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="group relative p-5 rounded-xl flex flex-col min-h-[160px] transition-all duration-300 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.gradient} 0%, rgba(255,255,255,0.015) 100%)`,
        border: '1px solid rgba(59,130,246,0.08)',
        direction: 'rtl',
      }}
      whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.28)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between mb-4">
        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#3B82F6' }} />
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: colors.bg, color: colors.text, fontFamily: 'var(--font-arabic)' }}>
            {project.badge}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        {inView && (
          <img
            src={getFavicon(project.url)}
            alt=""
            width={22}
            height={22}
            className="rounded-md shrink-0"
            style={{ background: 'rgba(255,255,255,0.06)', padding: '3px' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        )}
        <h4 className="font-arabic text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}>
          {project.title}
        </h4>
      </div>

      <p className="font-arabic text-[#6B7280] text-xs leading-relaxed flex-1 mb-3" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}>
        {isExpanded ? project.desc : project.desc.slice(0, maxDescLength)}
        {isTruncated && !isExpanded && '...'}
      </p>

      {isTruncated && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-medium text-accent hover:text-accent/80 transition-colors mb-3"
          style={{ fontFamily: 'var(--font-arabic)', textAlign: 'right' }}
        >
          {isExpanded ? 'أقل ↑' : 'المزيد ↓'}
        </button>
      )}

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          fontSize: '12px',
          color: '#3B82F6',
          fontFamily: 'var(--font-arabic)',
          direction: 'rtl',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginTop: 'auto',
          paddingTop: '8px',
          borderTop: '1px solid rgba(59,130,246,0.08)',
        }}
      >
        زيارة المشروع ←
      </a>
    </motion.div>
  )
}

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState('الكل')
  const [visibleCount, setVisibleCount] = useState(6)
  const loadMore = () => setVisibleCount(prev => prev + 6)

  const featuredProjects = projects.slice(0, 2)
  const gridProjects = projects.slice(2)
  const filteredAll = activeFilter === 'الكل' ? null : projects.filter(p => p.badge === activeFilter)

  // Progressive loading: show 6 initially, then 6 more with each click
  const visibleGrid = gridProjects.slice(0, visibleCount)
  const visibleFiltered = filteredAll ? filteredAll.slice(0, visibleCount) : null
  const hasMore = (
    filteredAll ? visibleFiltered!.length < filteredAll.length : visibleGrid.length < gridProjects.length
  )

  return (
    <section id="work-gallery" dir="rtl" className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-10"
          style={{ direction: 'rtl', textAlign: 'right' }}
        >
          <motion.span
            variants={fadeInUp}
            className="font-arabic inline-block text-xs uppercase tracking-widest text-accent mb-4"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            أعمالي
          </motion.span>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <motion.h2
              variants={fadeInUp}
              className="font-arabic font-bold text-white"
              style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', fontSize: 'clamp(26px, 4vw, 44px)' }}
            >
              أعمال بُنيت لتدوم
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-arabic text-[#4B5563] text-sm"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              <CountUp target={projects.length} />+ مشروع في قطاعات متعددة
            </motion.p>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
          style={{ direction: 'rtl' }}
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="font-arabic text-xs px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-arabic)',
                  background: isActive ? '#3B82F6' : 'rgba(255,255,255,0.04)',
                  color: isActive ? '#fff' : '#6B7280',
                  border: `1px solid ${isActive ? '#3B82F6' : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: isActive ? '0 0 16px rgba(59,130,246,0.3)' : 'none',
                }}
              >
                {filter}
              </button>
            )
          })}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {filteredAll === null ? (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Featured row */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                className="grid md:grid-cols-2 gap-6 mb-6"
              >
                {featuredProjects.map((project) => (
                  <FeaturedCard key={project.title} project={project} />
                ))}
              </motion.div>

              {/* Grid */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {visibleGrid.map((project) => (
                  <GridCard key={project.title} project={project} />
                ))}
              </motion.div>

              {/* Load More button */}
              {hasMore && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center mt-8"
                >
                  <button
                    onClick={loadMore}
                    className="font-arabic text-sm px-8 py-3 rounded-full transition-all duration-300 hover:bg-accent/15"
                    style={{
                      fontFamily: 'var(--font-arabic)',
                      background: 'rgba(59,130,246,0.08)',
                      color: '#60A5FA',
                      border: '1px solid rgba(59,130,246,0.25)',
                    }}
                  >
                    حمّل المزيد ↓
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filteredAll!.length === 0 ? (
                <p className="font-arabic text-[#4B5563] text-center py-16" style={{ fontFamily: 'var(--font-arabic)' }}>
                  لا توجد مشاريع في هذه الفئة
                </p>
              ) : (visibleFiltered ?? filteredAll)!.length > 0 ? (
                <>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                  >
                    {(visibleFiltered ?? filteredAll)!.map((project) => (
                      <GridCard key={project.title} project={project} />
                    ))}
                  </motion.div>

                  {/* Load More button — filtered */}
                  {hasMore && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-center mt-8"
                    >
                      <button
                        onClick={loadMore}
                        className="font-arabic text-sm px-8 py-3 rounded-full transition-all duration-300 hover:bg-accent/15"
                        style={{
                          fontFamily: 'var(--font-arabic)',
                          background: 'rgba(59,130,246,0.08)',
                          color: '#60A5FA',
                          border: '1px solid rgba(59,130,246,0.25)',
                        }}
                      >
                        حمّل المزيد ↓
                      </button>
                    </motion.div>
                  )}
                </>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
