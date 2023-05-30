// import axios from "axios";

export default {
  state: {
    personData: [],
  },
  mutations: {
    ADD_PERSON(state, person) {
      if (state.personData.length > 0) state.personData = [];
      state.personData.push(person);
    },
  },
  actions: {
    fieldIncrement({ commit }, personData) {
      commit("ADD_PERSON", personData);
    },
  },
};
