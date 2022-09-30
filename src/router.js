import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import TaskList from './pages/tasks/TaskList.vue';
import MessagePage from './pages/messages/MessagePage.vue';
import NotFound from './pages/NotFound.vue';
import RegisterUser from './pages/RegisterUser.vue';
import ControlPanel from './pages/control/ControlPanel.vue';


// import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage
        },
        {
            path: '/tasklist',
            component: TaskList
        },
        {
            path: '/register',
            component: RegisterUser
        },
        {
            path: '/form',
            component: MessagePage
        },
        {
            path: '/controlpanel',
            component: ControlPanel
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});


export default router;