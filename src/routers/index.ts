import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/template.vue') },
  { path: '/login', component: () => import('@/views/login.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(window.__globalVariabels__.baseUrl),
  routes,
})
