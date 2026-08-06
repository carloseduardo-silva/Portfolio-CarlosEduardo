import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

// O portfólio é single-page: todas as seções são âncoras da rota raiz.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
