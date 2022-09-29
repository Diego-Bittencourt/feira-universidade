import { createApp } from 'vue';
import App from './App.vue';

//import store and router
import store from './store/index.js';
import router from './router.js';

//import components
import TheHeader from './components/layout/TheHeader.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);


app.component('the-header', TheHeader);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-dialog', BaseDialog);

app.use(store);
app.use(router);

app.mount('#app');
