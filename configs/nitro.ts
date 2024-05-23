import type { NuxtConfig } from '@nuxt/schema'

export default {
  experimental: {
    websocket: true,
    database: true,
  },
  devStorage: {
    redis: {
      driver: 'redis',
      host: '127.0.0.1',
      post: 6379,
    },
  },
} as NuxtConfig['nitro']
