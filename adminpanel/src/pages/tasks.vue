<template>
  <h1
    class="v-text-h1"
    style="text-align: center; padding: 20px"
  >
    Farm Tasks
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
    :items="taskData"
    :headers="headers"
    hover
    show-select
    return-object
  />
</template>

<script setup lang="ts">

import apicall from "@/composables/apicall";
import type { Crop } from "@/types/apibinds";

const taskData: Ref<Array<Task>> = ref(Array());

const getTasks = async () => {
  taskData.value = await apicall("/tasks");
  console.log(taskData.value);
};

definePage({
  meta: {
    title: 'Tasks',
  },
})
const search = ref('')

const headers = [
  { title: 'ID', key: 'ID' },
  { title: 'Task', key: 'name'},
  { title: 'Area ID', key: 'area_id' },
]
//maybe make area id the name of the area

onMounted(() => {
  getTasks();
});
</script>
