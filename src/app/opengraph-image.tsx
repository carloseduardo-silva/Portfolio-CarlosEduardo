import { ImageResponse } from 'next/og'
import { authorName, siteDescription } from '@/lib/site'

export const alt = siteDescription
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Gerada em build time — evita adicionar um arquivo estático em public/,
// que é somente leitura. Os valores hex espelham os tokens do globals.css
// (surface-light, accent-text, ink).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#FAFBFF',
          backgroundImage:
            'radial-gradient(circle at 78% 26%, rgba(75,123,229,0.16) 0%, transparent 55%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            fontSize: 22,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#3866CE',
          }}
        >
          Portfólio
          <div style={{ width: '160px', height: '1px', backgroundColor: '#DDE3EE' }} />
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '28px',
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: '#0D1829',
          }}
        >
          <span>{authorName.replace(' da Silva', '')}</span>
          <span style={{ color: '#4B7BE5' }}>.</span>
        </div>

        <div
          style={{
            marginTop: '26px',
            fontSize: 34,
            fontWeight: 500,
            color: '#4A5568',
          }}
        >
          Desenvolvedor Front-End
        </div>

        <div
          style={{
            marginTop: '48px',
            display: 'flex',
            gap: '14px',
            fontSize: 22,
            color: '#5C6B7F',
          }}
        >
          <span>React</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Next.js</span>
        </div>
      </div>
    ),
    size
  )
}
