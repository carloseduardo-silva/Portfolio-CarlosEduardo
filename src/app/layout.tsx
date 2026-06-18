import type { Metadata } from 'next'
import { Sora, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sora-var',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Carlos Eduardo — Desenvolvedor Front-End',
  description:
    'Portfólio de Carlos Eduardo da Silva, Desenvolvedor Front-End com 2+ anos de experiência em React, TypeScript e Next.js.',
  keywords: ['desenvolvedor front-end', 'react', 'next.js', 'typescript', 'portfólio'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sora bg-surface-light text-navy-900 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}
