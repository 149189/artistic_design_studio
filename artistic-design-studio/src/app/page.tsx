import HeroSection from '@/app/components/sections/HeroSection'
import AboutSection from '@/app/components/sections/AboutSection'
import PortfolioSection from '@/app/components/sections/PortfolioSection'
import ServicesSection from '@/app/components/sections/ServicesSection'
import ContactSection from '@/app/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}