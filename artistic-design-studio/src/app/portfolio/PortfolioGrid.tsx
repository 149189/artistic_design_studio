'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Modal from '@/app/components/ui/Modal'
const portfolioItems = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Residential',
    location: 'Dombivli East',
    year: '2024',
    image: '/images/portfolio/living-room-1.jpg',
    description: 'Contemporary design with clean lines and natural textures. This project focused on creating an open, airy space that maximizes natural light.',
    features: ['Custom Furniture', 'LED Lighting', 'Natural Materials', 'Open Layout']
  },
  {
    id: 2,
    title: 'Luxury Bedroom Suite',
    category: 'Residential',
    location: 'Thane',
    year: '2024',
    image: '/images/portfolio/bedroom-1.jpg',
    description: 'Elegant bedroom design with custom furniture and ambient lighting creating a serene retreat.',
    features: ['Walk-in Closet', 'Ambient Lighting', 'Premium Textiles', 'Smart Storage']
  },
  {
    id: 3,
    title: 'Gourmet Kitchen',
    category: 'Residential',
    location: 'Kalyan',
    year: '2023',
    image: '/images/portfolio/kitchen-1.jpg',
    description: 'Functional and stylish kitchen with premium finishes and intelligent storage solutions.',
    features: ['Quartz Countertops', 'Modular Cabinets', 'Island Design', 'Premium Appliances']
  },
  {
    id: 4,
    title: 'Executive Office',
    category: 'Commercial',
    location: 'Mumbai',
    year: '2024',
    image: '/images/portfolio/office-1.jpg',
    description: 'Professional workspace designed for productivity and comfort with modern aesthetics.',
    features: ['Ergonomic Design', 'Tech Integration', 'Meeting Rooms', 'Reception Area']
  },
  {
    id: 5,
    title: 'Home Study',
    category: 'Residential',
    location: 'Dombivli',
    year: '2023',
    image: '/images/portfolio/study-1.jpg',
    description: 'Inspiring home office with built-in storage solutions and natural lighting.',
    features: ['Built-in Storage', 'Natural Light', 'Ergonomic Setup', 'Display Shelving']
  },
  {
    id: 6,
    title: 'Elegant Dining Area',
    category: 'Residential',
    location: 'Badlapur',
    year: '2024',
    image: '/images/portfolio/dining-1.jpg',
    description: 'Sophisticated dining space perfect for entertaining guests with dramatic lighting.',
    features: ['Statement Lighting', 'Custom Seating', 'Wine Storage', 'Art Display']
  }
]

export default function PortfolioGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter)

  const categories = ['All', 'Residential', 'Commercial']

  return (
    <>
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    {/* Placeholder - replace with actual images */}
                    <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                      <span className="text-white/60 text-sm text-center">
                        {item.title}<br />Image
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading font-semibold text-lg text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs text-white/60">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm mb-2">
                      {item.location}
                    </p>
                    <p className="text-white/70 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ''}
      >
        {selectedItem && (
          <div className="space-y-6">
            <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center">
              <span className="text-white/60">
                {selectedItem.title} - Full Size Image
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading font-semibold text-white mb-2">Project Details</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <div><strong>Category:</strong> {selectedItem.category}</div>
                  <div><strong>Location:</strong> {selectedItem.location}</div>
                  <div><strong>Year:</strong> {selectedItem.year}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold text-white mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {selectedItem.features.map((feature, index) => (
                    <li key={index} className="text-sm text-white/80 flex items-center">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              {selectedItem.description}
            </p>
          </div>
        )}
      </Modal>
    </>
  )
}