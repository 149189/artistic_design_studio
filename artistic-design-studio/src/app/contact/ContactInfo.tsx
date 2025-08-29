import { Phone, Instagram, MapPin, Clock, Mail } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="font-heading font-semibold text-2xl text-white mb-6">
          Contact Information
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
            <div>
              <p className="text-white/80 text-sm">Phone</p>
              <a 
                href="tel:+919987548004" 
                className="text-white font-medium hover:text-cyan-200 transition-colors"
              >
                +91 9987548004
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Instagram className="w-5 h-5 text-white mt-1 flex-shrink-0" />
            <div>
              <p className="text-white/80 text-sm">Instagram</p>
              <a 
                href="https://instagram.com/artistic_design_studio__" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-cyan-200 transition-colors"
              >
                @artistic_design_studio__
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
            <div>
              <p className="text-white/80 text-sm">Address</p>
              <address className="text-white font-medium not-italic">
                Shop no. 2, Manohar Kene Complex,<br />
                Regency Anantam, Golavali gaon,<br />
                Dombivli East
              </address>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-5 h-5 text-white mt-1 flex-shrink-0" />
            <div>
              <p className="text-white/80 text-sm">Email</p>
              <a 
                href="mailto:info@artisticdesignstudio.com" 
                className="text-white font-medium hover:text-cyan-200 transition-colors"
              >
                info@artisticdesignstudio.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="flex items-center space-x-3 mb-4">
          <Clock className="w-5 h-5 text-white" />
          <h3 className="font-heading font-semibold text-xl text-white">
            Business Hours
          </h3>
        </div>
        <div className="space-y-2 text-white/80">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span>9:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>10:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>By Appointment</span>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="font-heading font-semibold text-xl text-white mb-4">
          Need Quick Help?
        </h3>
        <p className="text-white/80 mb-4">
          For urgent inquiries or to schedule a consultation, give us a call or send us a WhatsApp message.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+919987548004"
            className="flex items-center justify-center px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/40 rounded-lg text-green-200 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
          <a
            href="https://wa.me/919987548004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/40 rounded-lg text-green-200 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}