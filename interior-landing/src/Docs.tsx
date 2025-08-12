import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Docs() {
  const [readme, setReadme] = useState<string>('')
  const [license, setLicense] = useState<string>('')

  useEffect(() => {
    fetch('/README.md')
      .then((r) => r.text())
      .then(setReadme)
      .catch(() => setReadme('# Documentation'))
    fetch('/LICENSE')
      .then((r) => r.text())
      .then(setLicense)
      .catch(() => setLicense(''))
  }, [])

  return (
    <section style={{ maxWidth: 980, margin: '0 auto', padding: '2rem 1rem' }}>
      <h2 style={{ color: 'var(--color-primary)' }}>About the Studio</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.25rem',
        alignItems: 'start'
      }}>
        <article style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: 12 }}>
          <ReactMarkdown>{readme}</ReactMarkdown>
        </article>
        <aside style={{ background: 'rgba(0,0,0,0.08)', padding: '1rem', borderRadius: 12, fontSize: 12, opacity: 0.9 }}>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{license}</pre>
        </aside>
      </div>
    </section>
  )
}


