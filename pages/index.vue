<script setup lang="ts">
const { login } = useDirectusAuth()
await login({ email: 'admin@example.com', password: '123456' })
interface IGlobal {
  title: string
  description: string
}
const { getSingletonItem } = useDirectusItems()
const { locale } = useI18n()
const { data } = await useLazyAsyncData(
  'global',
  async () => await getSingletonItem<IGlobal[]>({
    collection: 'global_translations',
    params: {
      fields: ['*', 'translations.*'],
      filter: {
        i18n_code: { _eq: locale.value },
      },
    },
  }),
  {
    watch: [locale],
  },
)
</script>

<template>
  <p v-if="data && data[0]">
    {{ data[0].title }}
  </p>
  <p v-if="data && data[0]">
    {{ data[0].description }}
  </p>
  <Button :label="$t('test')" />
</template>
