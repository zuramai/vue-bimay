import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./../views/layouts/Master.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('./../views/Dashboard.vue')
      },
      {
        path: '/quiz',
        component: () => import('./../views/Dashboard.vue')
      },
      {
        path: '/news',
        component: () => import('./../views/Dashboard.vue')
      },
      {
        path: '/courses',
        component: () => import('./../views/Dashboard.vue')
      },
      {
        path: '/learning',
        component: () => import('./../views/Dashboard.vue')
      },
      {
        path: '/newspaper',
        component: () => import('./../views/Dashboard.vue')
      },
      {
        path: '/enrichment-program',
        component: () => import('./../views/Dashboard.vue')
      },
      {
        path: '/development-program',
        component: () => import('./../views/Dashboard.vue')
      },
      {
        path: '/event-list',
        component: () => import('./../views/Dashboard.vue')
      },
      {
        path: '/student-services',
        component: () => import('./../views/Dashboard.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
