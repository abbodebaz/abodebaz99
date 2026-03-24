'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'

const DAY_DATA: Record<number, { day: string; time: string; messages: { icon: string; text: string }[] }> = {
  0: {
    day: 'Sunday',
    time: '9:12 AM',
    messages: [
      { icon: '💸', text: 'فرصة بيع ضاعت الأسبوع الماضي — ما أحد لاحظها في الوقت الصح' },
      { icon: '🔄', text: 'الفريق يعيد نفس العمل يدوياً كل أسبوع — والوقت يُحرق بلا نتيجة' },
    ],
  },
  1: {
    day: 'Monday',
    time: '8:47 AM',
    messages: [
      { icon: '📊', text: 'المدير يطلب أرقام الأداء — وجمعها سيأخذ ٣ ساعات من وقتك' },
      { icon: '👥', text: 'عميل انتظر ٣ أيام ولم يتلقَّ رداً — اليوم تعاقد مع المنافس' },
    ],
  },
  2: {
    day: 'Tuesday',
    time: '9:03 AM',
    messages: [
      { icon: '🔔', text: 'العميل يسأل عن تقدم المشروع — ولا أحد عنده إجابة موحّدة' },
      { icon: '📉', text: 'المبيعات ثابتة منذ شهرين — لكن لا أحد يعرف أين يكمن الخلل' },
    ],
  },
  3: {
    day: 'Wednesday',
    time: '8:55 AM',
    messages: [
      { icon: '⚠️', text: 'مشاكل الأمس لم تُحسم — وتتراكم فوقها مشاكل اليوم' },
      { icon: '🎯', text: 'نصف الأهداف الشهرية لن تكتمل — والشهر بدأ للتو' },
    ],
  },
  4: {
    day: 'Thursday',
    time: '9:21 AM',
    messages: [
      { icon: '🏁', text: 'آخر يوم في الأسبوع — ونصف المهام لم تُنجز بعد' },
      { icon: '📝', text: 'تقرير نهاية الأسبوع مطلوب الآن — والأرقام ليست جاهزة' },
    ],
  },
  5: {
    day: 'Friday',
    time: '10:15 AM',
    messages: [
      { icon: '😶', text: 'عميل محتمل انتظر ردنا ٣ أيام — وخسرناه للأبد' },
      { icon: '🔁', text: 'الأسبوع انتهى بنفس الفوضى التي بدأ بها' },
    ],
  },
  6: {
    day: 'Saturday',
    time: '11:30 AM',
    messages: [
      { icon: '🔥', text: 'عطلة — لكن المشاكل لم تأخذ إجازة' },
      { icon: '🔁', text: 'الأسبوع القادم سيبدأ بنفس الدوامة' },
    ],
  },
}

const MSG_STARTS = [1800, 3800]
const CHAR_SPEED = 22

