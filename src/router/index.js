import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import UsingProps from '../views/UsingProps.vue'
import Create from '../views/Create.vue'

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
  },
  {
    path: '/posts/:id',
    name: 'Details', 
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
