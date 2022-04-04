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

const init2ndSidebar = (to: RouteLocationNormalized) => {
  const { show2ndSidebar = false } = to.meta
  store.commit('SHOW_2ND_SIDEBAR', show2ndSidebar)
}

const beforeEnter = (to: RouteLocationNormalized) => {
  init2ndSidebar(to)
}

router.getRoutes().forEach((route) => (route.beforeEnter = beforeEnter))

export default router
