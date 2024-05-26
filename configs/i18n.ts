import type { NuxtConfig } from '@nuxt/schema'

export default {
  detectBrowserLanguage: {
    useCookie: true,
    alwaysRedirect: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
  },
  defaultLocale: 'en-US',
  locales: [
    { code: 'en-US', name: 'English' },
    { code: 'zh-CN', name: '简体中文' },
  ],
} as NuxtConfig['i18n']
