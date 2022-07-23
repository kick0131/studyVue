import { createRouter } from 'vue-router'
import Homepage from './home/Home.vue';
import Login from './login/Login.vue';
import ToDo from './todo/ToDo.vue';
const routes = [
  {
    path: '/',
    component: Homepage
  }, {
    path: '/login/',
    component: Login
  }, {
    path: '/todo/',
    component: ToDo
  },
]
export default function (history) {
  return createRouter({
    history,
    routes
  })
}