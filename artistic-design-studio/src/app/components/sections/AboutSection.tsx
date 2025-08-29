'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-8">
            About Our Studio
          </h2>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              At ARTISTIC DESIGN STUDIO, we believe that every space tells a story. 
              Our passion lies in transforming ordinary rooms into extraordinary experiences 
              that reflect your personality, lifestyle, and dreams.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Our Mission',
                  description: 'To create beautiful, functional spaces that enhance daily life and inspire joy.'
                },
                {
                  title: 'Our Vision',
                  description: 'To be the leading interior design studio known for innovative and personalized solutions.'
                },
                {
                  title: 'Our Values',
                  description: 'Quality craftsmanship, attention to detail, and exceptional client service guide everything we do.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="font-heading font-semibold text-xl text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}