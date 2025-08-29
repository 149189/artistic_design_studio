import { Instagram, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">ARTISTIC DESIGN STUDIO</h3>
            <p className="text-white/80 italic mb-4">&quot;We create dreams, not just designs&quot;</p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <address className="not-italic">
                  Shop no. 2, Manohar Kene Complex,<br />
                  Regency Anantam, Golavali gaon,<br />
                  Dombivli East
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/demos" className="hover:text-white transition-colors">Interactive Demos</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+919987548004"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
              >
                <Phone size={16} />
                <span>+91 9987548004</span>
              </a>
              <a
                href="https://instagram.com/artistic_design_studio__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
              >
                <Instagram size={16} />
                <span>@artistic_design_studio__</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 ARTISTIC DESIGN STUDIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}