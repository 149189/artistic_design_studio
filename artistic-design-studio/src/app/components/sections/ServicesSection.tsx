'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building, Palette, Wrench } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Complete home interior design services from concept to completion. We create personalized spaces that reflect your lifestyle and preferences.',
    features: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms']
  },
  {
    icon: Building,
    title: 'Commercial Design',
    description: 'Professional workspace design that enhances productivity and creates impressive business environments.',
    features: ['Offices', 'Retail Spaces', 'Restaurants', 'Hotels']
  },
  {
    icon: Palette,
    title: 'Design Consultation',
    description: 'Expert advice on color schemes, furniture selection, and space planning to help you make informed design decisions.',
    features: ['Color Schemes', 'Space Planning', 'Furniture Selection', 'Styling']
  },
  {
    icon: Wrench,
    title: 'Project Management',
    description: 'End-to-end project management ensuring your design vision is executed flawlessly within timeline and budget.',
    features: ['Timeline Management', 'Vendor Coordination', 'Quality Control', 'Budget Planning']
  }
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Our Services
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From initial concept to final installation, we provide comprehensive interior design services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-cyan-600" />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white/70 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
