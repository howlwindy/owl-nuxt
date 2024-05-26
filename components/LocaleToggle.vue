<script setup ssr lang="ts">
const { locale, locales } = useI18n()
</script>

<template>
  <Dropdown
    v-model="locale"
    :options="locales"
    option-label="name"
    option-value="code"
  >
    <template #option="slotProps">
      <SwitchLocalePathLink :locale="slotProps.option.code">
        {{ slotProps.option.name }}
      </SwitchLocalePathLink>
    </template>
  </Dropdown>
</template>
