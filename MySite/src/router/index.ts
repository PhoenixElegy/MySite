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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router