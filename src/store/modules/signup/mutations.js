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
    },
    setSchoolList(state, payload) {
        state.schoolList = payload;
    },
    setSchoolName(state, payload) {
        state.schoolName = payload;
    },
    setSchoolEmail(state, payload) {
        state.schoolEmail = payload;
    },
    setAllCheckins(state, payload) {
        state.checkins = payload;
    }
}