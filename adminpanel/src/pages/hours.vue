<template>
  <h1
    class="v-text-h1"
    style="text-align: center; padding: 20px"
  >
    Farm Data
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
    :items="hourData"
    :headers="headers"
    hover
    show-select
    return-object
  />
</template>

<script setup lang="ts">

import apicall from "@/composables/apicall";
import type { hour } from "@/types/apibinds";

const hourData: Ref<Array<Punch>> = ref(Array());

const gethours = async () => {
  hourData.value = await apicall("/hours");
  console.log(hourData.value);
};

definePage({
  meta: {
    title: 'hours',
  },
})
const search = ref('')

//add area id or if you're feeling daring make an api call for the area name.
const headers = [
  { title: 'ID', key: 'ID' },
  { title: 'Clock In', key: 'start' },
  { title: 'Time Worked', key: 'duration' },
]

onMounted(() => {
  gethours();
});
</script>
