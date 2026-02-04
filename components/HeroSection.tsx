'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Event configuration - easily editable
const EVENT_CONFIG = {
  childName: 'Ansel Haymitch M. Vivas',
  eventDate: new Date('2026-02-15T10:00:00'),
  tagline: "Gear Up for Ansel's Epic Baptism Adventure!",
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = EVENT_CONFIG.eventDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToRSVP = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-tire-track opacity-20" />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated fire/arrow particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: '110%',
              opacity: 0.6
            }}
            animate={{ 
              y: '-10%',
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear'
            }}
          >
            {i % 2 === 0 ? '🔥' : '➳'}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Baby in toy car animation */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-games-gold/30">
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-2xl"
            >
              🚗
            </motion.span>
            <span className="text-games-wheat font-mono text-sm tracking-wider">
              THE TRIBUTE ARRIVES
            </span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-2xl"
            >
              👶
            </motion.span>
          </div>
        </motion.div>

        {/* Mockingjay-inspired emblem */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-games-gold/20 blur-2xl animate-pulse" />
          <div className="relative w-full h-full rounded-full border-4 border-games-gold flex items-center justify-center bg-gradient-to-br from-driver-asphalt/80 to-games-coal/80 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl"
            >
              🦅
            </motion.div>
          </div>
          {/* Flames around the emblem */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🔥
          </motion.div>
        </motion.div>

        {/* Child's name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl text-white mb-4 leading-tight"
        >
          <span className="block">The Christening of</span>
          <span className="block text-gradient font-bold mt-2">
            {EVENT_CONFIG.childName}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-heading text-lg sm:text-xl text-games-gold tracking-[0.2em] uppercase mb-8"
        >
          {EVENT_CONFIG.tagline}
        </motion.p>

        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center gap-3 sm:gap-6 mb-10"
        >
          {[
            { value: timeLeft.days, label: 'DAYS' },
            { value: timeLeft.hours, label: 'HRS' },
            { value: timeLeft.minutes, label: 'MIN' },
            { value: timeLeft.seconds, label: 'SEC' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 sm:w-20 h-20 sm:h-24 bg-gradient-to-br from-driver-asphalt/80 to-games-coal/80 backdrop-blur-sm rounded-lg border border-games-gold/30 flex flex-col items-center justify-center">
                <motion.span
                  key={item.value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-mono text-2xl sm:text-3xl text-white font-bold"
                >
                  {String(item.value).padStart(2, '0')}
                </motion.span>
                <span className="text-games-gold/70 text-xs tracking-wider">
                  {item.label}
                </span>
              </div>
              {index < 3 && (
                <span className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 text-games-gold/50 text-xl">
                  :
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          onClick={scrollToRSVP}
          className="btn-tribute group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>Volunteer as Tribute</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-white/50"
          >
            <span className="text-xs tracking-widest mb-2">SCROLL</span>
            <span className="text-2xl">↓</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Racing stripes at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-driver-red" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-games-fire" />
      </div>
    </div>
  )
}
