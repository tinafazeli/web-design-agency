import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-us',
    name: 'about',
    component:()=> import('../views/AboutView.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component:()=> import('../views/ServicesView.vue'),
  },
  {
    path: '/pages',
    name: 'pages',
    component:()=> import('../views/PagesView.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component:()=> import('../views/BlogView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component:()=> import('../views/ContactView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
