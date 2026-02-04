'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 asphalt-bg" />
      
      {/* Racing stripes at top */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-driver-red" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-games-fire" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="text-center">
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-games-wheat hover:bg-white/20 transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>↑</span>
            <span className="font-body text-sm">Back to Top</span>
          </motion.button>

          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-driver-red to-games-fire flex items-center justify-center">
                <span className="text-white font-display text-xl">A</span>
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl text-games-wheat">Ansel Haymitch</h3>
                <p className="font-body text-xs text-games-gold/60">March 15, 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-lg text-games-gold tracking-[0.2em] mb-8"
          >
            MAY THE ODDS BE EVER IN YOUR FAVOR
          </motion.p>

          {/* Fun icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <motion.span 
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚗
            </motion.span>
            <span className="text-games-gold/50">•</span>
            <motion.span 
              className="text-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              👶
            </motion.span>
            <span className="text-games-gold/50">•</span>
            <motion.span 
              className="text-3xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🏹
            </motion.span>
            <span className="text-games-gold/50">•</span>
            <motion.span 
              className="text-3xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              🦅
            </motion.span>
          </motion.div>

          {/* Contact info */}
          <div className="mb-8">
            <p className="font-body text-sm text-games-wheat/70 mb-2">
              Questions? Reach out to us!
            </p>
            <a 
              href="mailto:vivasfamily@email.com" 
              className="font-body text-games-gold hover:text-white transition-colors"
            >
              vivasfamily@email.com
            </a>
          </div>

          {/* Social sharing prompt */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-games-gold/10 rounded-full border border-games-gold/20 mb-8">
            <span className="text-xl">📸</span>
            <span className="font-mono text-sm text-games-gold">#AnselHaymitchBaptism</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-games-gold/30 to-transparent my-8" />

          {/* Credits */}
          <div className="text-center">
            <p className="font-body text-xs text-games-wheat/40">
              Made with 💛 for Ansel&apos;s special day
            </p>
            <p className="font-body text-xs text-games-wheat/30 mt-2">
              Theme inspired by Baby Driver &amp; The Hunger Games
            </p>
            <p className="font-mono text-xs text-games-wheat/20 mt-4">
              © 2026 Vivas Family
            </p>
          </div>
        </div>
      </div>

      {/* Bottom corner decorations */}
      <div className="absolute bottom-4 left-4 font-mono text-xs text-games-gold/20">
        DISTRICT 12
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-xs text-driver-red/20">
        GETAWAY 🚗
      </div>
    </footer>
  )
}
