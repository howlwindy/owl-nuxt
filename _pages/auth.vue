<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from '#imports'

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})

const { t } = useI18n()

const isSignin = ref(true)
const errors = ref({
  email: false,
  password: false,
})
const title = computed(() => isSignin.value ? t('auth.signin.header.title') : t('auth.signup.header.title'))
const footer = computed(() => ({
  text: isSignin.value ? t('auth.signin.footer.text') : t('auth.signup.footer.text'),
  go: isSignin.value ? t('auth.signin.footer.go') : t('auth.signup.footer.go'),
}))
const submitLabel = computed(() => isSignin.value ? t('auth.signin.submit') : t('auth.signup.submit'))
const form = ref<{
  email: string,
  password: string,
}>({
  email: '',
  password: '',
})
function switchTo() {
  isSignin.value = !isSignin.value
  form.value.email = ''
  form.value.password = ''
  errors.value.email = false
  errors.value.password = false
}
function submit() {
  errors.value.email = form.value.email.length === 0
  errors.value.password = form.value.password.length === 0
}
const thirdParty = [
  { style: 'text-apple dark:text-apple', icon: 'i-simple-icons-apple' },
  { style: 'text-github dark:text-github', icon: 'i-simple-icons-github' },
  { style: 'text-google dark:text-google', icon: 'i-simple-icons-google' },
  { style: 'text-linkedin dark:text-linkedin', icon: 'i-simple-icons-linkedin' },
]
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <main class="flex flex-col justify-center items-center min-h-screen">
    <UCard>
      <template #header>
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold">
            {{ title }}
          </h1>
          <UDropdown mode="hover" :popper="{ placement: 'bottom-start' }"
            :items="[$i18n.locales.map(v => ({ label: v.name, to: switchLocalePath(v.code) }))]">
            <UIcon name="i-heroicons-language-16-solid" />
            <UIcon name="i-heroicons-chevron-down-16-solid" />
          </UDropdown>
        </div>
      </template>
      <UForm :state="form" class="space-y-4" @submit="submit">
        <UFormGroup v-slot="{ error }" :error="errors.email && $t('auth.email.error')" name="email">
          <UInput v-model="form.email" type="email" icon="i-heroicons-envelope"
            :placeholder="$t('auth.email.placeholder')" />
        </UFormGroup>
        <UFormGroup v-slot="{ error }" name="password" :error="errors.password && $t('auth.password.error')">
          <UInput v-model="form.password" type="password" icon="i-heroicons-key"
            :placeholder="$t('auth.password.placeholder')" />
        </UFormGroup>
        <UButton type="submit" block>
          {{ submitLabel }}
        </UButton>
      </UForm>
      <UDivider v-show="isSignin" class="my-2">
        <span class="text-xs text-gray-400 dark:text-gray-500">{{ $t('auth.signin.or') }}</span>
      </UDivider>
      <UContainer v-show="isSignin" class="flex justify-evenly">
        <UButton v-for="v of thirdParty" :key="v" size="xl" variant="link" :icon="v.icon" color="gray"
          :class="v.style" />
      </UContainer>
      <template #footer>
        <span>{{ footer.text }}</span>
        <UButton icon="i-heroicons-arrow-small-right-20-solid" variant="link" trailing @click="switchTo">
          {{ footer.go }}
        </UButton>
      </template>
    </UCard>
  </main>
</template>
