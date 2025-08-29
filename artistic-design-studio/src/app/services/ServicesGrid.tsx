'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building, Palette, Wrench, Users, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Interior Design',
    description: 'Complete home interior design services from concept to completion. We create personalized spaces that reflect your lifestyle and preferences.',
    features: [
      'Living Room Design',
      'Bedroom Suites',
      'Kitchen Planning',
      'Bathroom Design',
      'Home Office Setup',
      'Dining Areas'
    ],
    process: [
      'Initial Consultation',
      '3D Visualization',
      'Material Selection',
      'Project Execution'
    ]
  },
  {
    icon: Building,
    title: 'Commercial Interior Design',
    description: 'Professional workspace design that enhances productivity and creates impressive business environments.',
    features: [
      'Office Spaces',
      'Retail Stores',
      'Restaurants & Cafes',
      'Hotels & Hospitality',
      'Healthcare Facilities',
      'Educational Spaces'
    ],
    process: [
      'Space Analysis',
      'Concept Development',
      'Design Implementation',
      'Final Handover'
    ]
  },
  {
    icon: Palette,
    title: 'Design Consultation',
    description: 'Expert advice on color schemes, furniture selection, and space planning to help you make informed design decisions.',
    features: [
      'Color Consultation',
      'Space Planning',
      'Furniture Selection',
      'Lighting Design',
      'Styling Services',
      'Design Audits'
    ],
    process: [
      'Assessment Meeting',
      'Recommendations',
      'Style Guide Creation',
      'Follow-up Support'
    ]
  },
  {
    icon: Wrench,
    title: 'End-to-End Project Management',
    description: 'Comprehensive project management ensuring your design vision is executed flawlessly within timeline and budget.',
    features: [
      'Timeline Management',
      'Vendor Coordination',
      'Quality Control',
      'Budget Planning',
      'Installation Supervision',
      'Final Styling'
    ],
    process: [
      'Project Planning',
      'Resource Allocation',
      'Progress Monitoring',
      'Quality Assurance'
    ]
  },
  {
    icon: Users,
    title: 'Design Collaboration',
    description: 'Work closely with our team throughout the design process, ensuring your vision comes to life exactly as you imagined.',
    features: [
      'Client Meetings',
      'Design Reviews',
      'Feedback Integration',
      'Regular Updates',
      'Virtual Presentations',
      'Change Management'
    ],
    process: [
      'Kickoff Meeting',
      'Collaborative Planning',
      'Iterative Design',
      'Final Approval'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Sustainable Design Solutions',
    description: 'Eco-friendly and sustainable design approaches that are both beautiful and environmentally responsible.',
    features: [
      'Eco-friendly Materials',
      'Energy Efficiency',
      'Natural Lighting',
      'Indoor Air Quality',
      'Waste Reduction',
      'Local Sourcing'
    ],
    process: [
      'Sustainability Audit',
      'Green Material Selection',
      'Energy-efficient Planning',
      'Environmental Impact Review'
    ]
  }
]

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-cyan-600" />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-2xl text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-white mb-3">
                        What&#39;s Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-white/70 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-white mb-3">
                        Our Process:
                      </h4>
                      <ol className="space-y-2">
                        {service.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-white/70 text-sm flex items-center">
                            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-semibold text-white mr-3 flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
