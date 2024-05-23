import { defineStore } from 'pinia'
import { useColorMode } from '#imports'

export const useUserStore = defineStore('user', {
  state: () => {
    const { locale } = useI18n()
    const colorMode = useColorMode()
    return {
      locale: locale.value,
      preference: colorMode.preference,
    }
  },
  persist: true,
})
