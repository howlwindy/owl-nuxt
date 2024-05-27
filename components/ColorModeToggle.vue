<script setup lang="ts">
const options = ref([
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' },
  { label: 'Sepia', value: 'sepia' },
])
</script>

<template>
  <ColorScheme class="card flex justify-content-center">
    <Dropdown
      v-model="$colorMode.preference"
      :options="options"
      option-label="label"
      option-value="value"
    />
  </ColorScheme>
</template>
