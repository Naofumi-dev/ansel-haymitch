'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
  activeSection: string
}

const navItems = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'details', label: 'Details', icon: '📍' },
  { id: 'rsvp', label: 'RSVP', icon: '✉️' },
  { id: 'gallery', label: 'Gallery', icon: '📸' },
  { id: 'game', label: 'Game', icon: '🎮' },
  { id: 'gifts', label: 'Gifts', icon: '🎁' },
]

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-driver-red to-games-fire flex items-center justify-center text-white font-display text-lg">
                A
              </div>
              <span className={`hidden sm:block font-heading text-lg tracking-wider ${
                isScrolled ? 'text-ansel-dark' : 'text-white'
              }`}>
                ANSEL
              </span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 font-body text-sm tracking-wide transition-colors ${
                    activeSection === item.id
                      ? isScrolled ? 'text-driver-red' : 'text-games-gold'
                      : isScrolled ? 'text-ansel-dark/70 hover:text-ansel-dark' : 'text-white/80 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-driver-red to-games-fire rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`w-6 h-5 flex flex-col justify-between ${
                isScrolled ? 'text-ansel-dark' : 'text-white'
              }`}>
                <motion.span
                  className={`block h-0.5 bg-current rounded-full origin-left`}
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? -2 : 0 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full origin-left"
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? 2 : 0 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-ansel-dark/90 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-b from-driver-asphalt to-games-coal p-6 pt-24"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-driver-red/20 text-games-gold'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-heading tracking-wider">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="h-px bg-gradient-to-r from-transparent via-games-gold/30 to-transparent" />
                <p className="text-center text-games-gold/50 text-xs mt-4 font-mono">
                  #TeamAnsel
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
