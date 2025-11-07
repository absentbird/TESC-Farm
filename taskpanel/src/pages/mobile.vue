<template>
  <v-container fluid id="taskpanel" class="fill-height d-flex flex-column">
    <v-dialog v-model="editanum" :persistent="!anumber">
      <v-card class="ma-auto w-100" max-width="400" prepend-icon="mdi-settings">
        <v-card-title>Edit A#</v-card-title>
        <v-card-subtitle>Set your A# to track tasks</v-card-subtitle>
        <v-card-item>
          <v-text-field
            id="anum"
            ref="anum"
            :prepend-icon="result"
            v-model="anumber"
            @input="anumCheck"
            @keyup.enter="submitAnum"
            hint="Enter the A# from your student ID"
            label="A#"
          ></v-text-field>
        </v-card-item>
        <v-card-actions>
          <v-btn
            class="ms-auto"
            text="Close"
            v-if="anumber"
            @click="editanum = false"
          ></v-btn>
          <v-spacer></v-spacer>
          <v-btn class="ms-auto" text="Save" @click="submitAnum"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmPunchOut">
      <v-card class="ma-auto w-100" max-width="400" prepend-icon="mdi-settings">
        <v-card-title>Punch Out All Active Workers?</v-card-title>
        <v-card-subtitle>Are you Sure?</v-card-subtitle>
        <v-card-actions>
          <v-btn
            class="ms-auto"
            text="Cancel"
            @click="confirmPunchOut = false"
          ></v-btn>
          <v-spacer></v-spacer>
          <v-btn class="ms-auto" text="Confirm" @click="punchOutAll"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        <v-btn variant="tonal">
          <v-icon>mdi-cog</v-icon>
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                v-for="setting in userSettings"
                :title="setting.title"
                @click="setting.action"
              ></v-list-item>
            </v-list>
          </v-menu>
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
        <v-btn variant="tonal">
          <v-icon>mdi-cog</v-icon>
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                v-for="setting in userSettings"
                :title="setting.title"
                @click="setting.action"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      id="main-content"
      align="center"
      justify="center"
      class="d-flex flex-row w-100"
    >
      <TaskCard
        v-for="task in tasklist"
        :task="task"
        :anumber="anumber"
        :working="workingdata[task.ID]"
        :selected="selected == task.ID"
        @select="selectTask"
      ></TaskCard>
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
import { useTheme } from "vuetify";
import focusFilter from "@/assets/tasklist.js";
import router from "@/router";

definePage({
  meta: {
    requiresAuth: "true",
  },
});
const route = useRoute();
const theme = useTheme();
const editanum: Ref<boolean> = ref(false);
const confirmPunchOut: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const showall: Ref<boolean> = ref(false);
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
const logout = async () => {
  const response = await fetch(import.meta.env.VITE_API + "/logout", {
    credentials: "include",
  });
  if (!response.ok) {
    flash.value = response.statusText;
    snackbar.value = true;
  } else {
    router.push("/login");
  }
};
const punchOutAll = async () => {
  const response = await fetch(
    import.meta.env.VITE_API + "/hours/punchoutall",
    { credentials: "include" },
  );
  if (!response.ok) {
    flash.value = response.statusText;
    snackbar.value = true;
  }
  updateWorking();
  confirmPunchOut.value = false;
  selected.value = 0;
};
const toggleTheme = () => {
  const themeval = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = themeval;
  localStorage.setItem("theme", themeval);
};
onBeforeMount(() => {
  if (localStorage.getItem("theme") != null) {
    theme.global.name.value = localStorage.getItem("theme");
  }
});
const settings = ref([
  {
    title: "Edit A#",
    action: () => {
      editanum.value = true;
    },
    users: ["worker", "admin"],
  },
  {
    title: "Stop Tracking All",
    action: () => {
      confirmPunchOut.value = true;
    },
    users: ["admin"],
  },
  {
    title: "Light/Dark Mode",
    action: toggleTheme,
    users: ["worker", "admin"],
  },
  {
    title: "Logout",
    action: logout,
    users: ["worker", "admin"],
  },
]);

const userSettings = computed(() => {
  const userStatus: string = route.meta.userstatus;
  return settings.value.filter((setting) => setting.users.includes(userStatus));
});

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
    tasks.sort((a, b) => focusFilter.indexOf(a.ID) - focusFilter.indexOf(b.ID));
  } else {
    tasks.sort((a, b) => a.name.localeCompare(b.name));
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
  editanum.value = false;
  setHash();
};
const anumCheck = () => {
  if (
    anumber.value.length == 9 &&
    anumber.value[0] == "A" &&
    !isNaN(Number(anumber.value.substring(1)))
  ) {
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
  if (!anumber.value) {
    anumber.value = Math.floor(Math.random() * 1000000000);
    localStorage.setItem("anumber", anumber.value);
    editanum.value = false;
    setHash();
  } else {
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
