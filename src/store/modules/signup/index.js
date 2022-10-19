import signupMutations from './mutations.js';
import signupActions from './actions.js';
import signupGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            emailInscritos: [],
            nomeInscritos: [],
            inscritos: [],
            schoolList: [],
            schoolName: [],
            schoolEmail: [],
            checkins: []
        }
    },
    mutations: signupMutations,
    getters: signupGetters,
    actions: signupActions
};