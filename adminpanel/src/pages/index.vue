<template>
  <h1
    class="v-text-h1"
    style="text-align: center; padding: 20px"
  >
    Farm Mock Data
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
    :search="search"
    :items="items"
    :headers="headers"
    hover
    show-select
    return-object
  />
</template>

<script setup lang="ts">
import items from '@/assets/hours.json'
definePage({
  meta: {
    title: 'Dashboard',
  },
})
const search = ref('')
for (const hours of items) {
  hours.crop = 'N/A'
  hours.worktype = 'Other'
  if (hours.process) {
    hours.crop = hours.process.harvest.crop.name
    hours.worktype = 'Processing'
  } else if (hours.harvest) {
    hours.crop = hours.harvest.crop.name
    hours.worktype = 'Harvesting'
  }
}
const headers = [
  { title: 'Crop', key: 'crop' },
  { title: 'Work Type', key: 'worktype' },
  { title: 'Name', key: 'worker.name' },
  { title: 'Start', key: 'start' },
  { title: 'Hours', key: 'duration' },
]
</script>
