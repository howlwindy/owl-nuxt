import type { NuxtConfig } from '@nuxt/schema'

export default {
  enabled: true,
  vscode: {
    reuseExistingServer: true,
  },
} as NuxtConfig['devtools']
