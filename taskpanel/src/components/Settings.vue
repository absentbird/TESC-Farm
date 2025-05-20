<template>
  <v-dialog v-model="editanum" :persistent="!anumber">
    <v-card class="ma-auto w-100" max-width="400" prepend-icon="mdi-settings">
      <v-card-title>Edit A#</v-card-title>
      <v-card-subtitle>Set your A# to track tasks</v-card-subtitle>
      <v-card-item>
        <v-text-field
          id="anum"
          ref="anum"
          :prepend-icon="result"
          v-model="anumber"
          @input="anumCheck"
          @keyup.enter="submitAnum"
          hint="Enter the A# from your student ID"
          label="A#"
        ></v-text-field>
      </v-card-item>
      <v-card-actions>
        <v-btn
          class="ms-auto"
          text="Close"
          v-if="anumber"
          @click="editanum = false"
        ></v-btn>
        <v-spacer></v-spacer>
        <v-btn class="ms-auto" text="Save" @click="submitAnum"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="confirmPunchOut">
    <v-card class="ma-auto w-100" max-width="400" prepend-icon="mdi-settings">
      <v-card-title>Punch Out All Active Workers?</v-card-title>
      <v-card-subtitle>Are you Sure?</v-card-subtitle>
      <v-card-actions>
        <v-btn
          class="ms-auto"
          text="Cancel"
          @click="confirmPunchOut = false"
        ></v-btn>
        <v-spacer></v-spacer>
        <v-btn class="ms-auto" text="Confirm" @click="punchOutAll"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-menu activator="parent">
    <v-list>
      <v-list-item
        v-for="setting in userSettings"
        :title="setting.title"
        @click="setting.action"
      ></v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
//
</script>
