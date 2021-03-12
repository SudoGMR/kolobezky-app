import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  /*{
    path: '',
    redirect: '/folder/Inbox'
  },*/
  {
    path: '',
    redirect: '../views/Start.vue'
  },
  {
    path: '/tutorial',
    component: () => import ('../views/Tutorial.vue')
  },
  {
    path: '/start',
    component: () => import ('../views/Start.vue')
  },
  {
    path: '/register',
    component: () => import ('../views/Register.vue')
  },
  {
    path: '/folder',
    component: () => import ('../views/Folder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
