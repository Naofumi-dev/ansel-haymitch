'use client'

import { motion } from 'framer-motion'
import { CarIcon, BirdIcon, FireIcon, ArrowIcon } from './Icons3D'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark" />
      
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-games-fire/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-body text-sm">Back to Top</span>
          </motion.button>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-driver-red to-games-fire flex items-center justify-center">
                <span className="font-display text-xl font-bold text-white">A</span>
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl font-semibold text-white">Ansel Haymitch</h3>
                <p className="font-body text-xs text-white/50">February 15, 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <p className="font-display text-lg text-gradient tracking-wider mb-8">
            MAY THE ODDS BE EVER IN YOUR FAVOR
          </p>

          {/* Icons */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
              <CarIcon className="w-8 h-8 opacity-40" animate={false} />
            </motion.div>
            <span className="text-white/20">•</span>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FireIcon className="w-8 h-8 opacity-40" animate={false} />
            </motion.div>
            <span className="text-white/20">•</span>
            <motion.div whileHover={{ rotate: -10, scale: 1.1 }}>
              <BirdIcon className="w-8 h-8 opacity-40" animate={false} />
            </motion.div>
            <span className="text-white/20">•</span>
            <motion.div whileHover={{ x: 5, scale: 1.1 }}>
              <ArrowIcon className="w-8 h-8 opacity-40" animate={false} />
            </motion.div>
          </div>

          {/* Hashtag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="text-xl">📸</span>
            <span className="font-body text-sm text-games-gold">#AnselHaymitchBaptism</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          {/* Credits */}
          <div className="text-center space-y-2">
            <p className="font-body text-xs text-white/30">
              Made with 💛 for Ansel&apos;s special day
            </p>
            <p className="font-body text-xs text-white/20">
              Theme inspired by Baby Driver & The Hunger Games
            </p>
            <p className="font-body text-xs text-white/10 mt-4">
              © 2026 Vivas Family
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
