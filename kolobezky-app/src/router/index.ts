import component from '*.vue';
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
    path: '/',
    component: () => import ('../views/layouts/Default.vue'),
    children: [
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
      }
      
    ]
  },

  {
    path: '/',
    component: () => import ('../views/layouts/MenuLayout.vue'),
    children: [
      {
        path: '/terms',
        component: () => import ('../views/Terms.vue')
      }
    ]
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
