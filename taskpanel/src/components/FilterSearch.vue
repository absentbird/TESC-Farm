<template>
  <v-col cols="12" sm="auto">
    <v-text-field
      id="search"
      v-model="search"
      clearable
      label="Search"
      hint="Search for items by name or description"
    ></v-text-field>
  </v-col>
  <v-col v-if="itemTags" cols="6" sm="3" md="2">
    <v-combobox
      clearable
      chips
      multiple
      label="Tags"
      v-model="selectedTags"
      :items="itemTags"
    ></v-combobox>
  </v-col>
  <v-col v-if="focus" cols="6" sm="3" md="2" class="d-flex align-self-start">
    <v-switch
      inset
      label="Show All"
      color="secondary"
      v-model="showall"
    ></v-switch>
  </v-col>
</template>

<script lang="ts" setup>
const search: Ref<string> = ref("");
const showall: Ref<boolean> = ref(false);
const selectedTags: Ref<Array<string>> = ref([]);

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  focus: {
    type: Array,
    required: false,
  },
});

const emit = defineEmits<{
  (e: "filter", items: Array<any>): void;
}>();

const itemTags = computed(() => {
  const tags: Set<string> = new Set();
  for (const item of props.items) {
    if (!item.tags) {
      continue;
    }
    for (const tag of item.tags) {
      tags.add(tag.name);
    }
  }
  return Array.from(tags);
});

const itemList = computed(() => {
  let items = props.items;
  if (props.focus && !showall.value) {
    items = items.filter((item) => props.focus.includes(item.ID));
    items.sort((a, b) => props.focus.indexOf(a.ID) - props.focus.indexOf(b.ID));
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

onMounted(() => {
  emit("filter", itemList.value);
});
</script>
