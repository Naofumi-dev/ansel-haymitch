'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Placeholder images - themed around the Baby Driver / Hunger Games aesthetic
// In production, replace with actual photos
const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop',
    alt: 'Baby shoes',
    caption: 'Ready to hit the road',
    category: 'baby'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop',
    alt: 'Vintage car',
    caption: 'The getaway vehicle',
    category: 'theme'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop',
    alt: 'Sunlit forest',
    caption: 'The Arena awaits',
    category: 'theme'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=600&h=400&fit=crop',
    alt: 'Bow and arrow',
    caption: 'Tribute training',
    category: 'theme'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
    alt: 'Baby hands',
    caption: 'Little tribute',
    category: 'baby'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&h=400&fit=crop',
    alt: 'Family celebration',
    caption: 'Victory celebration',
    category: 'family'
  }
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter)

  return (
    <div className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ansel-muted via-games-wheat/50 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 text-games-gold/20 text-6xl">📸</div>
      <div className="absolute bottom-10 left-20 text-driver-red/20 text-4xl">🎬</div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="mockingjay-divider mb-6">
            <span className="px-4 text-4xl">🎞️</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-ansel-dark mb-4">
            The Documentary
          </h2>
          <p className="font-body text-lg text-ansel-dark/60">
            Behind the scenes of our little tribute&apos;s journey
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-10"
        >
          {['all', 'baby', 'theme', 'family'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-body text-sm capitalize transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-driver-red to-games-fire text-white'
                  : 'bg-white/50 text-ansel-dark/60 hover:bg-white hover:text-ansel-dark'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? '🎯 All' : category === 'baby' ? '👶 Baby' : category === 'theme' ? '🎬 Theme' : '👨‍👩‍👧 Family'}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-ansel-dark/5">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ansel-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="font-body text-white text-sm">{image.caption}</p>
                  </div>
                </div>
                {/* Racing stripe accent */}
                <div className="absolute top-2 left-2 w-8 h-1 bg-gradient-to-r from-driver-red to-games-fire rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Placeholder note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-games-gold/10 rounded-full px-6 py-3 border border-games-gold/20">
            <span className="text-2xl">📷</span>
            <p className="font-body text-sm text-ansel-dark/70">
              More photos coming after the celebration!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ansel-dark/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ansel-dark/90 to-transparent rounded-b-xl">
                <p className="font-body text-white text-lg">{selectedImage.caption}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-driver-red rounded-full flex items-center justify-center text-white hover:bg-games-fire transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
