import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/NewNameView.vue'
import Login from '../views/TelaLogin.vue';  // Importe o componente de login

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NewNameComponent',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Telalogin',
    name: 'Login',
    component: Login  // Adicione a rota para o componente de login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
