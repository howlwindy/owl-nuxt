import type { NuxtConfig } from '@nuxt/schema'

export default [
  "**/*.stories.{js,cts,mts,ts,jsx,tsx}",
  "**/*.{spec,test}.{js,cts,mts,ts,jsx,tsx}",
  "**/*.d.{cts,mts,ts}",
  "**/.{pnpm-store,vercel,netlify,output,git,cache,data}",
  ".nuxt/analyze",
  ".nuxt",
  "**/-*.*"
] as NuxtConfig['ignore']
