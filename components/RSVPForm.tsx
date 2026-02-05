'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FireIcon, BirdIcon } from './Icons3D'

interface FormData {
  name: string
  email: string
  guests: string
  attending: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  attending?: string
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    guests: '1',
    attending: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.attending) newErrors.attending = 'Please let us know if you can attend'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('RSVP submitted:', formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a0f1a] to-brand-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-driver-red/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-games-fire" />
            <FireIcon className="w-8 h-8" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-games-fire" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Join the Alliance
          </h2>
          <p className="font-body text-lg text-white/60">
            Volunteer as tribute for Ansel&apos;s special day
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-games-forest to-games-gold flex items-center justify-center"
              >
                <BirdIcon className="w-12 h-12" animate={false} />
              </motion.div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Tribute Registered!
              </h3>
              <p className="font-body text-white/60 mb-8">
                May the odds be ever in your favor. We&apos;ll send you a confirmation soon!
              </p>
              <motion.button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ name: '', email: '', guests: '1', attending: '', message: '' })
                }}
                className="text-games-fire hover:text-games-gold transition-colors font-body"
                whileHover={{ scale: 1.05 }}
              >
                Submit another response →
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Attending selection */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <label className="block font-display text-lg text-white mb-4">
                  Will you be joining the celebration?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'yes', label: 'I volunteer!', icon: '🙋' },
                    { value: 'no', label: "Can't make it", icon: '😢' },
                    { value: 'maybe', label: 'Not sure yet', icon: '🤔' },
                  ].map((option) => (
                    <label key={option.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value={option.value}
                        checked={formData.attending === option.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-xl text-center transition-all ${
                          formData.attending === option.value
                            ? 'bg-gradient-to-br from-driver-red to-games-fire text-white ring-2 ring-games-gold'
                            : 'bg-white/5 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{option.icon}</span>
                        <span className="font-body text-sm">{option.label}</span>
                      </motion.div>
                    </label>
                  ))}
                </div>
                {errors.attending && (
                  <p className="mt-2 text-driver-red text-sm">{errors.attending}</p>
                )}
              </motion.div>

              {/* Name and Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block font-display text-sm text-white/70 mb-2 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Katniss Everdeen"
                    className={`input-modern ${errors.name ? 'border-driver-red' : ''}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-driver-red text-sm">{errors.name}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block font-display text-sm text-white/70 mb-2 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tribute@district12.com"
                    className={`input-modern ${errors.email ? 'border-driver-red' : ''}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-driver-red text-sm">{errors.email}</p>
                  )}
                </motion.div>
              </div>

              {/* Number of guests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block font-display text-sm text-white/70 mb-2 uppercase tracking-wider">
                  Number of Tributes (Including You)
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input-modern cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num} className="bg-brand-dark">
                      {num} {num === 1 ? 'tribute' : 'tributes'}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block font-display text-sm text-white/70 mb-2 uppercase tracking-wider">
                  Message for Ansel
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your wishes, song requests, or anything else!"
                  rows={4}
                  className="input-modern resize-none"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-modern text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <BirdIcon className="w-5 h-5" animate={false} />
                      Submit RSVP
                    </span>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
