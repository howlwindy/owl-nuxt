import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  javascript: true,
  typescript: true,
  formatters: true,
  ignores: [
    'node_modules/',
    '.nuxt/',
    'dist/',
    '.output/',
    '.data/',
  ],
})
