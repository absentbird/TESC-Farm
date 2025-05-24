<template>
  <a href="#main-content" class="screen-reader-text skip-to-main-content-link"
    >Skip to main content</a
  >
  <v-main>
    <SettingsButton>
      <v-btn variant="tonal">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </SettingsButton>
    <RouterView></RouterView>
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
      location="top"
      :color="snackcolor"
    >
      {{ flash }}
    </v-snackbar>
  </v-main>
</template>

<script lang="ts" setup>
import router from "@/router";

const route = useRoute();
const editanum: Ref<boolean> = ref(false);
const confirmPunchOut: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const showall: Ref<boolean> = ref(false);
const taskTags: Ref<Array<string>> = ref([]);
const selectedTags: Ref<Array<string>> = ref([]);
const search: Ref<string> = ref("");
const anumber: Ref<string> = ref("");
const hash: Ref<string> = ref("");
const selected: Ref<number> = ref(0);
const result: Ref<string> = ref("mdi-form-textbox");
const snackbar: Ref<boolean> = ref(false);
const snackcolor: Ref<string> = ref("error");
const flash: Ref<string> = ref("");
const workingdata = ref({});

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

const updateWorking = async (taskdata: any) => {
  loading.value = true;
  try {
    const response = await fetch(import.meta.env.VITE_API + "/hours/working");
    if (!response.ok) {
      console.log(response.status);
    }
    taskdata.forEach((task) => {
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

const userSettings = computed(() => {
  const userStatus: string = route.meta.userstatus;
  return settings.value.filter((setting) => setting.users.includes(userStatus));
});

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
  { title: "Logout", action: logout, users: ["worker", "admin"] },
]);

const getTags = (tags: Array<string>) => {
  taskTags.value = tags;
};

onMounted(() => {
  anumber.value = localStorage.getItem("anumber");
  if (!anumber.value) {
    editanum.value = true;
  } else {
    anumCheck();
    setHash();
  }
});
</script>
