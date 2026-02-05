'use client'

import { motion } from 'framer-motion'
import { CarIcon, BirdIcon } from './Icons3D'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-driver-red/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-games-fire/20 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center">
        {/* Animated icons */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CarIcon className="w-16 h-16" />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-games-fire to-games-gold flex items-center justify-center"
          >
            <span className="font-display text-3xl font-bold text-white">A</span>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BirdIcon className="w-16 h-16" />
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-2xl text-white mb-2"
        >
          Starting Engines...
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/60 text-sm tracking-widest uppercase"
        >
          May the odds be ever in your favor
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '16rem' }}
          transition={{ delay: 0.3 }}
          className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-driver-red via-games-fire to-games-gold"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
