<template>
  <div id="main-content" class="pl-8 pr-8 pb-8">
    <v-btn variant="tonal" @click="router.back()" class="mb-8">Back</v-btn>
    <v-form ref="form">
      <h2>Crop Name:</h2>
      <v-text-field required label="Name" v-model="cropName" autofocus @keyup.enter="createCrop"></v-text-field>
      <h2>Variety:</h2>
      <v-text-field label="Variety (OPTIONAL)" v-model="cropVariety" @keyup.enter="createCrop"></v-text-field>
      <v-btn variant="tonal" @click="createCrop">Create Crop</v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import apicall from "@/composables/apicall";
const router = useRouter();
const form = ref();
const cropName: Ref<string> = ref("");
const cropVariety: Ref<string> = ref("");

const createCrop = async () => {
  let newCrop = { name: cropName.value, variety: cropVariety.value };
  let r = await apicall("/crop/new", newCrop);
  router.back();
};
</script>
