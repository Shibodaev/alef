import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
// import VueAnime from "vue-animejs";

// Style
import "@/scss/style.scss";
import "./assets/tailwind.css";

// Module
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPen,
  faPenToSquare,
  faPlus,
  faXmark,
  faSliders,
  faArrowUp,
  faArrowDown,
  faChevronDown,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faArrowUp,
  faArrowDown,
  faChevronDown,
  faSliders,
  faXmark,
  faPlus,
  faPen,
  faPenToSquare,
  faRightLeft
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  // .use(VueAnime)
  .mount("#app");
