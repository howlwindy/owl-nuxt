<script setup lang="ts">
import { ref } from 'vue'

const resApiTest = await $fetch('/api/test', {

})
// console.log(resApiTest)
const resRouteHelloGet = await $fetch('/hello')
// console.log(resRouteHelloGet)
const resRouteHelloPost = await $fetch('/hello', {
  method: 'POST',
  body: {
    req: 'hello',
  },
})
// console.log(resRouteHelloPost)
// const res = await $fetch('/')
// console.log(res)
onMounted(() => {
  const { status, data, send, open, close } = useWebSocket(`wss://${location.host}/ws`)
  // console.log(status, data)
  watch(data, (v) => {
    // console.log(v)
  })
})
// useSeoMeta({})

const count = ref(0)
const inputVal = ref('')

const { status, data, error, close } = useEventSource('/api/sse')
</script>

<template>
  <!-- <Ws />
  <h1>SSE</h1>
  <p>status - {{ status }}</p>
  <p>data - {{ data }}</p>
  <div>
    <NuxtLoadingIndicator :height="20" />
    <button
      class="m-3 flex bg-red-300 p-2 font-mono text-lg text-blue-500 shadow-lg" title="title" data-a="a"
      data-b="b" @click="count++"
    >
      {{ count }}
    </button>
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <NuxtLink to="/posts/100">
      Posts 100
    </NuxtLink>
    <NuxtLink to="/posts/300">
      Posts 300
    </NuxtLink>
    <NuxtLink to="/parent">
      Parent
    </NuxtLink>
    <NuxtLink to="/mysql">
      Mysql
    </NuxtLink>
    <NuxtLink to="/mongodb">
      Mongodb
    </NuxtLink>
    <NuxtLink to="/redis">
      Redis
    </NuxtLink>
  </div> -->
  <NuxtPage />
</template>
