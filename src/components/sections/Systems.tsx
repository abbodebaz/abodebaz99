"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const caseStudies = [
  {
    tag: "العمليات",
    title: "نظام عمليات التوصيل",
    problem:
      "كانت عمليات التوصيل مجزأة بدون نظام مركزي للتتبع. الفرق تعمل بشكل منفصل، الطلبات تضيع، والإدارة لا تمتلك رؤية واضحة لسير العمليات.",
    solution:
      "قمت ببناء لوحة تحكم مركزية تربط إدارة الطلبات وتوزيع المهام على الفرق مع تتبع حالة العمليات بشكل فوري عبر جميع مراحل التشغيل.",
    impact: "+30٪ كفاءة التوصيل",
    impactDetail: "خلال 60 يومًا من إطلاق النظام",
  },
  {
    tag: "التجارة الإلكترونية",
    title: "نظام نمو المبيعات الإلكترونية",
    problem:
      "المتجر الإلكتروني كان يحقق زيارات جيدة لكن معدل التحويل ضعيف. لم تكن هناك بيانات عن سلوك العملاء ولا استهداف إعلاني ولا مسار مبيعات واضح.",
    solution:
      "أعدت تصميم رحلة العميل، طبّقت أدوات التحليلات، أنشأت تسلسلات بريد إلكتروني مؤتمتة، وربطت منصات الإعلانات ببيانات نظام إدارة العملاء (CRM).",
    impact: "+60٪ نمو في المبيعات",
    impactDetail: "خلال 3 أشهر",
  },
  {
    tag: "عمليات الإيرادات",
    title: "إطار عمل نمو الإيرادات",
    problem:
      "فريق المبيعات كان يعمل بدون هيكل واضح. لم تكن هناك رؤية لمسار الصفقات أو متابعة منتظمة أو مؤشرات أداء واضحة للإدارة.",
    solution:
      "قمت بتطبيق نظام CRM متكامل يتضمن متابعة آلية للعملاء، تتبع مراحل الصفقات، ولوحات تحكم لقياس الأداء.",
    impact: "+20٪ نمو الإيرادات",
    impactDetail: "في الربع الأول بعد إطلاق النظام",
  },
  {
    tag: "التحول الرقمي",
    title: "برنامج رقمنة الأعمال",
    problem:
      "العمليات الأساسية كانت تعتمد على العمل اليدوي والورقي، مما جعل التوسع صعبًا بدون بنية رقمية.",
    solution:
      "قمت بتحليل جميع العمليات، رقمنة الإجراءات خطوة بخطوة، تدريب الفرق، وبناء أنظمة تقارير تساعد الإدارة على اتخاذ قرارات فورية.",
    impact: "−25٪ من التكاليف التشغيلية",
    impactDetail: "مع مضاعفة القدرة على التوسع",
  },
];

export default function Systems() {
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
          <motion.h2
            variants={fadeInUp}
            className="font-arabic text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
          >
            الأنظمة التي قمت ببنائها
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-arabic text-[#9CA3AF] text-lg"
            style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
          >
            مشكلات حقيقية. حلول عملية. نتائج قابلة للقياس.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-2 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              variants={fadeInUp}
              className="group rounded-xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)] cursor-default"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(59,130,246,0.12)",
              }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
                {study.tag}
              </span>

              <h3
                className="font-arabic text-xl font-semibold text-white mb-6"
                style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
              >
                {study.title}
              </h3>

              <div className="mb-4 pr-4 border-r-2 border-red-500/40">
                <p
                  className="font-arabic text-xs text-red-400/70 mb-1 font-medium"
                  style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', letterSpacing: '0' }}
                >
                  المشكلة
                </p>
                <p
                  className="font-arabic text-[#9CA3AF] text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', lineHeight: 1.9 }}
                >
                  {study.problem}
                </p>
              </div>

              <div className="mb-6 pr-4 border-r-2 border-accent/40">
                <p
                  className="font-arabic text-xs text-accent/70 mb-1 font-medium"
                  style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', letterSpacing: '0' }}
                >
                  الحل
                </p>
                <p
                  className="font-arabic text-[#9CA3AF] text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', lineHeight: 1.9 }}
                >
                  {study.solution}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(59,130,246,0.08)]">
                <span
                  className="font-arabic font-bold text-lg"
                  style={{ fontFamily: 'var(--font-arabic)', color: 'var(--success)' }}
                >
                  {study.impact}
                </span>
                <span
                  className="font-arabic text-[#4B5563] text-sm mr-2"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {study.impactDetail}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
