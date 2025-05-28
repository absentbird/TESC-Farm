<template>
  <v-container fluid class="taskpanel d-flex flex-column align-center">
    <v-row
      v-if="search"
      id="filters"
      class="align-center d-flex w-100 flex-grow-0"
    >
      <FilterSearch
        :items="taskdata"
        :focus="focus"
        @filter="filterTasks"
      ></FilterSearch>
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
      <v-col
        v-if="newItem"
        class="d-flex flex-column"
        cols="12"
        sm="4"
        md="3"
        lg="2"
      >
        <!-- New Item for admins -->
        <a class="card-button" :href="newItem">
          <v-card
            class="task-card d-flex flex-column text-center"
            variant="tonal"
          >
            <v-card-item>
              <v-card-title>New</v-card-title>
            </v-card-item>
            <v-card-text> Create a new item </v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col cols="12">
        <v-btn
          v-if="timeTracking"
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
import type { Task, Area } from "@/types/apiinterfaces.ts";
const props = defineProps({
  items: {
    type: Array<any>,
    required: true,
  },
  focus: {
    type: Array<number>,
    required: false,
  },
  search: {
    type: Boolean,
    required: false,
  },
  newItem: {
    type: String,
    required: false,
  },
  timeTracking: {
    type: Boolean,
    required: true,
  },
  selected: {
    type: Number,
    required: false,
  },
});
const emit = defineEmits<{
  (e: "select", taskID: number): void;
}>();
const router = useRouter();
const taskdata: Ref<Array<Task | Area>> = ref(props.items);
const tasklist: Ref<Array<Task | Area>> = ref(props.items);
const selected: ComputedRef<number> = computed(() => {
  if (props.selected) {
    return props.selected;
  }
  if (tasklist?.value.length == 0) {
    return -1;
  }
  const stask = tasklist.value.find((task) => task.selected);
  return stask ? stask.ID : 0;
});

watch(props, () => {
  taskdata.value = props.items;
  if (!props.search) {
    tasklist.value = props.items;
  }
});

const filterTasks = (tasks: Array<Task>) => {
  tasklist.value = tasks;
};
</script>
