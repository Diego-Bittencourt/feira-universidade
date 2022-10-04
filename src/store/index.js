import { createStore } from "vuex";
import authModule from './modules/auth/index.js';
import signupModule from './modules/signup/index.js';
import universitiesModule from './modules/universities/index.js';


const store = createStore({
    modules: {
        auth: authModule,
        signup: signupModule,
        universities: universitiesModule
    }

});

export default store;