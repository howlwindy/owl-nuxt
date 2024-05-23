import zhCN from './locales/zh-CN.yml'
import enUS from './locales/en-US.yml'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en-US',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
}))
