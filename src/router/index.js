import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UsingProps from '../views/UsingProps.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/props',
    name: 'UsingProps',
    component: UsingProps
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
