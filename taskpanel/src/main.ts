/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { apicall } from "@/composables/apicall";

const app = createApp(App);
app.use(apicall);

registerPlugins(app);

app.mount("#app");
