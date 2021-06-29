import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/start'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },

  {
    path: '/start',
    component: () => import ('../views/Start.vue')
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
    path: '/login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/terms',
    component: () => import ('../views/Terms.vue')
  },
  {
    path: '/forgot_password',
    component: () => import ('../views/ForgotPassword.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
