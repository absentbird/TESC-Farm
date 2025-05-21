<template>
  <v-container fluid class="taskpanel fill-height d-flex flex-column">
    <v-row
      v-if="search"
      id="filters"
      class="align-self-start d-flex w-100 flex-grow-0"
    >
      <FilterSearch :items="tasks" @filter="filterTasks"></FilterSearch>
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
</template>

<script lang="ts" setup>
const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
  working: {
    type: Array,
    required: false,
  },
  selected: {
    type: Number,
    required: false,
  },
  search: {
    type: Boolean,
    required: false,
  },
});

const tasklist = ref(props.tasks);

const selectTask = (taskID: Number) => {
  if (props.selected == taskID) {
    return;
  }
  if (taskID > 0) {
    emit("select", taskID);
  } else {
    emit("select", 0);
  }
};

const filterTasks = (tasks) => {
  tasklist.value = tasks;
};

const emit = defineEmits<{
  (e: "select", taskID: Number): void;
}>();
</script>
