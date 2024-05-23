<script setup lang="ts">
import { useI18n, useSwitchLocalePath } from '#imports';

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <SocialShare network="facebook" />
  <p class="text-google font-caveat">
    Caveat
  </p>
  <p class="text-github">
    Luckiest Guy
  </p>
  <p>{{ $t('auth.signup.submit') }}</p>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
    {{ locale.name }}
  </NuxtLink>
</template>
