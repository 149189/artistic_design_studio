import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'ARTISTIC DESIGN STUDIO - We create dreams, not just designs',
  description: 'Professional interior design studio in Dombivli East. We create beautiful, functional spaces that reflect your personality and lifestyle.',
  keywords: 'interior design, home decoration, residential design, commercial design, Dombivli East',
  authors: [{ name: 'ARTISTIC DESIGN STUDIO' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ARTISTIC DESIGN STUDIO - Interior Design Services',
    description: 'We create dreams, not just designs. Professional interior design in Dombivli East.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ARTISTIC DESIGN STUDIO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}