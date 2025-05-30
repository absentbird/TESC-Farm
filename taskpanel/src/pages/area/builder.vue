<template>
  <div id="main-content" class="pl-8 pr-8 pb-8">
  <v-btn variant="tonal" @click="router.push('/area')" class="mb-8">Go to Areas</v-btn>
  <v-form ref="form">
    <h2>Area Name:</h2>
    <v-text-field required label="Name" v-model="areaName" autofocus @keyup.enter="createArea"></v-text-field>
    <h2>Area Description:</h2>
    <v-text-field label="Description" v-model="areaDesc" @keyup.enter="createArea"></v-text-field>
    <v-btn variant="tonal" @click="createArea">Create Area</v-btn>
  </v-form>
  </div>
</template>

<script setup lang="ts">
import { apicall } from '@/composables/apicall'
const router = useRouter();
const form = ref()
const areaName: Ref<string> = ref("")
const areaDesc: Ref<string> = ref("")

const createArea = async () => {
  let newArea = { name: areaName.value, description: areaDesc.value }
  let r = await apicall("/area/new", newArea)
  await apicall("/task/new", { area_id: r.ID, name: 'General', description: 'Work applicable to all crops in area' })
  await apicall("/task/new", { area_id: r.ID, name: 'Lab', description: 'Learning stuff in this area' })
  router.back()
};
</script>
