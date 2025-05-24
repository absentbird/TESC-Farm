<template>
  <TaskSelector search :tasks="arealist" @select="selectTask"></TaskSelector>
</template>

<script lang="ts" setup>
import { apicall } from "@/composables/apicall";
import router from "@/router";

definePage({
  meta: {
    requiresAuth: "true",
  },
});

const route = useRoute();
const loading: Ref<boolean> = ref(false);
const selected: Ref<number> = ref(0);
const hash: Ref<string> = ref("");
const anumber: Ref<string> = ref("");
const taskdata: Ref<Array> = ref(Array());
const arealist: Ref<Array> = ref(Array());

const updateWorking = async () => {
  loading.value = true;
  const jsondata = Array.from(await apicall("/hours/working"));
  const workingdata = {};
  taskdata.value.forEach((task) => {
    workingdata[task.ID] = 0;
  });
  jsondata.forEach((punch) => {
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
  console.log(hash.value);
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

let intervalID;
onMounted(() => {
  anumber.value = localStorage.getItem("anumber");
  intervalID = setInterval(updateWorking, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
