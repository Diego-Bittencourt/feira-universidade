import msgMutations from './mutations.js';
import msgActions from './actions.js';
import msgGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            allUsers: [],
            messages: []
        }
    },
    mutations: msgMutations,
    getters: msgGetters,
    actions: msgActions
};