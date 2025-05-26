<template>
  <v-form ref="form">
    <h2>Area Name:</h2>
    <v-text-field required label="Name" v-model="areaName"></v-text-field>
    <h2>Area Description:</h2>
    <v-text-field label="Description" v-model="areaDesc"></v-text-field>
    <v-btn variant="tonal" @click="createArea">Create Area</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { apicall } from '@/composables/apicall'
const form = ref()
const areaName: Ref<string> = ref("")
const areaDesc: Ref<string> = ref("")

const createArea = async () => {
  let newArea = { name: areaName.value, description: areaDesc.value }
  await apicall("/area/new", newArea)
  form.value.reset()
};
</script>
