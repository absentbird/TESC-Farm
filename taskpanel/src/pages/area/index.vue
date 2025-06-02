<template>
  <h2 class="pl-8">Areas</h2>
  <v-row>
    <CardSelector tracking :items="areaList" :newItem="isAdmin ? '/area/builder' : ''" @select="selectArea"
      :selected="selected">
    </CardSelector>
  </v-row>
</template>

<script lang="ts" setup>
// Imports
import { apicall } from "@/composables/apicall";
import type { Area, Punch } from "@/types/apibinds";

// Meta Information
definePage({
  meta: {
    requiresAuth: "true",
  },
});

// Routing
const router = useRouter();
const route = useRoute();

// Refs
const loading: Ref<boolean> = ref(false);
const selected: Ref<number> = ref(-1);
const hash: Ref<string> = ref("");
const anumber: Ref<string | any> = ref("");
const areaList: Ref<Array<Area>> = ref(Array());

const isAdmin: Ref<boolean> = computed(() => {
  return route.meta.userstatus == "admin";
});

// Functions
const updateWorking = async () => {
  loading.value = true;
  selected.value = 0;
  const jsondata: Array<Punch> = Array.from(await apicall("/hours/working"));
  const areaWorking: { [index: number]: number } = {};
  areaList.value.forEach((area) => {
    areaWorking[area.ID] = 0;
  });
  jsondata.forEach((punch: Punch) => {
    areaWorking[punch.task.area_id]++;
    if (punch.worker.barcode == hash.value) {
      selected.value = punch.task.area_id;
    }
  });
  areaList.value.forEach((area) => {
    area.working = areaWorking[area.ID];
    area.selected = area.ID == selected.value;
  });
  loading.value = false;
};

const getAreas = async () => {
  areaList.value = (await apicall("/areas")) as Area[];
  updateWorking();
};

const setHash = async () => {
  const worker = await apicall("/worker/lookup", { barcode: anumber.value });
  hash.value = worker.barcode;
};

const selectArea = async (areaID: number) => {
  if (areaID == 0) {
    selected.value = 0;
    await apicall("/hours/punch", { barcode: anumber.value });
    updateWorking();
    return;
  }
  router.push("/area/" + String(areaID));
  router.push({ name: "/area/[id]", params: { id: areaID } });
};

// Setup
onBeforeMount(() => {
  anumber.value = localStorage.getItem("anumber");
  setHash();
  getAreas();
});

let intervalID: number;
onMounted(() => {
  intervalID = setInterval(updateWorking, 60000);
});
onBeforeUnmount(() => {
  clearInterval(intervalID);
});
</script>