function TypingCard({ icon, text, onDone }: { icon: string; text: string; onDone: () => void }) {
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCharIndex(prev => {
        if (prev >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setDone(true)
          onDone()
          return prev
        }
        return prev + 1
      })
    }, CHAR_SPEED)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [text, onDone])

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-3 px-4 py-3.5 rounded-xl"
      style={{
        background: done ? 'rgba(59,130,246,0.07)' : 'rgba(255,255,255,0.055)',
        border: `1px solid ${done ? 'rgba(59,130,246,0.35)' : 'rgba(255,255,255,0.1)'}`,
        backdropFilter: 'blur(20px)',
        boxShadow: done ? '0 0 24px rgba(59,130,246,0.12)' : '0 8px 32px rgba(0,0,0,0.4)',
        direction: 'rtl' as const,
        transition: 'border-color 0.6s, box-shadow 0.6s',
      }}
    >
      <span className="text-xl mt-0.5 shrink-0 select-none">{icon}</span>
      <p
        className="flex-1 font-arabic"
        style={{ color: 'rgba(255,255,255,0.8)', minHeight: '1.5em', fontSize: '15px', lineHeight: 1.8, fontFamily: 'var(--font-arabic)' }}
      >
        {text.slice(0, charIndex)}
        {charIndex < text.length && (
          <span className="inline-block w-[2px] h-[14px] bg-blue-400 ml-[2px] align-middle" style={{ animation: 'blink 0.6s infinite' }} />
        )}
      </p>
    </motion.div>
  )
}

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)
  const [activeMessages, setActiveMessages] = useState<number[]>([])
  const [dayData, setDayData] = useState(DAY_DATA[1])
  const [exiting, setExiting] = useState(false)
  const stableOnComplete = useCallback(onComplete, [onComplete])
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const today = new Date().getDay()
    setDayData(DAY_DATA[today])
    return () => { if (exitTimerRef.current) clearTimeout(exitTimerRef.current) }
  }, [])

  const handleEnterClick = useCallback(() => {
    setExiting(true)
    exitTimerRef.current = setTimeout(() => stableOnComplete(), 800)
  }, [stableOnComplete])

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = []

    t.push(setTimeout(() => setPhase(1), 600))

    MSG_STARTS.forEach((ms, i) => {
      t.push(setTimeout(() => {
        setActiveMessages(prev => [...prev, i])
      }, ms))
    })

    // Speed up: phase 2 at 6.5s, phase 3 at 9s
    t.push(setTimeout(() => setPhase(2), 6500))
    t.push(setTimeout(() => setPhase(3), 9000))

    return () => t.forEach(clearTimeout)
  }, [])

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="intro-wrapper"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#050810' }}
        >
          <style jsx global>{`
            @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
            @keyframes borderGlow {
              0%, 100% { border-color: rgba(59,130,246,0.5); box-shadow: 0 0 12px rgba(59,130,246,0.08); }
              50% { border-color: rgba(59,130,246,0.75); box-shadow: 0 0 24px rgba(59,130,246,0.2); }
            }
          `}</style>

          {/* Simple gradient background instead of Vimeo iframe */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(59,130,246,0.06) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* Skip button - show immediately */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            onClick={handleEnterClick}
            className="absolute top-6 left-6 z-[20] font-arabic"
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.35)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-arabic)',
              direction: 'rtl',
              transition: 'color 0.3s',
              padding: '8px 4px',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
          >
            تخطي ←
          </motion.button>

          <div style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            {phase >= 1 && phase < 2 && (
              <motion.div
                key="messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: 'blur(8px)' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-4 w-full px-4 sm:px-5 max-w-[460px]"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="font-arabic mb-5 text-center"
                  style={{
                    fontSize: '17px',
                    color: 'white',
                    direction: 'rtl',
                    fontFamily: 'var(--font-arabic)',
                  }}
                >
                  في كل صباح عمل.. هذه الرسائل تنتظرك
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                  className="flex items-center gap-3 mb-2"
                >
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: '#3B82F6', boxShadow: '0 0 10px rgba(59,130,246,0.9)' }}
                  />
                  <span
                    className="text-sm uppercase tracking-[0.35em] font-sora"
                    style={{ color: 'rgba(59,130,246,0.85)' }}
                  >
                    {dayData.day} &mdash; {dayData.time}
                  </span>
                  <div className="flex items-center gap-1.5 ml-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(239,68,68,0.7)' }}>LIVE</span>
                  </div>
                </motion.div>

                <div className="flex flex-col gap-3 w-full">
                  {dayData.messages.map((msg, i) => (
                    <div key={i}>
                      {activeMessages.includes(i) && (
                        <TypingCard icon={msg.icon} text={msg.text} onDone={() => {}} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div
                key="repeat-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center px-8 text-center"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.75, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="font-arabic mb-3"
                  style={{
                    fontSize: '26px',
                    color: 'white',
                    direction: 'rtl',
                    fontFamily: 'var(--font-arabic)',
                    lineHeight: 1.7,
                  }}
                >
                  هذا الصباح يتكرر كل أسبوع.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.45, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="font-arabic"
                  style={{
                    fontSize: '22px',
                    color: 'white',
                    direction: 'rtl',
                    fontFamily: 'var(--font-arabic)',
                  }}
                >
                  في معظم الشركات.
                </motion.p>
              </motion.div>
            )}

            {phase === 3 && (
              <motion.div
                key="name-reveal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center px-8 text-center"
              >
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-10 origin-left"
                  style={{
                    width: '56px',
                    height: '1px',
                    background: '#3B82F6',
                    boxShadow: '0 0 20px rgba(59,130,246,1)',
                  }}
                />

                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.035, delayChildren: 0.3 } } }}
                  className="font-sora"
                  style={{
                    fontSize: 'clamp(36px, 7vw, 80px)',
                    fontWeight: 700,
                    color: 'white',
                    fontFamily: 'var(--font-sora)',
                    letterSpacing: '-0.02em',
                    textShadow: '0 0 100px rgba(59,130,246,0.4)',
                    lineHeight: 1.1,
                    marginBottom: '20px',
                  }}
                >
                  {"Abdulrahman".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
                      }}
                      style={{ display: 'inline-block' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-arabic"
                  style={{
                    fontSize: 'clamp(16px, 2.2vw, 22px)',
                    color: 'white',
                    direction: 'rtl',
                    fontFamily: 'var(--font-arabic)',
                  }}
                >
                  أبني الأنظمة التي تنهي هذا الصباح.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10"
                >
                  <button
                    onClick={handleEnterClick}
                    className="group relative font-arabic"
                    style={{
                      direction: 'rtl',
                      fontFamily: 'var(--font-arabic)',
                      fontSize: '15px',
                      color: 'rgba(255,255,255,0.85)',
                      border: '1px solid rgba(59,130,246,0.5)',
                      background: 'rgba(59,130,246,0.06)',
                      backdropFilter: 'blur(8px)',
                      padding: '14px 36px',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      animation: 'borderGlow 3s ease-in-out infinite',
                      transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s, color 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(59,130,246,0.9)'
                      e.currentTarget.style.background = 'rgba(59,130,246,0.12)'
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.25)'
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'
                      e.currentTarget.style.background = 'rgba(59,130,246,0.06)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                    }}
                  >
                    <span className="flex items-center gap-2">
                      اكتشف عبدالرحمن
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="intro-exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999]"
          style={{ background: '#050810' }}
        />
      )}
    </AnimatePresence>
  )
}
