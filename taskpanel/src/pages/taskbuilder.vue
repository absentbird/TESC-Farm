<template>
  <div id="main-content" class="pa-8 pt-0">
    <h1>Task Builder</h1>
    <v-btn
      variant="tonal"
      class="mb-8"
      @click="router.push('/area/' + selectedArea)"
      >Back to Area</v-btn
    >
    <br />
    <v-divider></v-divider>
    <br />
    <h2>Choose Area</h2>
    <v-row>
      <CardSelector
        :items="areaList"
        :newItem="$route.meta.userstatus == 'admin' ? '/area/builder' : ''"
        :timeTracking="false"
        @select="selectArea"
      ></CardSelector>
    </v-row>

    <br />
    <v-divider></v-divider>
    <br />

    <h2>Choose Crop</h2>

    <v-row>
      <CardSelector
        search
        :items="cropList"
        :newItem="$route.meta.userstatus == 'admin' ? '/cropbuilder' : ''"
        :timeTracking="false"
        @select="selectCrop"
      ></CardSelector>
    </v-row>

    <br />
    <v-divider></v-divider>
    <br />

    <h2>Task Type</h2>

    <v-row>
      <CardSelector
        :items="typeList"
        :newItem="''"
        :timeTracking="false"
        @select="selectType"
      ></CardSelector>
    </v-row>

    <br />
    <v-divider></v-divider>
    <br />

    <v-btn size="x-large" variant="tonal" @click="createTask">
      Create Task
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import type { Area, Crop, TaskType } from "@/types/apibinds";
import { apicall } from "@/composables/apicall";
definePage({
  meta: {
    requiresAuth: "true",
  },
});
const router = useRouter();
const route = useRoute();
const areaData = ref<Array<Area>>([]);
const cropData = ref<Array<Crop>>([]);
const typeData = ref<Array<TaskType>>([]);
const selectedArea: Ref<number> = ref(0);
const selectedCrop: Ref<number> = ref(0);
const selectedType: Ref<number> = ref(0);

if (route.query.area) {
  selectedArea.value = Number(route.query.area);
}

const areaList = computed(() => {
  return areaData.value.map((area: Area) => {
    area.selected = area.ID == selectedArea.value;
    return area;
  });
});

const cropList = computed(() => {
  return cropData.value.map((crop: Crop) => {
    crop.selected = crop.ID == selectedCrop.value;
    return crop;
  });
});

const typeList = computed(() => {
  return typeData.value.map((type: TaskType) => {
    type.selected = type.ID == selectedType.value;
    return type;
  });
});

const getAreas = async () => {
  areaData.value = (await apicall("/areas")) as Area[];
};

const getCrops = async () => {
  cropData.value = (await apicall("/crops")) as Crop[];
};

const getTypes = async () => {
  typeData.value = (await apicall("/tasktypes")) as TaskType[];
};

const selectArea = (areaID: number) => {
  if (selectedArea.value == areaID) {
    return;
  }
  selectedArea.value = areaID;
  router.replace({ query: { area: areaID } });
};

const selectCrop = (cropID: number) => {
  if (selectedCrop.value == cropID) {
    return;
  }
  selectedCrop.value = cropID;
};

const selectType = (typeID: number) => {
  if (selectedType.value == typeID) {
    return;
  }
  selectedType.value = typeID;
};

const createTask = async () => {
  const data = {
    area_id: selectedArea.value,
    crop_id: selectedCrop.value,
    type_id: selectedType.value,
    name: cropData.value.find((crop) => crop.ID == selectedCrop.value)?.name,
    description:
      typeData.value.find((type) => type.ID == selectedType.value)?.name +
      " " +
      cropData.value.find((crop) => crop.ID == selectedCrop.value)?.name,
  };
  await apicall("/task/new", data);
  selectedArea.value, selectedCrop.value, (selectedType.value = -1);
  router.push("/area/" + selectedArea.value);
};

onMounted(() => {
  getAreas();
  getCrops();
  getTypes();
});
</script>
