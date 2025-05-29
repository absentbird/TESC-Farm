<template>
  <v-container>
    <h1>Worker Login</h1>
    <p class="error">{{ error }}</p>
    <v-text-field
      id="username"
      v-model="username"
      hint="Enter the name of your account"
      label="Username"
      name="username"
      :rules="[rules.required]"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :append-icon="showpw ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showpw ? 'text' : 'password'"
      hint="At least 8 characters"
      label="Password"
      name="password"
      counter
      @click:append="showpw = !showpw"
      @keyup.enter="login"
    ></v-text-field>
    <v-btn @click="login" variant="tonal">Sign In</v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import { apicall } from "@/composables/apicall";

const router = useRouter();
const route = useRoute();

const username = ref("");
const password = ref("");
const error = ref("");
const showpw = ref(false);

const rules = {
  required: (value) => !!value || "Required.",
  min: (v) => v.length >= 8 || "Minimum 8 characters",
};

const login = async () => {
  if (!username.value || !password.value) {
    error.value = "Both Username and Password are required";
    return;
  }
  if (password.value.length < 8) {
    error.value = "Password must be 8 or more characters";
    return;
  }
  apicall("/login", { username: username.value, password: password.value });
  router.push({ path: "/mobile" });
};

onMounted(() => {
  if (route.query["w"]) {
    username.value = "worker";
    password.value = route.query["w"];
    login();
  }
});
</script>
