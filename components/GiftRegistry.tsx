'use client'

import { motion } from 'framer-motion'

// Gift suggestions themed around the movies
const GIFT_SUGGESTIONS = [
  {
    category: 'Getaway Gear',
    icon: '🚗',
    description: 'For the little driver in training',
    items: [
      { name: 'Toy Cars & Race Tracks', emoji: '🏎️', link: '#' },
      { name: 'Baby Walker (Car-Shaped)', emoji: '🚙', link: '#' },
      { name: 'Music Box or Sound Toys', emoji: '🎵', link: '#' },
      { name: 'Sunglasses (Baby-Safe)', emoji: '🕶️', link: '#' },
    ]
  },
  {
    category: 'District Essentials',
    icon: '🏹',
    description: 'Survival gear for the newest tribute',
    items: [
      { name: 'Adventure Storybooks', emoji: '📚', link: '#' },
      { name: 'Forest-Themed Nursery Decor', emoji: '🌲', link: '#' },
      { name: 'Mockingjay Plush Toy', emoji: '🦅', link: '#' },
      { name: 'Archery Set (When Older!)', emoji: '🎯', link: '#' },
    ]
  },
  {
    category: 'Victor\'s Bounty',
    icon: '🏆',
    description: 'Treasures fit for a champion',
    items: [
      { name: 'College Fund Contribution', emoji: '🎓', link: '#' },
      { name: 'Gold Jewelry (Keepsake)', emoji: '💛', link: '#' },
      { name: 'Premium Baby Care Set', emoji: '✨', link: '#' },
      { name: 'Family Experience Gift', emoji: '🎢', link: '#' },
    ]
  }
]

const REGISTRY_LINKS = [
  { name: 'Amazon Baby Registry', url: '#', color: 'from-orange-500 to-orange-600' },
  { name: 'Target Registry', url: '#', color: 'from-red-500 to-red-600' },
  { name: 'Cash Gift (GCash/PayPal)', url: '#', color: 'from-blue-500 to-blue-600' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function GiftRegistry() {
  return (
    <div className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-games-wheat/30 to-ansel-muted" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-games-gold/10 text-8xl">🎁</div>
      <div className="absolute bottom-20 left-10 text-driver-red/10 text-6xl">💝</div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="mockingjay-divider mb-6">
            <span className="px-4 text-4xl">🎁</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-ansel-dark mb-4">
            Sponsor a Tribute
          </h2>
          <p className="font-body text-lg text-ansel-dark/60 max-w-2xl mx-auto">
            Your presence is the greatest gift! But if you&apos;d like to send supplies to our little tribute, here are some ideas...
          </p>
        </motion.div>

        {/* Gift suggestions grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {GIFT_SUGGESTIONS.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="district-card p-6"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-games-gold/20 to-games-fire/20 text-4xl mb-3">
                  {category.icon}
                </div>
                <h3 className="font-heading text-xl text-ansel-dark">{category.category}</h3>
                <p className="font-body text-sm text-ansel-dark/50">{category.description}</p>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-ansel-muted/50 hover:bg-games-gold/10 transition-colors cursor-pointer group"
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <span className="font-body text-sm text-ansel-dark group-hover:text-games-fire transition-colors">
                      {item.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Registry links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="district-card p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl text-ansel-dark mb-6">
              Official Registries
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {REGISTRY_LINKS.map((registry, index) => (
                <motion.a
                  key={index}
                  href={registry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${registry.color} text-white font-body text-sm hover:opacity-90 transition-opacity`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {registry.name}
                </motion.a>
              ))}
            </div>

            {/* Note about presence */}
            <div className="mt-8 p-4 bg-games-forest/5 rounded-lg border border-games-forest/20">
              <p className="font-body text-sm text-ansel-dark/70 italic">
                &quot;Your presence is the most valuable gift of all. We&apos;re just happy you&apos;re joining us for Ansel&apos;s special day!&quot;
              </p>
              <p className="font-body text-xs text-ansel-dark/50 mt-2">
                — The Vivas Family 💛
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
