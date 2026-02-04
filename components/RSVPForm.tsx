'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  name: string
  email: string
  guests: string
  attending: string
  dietaryRestrictions: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  guests?: string
  attending?: string
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    guests: '1',
    attending: '',
    dietaryRestrictions: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name, tribute!'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'We need your email for the mission briefing'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'That doesn\'t look like a valid email'
    }
    
    if (!formData.attending) {
      newErrors.attending = 'Will you be joining the celebration?'
    }
    
    const guestNum = parseInt(formData.guests)
    if (isNaN(guestNum) || guestNum < 1 || guestNum > 10) {
      newErrors.guests = 'Please enter a valid number (1-10)'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    // For production, integrate with Formspree, Google Forms, or your own API
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For actual implementation, you would do something like:
      // await fetch('/api/rsvp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      console.log('Form submitted:', formData)
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
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 asphalt-bg" />
      
      {/* Decorative tire tracks */}
      <div className="absolute inset-0 bg-tire-track opacity-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="mockingjay-divider mb-6">
            <span className="px-4 text-4xl">✉️</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Join the Alliance
          </h2>
          <p className="font-body text-lg text-games-wheat/70">
            Volunteer as tribute for Ansel's special day
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            // Success state
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
                <span className="text-5xl">🎯</span>
              </motion.div>
              <h3 className="font-heading text-3xl text-games-gold mb-4">
                Tribute Registered!
              </h3>
              <p className="font-body text-games-wheat/70 mb-6">
                May the odds be ever in your favor. We&apos;ll send you a confirmation soon!
              </p>
              <motion.button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: '',
                    email: '',
                    guests: '1',
                    attending: '',
                    dietaryRestrictions: '',
                    message: ''
                  })
                }}
                className="text-games-gold hover:text-white transition-colors font-body"
                whileHover={{ scale: 1.05 }}
              >
                Submit another response →
              </motion.button>
            </motion.div>
          ) : (
            // Form state
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-games-gold/20"
              >
                <label className="block font-heading text-lg text-games-gold mb-4">
                  Will you be joining the celebration?
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { value: 'yes', label: 'I volunteer!', icon: '🙋' },
                    { value: 'no', label: 'Can\'t make it', icon: '😢' },
                    { value: 'maybe', label: 'Not sure yet', icon: '🤔' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex-1 min-w-[140px] cursor-pointer`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value={option.value}
                        checked={formData.attending === option.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg text-center transition-all ${
                        formData.attending === option.value
                          ? 'bg-gradient-to-br from-driver-red to-games-fire text-white ring-2 ring-games-gold'
                          : 'bg-white/10 text-games-wheat hover:bg-white/20'
                      }`}>
                        <span className="text-2xl block mb-1">{option.icon}</span>
                        <span className="font-body text-sm">{option.label}</span>
                      </div>
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
                  <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Katniss Everdeen"
                    className={`input-arena rounded-lg ${errors.name ? 'border-driver-red' : ''}`}
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
                  <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tribute@district12.com"
                    className={`input-arena rounded-lg ${errors.email ? 'border-driver-red' : ''}`}
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
                <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                  NUMBER OF TRIBUTES (INCLUDING YOU)
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input-arena rounded-lg cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'tribute' : 'tributes'}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Dietary restrictions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                  DIETARY RESTRICTIONS
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  placeholder="Any food allergies or preferences?"
                  className="input-arena rounded-lg"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block font-heading text-sm text-games-gold mb-2 tracking-wider">
                  MESSAGE FOR ANSEL
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your wishes, song requests, or anything else!"
                  rows={4}
                  className="input-arena rounded-lg resize-none"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-tribute disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        ⏳
                      </motion.span>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>🏹</span>
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
