'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CarIcon, BirdIcon } from './Icons3D'

// Gallery images with Ansel's actual photos
const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/ansel1.jpg',
    alt: 'Ansel photo 1',
    caption: 'Our little tribute ready for the arena',
  },
  {
    id: 2,
    src: '/images/ansel2.jpg',
    alt: 'Ansel photo 2',
    caption: 'Gearing up in his tiny race car',
  },
  {
    id: 3,
    src: '/images/ansel3.jpg',
    alt: 'Ansel photo 3',
    caption: 'The mockingjay of our hearts',
  },
  {
    id: 4,
    src: '/images/ansel4.jpg',
    alt: 'Ansel photo 4',
    caption: 'May the odds be ever in his favor',
  },
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (image: typeof GALLERY_IMAGES[0], index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => setSelectedImage(null)

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length
    setCurrentIndex(nextIndex)
    setSelectedImage(GALLERY_IMAGES[nextIndex])
  }

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    setCurrentIndex(prevIndex)
    setSelectedImage(GALLERY_IMAGES[prevIndex])
  }

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-[#0a0f1a]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <CarIcon className="w-40 h-40" animate={false} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <BirdIcon className="w-32 h-32" animate={false} />
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
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-games-gold" />
            <CarIcon className="w-8 h-8" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-games-gold" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            The Documentary
          </h2>
          <p className="font-body text-lg text-white/60">
            Behind the scenes of our little tribute&apos;s journey
          </p>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <div className="aspect-square overflow-hidden rounded-2xl bg-white/5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="font-body text-white text-sm">{image.caption}</p>
                  </div>
                </motion.div>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-driver-red/20 to-games-fire/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="text-2xl">📷</span>
            <p className="font-body text-sm text-white/60">
              More photos coming after the celebration!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image container */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square sm:aspect-auto sm:h-[70vh] rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl">
                <p className="font-body text-white text-lg">{selectedImage.caption}</p>
                <p className="font-body text-white/50 text-sm mt-1">
                  {currentIndex + 1} / {GALLERY_IMAGES.length}
                </p>
              </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={(e) => { e.stopPropagation(); openLightbox(img, idx); }}
                  className={`w-16 h-16 rounded-lg overflow-hidden transition-all ${
                    idx === currentIndex ? 'ring-2 ring-games-fire scale-110' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
