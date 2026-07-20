import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tamraguk/intro',
      name: 'tamraguk',
      component: () => import('../views/TamraGukView.vue'),
    },
    {
      path: '/tamraguk/map',
      name: 'tamraguk-map',
      component: () => import('../views/TamraGukMapView.vue'),
    },
    {
      path: '/seongan/intro',
      name: 'seongan',
      component: () => import('../views/SeonganYubaeGilView.vue'),
    },
    {
      path: '/seongan/map',
      name: 'seongan-map',
      component: () => import('../views/SeonganMapView.vue'),
    },
    {
      path: '/fourthree/intro',
      name: 'fourthree',
      component: () => import('../views/FourThreeIntroView.vue'),
    },
    {
      path: '/fourthree/map',
      name: 'fourthree-map',
      component: () => import('../views/FourThreeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
