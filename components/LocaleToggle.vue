<script setup lang="ts">
const { locale, locales } = useI18n()
const store = useUserStore()
locale.value = store.locale
</script>

<template>
  <Dropdown
    v-model="store.locale"
    :options="locales"
    option-label="name"
    option-value="code"
    @change="locale = store.locale"
  />
</template>
