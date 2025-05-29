<template>
  <v-container fluid class="d-flex flex-column align-center">
    <v-row
      v-if="search"
      id="filters"
      class="align-center d-flex w-100 flex-grow-0"
    >
      <FilterSearch
        :items="itemData"
        :focus="focus"
        @filter="filterItems"
      ></FilterSearch>
    </v-row>
    <v-row
      id="main-content"
      align="center"
      justify="center"
      class="d-flex flex-row w-100"
    >
      <ItemCard
        v-for="item in itemList"
        :item="item"
        @select="$emit('select', item.ID)"
      ></ItemCard>
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
            class="item-card d-flex flex-column text-center"
            variant="tonal"
          >
            <v-card-item>
              <v-card-title>New</v-card-title>
            </v-card-item>
            <v-card-text> Create a new item </v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col cols="12" v-if="stoptracking">
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
  stoptracking: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits<{
  (e: "select", itemID: number): void;
}>();

const router = useRouter();
const itemData: Ref<Array<Task | Area>> = ref(props.items);
const itemList: Ref<Array<Task | Area>> = ref(props.items);
const selected: Ref<number> = ref(props.selected);

watch(props, () => {
  itemData.value = props.items;
  if (!props.search) {
    itemList.value = props.items;
  }
});

const filterItems = (items: Array<Task | Area>) => {
  itemList.value = items;
};
</script>
