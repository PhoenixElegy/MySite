import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/Meta',
      name: 'Meta',
      //alias: ['/login','/login2'],
      component: () => import('../pages/Meta.vue'),
    },
    {
      path: '/New-Vite-Pro',
      name: 'New-Vite-Pro',
      component: () => import('../pages/New-Vite-Pro.vue'),
    },
    {
      path: '/Resolution-px',
      name: 'Resolution-px',
      component: () => import('../pages/Resolution-px.vue'),
    },
    {
      path: '/MarkdownAll',
      name: 'MarkdownAll',
      component: () => import('../pages/MarkdownAll.vue'),
    },
    {
      path: '/i18n',
      name: 'i18n',
      component: () => import('../pages/i18n.vue'),
    },    
    {
      path: '/README',
      name: 'README',
      component: () => import('../pages/README.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router