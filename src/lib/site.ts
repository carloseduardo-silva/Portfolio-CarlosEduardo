/**
 * URL pública do site. Definida por env para não ficar hardcoded:
 *  - `NEXT_PUBLIC_SITE_URL` — domínio próprio, quando houver
 *  - `VERCEL_PROJECT_PRODUCTION_URL` — preenchida automaticamente pela Vercel
 *  - fallback local para desenvolvimento
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const siteName = 'Carlos Eduardo — Portfólio'

export const authorName = 'Carlos Eduardo da Silva'

export const siteTitle = 'Carlos Eduardo — Desenvolvedor Front-End'

export const siteDescription =
  'Portfólio de Carlos Eduardo da Silva, Desenvolvedor Front-End com 2+ anos de experiência em React, TypeScript e Next.js.'
