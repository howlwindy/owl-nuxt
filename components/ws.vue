<script setup lang="ts">
const { status, data, send, open, close } = useWebSocket(`wss://192.168.1.9:3000/ws`)
const inputVal = ref('')
</script>

<template>
  <h1>WS</h1>
  <p>status - {{ status }}</p>
  <p>data - {{ data }}</p>
  <input v-model="inputVal">
  <button @click="() => send(inputVal)">
    send
  </button>
</template>
