import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('./pages/index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
