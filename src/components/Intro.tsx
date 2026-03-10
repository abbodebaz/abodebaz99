'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, useMemo, useRef } from 'react'

const DAY_DATA: Record<number, { day: string; time: string; messages: { icon: string; text: string }[] }> = {
  0: {
    day: 'Sunday',
    time: '9:12 AM',
    messages: [
      { icon: '\uD83D\uDCCB', text: '\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0628\u062F\u0623 \u2014 \u0644\u0633\u0627 \u0645\u0627 \u0639\u0646\u062F\u0646\u0627 \u062E\u0637\u0629 \u0648\u0627\u0636\u062D\u0629 \u0644\u0644\u0645\u0628\u064A\u0639\u0627\u062A' },
      { icon: '\uD83D\uDCCA', text: '\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A \u0645\u0627 \u0627\u0643\u062A\u0645\u0644 \u2014 \u0627\u0644\u0641\u0631\u064A\u0642 \u064A\u062C\u0645\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u064A\u062F\u0648\u064A\u0627\u064B' },
      { icon: '\uD83D\uDCAC', text: '\u0663 \u0639\u0645\u0644\u0627\u0621 \u0645\u0627 \u0631\u062F\u064A\u0646\u0627 \u0639\u0644\u064A\u0647\u0645 \u0645\u0646 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064A' },
      { icon: '\u23F0', text: '\u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639 \u0627\u0644\u0635\u0628\u0627\u062D\u064A \u0628\u0639\u062F \u0662\u0660 \u062F\u0642\u064A\u0642\u0629 \u2014 \u0645\u0627 \u0639\u0646\u062F\u0646\u0627 \u0623\u0631\u0642\u0627\u0645' },
    ],
  },
  1: {
    day: 'Monday',
    time: '8:47 AM',
    messages: [
      { icon: '\uD83D\uDCCA', text: '\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0645\u0648 \u062C\u0627\u0647\u0632 \u2014 \u0627\u0644\u0641\u0631\u064A\u0642 \u0644\u0633\u0627 \u064A\u062C\u0645\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u064A\u062F\u0648\u064A\u0627\u064B' },
      { icon: '\uD83D\uDCE6', text: '\u0663\u0662 \u0637\u0644\u0628 \u0645\u062A\u0623\u062E\u0631 \u2014 \u0645\u0627 \u0641\u064A \u0623\u062D\u062F \u0639\u0646\u062F\u0647 \u0635\u0648\u0631\u0629 \u0643\u0627\u0645\u0644\u0629' },
      { icon: '\uD83D\uDCB8', text: '\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0646\u0641\u0633 \u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A \u2014 \u0645\u0627 \u0646\u0639\u0631\u0641 \u0648\u064A\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629' },
      { icon: '\uD83D\uDC65', text: '\u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639 \u0628\u0639\u062F \u0633\u0627\u0639\u0629 \u2014 \u0645\u0627 \u0639\u0646\u062F\u0646\u0627 \u0623\u0631\u0642\u0627\u0645 \u0648\u0627\u0636\u062D\u0629' },
    ],
  },
  2: {
    day: 'Tuesday',
    time: '9:03 AM',
    messages: [
      { icon: '\uD83D\uDD14', text: '\u0627\u0644\u0639\u0645\u064A\u0644 \u064A\u0633\u0623\u0644 \u0639\u0646 \u062A\u0642\u062F\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u2014 \u0645\u0627 \u0639\u0646\u062F\u0646\u0627 update \u0645\u0648\u062D\u0651\u062F' },
      { icon: '\uD83D\uDDC2\uFE0F', text: '\u0627\u0644\u0641\u0631\u064A\u0642 \u0634\u063A\u0651\u0627\u0644 \u0639\u0644\u0649 \u0664 \u0623\u0646\u0638\u0645\u0629 \u0645\u062E\u062A\u0644\u0641\u0629 \u2014 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0634\u062A\u062A\u0629' },
      { icon: '\uD83E\uDDFE', text: '\u0641\u0627\u062A\u0648\u0631\u0629 \u0645\u062A\u0623\u062E\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064A \u2014 \u0645\u0627 \u0644\u0627\u062D\u0638\u0646\u0627' },
      { icon: '\uD83D\uDCC9', text: '\u0627\u062C\u062A\u0645\u0627\u0639 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629 \u2014 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0645\u0648 \u0645\u062D\u062F\u0651\u062B\u0629' },
    ],
  },
  3: {
    day: 'Wednesday',
    time: '8:55 AM',
    messages: [
      { icon: '\uD83D\uDCC5', text: '\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u2014 \u0645\u0627 \u0646\u0639\u0631\u0641 \u0625\u0630\u0627 \u0646\u062D\u0642\u0642 \u0647\u062F\u0641 \u0627\u0644\u0634\u0647\u0631' },
      { icon: '\uD83D\uDE9A', text: '\u0641\u0631\u064A\u0642 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u064A\u0633\u0623\u0644 \u0639\u0646 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u2014 \u0645\u0627 \u0641\u064A \u0644\u0648\u062D\u0629 \u0645\u0631\u0643\u0632\u064A\u0629' },
      { icon: '\uD83D\uDCC8', text: '\u0627\u0644\u0645\u062F\u064A\u0631 \u064A\u0637\u0644\u0628 \u0645\u0644\u062E\u0635 \u0627\u0644\u0623\u062F\u0627\u0621 \u2014 \u0633\u064A\u0633\u062A\u063A\u0631\u0642 \u0663 \u0633\u0627\u0639\u0627\u062A \u062A\u062C\u0645\u064A\u0639\u0647' },
      { icon: '\u26A0\uFE0F', text: '\u0665 \u0634\u0643\u0627\u0648\u0649 \u0639\u0645\u0644\u0627\u0621 \u2014 \u0627\u0643\u062A\u0634\u0641\u0646\u0627\u0647\u0627 \u0645\u062A\u0623\u062E\u0631\u064A\u0646' },
    ],
  },
  4: {
    day: 'Thursday',
    time: '9:21 AM',
    messages: [
      { icon: '\uD83C\uDFC1', text: '\u0622\u062E\u0631 \u064A\u0648\u0645 \u0639\u0645\u0644 \u2014 \u0645\u0627 \u0623\u0646\u0647\u064A\u0646\u0627 \u0646\u0635\u0641 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u062E\u0637\u0637\u0629' },
      { icon: '\uD83D\uDCDD', text: '\u062A\u0642\u0631\u064A\u0631 \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u2014 \u0644\u0627\u0632\u0645 \u064A\u0643\u0648\u0646 \u062C\u0627\u0647\u0632 \u0642\u0628\u0644 \u0627\u0644\u062F\u0648\u0627\u0645' },
      { icon: '\uD83D\uDD27', text: '\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u062A\u0648\u0642\u0641\u062A \u0645\u0631\u062A\u064A\u0646 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u2014 \u0645\u0627 \u0646\u0639\u0631\u0641 \u0627\u0644\u0633\u0628\u0628' },
      { icon: '\uD83C\uDFAF', text: '\u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629 \u2014 \u0664\u0660\u066A \u0645\u0646\u0647\u0627 \u0645\u0627 \u0627\u0643\u062A\u0645\u0644\u062A' },
    ],
  },
  5: {
    day: 'Friday',
    time: '10:15 AM',
    messages: [
      { icon: '\uD83D\uDCC6', text: '\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0646\u062A\u0647\u0649 \u2014 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0644\u0633\u0627 \u0645\u0627 \u062A\u062C\u0645\u0651\u0639\u062A' },
      { icon: '\uD83D\uDE36', text: '\u0639\u0645\u064A\u0644 \u0645\u062D\u062A\u0645\u0644 \u0627\u0646\u062A\u0638\u0631 \u0631\u062F\u0646\u0627 \u0663 \u0623\u064A\u0627\u0645 \u2014 \u062E\u0633\u0631\u0646\u0627\u0647' },
      { icon: '\uD83D\uDD04', text: '\u0627\u0644\u0641\u0631\u064A\u0642 \u064A\u0639\u0645\u0644 \u064A\u062F\u0648\u064A\u0627\u064B \u0639\u0644\u0649 \u0646\u0641\u0633 \u0627\u0644\u0645\u0647\u0627\u0645 \u0643\u0644 \u0623\u0633\u0628\u0648\u0639' },
      { icon: '\u2753', text: '\u0623\u064A\u0646 \u0630\u0647\u0628 \u0648\u0642\u062A\u0646\u0627 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u061F \u2014 \u0645\u0627 \u0641\u064A \u0625\u062C\u0627\u0628\u0629 \u0648\u0627\u0636\u062D\u0629' },
    ],
  },
  6: {
    day: 'Saturday',
    time: '11:30 AM',
    messages: [
      { icon: '\uD83D\uDCF5', text: '\u0639\u0637\u0644\u0629 \u2014 \u0644\u0643\u0646 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0645\u0627 \u062A\u0648\u0642\u0641\u062A' },
      { icon: '\uD83D\uDD25', text: '\u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645 \u2014 \u0645\u0627 \u0641\u064A \u0623\u062D\u062F \u064A\u0639\u0631\u0641 \u0643\u064A\u0641 \u064A\u062D\u0644\u0647\u0627' },
      { icon: '\uD83D\uDC41\uFE0F', text: '\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u062A\u0633\u064A\u0631 \u0628\u062F\u0648\u0646 \u0631\u0642\u0627\u0628\u0629 \u2014 \u0648\u0646\u0643\u062A\u0634\u0641 \u0627\u0644\u0645\u0634\u0627\u0643\u0644 \u0645\u062A\u0623\u062E\u0631\u064A\u0646' },
      { icon: '\uD83D\uDD01', text: '\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0642\u0627\u062F\u0645 \u0633\u064A\u0628\u062F\u0623 \u0628\u0646\u0641\u0633 \u0627\u0644\u0641\u0648\u0636\u0649' },
    ],
  },
}

