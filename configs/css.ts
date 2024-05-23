import path from 'node:path'
import type { NuxtConfig } from '@nuxt/schema'

export default [
  path.resolve(__dirname, '../assets/styles/base.css'),
] as NuxtConfig['css']
