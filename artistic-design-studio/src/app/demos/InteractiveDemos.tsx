'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Import the interface
import type { DemoSceneProps } from '@/app/components/3d/DemoScene'

// Dynamically import 3D components with proper typing
const DemoScene = dynamic<DemoSceneProps>(() => import('@/app/components/3d/DemoScene'), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-white/10 rounded-xl animate-pulse" />
})

const demos = [
  {
    id: 1,
    title: 'Modern Living Room',
    description: 'Explore a contemporary living space with clean lines and natural materials.',
    sceneType: 'living-room' as const
  },
  {
    id: 2,
    title: 'Luxury Bedroom',
    description: 'Step into an elegant bedroom design with custom furniture and ambient lighting.',
    sceneType: 'bedroom' as const
  },
  {
    id: 3,
    title: 'Gourmet Kitchen',
    description: 'Discover a functional and stylish kitchen with premium finishes and smart storage.',
    sceneType: 'kitchen' as const
  },
  {
    id: 4,
    title: 'Professional Study',
    description: 'Experience a productive home office with built-in storage and ergonomic design.',
    sceneType: 'study' as const
  }
]

export default function InteractiveDemos() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20"
            >
              <div className="h-96">
                <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 animate-pulse" />}>
                  <DemoScene sceneType={demo.sceneType} />
                </Suspense>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-white mb-2">
                  {demo.title}
                </h3>
                <p className="text-white/80">
                  {demo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}