<script setup lang="ts">

</script>

<template>
  <!-- <ContentDoc /> -->
  <!-- <NuxtPwassets /> -->
  <NuxtLayout>
    <NuxtPwaManifest />
    <div class="bg-blue-100">
      <ColorModeToggle />
      <LocaleToggle />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
