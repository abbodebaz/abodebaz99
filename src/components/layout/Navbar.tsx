'use client'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Work', href: '#achievements' },
  { name: 'Impact', href: '#impact' },
  { name: 'Framework', href: '#framework' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 80], ['rgba(10,10,10,0)', 'rgba(10,10,10,0.95)'])
  const navBorder = useTransform(scrollY, [0, 80], ['rgba(59,130,246,0)', 'rgba(59,130,246,0.12)'])

  useEffect(() => {
    const sections = ['about', 'journey', 'achievements', 'impact', 'framework', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      style={{ backgroundColor: navBg, borderBottomColor: navBorder }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-sora text-2xl font-bold text-accent tracking-tight">
          AB
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href)}
              className={`text-sm transition-all duration-300 relative tracking-wide ${
                activeSection === link.href.replace('#', '')
                  ? 'text-white'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.href.replace('#', '') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-bg-primary/95 backdrop-blur-md border-t border-[rgba(59,130,246,0.12)]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link.href)}
                  className={`text-left transition-colors duration-300 text-lg ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-white'
                      : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
