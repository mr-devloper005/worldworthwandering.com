import type { SiteRecipe } from '@/design/factory/recipe-types'

export const SITE_RECIPE: SiteRecipe = {
  productFamily: 'editorial',
  themePack: 'magazine-contrast',
  homepageTemplate: 'article-home',
  navbarTemplate: 'editorial-bar',
  footerTemplate: 'editorial-footer',
  motionPack: 'editorial-soft',
  primaryTask: 'article',
  enabledTasks: ['article', 'image'],
  taskTemplates: {
    article: 'article-editorial',
    image: 'image-portfolio',
    listing: 'listing-directory',
    classified: 'classified-market',
    profile: 'profile-business',
    sbm: 'sbm-curation',
  },
  manualOverrides: {
    navbar: false,
    footer: false,
    homePage: false,
    taskListPage: false,
    taskDetailPage: false,
    taskCard: false,
    contactPage: false,
    loginPage: false,
    registerPage: false,
  },
}
