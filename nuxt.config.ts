import { colorMode, content, css, delayHydration, i18n, primevue, seo, studio, tailwindcss, unlighthouse, vite } from './configs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // alias,
  // analyzeDir,
  // app,
  // appConfig,
  // build,
  // buildDir,
  // builder,
  // components,
  css,
  // debug,
  // dev,
  // devServer,
  // devServerHandlers,
  devtools: { enabled: true },
  // dir,
  // experimental,
  // extends,
  // extensions,
  // features,
  // feture,
  // generate,
  // hooks,
  // ignore,
  // ignoreOptions,
  // ignorePrefix,
  // imports,
  // logLevel,
  modules: [
    ['nuxt-delay-hydration', delayHydration],
    // "@nuxt/scripts",
    ['@nuxtjs/i18n', i18n],
    // "@pinia/nuxt",
    // '@vueuse/nuxt',
    // // "@nuxt/image",
    ['@nuxtjs/seo', seo],
    // '@nuxt/test-utils/module',
    ['@nuxt/content', content],
    ['@nuxthq/studio', studio],
    // "@nuxt/fonts",
    // "@vite-pwa/nuxt",
    // '@unlighthouse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    ['@unlighthouse/nuxt', unlighthouse],
    ['nuxt-primevue', primevue],
    ['@nuxtjs/tailwindcss', tailwindcss],
    ['@nuxtjs/color-mode', colorMode],
  ],
  // modulesDir,
  // nitro,
  // optimization,
  // pages,
  // plugins,
  // rootDir,
  // routeRules,
  // router,
  // runtimeConfig,
  // serverDir,
  // serverHandlers,
  // sourcemap,
  // spaLoadingTemplate,
  // srcDir,
  // ssr,
  // telemetry,
  // test,
  // theme,
  // typescript,
  vite,
  // vue,
  // watch,
  // watchers,
  // workspaceDir,
})
