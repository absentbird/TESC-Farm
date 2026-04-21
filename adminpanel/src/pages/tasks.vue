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
    return-object
  >
      <template v-slot:item.selected="{ item }">
        <v-checkbox v-model="item.selected" @change="toggleSelected(item)" />
      </template>
      <template v-slot:item.ID="{ value }">
        <v-btn>Edit</v-btn>
        <v-btn>Delete</v-btn>
      </template>
  </v-data-table>
  <v-btn>Add Task</v-btn>
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

const toggleSelected = (task) => {
  task.selected = !task.selected;
  updateTask(task);
}

const updateTask = async (task) => {
  await apicall("/task/"+task.ID+"/update", task);
}

const headers = [
  { title: 'Task', key: 'name'},
  { title: 'Description', key: 'description'},
  { title: 'Selected', key: 'selected'},
  { title: '', key: 'ID'},
]

onMounted(() => {
  getTasks();
});
</script>
