<template>
  <h2 class="pl-8">{{ areaName }}</h2>
  <v-btn @click="router.push('/area')" variant="tonal" class="ml-7"
    >Back to Areas</v-btn
  >
  <CardSelector
    v-if="!loading"
    tracking
    :items="taskList"
    @select="selectTask"
    :newItem="isAdmin ? '/taskbuilder?area=' + area : ''"
    :selected="selected"
  ></CardSelector>
</template>

<script lang="ts" setup>
// Imports
import { apicall } from "@/composables/apicall";
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
let areaID = 0;
if (route.name === "/area/[id]") {
  areaID = Number(route.params.id);
} else {
  areaID = 0;
}

//Refs
const loading: Ref<boolean> = ref(true);
const selected: Ref<number> = ref(-1);
const hash: Ref<string> = ref("");
const anumber: Ref<string | any> = ref("");
const taskData: Ref<Array<Task>> = ref(Array());
const area: Ref<number> = ref(areaID);

const taskList = computed(() => {
  return taskData.value.filter((task) => task.area_id == area.value);
});
const isAdmin = computed(() => {
  return route.meta.userstatus == "admin";
});
const areaName = computed(() => {
  const t1 = taskList.value.find((task) => task.area);
  if (t1) {
    return t1.area.name;
  }
  return "Area #" + String(area.value);
});

// Functions
const updateWorking = async () => {
  loading.value = true;
  selected.value = 0;
  const jsonData: Array<Punch> = Array.from(await apicall("/hours/working"));
  const workingData: { [index: number]: number } = {};
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
};

const getTasks = async () => {
  taskData.value = Array.from(await apicall("/tasks")) as Task[];
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
  await apicall("/hours/punch", { barcode: anumber.value, task: taskID });
  updateWorking();
};

onBeforeMount(() => {
  anumber.value = localStorage.getItem("anumber");
  setHash();
  getTasks();
});

let intervalID: number;
onMounted(() => {
  intervalID = setInterval(updateWorking, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
