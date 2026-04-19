import type { SiteFactoryRecipe } from '@/design/factory/types'

export const SITE_FACTORY_RECIPE: SiteFactoryRecipe = {
  brandPack: 'editorial-luxe',
  navbar: 'editorial-bar',
  footer: 'editorial-footer',
  homeLayout: 'article-home',
  motionPack: 'editorial-soft',
  primaryTask: 'article',
  enabledTasks: ['article', 'image'],
  taskLayouts: {
    article: 'article-editorial',
    image: 'image-portfolio',
    listing: 'listing-directory',
    classified: 'classified-market',
    profile: 'profile-business',
    sbm: 'sbm-curation',
  },
}
