import type { NuxtConfig } from '@nuxt/schema'
import yaml from '@modyfi/vite-plugin-yaml'

export default {
  plugins: [
    yaml(),
  ],
} as NuxtConfig['vite']