const MSG_STARTS = [1200, 4500, 7800, 11000]
const CHAR_SPEED = 28

function playTick() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = 800
    gain.gain.value = 0.03
    osc.start()
    osc.stop(ctx.currentTime + 0.08)
    osc.onended = () => ctx.close()
  } catch {}
}

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
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-3 px-4 py-3.5 rounded-xl"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${done ? 'rgba(59,130,246,0.25)' : 'rgba(59,130,246,0.12)'}`,
        backdropFilter: 'blur(12px)',
        boxShadow: done ? '0 0 16px rgba(59,130,246,0.08)' : '0 4px 24px rgba(0,0,0,0.3)',
        direction: 'rtl' as const,
        transition: 'border-color 0.6s, box-shadow 0.6s',
      }}
    >
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xl mt-0.5 shrink-0 select-none"
      >
        {icon}
      </motion.span>
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

  const stars = useMemo(() => {
    function sr(seed: number) {
      const x = Math.sin(seed + 1) * 10000
      return x - Math.floor(x)
    }
    return Array.from({ length: 120 }, (_, i) => {
      const isHero = i % 15 === 0
      return {
        id: i,
        left: sr(i * 7) * 100,
        top: sr(i * 7 + 1) * 100,
        size: isHero ? 3 + sr(i * 7 + 2) * 1 : 1 + sr(i * 7 + 2) * 1.5,
        opacity: isHero ? 0.6 + sr(i * 7 + 3) * 0.2 : 0.2 + sr(i * 7 + 3) * 0.6,
        twinkleDur: 3 + sr(i * 7 + 4) * 4,
        floatDur: 8 + sr(i * 7 + 5) * 12,
        delay: sr(i * 7 + 6) * 4,
        dx: (sr(i * 11) - 0.5) * 30,
        dy: (sr(i * 11 + 1) - 0.5) * 30,
      }
    })
  }, [])

  const handleEnterClick = useCallback(() => {
    setExiting(true)
    exitTimerRef.current = setTimeout(() => stableOnComplete(), 1200)
  }, [stableOnComplete])

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = []

    t.push(setTimeout(() => setPhase(1), 1000))

    MSG_STARTS.forEach((ms, i) => {
      t.push(setTimeout(() => {
        playTick()
        setActiveMessages(prev => [...prev, i])
      }, ms))
    })

    t.push(setTimeout(() => setPhase(2), 13500))
    t.push(setTimeout(() => setPhase(3), 17000))

    return () => t.forEach(clearTimeout)
  }, [])

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="intro-wrapper"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#050810' }}
        >
          <style jsx global>{`
            @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
            @keyframes twinkle {
              0%, 100% { opacity: var(--star-opacity); }
              50% { opacity: calc(var(--star-opacity) * 0.25); }
            }
            @keyframes floatStar {
              0% { transform: translate(0, 0); }
              33% { transform: translate(var(--dx), var(--dy)); }
              66% { transform: translate(calc(var(--dx) * -0.5), calc(var(--dy) * 1.2)); }
              100% { transform: translate(0, 0); }
            }
            @keyframes scanline {
              0% { top: -2px; }
              100% { top: 100%; }
            }
            @keyframes borderGlow {
              0%, 100% { border-color: rgba(59,130,246,0.5); box-shadow: 0 0 12px rgba(59,130,246,0.08); }
              50% { border-color: rgba(59,130,246,0.75); box-shadow: 0 0 24px rgba(59,130,246,0.2); }
            }
          `}</style>

          {stars.map(s => (
            <div
              key={s.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                background: 'white',
                '--star-opacity': s.opacity,
                '--dx': `${s.dx}px`,
                '--dy': `${s.dy}px`,
                opacity: s.opacity,
                animation: `twinkle ${s.twinkleDur}s ${s.delay}s ease-in-out infinite, floatStar ${s.floatDur}s ${s.delay}s ease-in-out infinite`,
              } as React.CSSProperties}
            />
          ))}

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(59,130,246,0.06) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          <div
            className="absolute left-0 w-full h-[2px] pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent 10%, rgba(59,130,246,0.03) 50%, transparent 90%)',
              animation: 'scanline 8s linear infinite',
            }}
          />

          <AnimatePresence mode="wait">
            {phase >= 1 && phase < 2 && (
              <motion.div
                key="messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: 'blur(8px)' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-4 w-full px-4 sm:px-5 max-w-[460px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
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
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center px-8 text-center"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.75, y: 0 }}
                  transition={{ delay: 0.3, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="font-arabic mb-3"
                  style={{
                    fontSize: '26px',
                    color: 'white',
                    direction: 'rtl',
                    fontFamily: 'var(--font-arabic)',
                    lineHeight: 1.7,
                  }}
                >
                  {'\u0647\u0630\u0627 \u0627\u0644\u0635\u0628\u0627\u062D \u064A\u062A\u0643\u0631\u0631 \u0643\u0644 \u0623\u0633\u0628\u0648\u0639.'}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.45, y: 0 }}
                  transition={{ delay: 1.5, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="font-arabic"
                  style={{
                    fontSize: '22px',
                    color: 'white',
                    direction: 'rtl',
                    fontFamily: 'var(--font-arabic)',
                  }}
                >
                  {'\u0641\u064A \u0645\u0639\u0638\u0645 \u0627\u0644\u0634\u0631\u0643\u0627\u062A.'}
                </motion.p>
              </motion.div>
            )}

            {phase === 3 && (
              <motion.div
                key="name-reveal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0 }}
                className="flex flex-col items-center justify-center px-8 text-center"
              >
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-10 origin-left"
                  style={{
                    width: '56px',
                    height: '1px',
                    background: '#3B82F6',
                    boxShadow: '0 0 20px rgba(59,130,246,1)',
                  }}
                />

                <motion.h1
                  initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
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
                  Abdulrahman Bazarah
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="font-arabic"
                  style={{
                    fontSize: 'clamp(16px, 2.2vw, 22px)',
                    color: 'white',
                    direction: 'rtl',
                    fontFamily: 'var(--font-arabic)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {'\u0623\u0628\u0646\u064A \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u064A \u062A\u0646\u0647\u064A \u0647\u0630\u0627 \u0627\u0644\u0635\u0628\u0627\u062D.'}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.9, duration: 0.8 }}
                  className="mt-8"
                  style={{
                    width: '90px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.4), transparent)',
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
                      transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s, color 0.3s, transform 0.15s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.borderColor = 'rgba(59,130,246,0.9)'
                      el.style.background = 'rgba(59,130,246,0.12)'
                      el.style.boxShadow = '0 0 30px rgba(59,130,246,0.25)'
                      el.style.color = 'white'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.borderColor = 'rgba(59,130,246,0.5)'
                      el.style.background = 'rgba(59,130,246,0.06)'
                      el.style.boxShadow = 'none'
                      el.style.color = 'rgba(255,255,255,0.85)'
                    }}
                    onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.96)' }}
                    onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
                  >
                    <span className="flex items-center gap-2">
                      {'\u0627\u0643\u062A\u0634\u0641 \u0639\u0628\u062F\u0627\u0644\u0631\u062D\u0645\u0646'}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&larr;</span>
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          key="intro-exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999]"
          style={{ background: '#050810' }}
        />
      )}
    </AnimatePresence>
  )
}
