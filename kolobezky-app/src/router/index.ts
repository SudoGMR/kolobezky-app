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
    path: '/tutorial/:id',
    component: () => import ('../views/Tutorial.vue')
  },
  {
    path: '/start/:id',
    component: () => import ('../views/Start.vue')
  },
  {
    path: '/register/:id',
    component: () => import ('../views/Register.vue')
  },
  {
    path: '/login/:id',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/terms/:id',
    component: () => import ('../views/Terms.vue')
  },
  {
    path: '/forgot-password/:id',
    component: () => import ('../views/ForgotPassword.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
