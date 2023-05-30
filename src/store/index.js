import { createStore } from "vuex";
// import valute from "./modules/valute.js";
import forms from "./modules/forms.js";
export default createStore({
  modules: {
    forms,
  },
});
