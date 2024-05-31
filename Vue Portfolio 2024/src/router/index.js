import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import getPortfolio from '@/modules/getPortfolio'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
      meta: {
        title: "Home"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About"
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import ('../views/ContactView.vue'),
      meta: {
        title: "Contact"
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
      meta: {
        title: "Gallery"
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: "Projects"
      }
    }
  ]
})

/* router.beforeEach((to, from, next) => {
  document.title = `KW Portfolio | ${to.meta.title}`
  next()
}) */

router.beforeEach((to, from, next) => {
  if (to.meta.dynamicTitle) {
    const portfolioItem = getPortfolio()
      .portfolioItems.value
      .find(item => item.id == to.params.id)
      if(portfolioItem) {
        document.title = `FURD STUDIO | ${portfolioItem.title}`
      }
    }
    else {
      document.title = `FURD STODUO | ${to.meta.title}`
    }
    next()
})

export default router
