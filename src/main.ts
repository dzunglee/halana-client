import emitter from 'core/emitter'
// import apolloStore from './store/apollo'
import { createApp, h } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import AppComponents from './components'
import Chat from 'vue3-beautiful-chat'
import './index.css'
import router from './router'
import store from './store'

// create new app instance
const createNewApp = () => {
  const app = createApp({
    render: () => h(App),
  })

  app.provide('eventHub', emitter)
  app.use(router)
  app.use(store)
  app.use(ElementPlus)
  app.use(AppComponents)
  app.use(Chat)
  app.mount('#app')
  app.config.performance = true
}

const initApp = async () => {
  createNewApp()
}

initApp().then(() => {
  // initialized
})
