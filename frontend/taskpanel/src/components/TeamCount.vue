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
const emit = defineEmits<{
  (e: "change", team: number): void;
}>();

const updateTeam = () => {
  localStorage.setItem("team", team.value);
  emit("change", team.value);
};
onBeforeMount(() => {
  const t = Number(localStorage.getItem("team"));
  if (t > 0) {
    team.value = t;
  }
});
</script>
