import universitiesGetters from "./getters.js";
import universitiesActions from "./actions.js";
import universitiesMutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
        universities: [
            
        ]
    };
  },
  mutations: universitiesMutations,
  actions: universitiesActions,
  getters: universitiesGetters
};
