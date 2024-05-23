<script setup lang="ts">
</script>

<template>
  <ContentDoc />
  <div class="bg-blue-100">
    <Button :label="$t('test')" />
    <ColorChange />
    <LocaleToggle />
    <NuxtWelcome />
  </div>
</template>
