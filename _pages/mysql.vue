<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import { nanoid } from 'nanoid'
import mongodb from './mongodb.vue'

const header = ref([
  'id',
  'value',
  'operations',
])
const { data } = await useFetch('/api/postgresql/get')
</script>

<template>
  <UButton label="fsf" />
  <table>
    <thead>
      <tr>
        <th v-for="(v, k) of header" :key="k">
          {{ v }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(v, k) of data?.res" :key="k">
        <td v-for="(vv,, ii) of v" :key="ii">
          {{ vv }}
        </td>
        <td>
          <button>del</button>
          <button>up</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
