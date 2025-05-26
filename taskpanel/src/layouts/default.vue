<template>
  <a href="#main-content" class="screen-reader-text skip-to-main-content-link">Skip to main content</a>
  <v-main>
    <v-container fluid>
      <v-row class="pr-4 pl-4 pt-2">
        <v-col>
          <h1>Project and Labor Tracker</h1>
        </v-col>
        <v-col cols="3" sm="2" md="1" align="right">
          <SettingsButton></SettingsButton>
        </v-col>
      </v-row>
    </v-container>
    <RouterView />
    <v-snackbar v-model="snackbar" timeout="2000" location="top" :color="snackcolor">
      {{ flash }}
    </v-snackbar>
  </v-main>
</template>

<script lang="ts" setup>
const snackbar: Ref<boolean> = ref(false);
const snackcolor: Ref<string> = ref("error");
const flash: Ref<string> = ref("");
</script>
