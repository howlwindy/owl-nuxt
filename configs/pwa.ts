import process from 'node:process'
import type { NuxtConfig } from '@nuxt/schema'

const sw = process.env.SW === 'true'
export default {
  manifest: {
    strategies: sw ? 'injectManifest' : 'generateSW',
    srcDir: sw ? 'service-worker' : undefined,
    filename: sw ? 'sw.ts' : undefined,
    registerType: 'autoUpdate',
    display: 'standalone',
    name: 'owl-nuxt',
    short_name: 'owl',
    background_color: '#ffa843',
    theme_color: '#ff522a',
    icons: [
      {
        src: 'https://avatars.githubusercontent.com/u/30660399?v=4',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://avatars.githubusercontent.com/u/30660399?v=4',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'https://avatars.githubusercontent.com/u/30660399?v=4',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  },
  injectManifest: {
    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  },
  client: {
    installPrompt: true,
    periodicSyncForUpdates: 20,
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallback: '/',
    navigateFallbackAllowlist: [/^\/$/],
    type: 'module',
  },
} as NuxtConfig['pwa']
