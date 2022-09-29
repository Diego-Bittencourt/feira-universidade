import { createStore } from "vuex";
import authModule from './modules/auth/index.js';
import signupModule from './modules/signup/index.js';


const store = createStore({
    modules: {
        auth: authModule,
        signup: signupModule,
    }

});

export default store;