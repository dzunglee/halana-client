import { createStore } from 'vuex'
import env from 'core/env'
import { chat } from 'modules/chat/store'

export type RootState = {
  version: string
  initialized: boolean
  loading: boolean
  showHeader: boolean
  show2ndSidebar: boolean
}
const store = createStore<RootState>({
  state: {
    version: env('VITE_APP_VERSION', '0.0.0'),
    initialized: false,
    loading: false,
    showHeader: true,
    show2ndSidebar: true,
  },
  mutations: {
    INITIALIZED: (state: RootState, status: boolean) => {
      state.initialized = status
    },
    SET_LOADING: (state: RootState, status: boolean) => {
      state.loading = status
    },
  },
  actions: {
    initialized(ctx, status?: boolean) {
      ctx.commit('INITIALIZED', status)
    },
  },
  getters: {},
  modules: { chat },
})

export default store
