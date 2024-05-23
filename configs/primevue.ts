import path from 'node:path'
import type { NuxtConfig } from '@nuxt/schema'

export default {
  options: {
    unstyled: true,
  },
  importPT: {
    from: path.resolve(__dirname, '../assets/styles/preset/'),
  },
} as NuxtConfig['primevue']
