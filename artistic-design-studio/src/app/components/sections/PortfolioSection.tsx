'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Button from '@/app/components/ui/Button'

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Residential',
    image: '/images/portfolio/living-room-1.jpg',
    description: 'Contemporary design with clean lines and natural textures.'
  },
  {
    id: 2,
    title: 'Luxury Bedroom',
    category: 'Residential',
    image: '/images/portfolio/bedroom-1.jpg',
    description: 'Elegant bedroom design with custom furniture and lighting.'
  },
  {
    id: 3,
    title: 'Gourmet Kitchen',
    category: 'Residential',
    image: '/images/portfolio/kitchen-1.jpg',
    description: 'Functional and stylish kitchen with premium finishes.'
  },
  {
    id: 4,
    title: 'Executive Office',
    category: 'Commercial',
    image: '/images/portfolio/office-1.jpg',
    description: 'Professional workspace designed for productivity and comfort.'
  },
  {
    id: 5,
    title: 'Cozy Study',
    category: 'Residential',
    image: '/images/portfolio/study-1.jpg',
    description: 'Inspiring home office with built-in storage solutions.'
  },
  {
    id: 6,
    title: 'Dining Area',
    category: 'Residential',
    image: '/images/portfolio/dining-1.jpg',
    description: 'Elegant dining space perfect for entertaining guests.'
  }
]

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('All')

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter)

  const categories = ['All', 'Residential', 'Commercial']

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover our latest projects and see how we transform spaces into beautiful, functional environments.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-white text-cyan-600 shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder for now - replace with actual images */}
                  <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                    <span className="text-white/60 text-sm">
                      {item.title} Image
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading font-semibold text-lg text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <Button href="/portfolio" variant="primary" size="large">
            View Full Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  )
}