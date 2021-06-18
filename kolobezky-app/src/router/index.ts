import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/start',
    component: () => import ('../views/Start.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },
  {
    path: '/start/:id',
    component: () => import ('../views/Start.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
