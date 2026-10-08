<template>
  <h1 class="v-text-h1" style="text-align: center; padding: 20px">
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
      <v-btn class="ma-2" @click="editTask(value)">Edit</v-btn>
      <v-btn class="ma-2" @click="editTask(value, true)">Delete</v-btn>
    </template>
  </v-data-table>
  <div class="d-flex justify-center mb-4">
    <v-btn @click="newTask">Add Task</v-btn>
  </div>

  <v-dialog v-model="taskDialog" width="500">
    <v-card>
      <v-card-item>
        <v-card-title>
          <span v-if="edit">Edit Task</span>
          <span v-else>New Task</span>
        </v-card-title>
        <v-card-text v-if="atask" class="mt-4">
          <h3>Task</h3>
          <v-text-field v-model="atask.name" />
          <h3>Description</h3>
          <v-text-field v-model="atask.description" />
          <h3>Selected</h3>
          <v-checkbox v-model="atask.selected" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="saveActive">Save</v-btn>
          <v-btn @click="taskDialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card-item>
    </v-card>
  </v-dialog>

  <v-dialog v-model="deleteDialog" max-width="500">
    <v-card
      prepend-icon="mdi-alert-circle"
      text="Are you sure you want to delete this task?"
      title="Confirm Deletion"
    >
      <template #actions>
        <v-spacer></v-spacer>

        <v-btn variant="text" @click="deleteDialog = false"> Cancel </v-btn>

        <v-btn color="error" variant="elevated" @click="deleteTask">
          Delete
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import apicall from "@/composables/apicall";
import type { Crop } from "@/types/apibinds";

const taskData: Ref<Array<Task>> = ref(Array());
const atask: Ref<Task> = ref({} as Task);
const taskDialog: Ref<boolean> = ref(false);
const deleteDialog: Ref<boolean> = ref(false);
const edit = computed(() => atask.value.ID != undefined);

const getTasks = async () => {
  taskData.value = await apicall("/tasks");
};

definePage({
  meta: {
    title: "Tasks",
  },
});
const search = ref("");

const toggleSelected = (task) => {
  if (task.selected != true) {
    task.selected = false;
  } else {
    task.selected = true;
  }
  updateTask(task);
};

const updateTask = async (task) => {
  await apicall("/task/" + task.ID + "/update", task);
};

const editTask = (id: string, del: boolean) => {
  atask.value = structuredClone(
    toRaw(taskData.value.find((task) => task.ID === id)),
  );
  if (del) {
    deleteDialog.value = true;
  } else {
    taskDialog.value = true;
  }
};

const newTask = () => {
  atask.value = {} as Task;
  taskDialog.value = true;
};

const saveActive = async () => {
  if (atask.value.ID != undefined) {
    await updateTask(atask.value);
  } else {
    await apicall("/task/new", atask.value);
  }
  getTasks();
  taskDialog.value = false;
};

const deleteTask = async () => {
  await apicall("/task/" + atask.value.ID + "/delete");
  getTasks();
  taskDialog.value = false;
  deleteDialog.value = false;
};

const headers = [
  { title: "Task", key: "name" },
  { title: "Description", key: "description" },
  { title: "Selected", key: "selected" },
  { title: "", key: "ID" },
];

onMounted(() => {
  getTasks();
});
</script>
