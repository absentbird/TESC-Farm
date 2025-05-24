<template>
  <v-dialog v-model="editAnum" :persistent="!anumber">
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
          @click="editAnum = false"
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

const route = useRoute();
const anumber: Ref<string> = ref("");
const anum = useTemplateRef("anum");
const hash: Ref<string> = ref("");
const editAnum: Ref<boolean> = ref(false);
const confirmPunchOut: Ref<boolean> = ref(false);

const logout = async () => {
  const response = await fetch(import.meta.env.VITE_API + "/logout", {
    credentials: "include",
  });
  if (!response.ok) {
    flash.value = response.statusText;
    snackbar.value = true;
  } else {
    router.push("/login");
  }
};

const punchOutAll = async () => {
  const response = await fetch(
    import.meta.env.VITE_API + "/hours/punchoutall",
    { credentials: "include" },
  );
  if (!response.ok) {
    flash.value = response.statusText;
    snackbar.value = true;
  }
  updateWorking();
  confirmPunchOut.value = false;
  selected.value = 0;
};

const submitAnum = () => {
  if (anumber.value == "") {
    return;
  }
  if (selected.value == -1) {
    clockOff(anumber.value);
  } else {
    clockOn(anumber.value, selected.value);
  }
  anumber.value = "";
};

const anumCheck = (e: event) => {
  if (anumber.value.length > 8) {
    submitAnum();
    e.target.focus();
  }
};

const setHash = async () => {
  const data = { barcode: anumber.value };
  const response = await fetch(import.meta.env.VITE_API + "/worker/lookup", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    console.log(response);
  }
  const jsondata = await response.json();
  hash.value = jsondata.barcode;
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
  { title: "Logout", action: logout, users: ["worker", "admin"] },
]);

const userSettings = computed(() => {
  const userStatus: string = route.meta.userstatus;
  return settings.value.filter((setting) => setting.users.includes(userStatus));
});

onMounted(() => {
  anumber.value = localStorage.getItem("anumber");
  if (!anumber.value) {
    editAnum.value = true;
  } else {
    anumCheck();
    setHash();
  }
});
</script>
