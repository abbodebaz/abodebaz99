import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/layout/Footer'

const Journey = dynamic(() => import('@/components/sections/Journey'))
const Systems = dynamic(() => import('@/components/sections/Systems'))
const Impact = dynamic(() => import('@/components/sections/Impact'))
const Framework = dynamic(() => import('@/components/sections/Framework'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Journey />
      <Systems />
      <Impact />
      <Framework />
      <Contact />
      <Footer />
    </main>
  )
}
