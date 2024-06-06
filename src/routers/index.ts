import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/home.vue') },
  { path: '/login', component: () => import('@/views/login.vue') },
  { path: '/register', component: () => import('@/views/register.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(window.__globalVariabels__.baseUrl),
  routes,
})
