export default {
    setInscritosList(state, payload) {
        state.inscritos = payload;
    },
    setAllUsers(state, payload) {
        state.allUsers = payload;
    },
    setEmailInscritos(state, payload) {
        state.emailInscritos = payload;
    },
    setNomeInscritos(state, payload) {
        state.nomeInscritos = payload;
    }
}