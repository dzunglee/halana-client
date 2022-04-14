import vueEmitter from 'core/emitter'
// import apolloStore from './store/apollo'
import { createApp, h } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import AppComponents from './components'
import './index.css'
import router from './router'
import store from './store'
import env from 'core/env'

//@ts-ignore
const client = emitter.connect({
  secret: true,
  host: env('VITE_EMITTER_ENPOINT'),
  port: env('VITE_EMITTER_PORT'),
})

// create new app instance
const createNewApp = () => {
  const app = createApp({
    render: () => h(App),
  })

  app.provide('eventHub', vueEmitter)
  app.provide('emitterClient', client)
  app.use(router)
  app.use(store)
  app.use(ElementPlus)
  app.use(AppComponents)
  app.mount('#app')
  app.config.performance = true
}

const initApp = async () => {
  createNewApp()
}

initApp().then(() => {
  // initialized
})
