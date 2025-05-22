<template>
  <v-col cols="9" sm="4" md="7">
    <v-text-field
      id="search"
      v-model="search"
      clearable
      label="Search"
      hint="Search for items by name or description"
    ></v-text-field>
  </v-col>
  <v-col cols="3" class="mt-2 d-flex d-sm-none">
    <v-btn variant="tonal">
      <v-icon>mdi-cog</v-icon>
      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="setting in userSettings"
            :title="setting.title"
            @click="setting.action"
          ></v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </v-col>
  <v-col cols="6" sm="3" md="2">
    <v-combobox
      clearable
      chips
      multiple
      label="Tags"
      v-model="selectedTags"
      :items="itemTags"
    ></v-combobox>
  </v-col>
  <v-col cols="6" sm="3" md="2" class="d-flex align-self-start">
    <v-switch
      label="Show All"
      inset
      color="secondary"
      v-model="showall"
    ></v-switch>
  </v-col>
  <v-col cols="1" class="mt-2 d-none d-sm-flex">
    <v-btn variant="tonal">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-col>
</template>

<script lang="ts" setup>
import focusFilter from "@/assets/tasklist.js";

const search: Ref<string> = ref("");
const showall: Ref<boolean> = ref(false);
const selectedTags: Ref<Array<string>> = ref([]);

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "filter", items: Array): void;
}>();

const itemTags = computed(() => {
  const tags: Set<string> = new Set();
  for (const item of props.items) {
    for (const tag of item.tags) {
      tags.add(tag.name);
    }
  }
  return Array.from(tags);
});

const itemList = computed(() => {
  let items = props.items;
  if (!showall.value) {
    items = items.filter((item) => focusFilter.includes(item.ID));
    items.sort((a, b) => focusFilter.indexOf(a.ID) - focusFilter.indexOf(b.ID));
  } else {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (selectedTags.value.length > 0) {
    items = items.filter((item) =>
      item.tags.some((tag) => selectedTags.value.includes(tag.name)),
    );
  }
  if (search.value) {
    items = items.filter((item) =>
      (item.name + item.description)
        .toUpperCase()
        .includes(search.value.toUpperCase()),
    );
  }
  return items;
});

watch(itemList, (newVal, oldVal) => {
  if (oldVal != newVal) {
    emit("filter", itemList.value);
  }
});
</script>
