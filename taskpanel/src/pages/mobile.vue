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
import focusFilter from "@/assets/tasklist.js";
definePage({
  meta: {
    requiresAuth: "true",
  },
});

const settings: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const showall: Ref<boolean> = ref(false);
const leader: Ref<boolean> = ref(false);
const team: Ref<number> = ref(1);
const selectedTags: Ref<Array<string>> = ref([]);
const search: Ref<string> = ref("");
const anumber: Ref<string> = ref("");
const hash: Ref<string> = ref("");
const selected: Ref<number> = ref(0);
const result: Ref<string> = ref("mdi-form-textbox");
const snackbar: Ref<boolean> = ref(false);
const snackcolor: Ref<string> = ref("error");
const flash: Ref<string> = ref("");
const taskdata = ref({});
const workingdata = ref({});
const tasktags = computed(() => {
  const tags: Set<string> = new Set();
  for (const task of Array.from(taskdata.value)) {
    for (const tag of task.tags) {
      tags.add(tag.name);
    }
  }
  return Array.from(tags);
});
const tasklist = computed(() => {
  let tasks = Array.from(taskdata.value);
  if (!showall.value) {
    tasks = tasks.filter((task) => focusFilter.includes(task.ID));
  }
  if (selectedTags.value.length > 0) {
    tasks = tasks.filter((task) =>
      task.tags.some((tag) => selectedTags.value.includes(tag.name)),
    );
  }
  if (search.value) {
    tasks = tasks.filter((task) =>
      (task.name + task.description)
        .toUpperCase()
        .includes(search.value.toUpperCase()),
    );
  }
  return tasks;
});
const selectTask = (taskID: number) => {
  if (selected.value == taskID) {
    return;
  }
  selected.value = taskID;
  if (selected.value > 0) {
    clockOn(selected.value);
  } else {
    clockOff();
  }
};
const updateTeam = () => {
  console.log(team.value);
  return;
};
const getTasks = async () => {
  loading.value = true;
  try {
    const response = await fetch(import.meta.env.VITE_API + "/tasks");
    if (!response.ok) {
      console.log(response.status);
    }
    taskdata.value = await response.json();
    taskdata.value.forEach((task) => {
      workingdata.value[task.ID] = 0;
    });
  } catch (e) {
    console.log(e);
  } finally {
    updateWorking();
  }
};
const updateWorking = async () => {
  loading.value = true;
  try {
    const response = await fetch(import.meta.env.VITE_API + "/hours/working");
    if (!response.ok) {
      console.log(response.status);
    }
    taskdata.value.forEach((task) => {
      workingdata.value[task.ID] = 0;
    });
    const jsondata = await response.json();
    jsondata.forEach((punch) => {
      workingdata.value[punch.task_id]++;
      if (punch.worker.barcode == hash.value) {
        selected.value = punch.task_id;
      }
    });
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
const submitAnum = () => {
  if (anumber.value == "") {
    return;
  }
  localStorage.setItem("anumber", anumber.value);
  settings.value = false;
  setHash();
};
const anumCheck = () => {
  if (anumber.value.length > 8) {
    result.value = "mdi-check-circle";
  } else {
    result.value = "mdi-form-textbox";
  }
};
const clockOn = async (taskID: number) => {
  const data = { barcode: anumber.value, task: taskID };
  const response = await fetch(import.meta.env.VITE_API + "/hours/punch", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    flash.value = response.statusText;
    snackbar.value = true;
    console.log(response);
  }
  updateWorking();
};
const clockOff = async () => {
  const data = { barcode: anumber.value };
  const response = await fetch(import.meta.env.VITE_API + "/hours/punch", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    flash.value = response.statusText;
    snackbar.value = true;
    console.log(response);
  }
  updateWorking();
};
const setHash = async () => {
  const data = { barcode: anumber.value };
  const response = await fetch(import.meta.env.VITE_API + "/worker/lookup", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    console.log(response);
  }
  const jsondata = await response.json();
  hash.value = jsondata.barcode;
};
let intervalID;
onMounted(() => {
  anumber.value = localStorage.getItem("anumber");
  if (anumber.value) {
    anumCheck();
    setHash();
  }
  getTasks();
  intervalID = setInterval(updateWorking, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
