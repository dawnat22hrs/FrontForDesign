import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/style.scss'
import './assets/normalize.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
