'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Intro from '@/components/Intro'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/layout/Footer'

const Journey = dynamic(() => import('@/components/sections/Journey'))
const Systems = dynamic(() => import('@/components/sections/Systems'))
const Achievements = dynamic(() => import('@/components/sections/Achievements'))
const Impact = dynamic(() => import('@/components/sections/Impact'))
const Framework = dynamic(() => import('@/components/sections/Framework'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}
      <main style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <Navbar />
        <Hero />
        <Journey />
        <Systems />
        <Achievements />
        <Impact />
        <Framework />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
