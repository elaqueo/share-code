import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core";
import { router } from "./routes";

createApp(App).use(router).use(VueAnimXyz).mount("#app");
