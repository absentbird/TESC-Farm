<template>
  <v-col v-if="task" class="d-flex flex-column" cols="12" sm="4" md="3" lg="2">
    <a class="card-button" href="/punch" @click.prevent="$emit('select', task.ID)">
      <v-card class="task-card d-flex flex-column text-center" :class="{ selected: task.selected }" variant="tonal">
        <v-card-item>
          <v-card-title>{{ task.name }}</v-card-title>
          <v-card-subtitle v-if="task.working">
            {{ task.working }}
            {{ task.working > 1 ? "People" : "Person" }} working
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
import type { Task, Area } from "@/types/apiinterfaces"
const props = defineProps({
  task: {
    type: Object as PropType<Task | Area>,
    required: true,
  },
});
const emit = defineEmits<{
  (e: "select", id: number): void;
}>();
</script>
