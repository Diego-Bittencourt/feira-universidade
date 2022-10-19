import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
// import TaskList from './pages/tasks/TaskList.vue';
import AuthLog from './pages/auth/AuthLog.vue';
import MessagePage from './pages/messages/MessagePage.vue';
import NotFound from './pages/NotFound.vue';
import RegisterUser from './pages/RegisterUser.vue';
import ControlPanel from './pages/control/ControlPanel.vue';
import EventoControle from './pages/evento/EventoControle.vue';
import EventoDados from './components/registro/EventoDados.vue';
import ControleEntrada from './components/registro/ControleEntrada.vue';
import InscritosPresentes from './components/registro/InscritosPresentes.vue';


//import the store to use on the navigation guards
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage
        },
        {
            path: '/register',
            component: RegisterUser
        },
        {
            path: '/auth',
            component: AuthLog
        },
        {
            path: '/form',
            component: MessagePage
        },
        {
            path: '/coordenacaoevento',
            component: EventoControle,
            meta: {requiresAuth: true },
            children: [
                { path: 'dados', component: EventoDados },
                { path: 'entrada', component: ControleEntrada},
                { path: 'presentes', component: InscritosPresentes}
            ]
        },
        {
            path: '/controlpanel',
            component: ControlPanel,
            meta: { requiresAuth: true }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});



//add navigation guards

router.beforeEach(function(to, from, next) {
    if(to.meta.requiresAuth && !store.getters.isLoggedIn) {
        next('auth');
    } else {
        next();
    }

})

export default router;