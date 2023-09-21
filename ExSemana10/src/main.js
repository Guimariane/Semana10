import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from '../src/routes/routes'

createApp(App).use(router).mount('#app')
