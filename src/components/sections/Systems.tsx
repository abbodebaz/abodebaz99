"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const caseStudies = [
  {
    tag: "الإعلانات المدفوعة",
    title: "نظام إعلانات يحوّل الإنفاق إلى إيراد",
    problem: "الفريق كان ينفق على الإعلانات بدون ما يعرف وين الفلوس تروح. ما في تتبع دقيق، وكل شهر نفس المشكلة - الإنفاق أكثر والنتائج أقل.",
    solution: "ربطت كل إعلان بالعميل نفسه - من أول كليك لحد ما يشتري. الفريق الآن يشوف بالضبط أي إعلان جاب كم زبون، وأي منصة أفضل.",
    impact: "4x ROAS",
    impactDetail: "مع تخفيض تكلفة الاكتساب 42%",
    featured: true,
  },
  {
    tag: "التجارة الإلكترونية",
    title: "نظام نمو المبيعات الإلكترونية",
    problem: "الموقع عنده زيارات كتيرة لكن حد ما يشتري. الزبون يدخل، يتفرج، ويروح. وما في طريقة لاستدراجه ثاني.",
    solution: "أعدت رحلة العميل من البداية - الزبون اللي يدخل الموقع لما يروح، يرجع عند حملة استهداف مخصصة له. واللي اشترى مرة، نبعت له عروض جديدة تناسبه.",
    impact: "+60%",
    impactDetail: "نمو في المبيعات خلال 3 أشهر",
    featured: false,
  },
  {
    tag: "العمليات",
    title: "نظام عمليات التوصيل",
    problem: "الفرق كانت تشتغل كل واحد في عالمه - الطلبات تضيع، ما في أحد يعرف الطلب وصل فين، والزبون ينتظر ساعات.",
    solution: "بنيت لوحة تحكم واحدة الكل شايفها - الطلب يدخل، يتقسم على الفريق تلقائياً، والزبون يعرف أين بالضبط. النتيجة: طلبات توصل أسرع، وما في تضييع وقت.",
    impact: "+30%",
    impactDetail: "كفاءة التوصيل خلال 60 يوماً",
    featured: false,
  },
  {
    tag: "عمليات الإيرادات",
    title: "إطار عمل نمو الإيرادات",
    problem: "فريق المبيعات ما عنده نظام - كل واحد يتصرف لحاله. الإدارة ما تعرف أي صفقة في أي مرحلة، وما في طريقة تشتغل.",
    solution: "ربطت كل صفقة في نظام واحد - الفريق يعرف شنو الخطوة الجاية، والإدارة شايفة الصورة الكاملة. النتيجة: صفقات أسرع، وتوقع أدق للإيرادات.",
    impact: "+20%",
    impactDetail: "نمو الإيرادات في الربع الأول",
    featured: false,
  },
  {
    tag: "التحول الرقمي",
    title: "برنامج رقمنة الأعمال",
    problem: "الشركة تشتغل بطريقة يدوية - ورق، إكسل، وناس تقضي وقتها في شغل ممل . التوسع شي مستحيل وكل شي لازم يأخذ وقت.",
    solution: "أتمتة كل عملية يدوية - من إدخال البيانات لحد التقارير. الفريق الآن يركز على اللي فيه قيمة حقيقية، والشركة تشتغل أسرع بتكاليف أقل.",
    impact: "−25%",
    impactDetail: "من التكاليف التشغيلية مع مضاعفة الطاقة",
    featured: false,
  },
];

export default function Systems() {
  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);

  return (
    <section id="systems" className="py-24 md:py-32 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="font-arabic inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4">
            الأعمال
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-arabic font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-arabic)", direction: "rtl", fontSize: "clamp(26px, 4vw, 48px)" }}
          >
            ركزت على أنظمة ما تحتاج متابعة يومية
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-arabic text-[#9CA3AF]"
            style={{ fontFamily: "var(--font-arabic)", direction: "rtl" }}
          >
            ما في شي بدون بيانات — والبيانات حقيقية.
          </motion.p>
        </motion.div>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ boxShadow: '0 0 60px rgba(59,130,246,0.18)' }}
          className="rounded-2xl p-8 md:p-10 mb-6 transition-all duration-500 cursor-default"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(59,130,246,0.25)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Big impact number */}
            <div className="shrink-0 text-center md:text-right">
              <div
                className="font-sora font-bold leading-none"
                style={{ fontSize: "clamp(56px, 8vw, 96px)", color: "#3B82F6", letterSpacing: "-0.03em" }}
              >
                {featured.impact}
              </div>
              <p className="font-arabic text-[#9CA3AF] text-sm mt-1" style={{ fontFamily: "var(--font-arabic)" }}>
                {featured.impactDetail}
              </p>
            </div>

            <div className="hidden md:block w-px self-stretch bg-accent/15 mx-2" />

            <div className="flex-1">
              <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-3">
                {featured.tag}
              </span>
              <h3 className="font-arabic text-xl md:text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-arabic)" }}>
                {featured.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="pr-4 border-r-2 border-red-500/40">
                  <p className="font-arabic text-xs text-red-400/70 mb-1 font-medium" style={{ fontFamily: "var(--font-arabic)" }}>المشكلة</p>
                  <p className="font-arabic text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: "var(--font-arabic)", lineHeight: 1.8 }}>{featured.problem}</p>
                </div>
                <div className="pr-4 border-r-2 border-accent/40">
                  <p className="font-arabic text-xs text-accent/70 mb-1 font-medium" style={{ fontFamily: "var(--font-arabic)" }}>الحل</p>
                  <p className="font-arabic text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: "var(--font-arabic)", lineHeight: 1.8 }}>{featured.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 gap-5"
        >
          {rest.map((study) => (
            <motion.div
              key={study.title}
              variants={fadeInUp}
              whileHover={{ borderColor: "rgba(59,130,246,0.35)", boxShadow: "0 20px 50px rgba(59,130,246,0.1)", y: -4 }}
              className="rounded-xl p-7 transition-all duration-300 cursor-default"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(59,130,246,0.1)",
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                  {study.tag}
                </span>
                <div className="text-left">
                  <div className="font-sora font-bold text-2xl text-accent leading-none">{study.impact}</div>
                  <div className="font-arabic text-[#6B7280] text-xs mt-0.5" style={{ fontFamily: "var(--font-arabic)" }}>{study.impactDetail}</div>
                </div>
              </div>

              <h3 className="font-arabic text-lg font-bold text-white mb-5" style={{ fontFamily: "var(--font-arabic)" }}>
                {study.title}
              </h3>

              <div className="space-y-4">
                <div className="pr-4 border-r-2 border-red-500/40">
                  <p className="font-arabic text-xs text-red-400/70 mb-1 font-medium" style={{ fontFamily: "var(--font-arabic)" }}>المشكلة</p>
                  <p className="font-arabic text-[#9CA3AF] text-xs leading-relaxed" style={{ fontFamily: "var(--font-arabic)", lineHeight: 1.8 }}>{study.problem}</p>
                </div>
                <div className="pr-4 border-r-2 border-accent/40">
                  <p className="font-arabic text-xs text-accent/70 mb-1 font-medium" style={{ fontFamily: "var(--font-arabic)" }}>الحل</p>
                  <p className="font-arabic text-[#9CA3AF] text-xs leading-relaxed" style={{ fontFamily: "var(--font-arabic)", lineHeight: 1.8 }}>{study.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
