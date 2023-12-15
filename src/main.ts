import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import './tailwind.css'
import './global.scss'
import { router } from './routers'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia()).use(router)
app.mount('#app')
