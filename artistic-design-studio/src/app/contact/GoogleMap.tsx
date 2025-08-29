'use client'

import { useEffect, useRef } from 'react'

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for Google Maps integration
    // You'll need to implement actual Google Maps API integration
    if (mapRef.current) {
      // Initialize Google Maps here
      console.log('Google Maps would be initialized here')
    }
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Visit Our Studio
          </h2>
          <p className="text-lg text-white/80">
            Located in the heart of Dombivli East, our studio is easily accessible and welcoming to all visitors.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div 
            ref={mapRef}
            className="w-full h-96 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center"
          >
            <div className="text-center text-white/60">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <p className="font-medium">Google Maps Integration</p>
              <p className="text-sm mt-2">
                Shop no. 2, Manohar Kene Complex,<br />
                Regency Anantam, Golavali gaon, Dombivli East
              </p>
              <button className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}