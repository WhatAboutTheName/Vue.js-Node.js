import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import userStore from './store/user-store';
import cartStore from './store/cart-store';
import router from './router/router';
import './main.css';

axios.defaults.baseURL = 'http://localhost:8000';

createApp(App)
    .use(cartStore)
    .use(userStore)
    .use(router)
    .mount('#app');
