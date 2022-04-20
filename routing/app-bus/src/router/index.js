import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {path: '/', name: 'home', redirect:'seferara'},
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')},
  { path: '/seferara', name: 'seferara', component: () => import(/* webpackChunkName: "about" */ '../views/SeferAra.vue')},
  { path: '/koltuksecimi/:sefer_id', name: 'koltuksecimi', component: () => import(/* webpackChunkName: "about" */ '../views/SeferAra.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
