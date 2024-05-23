import path from 'node:path'
import type { NuxtConfig } from '@nuxt/schema'

export default {
  storesDirs: [
    path.resolve(__dirname, '../stores/**'),
  ],
} as NuxtConfig['pinia']
