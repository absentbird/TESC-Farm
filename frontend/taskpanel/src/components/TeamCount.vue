<template>
  <v-number-input
    v-model="team"
    :reverse="false"
    label="Team Size"
    :hideinput="false"
    :inset="false"
    @change="updateTeam"
  ></v-number-input>
</template>

<script setup lang="ts">
const team: Ref<number> = ref(1);

const updateTeam = () => {
  console.log(team.value);
}
</script>
