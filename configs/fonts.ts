import type { NuxtConfig } from '@nuxt/schema'

export default {
  families: [
    { name: 'Caveat', provider: 'google' },
    { name: 'Luckiest Guy', provider: 'google' }
  ]
} as NuxtConfig['fonts']
