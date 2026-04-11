import React, { useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence } from 'framer-motion'

import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'
import StarField from './components/StarField'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loadProgress, setLoadProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const lenisRef = useRef(null)

  useEffect(() => {
    let current = 0
    const tick = setInterval(() => {
      const increment = current < 50 ? 6 : current < 80 ? 3 : current < 95 ? 0.8 : 0
      current = Math.min(current + increment + Math.random() * 2, 98)
      setLoadProgress(Math.floor(current))
    }, 60)
    const finish = setTimeout(() => {
      clearInterval(tick)
      setLoadProgress(100)
      setTimeout(() => setLoaded(true), 700)
    }, 2800)
    return () => { clearInterval(tick); clearTimeout(finish) }
  }, [])

  useEffect(() => {
    if (!loaded) return
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const ticker = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.destroy()
      gsap.ticker.remove(ticker)
    }
  }, [loaded])

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <LoadingScreen key="loader" progress={loadProgress} />}
      </AnimatePresence>
      {loaded && (
        <div className="noise">
          <CustomCursor />
          <StarField />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
