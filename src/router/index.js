import {createRouter, createWebHistory} from 'vue-router'
import ShowContacts from '../views/ShowContacts.vue'
import ShowOneContact from '../views/ShowOneContact.vue'

const routes = [
  {
    path: '/',
    name: 'ShowContacts',
    component: ShowContacts
  },
  {
    path: '/contact/:id',
    name: 'ShowOneContact',
    component: ShowOneContact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router