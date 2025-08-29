'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Instagram, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/demos', label: 'Demos' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="font-heading font-bold text-lg text-cyan-600">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-white text-lg leading-tight">
                ARTISTIC DESIGN
                <br />
                <span className="text-sm font-normal">STUDIO</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact Links */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="tel:+919987548004"
                className="text-white/90 hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://instagram.com/artistic_design_studio__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 hover:text-white font-medium py-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-3 border-t border-white/20">
                  <a
                    href="tel:+919987548004"
                    className="flex items-center space-x-2 text-white/90"
                  >
                    <Phone size={16} />
                    <span className="text-sm">9987548004</span>
                  </a>
                  <a
                    href="https://instagram.com/artistic_design_studio__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/90"
                  >
                    <Instagram size={16} />
                    <span className="text-sm">Follow Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}