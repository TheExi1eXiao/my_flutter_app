import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, About, Mine } from '../pages'
Vue.use(VueRouter)

  const routes = [

    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        keep: true,
        showFoot: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
      meta: {
        keep: true,
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: {
        keep: true,
        showFoot: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/register'),
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import("@/pages/forget"),
    }
  ]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
