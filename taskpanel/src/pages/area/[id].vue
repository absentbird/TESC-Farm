<template>
  <v-btn @click="router.push('/area')" variant="tonal" class="ml-7">Back to
    Areas</v-btn>
  <CardSelector search :items="taskList" @select="selectTask" :newItem="$route.meta.userstatus == 'admin' ? '/taskbuilder?area=' + area : ''
    " :timeTracking="true" :selected="selected"></CardSelector>
</template>

<script lang="ts" setup>
// Imports
import { apicall } from "@/composables/apicall";
import type { Area, Task, Punch } from "@/types/apiinterfaces.ts";

// Meta Information
definePage({
  meta: {
    requiresAuth: "true",
  },
});

// Routing
const router = useRouter();
const route = useRoute();

//Refs
const loading: Ref<boolean> = ref(false);
const selected: Ref<number> = ref(0);
const hash: Ref<string> = ref("");
const anumber: Ref<string | any> = ref("");
const taskData: Ref<Array<Task>> = ref(Array());
const area: Ref<number> = ref(route.params.id);

const taskList = computed(() => {
  return taskData.value.filter((task) => task.area_id == route.params.id);
});

// Functions
const updateWorking = async () => {
  loading.value = true;
  const jsonData: Array<Punch> = Array.from(await apicall("/hours/working"));
  const workingData: { number: number } = {};
  taskData.value.forEach((task) => {
    workingData[task.ID] = 0;
  });
  jsonData.forEach((punch: Punch) => {
    workingData[punch.task_id]++;
    if (punch.worker.barcode == hash.value) {
      selected.value = punch.task_id;
    }
  });
  taskData.value.forEach((task) => {
    task.working = workingData[task.ID];
    task.selected = task.ID == selected.value;
  });
  loading.value = false;
  console.log(selected.value)
};

const getTasks = async () => {
  loading.value = true;
  taskData.value = Array.from(await apicall("/tasks"));
  updateWorking();
  loading.value = false;
};

const setHash = async () => {
  const worker = await apicall("/worker/lookup", { barcode: anumber.value });
  hash.value = worker.barcode;
};

const selectTask = async (taskID: number) => {
  if (selected.value == taskID) {
    return;
  }
  await apicall("/hours/punch", { anum: anumber, task: taskID });
  updateWorking();
};

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
