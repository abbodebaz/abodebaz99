'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ExpandableTextProps {
  summary: string
  full: string
  maxChars?: number
}

export default function ExpandableText({ summary, full, maxChars = 120 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Use summary prop if provided, otherwise truncate full text
  const displayText = isExpanded ? full : summary || full.substring(0, maxChars)
  const shouldShowButton = full.length > maxChars || summary

  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-sm leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.75)' }}
      >
        {displayText}
      </motion.p>

      <AnimatePresence>
        {shouldShowButton && (
          <motion.button
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-xs font-medium transition-colors duration-200 flex items-center gap-1"
            style={{ color: '#3B82F6', cursor: 'pointer' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = '#60A5FA'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = '#3B82F6'
            }}
          >
            {isExpanded ? 'عرض أقل ↑' : 'عرض المزيد ↓'}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
