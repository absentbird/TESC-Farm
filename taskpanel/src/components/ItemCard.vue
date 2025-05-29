<template>
  <v-col v-if="item" class="d-flex flex-column" cols="12" sm="4" md="3" lg="2">
    <a class="card-button" href="select" @click.prevent="$emit('select', item.ID)">
      <v-card class="item-card d-flex flex-column text-center" :class="{ selected: item.selected }" variant="tonal">
        <v-card-item>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle v-if="item.working">
            {{ item.working }}
            {{ item.working > 1 ? "People" : "Person" }} working
          </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </v-card>
    </a>
  </v-col>
</template>

<script setup lang="ts">
import type { Item, Area } from "@/types/apiinterfaces"
const props = defineProps({
  item: {
    type: Object as PropType<Item | Area>,
    required: true,
  },
});
const emit = defineEmits<{
  (e: "select", id: number): void;
}>();
</script>
