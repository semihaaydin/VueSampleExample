import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },
  {
    path: '/photos/:id',
    name: 'photos',
    component: () => import(/* webpackChunkName: "about" */ '../views/PhotosView.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect:'/', //anasayfaya yönlendirmek için de bu kısmı kullanabiliriz.
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeResolve((to,from,next) =>{
//   if(to.name){
//     NProgress.start();
//   }
//   next();
// });
//
// router.afterEach(() =>{
//   NProgress.done();
// });

export default router
