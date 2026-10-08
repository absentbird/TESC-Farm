<template>
  <CardSelector
    search
    :selected="selected"
    :items="taskData"
    @select="selectTask"
  ></CardSelector>
</template>

<script lang="ts" setup>
// Imports
import apicall from "@/composables/apicall";
import type { Task } from "@/types/apibinds";
definePage({
  meta: {
    requiresAuth: "true",
  },
});

const selected: Ref<Number> = ref(0);
const taskData: Ref<Array<Task>> = ref(Array());
const result: Ref<string> = ref("");

const hash: Ref<string> = ref("");
const anum = useTemplateRef("anum");

const selectedName = computed(() => {
  if (selected.value == 0) {
    return "None";
  }
  if (selected.value < 1) {
    return "Stop Tracking Time";
  }
  return taskData.value.find((task) => task.ID === selected.value).name;
});

const selectTask = async (taskID: number) => {
  if (selected.value == taskID) {
    return;
  }
  selected.value = taskID;
  await apicall("/hours/punch", { barcode: anum.value, task: taskID });
  updateWorking();
};

const getTasks = async () => {
  taskData.value = await apicall("/tasks");
  updateWorking();
};

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
    task.focus = task.ID == selected.value;
  });
};

const clockOn = async (taskID: number) => {
  await apicall("/hours/punch", { barcode: anum.value, task: taskID });
  result.value = "mdi-check-circle";
  setTimeout(() => {
    result.value = "mdi-form-textbox";
  }, 3000);
  updateWorking();
};

const clockOff = async () => {
  await apicall("/hours/punch", { barcode: anum.value });
  //flash.value = "Stopped Tracking Time!";
  //snackcolor.value = "success";
  result.value = "mdi-check-circle";
  setTimeout(() => {
    result.value = "mdi-form-textbox";
  }, 3000);
  updateWorking();
};

const setHash = async () => {
  const jsondata = await apicall("/worker/lookup", { barcode: anum.value });
  hash.value = jsondata.barcode;
};

// Setup
let intervalID;
onBeforeMount(() => {
  getTasks();
});
onMounted(() => {
  setHash();
  intervalID = setInterval(updateWorking, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
