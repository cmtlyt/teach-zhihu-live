import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'virtual:svg-icons-register'
import './tailwind.css'
import './global.scss'
import { router } from './routers'
import App from './App.vue'
import { emitter } from './eventBus'
import { setupI18n } from './locales'

const app = createApp(App)
app.provide('emitter', emitter)
app.use(createPinia()).use(router).use(setupI18n())
app.mount('#app')
