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
    :items="cropData"
    :headers="headers"
    hover
    show-select
    return-object
  />
</template>

<script setup lang="ts">

import apicall from "@/composables/apicall";
import type { Crop } from "@/types/apibinds";

const cropData: Ref<Array<Crop>> = ref(Array());

const getCrops = async () => {
  cropData.value = await apicall("/crops");
  console.log(cropData.value);
};

definePage({
  meta: {
    title: 'Crops',
  },
})
const search = ref('')

const headers = [
  { title: 'ID', key: 'ID' },
  { title: 'Crop', key: 'name', value: (crop)=>{
    return crop.variety? crop.name+', '+crop.variety : crop.name
  }},
  { title: 'Variety', key: 'variety' },
]

onMounted(() => {
  getCrops();
});
</script>
