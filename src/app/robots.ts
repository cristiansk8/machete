import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Bloquea rutas innecesarias (si existen)
      disallow: [
        '/private/',
        '/tmp/',
        '/admin/'
      ],
    },
    sitemap: 'https://machetetienda.vercel.app//sitemap.xml',
    // Opcional: Host alternativo (si tienes dominio primario)
    host: 'https://machetetienda.vercel.app/'
  }
}