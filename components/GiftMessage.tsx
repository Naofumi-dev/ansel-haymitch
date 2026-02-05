'use client'

import { motion } from 'framer-motion'
import { BirdIcon, FireIcon } from './Icons3D'

export default function GiftMessage() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-[#0a0f1a]" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-games-gold/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Decorative top */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <BirdIcon className="w-10 h-10 opacity-60" />
            </motion.div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-games-gold/50 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FireIcon className="w-10 h-10 opacity-60" />
            </motion.div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-games-gold/50 to-transparent" />
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <BirdIcon className="w-10 h-10 opacity-60" />
            </motion.div>
          </div>

          {/* Main quote card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 sm:p-12 lg:p-16 relative"
          >
            {/* Quote marks */}
            <div className="absolute top-6 left-6 text-6xl text-games-gold/10 font-display leading-none">
              &ldquo;
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-games-gold/10 font-display leading-none">
              &rdquo;
            </div>

            {/* Heart icon */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-br from-driver-red/20 to-games-fire/20 flex items-center justify-center"
            >
              <span className="text-3xl">💛</span>
            </motion.div>

            {/* Quote text */}
            <blockquote className="relative z-10">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed mb-8">
                Your presence is the most valuable gift of all. We&apos;re just happy you&apos;re joining us for Ansel&apos;s special day!
              </p>
              <footer className="flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-games-gold/30" />
                <cite className="font-body text-lg text-games-gold not-italic">
                  The Vivas Family
                </cite>
                <span className="text-xl">💛</span>
                <div className="h-px w-8 bg-games-gold/30" />
              </footer>
            </blockquote>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-games-gold/20 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-games-gold/20 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-games-gold/20 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-games-gold/20 rounded-br-2xl" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 font-body text-white/40 text-sm"
          >
            May the odds be ever in your favor ✨
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
