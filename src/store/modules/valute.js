import axios from "axios";

export default {
  state: {
    valute: [],
    computedValue: null,
  },
  actions: {
    getAllValute({ commit }) {
      axios
        .get("http://www.cbr-xml-daily.ru/daily_json.js", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.data)
        .then((items) => {
          commit("Set_state", items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    Set_state(state, items) {
      state.valute = items;
    },
  },
  getters: {
    getVal(state) {
      return state.valute;
    },
  },
};
