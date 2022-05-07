import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/LoginView.vue'
import Top from '../components/TopView.vue'
import { authorizeToken } from './util'

const routes = [
  {
    path: '/Top',
    name: 'Top',
    component: Top,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(authorizeToken)

export default router