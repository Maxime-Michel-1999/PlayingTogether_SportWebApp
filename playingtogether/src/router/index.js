import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import(/* webpackChunkName: "about" */ '../views/Join.vue')
  },
  {
  path: '/host',
    name: 'Host',
    component: () => import(/* webpackChunkName: "about" */ '../views/Host.vue')
  },
  {
    path: '/game',
      name: 'Game',
      component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
    },

  {
    path: '/account',
      name: 'Account',
      component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
