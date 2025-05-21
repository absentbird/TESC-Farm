<template>
  <TaskSelector
    search
    :tasks="arealist"
    :working="workingdata"
    :selected="selected"
    @select="selectTask"
  ></TaskSelector>
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
const taskdata = ref({});
const workingdata = ref({});

const arealist = computed(() => {
  let areas = Array.from(taskdata.value);
  areas = areas.filter((area) =>
    area.tags.some((tag) => tag.name == "Management Unit"),
  );
  return areas;
});

const getTasks = async () => {
  loading.value = true;
  taskdata.value = await apicall("/tasks");
  loading.value = false;
};

const selectTask = (taskID: number) => {
  selected.value = taskID;
  apicall("/punch", { anum: anumber, task: taskID });
};

onBeforeMount(() => {
  getTasks();
});

let intervalID;
onMounted(() => {
  intervalID = setInterval(getTasks, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
