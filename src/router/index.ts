import store from 'store'
import has from 'lodash/has'
import findIndex from 'lodash/findIndex'
import env from 'core/env'
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  Router,
} from 'vue-router'
import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

const beforeEnter = (to: RouteLocationNormalized) => {}

router.getRoutes().forEach((route) => (route.beforeEnter = beforeEnter))

export default router
