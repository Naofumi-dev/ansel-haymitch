'use client'

import { motion } from 'framer-motion'
import { ArrowIcon, FireIcon, CarIcon, BirdIcon } from './Icons3D'

const EVENT_DETAILS = {
  date: 'February 15, 2026',
  ceremony: {
    venue: 'Our Lady of La Salette Quasi-Parish',
    address: 'Diocese of Malolos, San Jose Del Monte, Bulacan',
    time: '10:00 AM',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.5!2d121.0447!3d14.8147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af7c0b1e5c3d%3A0x9c3e5c5c5c5c5c5c!2sOur%20Lady%20of%20La%20Salette%20Quasi-Parish!5e0!3m2!1sen!2sph!4v1234567890',
    mapLink: 'https://maps.app.goo.gl/YfEx2mP7mdqYerwB7',
  },
  reception: {
    venue: "3M's Garden Resort and Pavilion",
    address: 'San Jose Del Monte, Bulacan',
    time: '12:00 PM onwards',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.5!2d121.0447!3d14.8147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3M%27s%20Garden%20Resort!5e0!3m2!1sen!2sph!4v1234567890',
    mapLink: 'https://maps.app.goo.gl/AEu4XczP4NZ4nQbe9',
  },
  dressCode: {
    theme: 'District Outfits & Getaway Gear',
    description: 'Dress in earthy forest tones (greens, browns, golds) or sleek racing-inspired looks (blacks, reds, chrome accents).',
    colors: ['Forest Green', 'Racing Red', 'Gold Accents', 'Chrome Silver']
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function EventDetails() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <ArrowIcon className="w-32 h-32" animate={false} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <FireIcon className="w-24 h-24" animate={false} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-games-fire" />
            <ArrowIcon className="w-8 h-8" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-games-fire" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            The Battle Plan
          </h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto">
            Your mission briefing for the big day
          </p>
        </motion.div>

        {/* Event cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Ceremony Card */}
          <motion.div variants={itemVariants} className="glass-card overflow-hidden group">
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-games-forest to-games-fire flex items-center justify-center flex-shrink-0">
                  <BirdIcon className="w-8 h-8" animate={false} />
                </div>
                <div>
                  <span className="text-xs font-body text-games-fire tracking-widest uppercase">Checkpoint 01</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">The Ceremony</h3>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-5 h-5 text-games-fire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-body">{EVENT_DETAILS.date}</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-5 h-5 text-games-fire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-body">{EVENT_DETAILS.ceremony.time}</span>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 text-games-fire flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-body font-semibold text-white">{EVENT_DETAILS.ceremony.venue}</p>
                    <p className="font-body text-sm">{EVENT_DETAILS.ceremony.address}</p>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="map-container" role="region" aria-label="Ceremony location map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.284893453!2d121.04525!3d14.81575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af7b02d1b18f%3A0x7c9cf2bafb7a9c99!2sOur%20Lady%20of%20La%20Salette%20Quasi%20Parish!5e0!3m2!1sen!2sph!4v1707123456789!5m2!1sen!2sph"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ceremony Location - Our Lady of La Salette Quasi-Parish"
                />
              </div>
              
              <a
                href={EVENT_DETAILS.ceremony.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-games-fire hover:text-games-gold transition-colors font-body text-sm"
              >
                <span>Get Directions</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div variants={itemVariants} className="glass-card overflow-hidden group">
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-driver-red to-games-gold flex items-center justify-center flex-shrink-0">
                  <CarIcon className="w-8 h-8" animate={false} />
                </div>
                <div>
                  <span className="text-xs font-body text-games-fire tracking-widest uppercase">Checkpoint 02</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">The Victory Feast</h3>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-5 h-5 text-games-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-body">{EVENT_DETAILS.reception.time}</span>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 text-games-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-body font-semibold text-white">{EVENT_DETAILS.reception.venue}</p>
                    <p className="font-body text-sm">{EVENT_DETAILS.reception.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-5 h-5 text-games-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="font-body">Lunch & Celebration</span>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="map-container" role="region" aria-label="Reception location map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.5!2d121.0447!3d14.8147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af1847455555%3A0x9999999999999999!2s3M&#39;s%20Garden%20Resort%20and%20Pavilion!5e0!3m2!1sen!2sph!4v1707123456789!5m2!1sen!2sph"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reception Location - 3M's Garden Resort and Pavilion"
                />
              </div>
              
              <a
                href={EVENT_DETAILS.reception.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-games-gold hover:text-games-fire transition-colors font-body text-sm"
              >
                <span>Get Directions</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Dress Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <svg className="w-5 h-5 text-games-fire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span className="text-white/70 text-sm font-body tracking-wider uppercase">Dress Code</span>
          </div>
          
          <h3 className="font-display text-3xl font-bold text-white mb-3">
            {EVENT_DETAILS.dressCode.theme}
          </h3>
          
          <p className="font-body text-white/60 max-w-2xl mx-auto mb-8">
            {EVENT_DETAILS.dressCode.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {EVENT_DETAILS.dressCode.colors.map((color, index) => (
              <motion.div
                key={color}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-games-fire/50 transition-all"
              >
                <span className="font-body text-sm text-white/80">{color}</span>
              </motion.div>
            ))}
          </div>

          {/* Fun icons */}
          <div className="mt-10 flex justify-center items-center gap-6">
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
              <CarIcon className="w-10 h-10 opacity-60" animate={false} />
            </motion.div>
            <span className="text-white/20 text-2xl">+</span>
            <motion.div whileHover={{ rotate: -10, scale: 1.1 }}>
              <BirdIcon className="w-10 h-10 opacity-60" animate={false} />
            </motion.div>
            <span className="text-white/20 text-2xl">=</span>
            <motion.div whileHover={{ scale: 1.2 }} className="text-3xl">
              ✨
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
