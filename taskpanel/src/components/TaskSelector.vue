<template>
  <v-container fluid class="taskpanel d-flex flex-column align-center">
    <v-row v-if="search" id="filters" class="align-center d-flex w-100 flex-grow-0">
      <FilterSearch :items="taskdata" :focus="focus" @filter="filterTasks"></FilterSearch>
    </v-row>
    <v-row id="main-content" align="center" justify="center" class="d-flex flex-row w-100">
      <TaskCard v-for="task in tasklist" :task="task" @select="$emit('select', task.ID)"></TaskCard>
      <v-col cols="12">
        <v-btn class="bigbutton" :class="{ selected: selected == 0 }" variant="tonal" @click="$emit('select', 0)">
          Not Tracking Time
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import type { Tag, Task, Worker, Punch } from "@/types/apiinterfaces.ts"
const props = defineProps({
  tasks: {
    type: Array<Task>,
    required: true,
  },
  focus: {
    type: Array,
    required: false,
  },
  search: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits<{
  (e: "select", taskID: number): void;
}>();

const taskdata: Ref<Array<Task>> = ref(props.tasks);
const tasklist: Ref<Array<Task>> = ref(props.tasks);
const selected: ComputedRef<number> = computed(() => {
  if (tasklist.value.length == 0) {
    return -1;
  }
  const stask = Array.from(tasklist.value).find((task) => task.selected);
  return stask ? stask.ID : 0;
});

watch(props, () => {
  taskdata.value = props.tasks;
  if (!props.search) {
    tasklist.value = props.tasks;
  }
});

const filterTasks = (tasks: Array<Task>) => {
  tasklist.value = tasks;
};
</script>
