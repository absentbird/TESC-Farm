<template>
  <CardSelector
    search
    tracking
    withfloat
    :items="taskData"
    :focus="focusFilter"
    @select="selectTask"
  ></CardSelector>
  <div id="anumfloat" class="align-self-end" v-if="selected">
    <v-text-field
      id="anum"
      ref="anum"
      :prepend-icon="result"
      v-model="anumber"
      @input="anumCheck"
      @keyup.enter="submitAnum"
      @keydown.esc="selectTask(0)"
      hint="Enter the A# from your student ID"
      :label="selectedName"
      autocomplete="off"
    ></v-text-field>
  </div>
</template>

<script lang="ts" setup>
// Imports
import focusFilter from "@/assets/tasklist";
import apicall from "@/composables/apicall";
import type { Task } from "@/types/apibinds";

definePage({
  meta: {
    requiresAuth: "true",
  },
});

const selected: Ref<number> = ref(0);
const anumber: Ref<string> = ref("");
const taskData: Ref<Array<Task>> = ref(Array());
const result: Ref<string> = ref("");

const anum = useTemplateRef("anum");

const selectedName = computed(() => {
  if (selected.value == 0) {
    return "None";
  }
  if (selected.value < 0) {
    return "Stop Tracking Time";
  }
  return taskData.value.find((task) => task.ID === selected.value).name;
});

const selectTask = (taskID: number) => {
  selected.value = taskID;
  taskData.value.forEach((task) => {
    task.selected = task.ID == selected.value;
  });
  nextTick(() => {
    anum.value?.focus();
  });
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
    task.selected = task.ID == selected.value;
  });
};

const clockOn = async (anum: string, taskID: number) => {
  await apicall("/hours/punch", { barcode: anum, task: taskID });
  result.value = "mdi-check-circle";
  setTimeout(() => {
    result.value = "mdi-form-textbox";
  }, 3000);
  updateWorking();
};

const clockOff = async (anum: string) => {
  await apicall("/hours/punch", { barcode: anumber });
  //flash.value = "Stopped Tracking Time!";
  //snackcolor.value = "success";
  result.value = "mdi-check-circle";
  setTimeout(() => {
    result.value = "mdi-form-textbox";
  }, 3000);
  updateWorking();
};

const submitAnum = () => {
  if (anumber.value == "") {
    return;
  }
  if (selected.value == -1) {
    clockOff(anumber.value);
  } else {
    clockOn(anumber.value, selected.value);
  }
  anumber.value = "";
};

const anumCheck = (e: event) => {
  if (anumber.value.length > 8) {
    submitAnum();
    e.target.focus();
  }
};

// Setup
let intervalID;
onMounted(() => {
  getTasks();
  intervalID = setInterval(updateWorking, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
