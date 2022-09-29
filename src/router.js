import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import TaskList from './pages/tasks/TaskList.vue';
import MessagePage from './pages/messages/MessagePage.vue';
import NotFound from './pages/NotFound.vue';
import RegisterUser from './pages/RegisterUser.vue';


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
            path: '/:notFound(.*)',
            component: NotFound
        },
        {
            path: '/register',
            component: RegisterUser
        },
        {
            path: '/messages',
            component: MessagePage
        }
    ]
});


export default router;