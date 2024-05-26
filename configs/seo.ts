import type { NuxtConfig } from '@nuxt/schema'

const ogImage: NuxtConfig['ogImage'] = {}
const sitemap: NuxtConfig['sitemap'] = {

}
const robots: NuxtConfig['robots'] = {
  // allow: ['/*'],
}
const seoExperiments: NuxtConfig['seoExperiments'] = {}
const schemaOrg: NuxtConfig['schemaOrg'] = {}
const linkChecker: NuxtConfig['linkChecker'] = {}

export default {
  // ogImage,
  // sitemap,
  // robots,
  // seoExperiments,
  // schemaOrg,
  // linkChecker,
  debug: true,
} as NuxtConfig['seo']
