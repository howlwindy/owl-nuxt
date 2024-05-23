import type { NuxtConfig } from '@nuxt/schema'

export default {
  "dirs": [
    {
      "path": "~/components/global",
      "global": true
    },
    "~/components"
  ]
} as NuxtConfig['components']
