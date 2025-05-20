<template>
  <TaskSelector
    search
    :tasks="arealist"
    :working="workingdata"
    @select="selectTask"
  ></TaskSelector>
  <TaskCard
    v-for="task in arealist"
    :task="task"
    :anumber="anumber"
    :working="workingdata[task.ID]"
    :selected="selected == task.ID"
    @select="$emit('select', task.ID)"
  ></TaskCard>
</template>

<script lang="ts" setup>
import focusFilter from "@/assets/tasklist.js";
import router from "@/router";

definePage({
  meta: {
    requiresAuth: "true",
  },
});

const props = defineProps({
  anumber: {
    type: String,
    required: true,
  },
  showall: {
    type: Boolean,
    required: false,
  },
  search: {
    type: String,
    required: false,
  },
  selected: {
    type: Number,
    required: false,
  },
  workingdata: {
    type: Object,
    required: true,
  },
});

const route = useRoute();
const loading: Ref<boolean> = ref(false);
const showall: Ref<boolean> = ref(false);
const selectedTags: Ref<Array<string>> = ref([]);
const search: Ref<string> = ref("");
const anumber: Ref<string> = ref("");
const hash: Ref<string> = ref("");
const selected: Ref<number> = ref(0);
const taskdata = ref({});
const workingdata = ref({});
const emit = defineEmits<{
  (e: "available-tags", tags: Array<string>): void;
  (e: "select", id: number): void;
  (e: "data-updated", data: Object): void;
}>();

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
watch(props, () => {
  search.value = props.search;
  showall.value = props.showall;
  selected.value = props.selected;
  anumber.value = props.anumber;
  workingdata.value = props.workingdata;
});

const arealist = computed(() => {
  let areas = Array.from(taskdata.value);
  areas = areas.filter((area) =>
    area.tags.some((tag) => tag.name == "Management Unit"),
  );
  if (!showall.value) {
    areas = areas.filter((area) => focusFilter.includes(area.ID));
    areas.sort((a, b) => focusFilter.indexOf(a.ID) - focusFilter.indexOf(b.ID));
  } else {
    areas.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (selectedTags.value.length > 0) {
    areas = areas.filter((area) =>
      area.tags.some((tag) => selectedTags.value.includes(tag.name)),
    );
  }
  if (search.value) {
    areas = areas.filter((area) =>
      (area.name + area.description)
        .toUpperCase()
        .includes(search.value.toUpperCase()),
    );
  }
  return areas;
});

const getTasks = async () => {
  loading.value = true;
  try {
    const response = await fetch(import.meta.env.VITE_API + "/tasks");
    if (!response.ok) {
      console.log(response.status);
    }
    taskdata.value = await response.json();
  } catch (e) {
    console.log(e);
  } finally {
    emit("data-updated", taskdata.value);
  }
};

const taskTags = computed(() => {
  const tags: Set<string> = new Set();
  console.log(Array.from(taskdata.value));
  for (const task of Array.from(taskdata.value)) {
    for (const tag of task.tags) {
      tags.add(tag.name);
    }
  }
  return Array.from(tags);
});

onBeforeMount(() => {
  getTasks();
});

let intervalID;
onMounted(() => {
  emit("available-tags", taskTags.value);
  intervalID = setInterval(emit("data-updated", taskdata.value), 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
