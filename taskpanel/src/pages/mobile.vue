<template>
  <CardSelector search tracking :items="taskData" :focus="focusFilter" @select="selectTask" :selected="selected"></CardSelector>
</template>

<script lang="ts" setup>
// Imports
import { apicall } from "@/composables/apicall";
import focusFilter from "@/assets/tasklist"
import type { Task, Punch } from "@/types/apibinds";

// Meta Information
definePage({
  meta: {
    requiresAuth: "true",
  },
});

// Routing
const router = useRouter();
const route = useRoute();

// Refs
const selected: Ref<number> = ref(0);
const hash: Ref<string> = ref("");
const anumber: Ref<string | any> = ref("");
const taskData: Ref<Array<Task>> = ref(Array());

// Functions
const updateWorking = async () => {
  const jsondata: Array<Punch> = Array.from(await apicall("/hours/working"));
  const workingData: { number: number } = {};
  taskData.value.forEach((task) => {
    workingData[task.ID] = 0;
  });
  jsondata.forEach((punch: Punch) => {
    workingData[punch.task_id]++;
    if (punch.worker.barcode == hash.value) {
      selected.value = punch.task_id;
    }
  });
  taskData.value.forEach((task) => {
    task.working = workingData[task.ID];
    task.selected = task.ID == selected.value;
  });
};

const getTasks = async () => {
  taskData.value = Array.from(await apicall("/tasks"));
  updateWorking();
};

const setHash = async () => {
  const worker = await apicall("/worker/lookup", { barcode: anumber.value });
  hash.value = worker.barcode;
};

const selectTask = async (taskID: number) => {
  if (selected.value == taskID) {
    return;
  }
  selected.value = taskID;
  await apicall("/hours/punch", { barcode: anumber, task: taskID });
  updateWorking();
};

// Setup
onBeforeMount(() => {
  setHash();
  getTasks();
});

let intervalID: number;
onMounted(() => {
  anumber.value = localStorage.getItem("anumber");
  intervalID = setInterval(updateWorking, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
