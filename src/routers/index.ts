import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/home.vue') },
  { path: '/login', component: () => import('@/views/login.vue') },
]

export const router = createRouter({
  history: createWebHashHistory('/teach-zhihu-live/'),
  routes,
})
