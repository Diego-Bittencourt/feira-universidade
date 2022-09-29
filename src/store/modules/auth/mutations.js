export default {
    setUser(state, payload) {
        state.userId = payload.userId;
        state.token = payload.token;
    },
    setUserName(state, payload) {
        state.userName = payload.userName;
    },
    changeLoggedStatus(state) {
        state.isLoggedIn = !state.isLoggedIn;
    }
}