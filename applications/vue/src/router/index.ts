import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import { getBasePath } from '@/basePath'

const createVueRouter = () => {
  const paths = getBasePath()
  const history = createWebHistory(paths.documentBase)
  console.log({ paths })
  const router = createRouter({
    history,
    routes: [
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        component: HomeView,
        name: 'home',
        path: paths.parcelBase,
      },
      {
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),


        name: 'about',


        path: `${paths.parcelBase}about`,
      },
    ],
  })
  return {
    cleanup: () => history.destroy(),
    router,
  }
}

export default createVueRouter
