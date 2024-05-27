import type { NuxtConfig } from '@nuxt/schema'

export default {
  // apiScrect: '',
  public: {
    // apiBase: '/api',
    directus: {
      url: 'http://0.0.0.0:8055',
    },
  },
} as NuxtConfig['runtimeConfig']
