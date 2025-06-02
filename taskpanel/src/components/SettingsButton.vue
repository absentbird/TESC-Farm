<template>
  <v-dialog v-model="editAnum" :persistent="!anumber">
    <v-card class="ma-auto w-100" max-width="400" prepend-icon="mdi-settings">
      <v-card-title>Edit A#</v-card-title>
      <v-card-subtitle>Set your A# to track tasks</v-card-subtitle>
      <v-card-item>
        <v-text-field
          id="anum"
          ref="anum"
          :prepend-icon="anumicon"
          v-model="anumber"
          @input="anumCheck"
          @keyup.enter="updateAnum"
          hint="Enter the A# from your student ID"
          label="A#"
        ></v-text-field>
      </v-card-item>
      <v-card-actions>
        <v-btn
          class="ms-auto"
          text="Close"
          v-if="anumber"
          @click="editAnum = false"
        ></v-btn>
        <v-spacer></v-spacer>
        <v-btn class="ms-auto" text="Save" @click="updateAnum"></v-btn>
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
  <v-btn variant="tonal">
    <v-icon>mdi-cog</v-icon>
    <v-menu activator="parent">
      <v-list>
        <v-list-item
          v-for="setting in userSettings"
          :title="setting.title"
          @click="setting.action"
        ></v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script lang="ts" setup>
import router from "@/router";
import { useTheme } from "vuetify";
import { apicall } from "@/composables/apicall.js";

const route = useRoute();
const theme = useTheme();

const anumber: Ref<string> = ref("");
const anumicon: Ref<string> = ref("mdi-form-textbox");
const anum = useTemplateRef("anum");
const hash: Ref<string> = ref("");
const editAnum: Ref<boolean> = ref(false);
const confirmPunchOut: Ref<boolean> = ref(false);

const logout = async () => {
  await apicall("/logout");
  router.push("/login");
};

const punchOutAll = async () => {
  await apicall("/hours/punchoutall");
  confirmPunchOut.value = false;
  location.reload();
};

const setHash = async () => {
  const jsondata = await apicall("/worker/lookup", { barcode: anumber.value });
  hash.value = jsondata.barcode;
  console.log(hash.value);
};

const toggleTheme = () => {
  const themeval = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = themeval;
  localStorage.setItem("theme", themeval);
};

const settings = ref([
  {
    title: "Edit A#",
    action: () => {
      editAnum.value = true;
    },
    users: ["worker", "admin"],
  },
  {
    title: "Stop Tracking All",
    action: () => {
      confirmPunchOut.value = true;
    },
    users: ["admin"],
  },
  {
    title: "Light/Dark Mode",
    action: toggleTheme,
    users: ["worker", "admin", "all"],
  },
  { title: "Logout", action: logout, users: ["worker", "admin"] },
]);

const userSettings = computed(() => {
  const userStatus: string | any = route.meta.userstatus;
  return settings.value.filter(
    (setting) =>
      setting.users.includes(userStatus) || setting.users.includes("all"),
  );
});

const updateAnum = () => {
  if (anumber.value == "") {
    return;
  }
  localStorage.setItem("anumber", anumber.value);
  editAnum.value = false;
  setHash();
};

const anumCheck = () => {
  if (
    anumber.value.length == 9 &&
    anumber.value[0] == "A" &&
    !isNaN(Number(anumber.value.substring(1)))
  ) {
    anumicon.value = "mdi-check-circle";
  } else {
    anumicon.value = "mdi-form-textbox";
  }
};

onMounted(() => {
  anumber.value = localStorage.getItem("anumber");
  console.log("SETTINGS:" + anumber.value);
  if (!anumber.value) {
    editAnum.value = true;
  } else {
    anumCheck();
    setHash();
  }
});
</script>
