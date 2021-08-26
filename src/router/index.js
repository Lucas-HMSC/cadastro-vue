import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:id',
    name: 'LoginSuccess',
    component: Home,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
