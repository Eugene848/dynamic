import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/profile.vue'
import Friends from '../views/friends.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/users/:id',
    component: Profile
  },

  {
    path: '/friends',
    component: Friends
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
