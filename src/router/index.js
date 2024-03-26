import {createRouter, createWebHistory} from 'vue-router'
import ShowContacts from '../views/ShowContacts.vue'
import NotFound from '../views/NotFound.vue'
import ShowOneContact from '../views/ShowOneContact.vue'
import CreateNewContact from '../views/CreateNewContact.vue'

const routes = [
  {
    path: '/',
    name: 'ShowContacts',
    component: ShowContacts
  },
  {
    path: '/contact/:id(\\d+)',
    name: 'ShowOneContact',
    component: ShowOneContact
  },
  {
    path: '/new',
    name: 'CreateNewContact',
    component: CreateNewContact
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router