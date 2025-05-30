<template>
  <h1
    class="v-text-h1"
    style="text-align: center; padding: 20px"
  >
    Student Hours
  </h1>
  <v-text-field
    v-model="search"
    style="max-width: 90%; margin: auto; margin-bottom: 5px"
    label="Search"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    hide-details
    single-line
  />
  <v-data-table
    style="max-width: 90%; margin: auto; margin-bottom: 33px"
    :items="hours"
    :headers="headers"
    :search="search"
    hover
    show-select
    return-object
  />
</template>

<script setup lang="ts">
import hours from '@/assets/hours.json' 

definePage({
  meta: {
    title: 'Student Hours',
  },
})
const search = ref('')
const headers = [
  { title: 'Name', key: 'worker.name' },
  { title: 'Hours', key: 'duration' },
]
</script>
