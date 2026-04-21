<template>
  <v-container fluid id="taskpanel" class="fill-height d-flex flex-column">
    <v-dialog v-model="settings">
      <v-card class="ma-auto w-100" max-width="400" prepend-icon="mdi-settings">
        <v-card-title>Settings</v-card-title>
        <v-card-item>
          <v-text-field
            id="anum"
            ref="anum"
            :prepend-icon="result"
            v-model="anumber"
            @input="anumCheck"
            @keyup.enter="submitAnum"
            hint="Enter a unique identifier (optional)"
            label="Unique ID"
          ></v-text-field>
        </v-card-item>
        <v-card-actions>
          <v-btn
            class="ms-auto"
            text="Close"
            v-if="anumber"
            @click="settings = false"
          ></v-btn>
          <v-spacer></v-spacer>
          <v-btn class="ms-auto" text="Save" @click="submitAnum"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row
      v-if="leader"
      id="team"
      class="align-self-start d-flex w-100 flex-grow-0"
    >
      <v-number-input
        v-model="team"
        :reverse="false"
        label="Team Size"
        :hideInput="false"
        :inset="false"
        @change="updateTeam"
      ></v-number-input>
    </v-row>
    <v-row id="filters" class="align-self-start d-flex w-100 flex-grow-0">
      <v-col cols="9" sm="4" md="7">
        <v-text-field
          id="search"
          v-model="search"
          clearable
          label="Search"
          hint="Search for tasks by name or description"
        ></v-text-field>
      </v-col>
      <v-col cols="3" class="mt-2 d-flex d-sm-none">
        <v-btn @click="settings = true" variant="tonal">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="6" sm="3" md="2">
        <v-combobox
          clearable
          chips
          multiple
          label="Tags"
          v-model="selectedTags"
          :items="tasktags"
        ></v-combobox>
      </v-col>
      <v-col cols="6" sm="3" md="2" class="d-flex align-self-start">
        <v-switch
          label="Show All"
          inset
          color="secondary"
          v-model="showall"
        ></v-switch>
      </v-col>
      <v-col cols="1" class="mt-2 d-none d-sm-flex">
        <v-btn @click="settings = true" variant="tonal">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="d-flex flex-row w-100">
      <v-col
        v-for="task in tasklist"
        class="d-flex flex-column"
        cols="12"
        sm="4"
        md="3"
        lg="2"
      >
        <v-card
          class="task-card d-flex flex-column text-center"
          :class="{ selected: selected == task.ID }"
          variant="tonal"
          @click="selectTask(task.ID)"
        >
          <v-card-item>
            <v-card-title>{{ task.name }}</v-card-title>
            <v-card-subtitle v-if="workingdata[task.ID]">
              {{ workingdata[task.ID] }}
              {{ workingdata[task.ID] > 1 ? "People" : "Person" }} working
            </v-card-subtitle>
          </v-card-item>
          <v-card-text>
            {{ task.description }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-btn
          class="bigbutton"
          :class="{ selected: selected == 0 }"
          variant="tonal"
          @click="selectTask(0)"
        >
          Not Tracking Time
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar
    v-model="snackbar"
    timeout="2000"
    location="top"
    :color="snackcolor"
  >
    {{ flash }}
  </v-snackbar>
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
>>>>>>> main
  intervalID = setInterval(updateWorking, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
