<template>
  <v-container
    fluid
    id="taskpanel"
    class="fill-height d-flex flex-column withfloat"
  >
    <v-row id="filters" class="align-self-start d-flex w-100">
      <v-col cols="12" sm="4" md="8">
        <v-text-field
          id="search"
          v-model="search"
          clearable
          label="Search"
          hint="Search for tasks by name or description"
        ></v-text-field>
      </v-col>
      <v-col cols="6" sm="4" md="2">
        <v-combobox
          clearable
          chips
          multiple
          label="Tags"
          v-model="selectedTags"
          :items="tasktags"
        ></v-combobox>
      </v-col>
      <v-col cols="6" sm="4" md="2" class="d-flex align-self-start">
        <v-switch
          label="Show All"
          inset
          color="secondary"
          v-model="showall"
        ></v-switch>
      </v-col>
    </v-row>
    <v-row
      id="main-content"
      align="center"
      justify="center"
      class="d-flex flex-row w-100"
    >
      <ItemCard
        v-for="task in tasklist"
        :task="task"
        :anumber="anumber"
        :working="workingdata[task.ID]"
        :selected="selected == task.ID"
        @select="selectTask"
      ></ItemCard>
      <v-col cols="12">
        <v-btn
          class="bigbutton"
          :class="{ selected: selected == -1 }"
          variant="tonal"
          @click="selectTask(-1)"
        >
          Stop Tracking Time
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
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
import focusFilter from "@/assets/tasklist.ts";
definePage({
  meta: {
    requiresAuth: "true",
  },
});

const loading: Ref<boolean> = ref(false);
const showall: Ref<boolean> = ref(false);
const selectedTags: Ref<Array<string>> = ref([]);
const search: Ref<string> = ref("");
const anumber: Ref<string> = ref("");
const selected: Ref<number> = ref(0);
const result: Ref<string> = ref("mdi-form-textbox");
const snackbar: Ref<boolean> = ref(false);
const snackcolor: Ref<string> = ref("success");
const flash: Ref<string> = ref("");
const taskdata = ref({});
const workingdata = ref({});

const anum = useTemplateRef("anum");

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
const selectedName = computed(() => {
  if (selected.value == 0) {
    return "None";
  }
  if (selected.value < 0) {
    return "Stop Tracking Time";
  }
  return taskdata.value.find((task) => task.ID === selected.value).name;
});
const selectTask = (taskID: number) => {
  selected.value = taskID;
  if (taskID == 0) {
    return;
  }
  nextTick(() => {
    anum.value?.focus();
  });
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
  } catch (e: Error | any) {
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
    });
  } catch (e: Error | any) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
const clockOn = async (anum: string, taskID: number) => {
  const data = { barcode: anum, task: taskID };
  try {
    const response = await fetch(import.meta.env.VITE_API + "/hours/punch", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (response.ok) {
      flash.value = "Tracking Time!";
      snackcolor.value = "success";
      snackbar.value = true;
      result.value = "mdi-check-circle";
    } else {
      flash.value = response.statusText;
      snackcolor.value = "error";
      snackbar.value = true;
      result.value = "mdi-alert-circle";
    }
  } catch (e: Error | any) {
    flash.value = e;
    snackcolor.value = "error";
    snackbar.value = true;
  } finally {
    setTimeout(() => {
      result.value = "mdi-form-textbox";
    }, 3000);
    updateWorking();
  }
};

const clockOff = async (anum: string) => {
  const data = { barcode: anum };
  try {
    const response = await fetch(import.meta.env.VITE_API + "/hours/punch", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (response.ok) {
      flash.value = "Stopped Tracking Time!";
      snackcolor.value = "success";
      snackbar.value = true;
      result.value = "mdi-check-circle";
    } else {
      flash.value = response.statusText;
      snackcolor.value = "error";
      snackbar.value = true;
      result.value = "mdi-alert-circle";
    }
  } catch (e: Error | any) {
    flash.value = e;
    snackcolor.value = "error";
    snackbar.value = true;
  } finally {
    setTimeout(() => {
      result.value = "mdi-form-textbox";
    }, 3000);
    updateWorking();
  }
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

let intervalID;
onMounted(() => {
  getTasks();
  intervalID = setInterval(updateWorking, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
