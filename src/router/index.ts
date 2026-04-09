import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DoctorsView from '../views/DoctorsView.vue'
import ResultsView from '../views/ResultsView.vue'
import BlogListView from '../views/BlogListView.vue'
import BlogPostView from '../views/BlogPostView.vue'

import { useLoading } from '@/composables/useLoading'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: DoctorsView,
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogListView,
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: BlogPostView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const { startLoading } = useLoading()
  // Solo mostramos loading si cambiamos a una ruta distinta
  if (to.path !== from.path) {
    startLoading()
  }
  next()
})

router.afterEach(() => {
  const { stopLoadingWhenReady } = useLoading()
  stopLoadingWhenReady()
})

export default router
