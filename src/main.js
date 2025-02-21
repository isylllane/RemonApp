/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}

registerPlugins(app);

app.mount("#app");
