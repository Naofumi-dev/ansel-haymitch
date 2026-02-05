'use client'

import { useEffect, useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { CarIcon, BirdIcon, FireIcon } from './Icons3D'

// Dynamically import 3D canvas to avoid SSR issues
const Icon3DCanvas = dynamic(
  () => import('./Icons3D').then(mod => mod.Icon3DCanvas),
  { ssr: false }
)
const Car3D = dynamic(
  () => import('./Icons3D').then(mod => mod.Car3D),
  { ssr: false }
)
const Bird3D = dynamic(
  () => import('./Icons3D').then(mod => mod.Bird3D),
  { ssr: false }
)

const EVENT_CONFIG = {
  childName: 'Ansel Haymitch M. Vivas',
  eventDate: new Date('2026-02-15T10:00:00'),
  tagline: "Gear Up for Ansel's Epic Baptism Adventure!",
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-driver-red/20 rounded-full blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-games-fire/20 rounded-full blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-driver-blue/15 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* 3D Icons header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          {mounted && (
            <>
              <div className="w-20 h-20 hidden sm:block">
                <Suspense fallback={<CarIcon className="w-20 h-20" />}>
                  <Icon3DCanvas className="w-full h-full">
                    <Car3D scale={0.8} />
                  </Icon3DCanvas>
                </Suspense>
              </div>
              <div className="sm:hidden">
                <CarIcon className="w-16 h-16" />
              </div>
            </>
          )}
          
          {/* Central emblem */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="relative"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-driver-red via-games-fire to-games-gold p-1">
              <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center">
                <span className="font-display text-4xl sm:text-5xl font-bold text-gradient">A</span>
              </div>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-driver-red via-games-fire to-games-gold rounded-full blur-xl opacity-30 animate-pulse" />
          </motion.div>

          {mounted && (
            <>
              <div className="w-20 h-20 hidden sm:block">
                <Suspense fallback={<BirdIcon className="w-20 h-20" />}>
                  <Icon3DCanvas className="w-full h-full">
                    <Bird3D scale={0.8} />
                  </Icon3DCanvas>
                </Suspense>
              </div>
              <div className="sm:hidden">
                <BirdIcon className="w-16 h-16" />
              </div>
            </>
          )}
        </motion.div>

        {/* Subtitle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <FireIcon className="w-5 h-5" />
          <span className="text-white/70 text-sm font-body tracking-wider uppercase">The Tribute Arrives</span>
          <FireIcon className="w-5 h-5" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-4"
        >
          <span className="block font-display text-xl sm:text-2xl text-white/70 mb-2">The Christening of</span>
          <span className="block font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-gradient leading-tight">
            {EVENT_CONFIG.childName}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-body text-lg sm:text-xl text-white/60 tracking-wide mb-10 max-w-2xl mx-auto"
        >
          {EVENT_CONFIG.tagline}
        </motion.p>

        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-3 sm:gap-6 mb-12"
        >
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Min' },
            { value: timeLeft.seconds, label: 'Sec' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="relative group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="glass-card p-4 sm:p-6 min-w-[70px] sm:min-w-[90px]">
                <motion.span
                  key={item.value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="block font-display text-2xl sm:text-4xl font-bold text-white"
                >
                  {String(item.value).padStart(2, '0')}
                </motion.span>
                <span className="block text-xs sm:text-sm text-white/40 uppercase tracking-wider mt-1">
                  {item.label}
                </span>
              </div>
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-driver-red/20 to-games-fire/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Separator */}
              {index < 3 && (
                <span className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 text-white/30 text-xl sm:text-2xl font-light">
                  :
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToRSVP}
            className="btn-modern text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Volunteer as Tribute
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/30 cursor-pointer"
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs tracking-widest mb-2 uppercase">Scroll</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
    </div>
  )
}
