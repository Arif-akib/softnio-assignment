import { createApp } from 'vue'
import axios from 'axios'

import '/src/style.css'
import App from './layoutFolder/layout.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

window.axios = axios;
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app=createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
