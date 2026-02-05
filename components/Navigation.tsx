'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CarIcon, BirdIcon } from './Icons3D'

interface NavigationProps {
  activeSection: string
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'details', label: 'Details' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'game', label: 'Game' },
  { id: 'message', label: 'Message' },
]

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-driver-red to-games-fire flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-white">A</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-driver-red to-games-fire rounded-xl blur opacity-30" />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-lg font-semibold text-white">ANSEL</span>
                <span className="block text-xs text-white/50 tracking-wider">FEB 15, 2026</span>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 font-body text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/50 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-games-fire"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Decorative icons */}
            <div className="hidden lg:flex items-center gap-4">
              <CarIcon className="w-8 h-8 opacity-50" animate={false} />
              <BirdIcon className="w-8 h-8 opacity-50" animate={false} />
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full origin-left"
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? -2 : 0 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1, x: isMobileMenuOpen ? 20 : 0 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full origin-left"
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? 2 : 0 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-brand-dark border-l border-white/10 p-6 pt-24"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-driver-red/20 to-games-fire/20 text-white border border-games-fire/30'
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="font-display tracking-wide">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile decorative icons */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="flex justify-center gap-4 opacity-30">
                  <CarIcon className="w-10 h-10" animate={false} />
                  <BirdIcon className="w-10 h-10" animate={false} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
