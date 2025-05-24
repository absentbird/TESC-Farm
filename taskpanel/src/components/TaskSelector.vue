<template>
  <v-container fluid class="taskpanel fill-height d-flex flex-column">
    <v-row
      v-if="search"
      id="filters"
      class="align-self-start d-flex w-100 flex-grow-0"
    >
      <FilterSearch :items="taskdata" @filter="filterTasks"></FilterSearch>
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
        @select="$emit('select', task.ID)"
      ></TaskCard>
      <v-col cols="12">
        <v-btn
          class="bigbutton"
          :class="{ selected: selected == 0 }"
          variant="tonal"
          @click="$emit('select', 0)"
        >
          Not Tracking Time
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
  search: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits<{
  (e: "select", taskID: Number): void;
}>();

const taskdata = ref(props.tasks);
const tasklist = ref([]);
const selected = computed(() => {
  if (tasklist.value.length == 0) {
    return -1;
  }
  const stask = Array.from(tasklist.value).find((task) => task.selected);
  return stask ? stask.ID : 0;
});

watch(props, () => {
  taskdata.value = props.tasks;
});

const filterTasks = (tasks) => {
  tasklist.value = tasks;
};
</script>
