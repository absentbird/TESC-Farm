<template>
  <v-row>
    <TaskSelector v-if="!area" :tasks="arealist" :newItem="$route.meta.userstatus == 'admin' ? '/areabuilder' : ''"
      @select="selectArea"></TaskSelector>
  </v-row>

  <v-btn v-if="area" @click="area = 0" variant="tonal" class="ml-7">Back to Areas</v-btn>
  <TaskSelector v-if="area" search :tasks="tasklist" @select="selectTask"
    :newItem="$route.meta.userstatus == 'admin' ? '/taskbuilder' : ''"></TaskSelector>

</template>

<script lang="ts" setup>
import { apicall } from "@/composables/apicall";
import type { Area, Task, Punch } from "@/types/apiinterfaces.ts"
//Page Meta Information
definePage({
  meta: {
    requiresAuth: "true",
  },
});
const router = useRouter();
//Refs
const loading: Ref<boolean> = ref(false);
const selected: Ref<number> = ref(0);
const hash: Ref<string> = ref("");
const anumber: Ref<string | any> = ref("");
const taskdata: Ref<Array<Task>> = ref(Array());
const arealist: Ref<Array<Area>> = ref(Array());
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

const updateAreas = async () => {
  arealist.value = await apicall("/areas") as Area[]
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
  area.value = areaID;
  let areaTasks = taskdata.value.filter((task) => task.area_id == area.value)
  tasklist.value = areaTasks;
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
