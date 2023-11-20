import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
  ]
}
