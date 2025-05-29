<template>
  <CardSelector search stoptracking :items="taskList" @select="selectTask" :selected="selected"></CardSelector>
</template>

<script lang="ts" setup>
import { apicall } from "@/composables/apicall";
import type { Area, Task, Punch } from "@/types/apiinterfaces.ts";
//Page Meta Information
definePage({
  meta: {
    requiresAuth: "true",
  },
});
const router = useRouter();
const route = useRoute();
//Refs
const loading: Ref<boolean> = ref(false);
const selected: Ref<number> = ref(0);
const hash: Ref<string> = ref("");
const anumber: Ref<string | any> = ref("");
const taskdata: Ref<Array<Task>> = ref(Array());
const areaList: Ref<Array<Area>> = ref(Array());
const tasklist: Ref<Array<Task>> = ref(Array());
const area: Ref<number> = ref(0);

watch(
  () => route.query.area,
  newArea => {
    area.value = Number(newArea)
  }
)

const updateWorking = async () => {
  loading.value = true;
  updateAreas();
  const jsondata: Array<Punch> = Array.from(await apicall("/hours/working"));
  const workingData: { number: number } = {};
  const areaWorking: { number: number } = {};
  taskdata.value.forEach((task) => {
    workingData[task.ID] = 0;
    areaWorking[task.area_id] = 0;
  });
  jsondata.forEach((punch: Punch) => {
    workingData[punch.task_id]++;
    areaWorking[punch.task.area_id]++;
    if (punch.worker.barcode == hash.value) {
      selected.value = punch.task_id;
    }
  });
  taskdata.value.forEach((task) => {
    task.working = workingData[task.ID];
    task.selected = task.ID == selected.value;
    if (task.selected) {
      areaList.value.forEach((area) => {
        area.selected = area.ID == task.area_id;
      });
    }
  });
  areaList.value.forEach((area) => {
    area.working = areaWorking[area.ID];
  });
  loading.value = false;
};

const updateAreas = async () => {
  areaList.value = (await apicall("/areas")) as Area[];
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
  if (areaID == 0) {
    selected.value = 0;
    await apicall("/hours/punch", { anum: anumber });
    updateWorking();
    return;
  }
  area.value = areaID;
  let areaTasks = taskdata.value.filter((task) => task.area_id == area.value);
  tasklist.value = areaTasks;
  router.push({ query: { area: areaID } });

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
