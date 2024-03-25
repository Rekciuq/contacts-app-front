import {createRouter, createWebHistory} from 'vue-router'
import ShowContacts from '../views/ShowContacts.vue'

const routes = [
  {
    path: '/',
    name: 'ShowContacts',
    component: ShowContacts
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router