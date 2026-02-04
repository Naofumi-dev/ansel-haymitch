'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import EventDetails from '@/components/EventDetails'
import RSVPForm from '@/components/RSVPForm'
import PhotoGallery from '@/components/PhotoGallery'
import TriviaGame from '@/components/TriviaGame'
import GiftRegistry from '@/components/GiftRegistry'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    // Simulate loading for dramatic entrance
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'details', 'rsvp', 'gallery', 'game', 'gifts']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background decorative elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Tire tracks background */}
            <div className="absolute inset-0 tire-tracks opacity-30" />
            
            {/* Floating arrows */}
            <motion.div
              className="absolute top-1/4 left-10 text-games-forest/10 text-6xl"
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ➳
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-10 text-driver-red/10 text-4xl"
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              ⚡
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 left-1/4 text-games-gold/10 text-5xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              ✧
            </motion.div>
          </div>

          <Navigation activeSection={activeSection} />
          
          <section id="hero">
            <HeroSection />
          </section>
          
          <section id="details">
            <EventDetails />
          </section>
          
          <section id="rsvp">
            <RSVPForm />
          </section>
          
          <section id="gallery">
            <PhotoGallery />
          </section>
          
          <section id="game">
            <TriviaGame />
          </section>
          
          <section id="gifts">
            <GiftRegistry />
          </section>
          
          <Footer />
        </motion.main>
      )}
    </>
  )
}
