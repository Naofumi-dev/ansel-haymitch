'use client'

import { motion } from 'framer-motion'

// Event configuration - easily editable
const EVENT_DETAILS = {
  date: 'February 15, 2026',
  time: '10:00 AM',
  ceremony: {
    venue: 'Our Lady of La Salette Parish',
    address: 'San Jose Del Monte, Bulacan, Philippines',
  },
  reception: {
    venue: 'Hacienda Isabella',
    address: 'Tungkong Mangga, San Jose Del Monte, Bulacan',
    time: '12:00 PM onwards',
    mapLink: 'https://maps.app.goo.gl/3HNRDhqNRtdTZH7B8',
  },
  dressCode: {
    theme: 'District Outfits & Getaway Gear',
    description: 'Dress in earthy forest tones (greens, browns, golds) or sleek racing-inspired looks (blacks, reds, chrome accents). Think stylish rebellion meets smooth criminal!',
    suggestions: [
      'Forest greens & burnt oranges',
      'Racing red & chrome silver',
      'Elegant gold accents',
      'Sleek sunglasses encouraged!'
    ]
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function EventDetails() {
  return (
    <div className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-games-wheat via-white to-ansel-muted" />
      
      {/* Decorative arrows */}
      <div className="absolute top-20 left-10 text-games-forest/10 text-8xl rotate-45">➳</div>
      <div className="absolute bottom-20 right-10 text-driver-red/10 text-8xl -rotate-45">➳</div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mockingjay-divider mb-6">
            <span className="px-4 text-4xl">🗺️</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-ansel-dark mb-4">
            The Battle Plan
          </h2>
          <p className="font-body text-lg text-ansel-dark/60">
            Your mission briefing for the big day
          </p>
        </motion.div>

        {/* Details cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Ceremony Card */}
          <motion.div variants={itemVariants} className="district-card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-games-forest to-games-fire flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">⛪</span>
              </div>
              <div className="flex-1">
                <span className="text-xs font-mono text-games-fire tracking-widest">CHECKPOINT 01</span>
                <h3 className="font-heading text-2xl text-ansel-dark mt-1 mb-3">The Ceremony</h3>
                <div className="space-y-3 text-ansel-dark/70">
                  <div className="flex items-center gap-2">
                    <span className="text-driver-red">📅</span>
                    <span className="font-body">{EVENT_DETAILS.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-driver-red">⏰</span>
                    <span className="font-body">{EVENT_DETAILS.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-driver-red">📍</span>
                    <div>
                      <p className="font-body font-semibold">{EVENT_DETAILS.ceremony.venue}</p>
                      <p className="font-body text-sm">{EVENT_DETAILS.ceremony.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div variants={itemVariants} className="district-card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-driver-red to-games-gold flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🎉</span>
              </div>
              <div className="flex-1">
                <span className="text-xs font-mono text-games-fire tracking-widest">CHECKPOINT 02</span>
                <h3 className="font-heading text-2xl text-ansel-dark mt-1 mb-3">The Victory Feast</h3>
                <div className="space-y-3 text-ansel-dark/70">
                  <div className="flex items-center gap-2">
                    <span className="text-games-fire">⏰</span>
                    <span className="font-body">{EVENT_DETAILS.reception.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-games-fire">🏛️</span>
                    <div>
                      <p className="font-body font-semibold">{EVENT_DETAILS.reception.venue}</p>
                      <p className="font-body text-sm">{EVENT_DETAILS.reception.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-games-fire">🍽️</span>
                    <span className="font-body">Lunch & Celebration</span>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/3HNRDhqNRtdTZH7B8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-gradient-to-r from-driver-red to-games-fire text-white text-sm rounded-full hover:opacity-90 transition-opacity"
                  >
                    <span>📍</span>
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dress Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="district-card p-6 sm:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-driver-red/10 rounded-full px-4 py-1 mb-4">
              <span>👔</span>
              <span className="font-mono text-sm text-driver-red tracking-wider">DRESS CODE</span>
              <span>👗</span>
            </div>
            
            <h3 className="font-heading text-3xl text-ansel-dark mb-2">
              {EVENT_DETAILS.dressCode.theme}
            </h3>
            
            <p className="font-body text-ansel-dark/70 max-w-2xl mx-auto mb-8">
              {EVENT_DETAILS.dressCode.description}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {EVENT_DETAILS.dressCode.suggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-games-forest/10 to-driver-red/10 rounded-full border border-games-gold/30"
                >
                  <span className="font-body text-sm text-ansel-dark">{suggestion}</span>
                </motion.div>
              ))}
            </div>

            {/* Fun visual element */}
            <div className="mt-8 flex justify-center items-center gap-4">
              <motion.span
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl"
              >
                🕶️
              </motion.span>
              <span className="text-games-gold text-2xl">+</span>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-4xl"
              >
                🏹
              </motion.span>
              <span className="text-games-gold text-2xl">=</span>
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-4xl"
              >
                ✨
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Map placeholder / directions hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="font-body text-sm text-ansel-dark/50">
            📍 Maps and directions will be sent with your RSVP confirmation
          </p>
        </motion.div>
      </div>
    </div>
  )
}
