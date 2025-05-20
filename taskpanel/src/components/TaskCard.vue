<template>
  <v-col class="d-flex flex-column" cols="12" sm="4" md="3" lg="2">
    <a
      class="card-button"
      :href="'/punch/' + task.ID"
      @click.prevent="$emit('select', task.ID)"
    >
      <v-card
        class="task-card d-flex flex-column text-center"
        :class="{ selected: selected }"
        variant="tonal"
        @click="$emit('select', task.ID)"
      >
        <v-card-item>
          <v-card-title>{{ task.name }}</v-card-title>
          <v-card-subtitle v-if="working">
            {{ working }} {{ working > 1 ? "People" : "Person" }} working
          </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          {{ task.description }}
        </v-card-text>
      </v-card>
    </a>
  </v-col>
</template>

<script setup lang="ts">
interface Task {
  ID: number;
  name: string;
  description: string;
  tags: string[];
}
const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
  working: {
    type: Number,
    required: false,
  },
  selected: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits<{
  (e: "select", id: number): void;
}>();
</script>

