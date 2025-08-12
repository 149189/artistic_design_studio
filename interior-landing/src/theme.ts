import Vibrant from 'node-vibrant'

export type ExtractedPalette = {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
}

function toHex(rgb?: { r: number; g: number; b: number } | number[]): string {
  if (!rgb) return '#888888'
  const [r, g, b] = Array.isArray(rgb) ? rgb : [rgb.r, rgb.g, rgb.b]
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)))
  return `#${clamp(r).toString(16).padStart(2, '0')}${clamp(g)
    .toString(16)
    .padStart(2, '0')}${clamp(b).toString(16).padStart(2, '0')}`
}

export async function extractPaletteFromImages(imageUrls: string[]): Promise<ExtractedPalette> {
  // Extract palettes from all images, then merge by simple averaging/priority
  const swatchesList: Array<Record<string, { rgb: number[] } | undefined>> = await Promise.all(
    imageUrls.map(async (url) => {
      const palette = await Vibrant.from(url).getPalette()
      return palette as unknown as Record<string, { rgb: number[] } | undefined>
    })
  )

  // Helper to pick a color across palettes with fallback order
  const pick = (keys: string[]) => {
    for (const palette of swatchesList) {
      for (const key of keys) {
        const sw = palette[key]
        if (sw) return toHex(sw.rgb)
      }
    }
    return '#888888'
  }

  const primary = pick(['Vibrant', 'LightVibrant', 'DarkVibrant'])
  const secondary = pick(['Muted', 'LightMuted', 'DarkMuted'])
  const accent = pick(['DarkVibrant', 'Vibrant', 'Muted'])

  // Background prefers light muted; text will be computed for contrast
  const background = pick(['LightMuted', 'Muted', 'LightVibrant'])

  // Simple luminance check to decide text color
  const text = getContrastText(background)

  return { primary, secondary, accent, background, text }
}

export function applyThemeVariables(palette: ExtractedPalette): void {
  const root = document.documentElement
  root.style.setProperty('--color-primary', palette.primary)
  root.style.setProperty('--color-secondary', palette.secondary)
  root.style.setProperty('--color-accent', palette.accent)
  root.style.setProperty('--color-bg', palette.background)
  root.style.setProperty('--color-text', palette.text)
}

export function getContrastText(hexColor: string): string {
  const rgb = hexToRgb(hexColor)
  if (!rgb) return '#111111'
  const [r, g, b] = rgb.map((v) => v / 255)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance > 0.6 ? '#111111' : '#ffffff'
}

function hexToRgb(hex: string): number[] | null {
  const clean = hex.replace('#', '')
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16)
    const g = parseInt(clean[1] + clean[1], 16)
    const b = parseInt(clean[2] + clean[2], 16)
    return [r, g, b]
  }
  if (clean.length === 6) {
    const r = parseInt(clean.substring(0, 2), 16)
    const g = parseInt(clean.substring(2, 4), 16)
    const b = parseInt(clean.substring(4, 6), 16)
    return [r, g, b]
  }
  return null
}


