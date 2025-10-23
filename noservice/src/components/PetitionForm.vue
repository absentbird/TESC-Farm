<template>
  <v-form>
  <v-text-field label="Name" />
  <v-text-field label="Email" />
  <v-textarea label="Comments (optional)"></v-textarea>
  </v-form>
  <div class="text-center">
  <v-btn @click="sign" color="primary" class="rounded-xl mx-auto">Sign Petition</v-btn>
  </div>
</template>

<script lang="ts" setup>
const sign = () => {
  console.log("Signed petition");
}
</script>
