import type { NuxtConfig } from '@nuxt/schema'

export default {
  defaultLocale: 'en-US',
  locales: [
    { code: 'en-US', name: 'English' },
    { code: 'zh-CN', name: '简体中文' },
  ],
} as NuxtConfig['i18n']
