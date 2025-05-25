<template>
  <TaskSelector v-if="!area" :tasks="arealist" @select="selectArea"></TaskSelector>
  <TaskSelector v-if="area" search :tasks="tasklist" :focus="test" @select="selectTask"></TaskSelector>
</template>

<script lang="ts" setup>
import { apicall } from "@/composables/apicall";
import type { Tag, Task, Worker, Punch } from "@/types/apiinterfaces.ts"
import focusFilter from "@/assets/tasklist.js";
const test = ref(Array.from(focusFilter));
//Page Meta Information
definePage({
  meta: {
    requiresAuth: "true",
  },
});
//Refs
const route = useRoute();
const loading: Ref<boolean> = ref(false);
const selected: Ref<number> = ref(0);
const hash: Ref<string> = ref("");
const anumber: Ref<string | any> = ref("");
const taskdata: Ref<Array<Task>> = ref(Array());
const arealist: Ref<Array<Task>> = ref(Array());
const tasklist: Ref<Array<Task>> = ref(Array());
const area: Ref<number> = ref(0);

const updateWorking = async () => {
  loading.value = true;
  const jsondata: Array<Punch> = Array.from(await apicall("/hours/working"));
  const workingdata: number[] = [];
  taskdata.value.forEach((task) => {
    workingdata[task.ID] = 0;
  });
  jsondata.forEach((punch: Punch) => {
    workingdata[punch.task_id]++;
    if (punch.worker.barcode == hash.value) {
      selected.value = punch.task_id;
    }
  });
  taskdata.value.forEach((task) => {
    task.working = workingdata[task.ID];
    task.selected = task.ID == selected.value;
  });
  updateAreas();
  loading.value = false;
};

const updateAreas = () => {
  arealist.value = taskdata.value.filter((area) =>
    area.tags.some((tag) => tag.name == "Management Unit"),
  );
};

const getTasks = async () => {
  loading.value = true;
  taskdata.value = Array.from(await apicall("/tasks"));
  updateWorking();
  loading.value = false;
};

const setHash = async () => {
  const worker = await apicall("/worker/lookup", { barcode: anumber.value });
  hash.value = worker.barcode;
};

const selectArea = async (areaID: number) => {
  let tasks = taskdata.value.filter((task) => focusFilter.includes(task.ID));
  tasks.sort((a, b) => focusFilter.indexOf(a.ID) - focusFilter.indexOf(b.ID));
  area.value = areaID;
  tasklist.value = tasks;
};

const selectTask = async (taskID: number) => {
  if (selected.value == taskID) {
    return;
  }
  selected.value = taskID;
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
