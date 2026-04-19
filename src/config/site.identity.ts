export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'worldworthwandering',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'World Worth Wandering',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Travel stories & field notes',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Independent travel writing, photo essays, and practical field notes from people who move slowly, look closely, and share what a place actually feels like.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'worldworthwandering.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://worldworthwandering.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

