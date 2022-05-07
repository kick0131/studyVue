// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginView.vue'
import Top from '../components/TopView.vue'
import { authorizeToken } from './util'

const routes = [
  // ログイン画面
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  // ログイン後のトップ画面は認証を要求
  {
    path: '/Top',
    name: 'Top',
    component: Top,
    meta: {
      requiresAuth: true
    }
  }
]

// VueRouterインスタンスの生成
const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

// ナビゲーションガード機能(グローバルbeforeガード)
// ナビゲーション毎に呼び出される
router.beforeEach(authorizeToken)

export default router