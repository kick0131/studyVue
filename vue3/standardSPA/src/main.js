import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// Add
import { createWebHistory } from 'vue-router'
import createRouter from './pages/routes.js'
const router = createRouter(createWebHistory())

loadFonts()

createApp(App)
  .use(vuetify)
  // Add
  .use(router)
  .mount('#app')


export default router