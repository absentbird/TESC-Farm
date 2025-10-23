<template>
  <v-form ref="petition">
  <v-text-field label="Name" v-model="name" />
  <v-text-field label="Email" v-model="email" />
  <v-textarea label="Comments (optional)" v-model="comment"></v-textarea>
  </v-form>
  <div class="text-center">
  <v-btn @click="sign" color="primary" class="rounded-xl mx-auto">Sign Petition</v-btn>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['submitted']);
const name = ref('');
const email = ref('');
const comment = ref('');
const sign = async () => {
  const formData = {
    name: name.value,
    email: email.value,
    comment: comment.value
  };
  try {
    const response = await fetch('/sign-petition', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log('Form submitted successfully:', result);
    emit('submitted');
    name.value = '';
    email.value = '';
    comment.value = '';
  } catch (error) {
    console.error('Error signing petition:', error);
  }
};
</script>
