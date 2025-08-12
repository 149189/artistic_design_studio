import { useEffect, useMemo, useState } from 'react'
import './App.css'
import ThreeHero from './ThreeHero'
import Docs from './Docs'
import { applyThemeVariables, extractPaletteFromImages } from './theme'

type PaletteState = {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
}

function App() {
  const [palette, setPalette] = useState<PaletteState | null>(null)

  const images = useMemo(
    () => [
      '/IMG_20250812_125549.jpg',
      '/IMG_20250812_125556.jpg',
    ],
    []
  )

  useEffect(() => {
    let mounted = true
    extractPaletteFromImages(images).then((pal) => {
      if (!mounted) return
      setPalette(pal)
      applyThemeVariables(pal)
    })
    return () => {
      mounted = false
    }
  }, [images])

  return (
    <div>
      <header style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, color: 'var(--color-text)' }}>Artistic Design Studio</h1>
        <nav style={{ display: 'flex', gap: 16 }}>
          <a href="#work" style={{ color: 'var(--color-primary)' }}>Work</a>
          <a href="#about" style={{ color: 'var(--color-secondary)' }}>About</a>
          <a href="#contact" style={{ color: 'var(--color-accent)' }}>Contact</a>
        </nav>
      </header>

      {palette && (
        <ThreeHero
          primary={palette.primary}
          secondary={palette.secondary}
          accent={palette.accent}
          background={palette.background}
          text={palette.text}
          heading="Interior Design Studio"
          subheading="Timeless, contemporary, and uniquely yours"
        />
      )}

      <section id="work" style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}>
        <h2 style={{ color: 'var(--color-primary)' }}>Featured Work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {images.map((src) => (
            <figure key={src} style={{ margin: 0, borderRadius: 12, overflow: 'hidden', background: 'rgba(0,0,0,0.1)' }}>
              <img src={src} alt="Interior" style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
            </figure>
          ))}
        </div>
      </section>

      <Docs />

      <footer style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--color-text)' }}>
        <small>© {new Date().getFullYear()} Artistic Design Studio</small>
      </footer>
    </div>
  )
}

export default App
