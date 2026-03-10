'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ExternalLink } from 'lucide-react'

const badgeColors: Record<string, { bg: string; text: string }> = {
  'متجر':        { bg: 'rgba(16,185,129,0.12)',  text: '#10B981' },
  'تعريفي':      { bg: 'rgba(59,130,246,0.12)',  text: '#60A5FA' },
  'تطبيق ويب':   { bg: 'rgba(139,92,246,0.12)', text: '#A78BFA' },
  'عقاري':       { bg: 'rgba(245,158,11,0.12)',  text: '#FBBF24' },
  'خدمات':       { bg: 'rgba(236,72,153,0.12)',  text: '#F472B6' },
  'دورات':       { bg: 'rgba(20,184,166,0.12)',  text: '#2DD4BF' },
  'استشارة':     { bg: 'rgba(99,102,241,0.12)',  text: '#818CF8' },
  'شخصي':        { bg: 'rgba(59,130,246,0.12)',  text: '#60A5FA' },
  'منصة':        { bg: 'rgba(139,92,246,0.12)', text: '#A78BFA' },
  'مطاعم':       { bg: 'rgba(251,146,60,0.12)',  text: '#FB923C' },
  'شركة':        { bg: 'rgba(156,163,175,0.12)', text: '#9CA3AF' },
  'تقنية':       { bg: 'rgba(59,130,246,0.12)',  text: '#60A5FA' },
  'مجموعة':      { bg: 'rgba(156,163,175,0.12)', text: '#9CA3AF' },
}

const projects = [
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
    title: "يلا فلافل — جدة",
    desc: "قائمة مينو واضحة وروابط تطبيقات التوصيل مع معلومات الفروع وأوقات العمل.",
    badge: "مطاعم",
    url: "https://yallafalafeljed.com/",
  },
  {
    title: "PLAB — الطباعة الذكية",
    desc: "نظام طباعة جامعي: رفع ملفات، تحويل PDF، نقاط للطلاب، وطباعة عبر PrintNode.",
    badge: "تطبيق ويب",
    url: "https://rpd-sa.com/",
  },
  {
    title: "Earth Hills",
    desc: "عرض وحدات عقارية بفلاتر ذكية، معرض صور احترافي وخريطة، مع نموذج تواصل لحظي.",
    badge: "عقاري",
    url: "https://earth-hills.com/",
  },
  {
    title: "Belleza — عقارات فاخرة",
    desc: "واجهة أنيقة لعقارات فاخرة: بطاقات عقار بصور عالية وتفاصيل واضحة.",
    badge: "عقاري",
    url: "https://ab2030.vip/real2/",
  },
  {
    title: "سيراف للإنتاج السينمائي",
    desc: "موقع فخم RTL مع عرض أعمال سينمائية وتجربة مستخدم سلسة تعكس هوية الشركة.",
    badge: "تعريفي",
    url: "https://xd7d7.com/ser/",
  },
  {
    title: "Walid Alajlan",
    desc: "موقع شخصي فاخر مع تأثيرات Scroll-Snap وموشن أنيق يعكس الهوية.",
    badge: "شخصي",
    url: "https://ab2030.vip/alajlan/",
  },
  {
    title: "Mazen AlSaleh",
    desc: "بورتفوليو مصور سينمائي: معرض أعمال وفيديو وروابط تواصل بشكل أنيق وسريع.",
    badge: "شخصي",
    url: "https://m2maz.com/",
  },
  {
    title: "House of PG",
    desc: "عرض أعمال وخدمات العلامة مع دعوة واضحة للتواصل.",
    badge: "تعريفي",
    url: "http://houseofpg.com/",
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
    title: "شركة العريفي التجارية",
    desc: "تعريف بالخدمات وسابقة الأعمال مع صفحات مشاريع وتواصل لبدء الشراكات.",
    badge: "شركة",
    url: "https://alorificompany.com/",
  },
  {
    title: "BOD — حلول رقمية",
    desc: "شركة تقنية تقدّم حلول ومنتجات رقمية؛ صفحات خدمات واضحة وموجهة للتحويل.",
    badge: "تقنية",
    url: "https://bod-sa.com/",
  },
  {
    title: "مجموعة أحمد باسمح",
    desc: "موقع المجموعة: نبذة عن الشركات التابعة والتواصل والإعلانات الإعلامية.",
    badge: "مجموعة",
    url: "https://a-basamhgrp.com/",
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
    title: "نظام CRM بيت الإباء",
    desc: "نظام إدارة علاقات عملاء متقدم: تتبع الفرص البيعية، إدارة جهات الاتصال، وتقارير أداء فورية.",
    badge: "تقنية",
    url: "https://ebaaptl.com/aa/crm/login.php",
  },
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
  {
    title: "نظام إباء بوت",
    desc: "روبوت ذكي متعدد الوظائف: خدمة عملاء تلقائية، إجابة على الاستفسارات، معالجة الطلبات 24/7.",
    badge: "تقنية",
    url: "https://ebaabot.com/",
  },
]

export default function WorkGallery() {
  const featuredProjects = projects.slice(0, 2)
  const gridProjects = projects.slice(2)

  return (
    <section id="work-gallery" dir="rtl" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
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
              className="font-arabic text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
            >
              مشاريع سلّمتها وهي شغّالة
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-arabic text-[#4B5563] text-sm"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {projects.length}+ مشروع في قطاعات متعددة
            </motion.p>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {featuredProjects.map((project) => {
            const colors = badgeColors[project.badge] ?? { bg: 'rgba(59,130,246,0.1)', text: '#60A5FA' }

            return (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl flex flex-col min-h-[280px] transition-all duration-300 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(59,130,246,0.08)',
                  direction: 'rtl',
                }}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(59,130,246,0.28)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Badge & External Link */}
                <div className="flex items-center justify-between mb-6">
                  <ExternalLink
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#3B82F6' }}
                  />
                  <span
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: colors.bg, color: colors.text, fontFamily: 'var(--font-arabic)' }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="font-arabic text-xl font-bold text-white mb-4"
                  style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
                >
                  {project.title}
                </h3>

                <p
                  className="font-arabic text-[#6B7280] text-sm leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
                >
                  {project.desc}
                </p>

                {/* Visit Link */}
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
          })}
        </motion.div>

        {/* Grid Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gridProjects.map((project) => {
            const colors = badgeColors[project.badge] ?? { bg: 'rgba(59,130,246,0.1)', text: '#60A5FA' }

            return (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="group relative p-5 rounded-xl flex flex-col min-h-[160px] transition-all duration-300 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(59,130,246,0.08)',
                  direction: 'rtl',
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(59,130,246,0.28)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Badge & External Link */}
                <div className="flex items-center justify-between mb-4">
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#3B82F6' }}
                  />
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: colors.bg, color: colors.text, fontFamily: 'var(--font-arabic)' }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Content */}
                <h4
                  className="font-arabic text-sm font-semibold text-white mb-2"
                  style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
                >
                  {project.title}
                </h4>

                <p
                  className="font-arabic text-[#6B7280] text-xs leading-relaxed line-clamp-2 flex-1 mb-3"
                  style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
                >
                  {project.desc}
                </p>

                {/* Visit Link */}
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
          })}
        </motion.div>
      </div>
    </section>
  )
}
