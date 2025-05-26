<template>
  <h1>Task Builder</h1>
  <br />
  <v-divider></v-divider>
  <br />
  <h2>Choose Area</h2>
  <v-row>
    <v-col v-for="area in areaData" :key="area.ID" class="d-flex flex-column" cols="12" sm="4" md="3" lg="2">
      <a class="card-button" href="#" @click.prevent="selectArea(area.ID)">
        <v-card class="task-card d-flex flex-column text-center" :class="{ 'selected': selectedArea == area.ID }"
          variant="tonal" @click="selectArea(area.ID)">
          <v-card-item>
            <v-card-title>{{ area.name }}</v-card-title>
          </v-card-item>
          <v-card-text>
            {{ area.description }}
          </v-card-text>
        </v-card>
      </a>
    </v-col>
  </v-row>

  <br />
  <v-divider></v-divider>
  <br />

  <h2>Choose Crop</h2>

  <v-row>
    <v-col v-for="crop in cropdata" :key="crop.ID" class="d-flex flex-column" cols="12" sm="4" md="3" lg="2">
      <a class="card-button" :href="'/punch/' + crop.ID" @click.prevent="selectCrop(crop.ID)">
        <v-card class="task-card d-flex flex-column text-center" :class="{ 'selected': selectedCrop == crop.ID }"
          variant="tonal" @click="selectCrop(crop.ID)">
          <v-card-item>
            <v-card-title>{{ crop.name }}</v-card-title>
          </v-card-item>
        </v-card>
      </a>
    </v-col>
  </v-row>

  <br />
  <v-divider></v-divider>
  <br />

  <h2>Task Type</h2>

  <v-row>
    <v-col v-for="type in taskTypes" :key="type.ID" class="d-flex flex-column" cols="12" sm="4" md="3" lg="2">
      <a class="card-button" :href="'/punch/' + type.ID" @click.prevent="selectType(type.ID)">
        <v-card class="task-card d-flex flex-column text-center" :class="{ 'selected': selectedType == type.ID }"
          variant="tonal" @click="selectType(type.ID)">
          <v-card-item>
            <v-card-title>{{ type.name }}</v-card-title>
          </v-card-item>
        </v-card>
      </a>
    </v-col>
  </v-row>

  <br />
  <v-divider></v-divider>
  <br />

  <v-btn size="x-large" variant="tonal" @click="createTask">
    Create Task
  </v-btn>
</template>

<script setup lang="ts">
import type { Area, Crop } from "@/types/apiinterfaces"
import { apicall } from "@/composables/apicall"
const taskTypes = ref([
  {
    ID: 1,
    name: 'Preharvest',
    action: 'preharvest',
    users: ['worker', 'admin']
  },
  {
    ID: 2,
    name: 'Harvest',
    action: 'harvest',
    users: ['worker', 'admin']
  },
])
const router = useRouter()
const areaData = ref<Array<Area>>([])
const cropdata = ref<Array<Crop>>([])
const selectedArea: Ref<number> = ref(0)
const selectedCrop: Ref<number> = ref(0)
const selectedType: Ref<number> = ref(0)

const getAreas = async () => {
  areaData.value = await apicall("/areas") as Area[];
}

const getCrops = async () => {
  cropdata.value = await apicall("/crops") as Crop[];
}

const selectArea = (areaID: number) => {
  if (selectedArea.value == areaID) {
    return
  }
  selectedArea.value = areaID
}

const selectCrop = (cropID: number) => {
  if (selectedCrop.value == cropID) {
    return
  }
  selectedCrop.value = cropID
}

const selectType = (typeID: number) => {
  if (selectedType.value == typeID) {
    return
  }
  selectedType.value = typeID
}

const createTask = async () => {

  const data = {
    area_id: selectedArea.value,
    crop_id: selectedCrop.value,
    type_id: selectedType.value,
    name: cropdata.value.find(crop => crop.ID == selectedCrop.value)?.name,
    description: taskTypes.value.find(type => type.ID == selectedType.value)?.name + ' ' + cropdata.value.find(crop => crop.ID == selectedCrop.value)?.name,
  }
  await apicall("/task/new", data)
  selectedArea.value, selectedCrop.value, selectedType.value = -1;
}

onMounted(() => {
  getAreas()
  getCrops()
})
</script>
