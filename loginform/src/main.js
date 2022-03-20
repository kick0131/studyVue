import { createApp } from 'vue';
import App from './App.vue';
// use Vuex
import store from './store'
// use vue-router
import route from './router'


// createApp(App).use(store,route).mount('#app');
createApp(App)
.use(store)
.use(route)
.mount('#app');
