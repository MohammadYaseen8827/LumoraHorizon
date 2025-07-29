import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import lazyBackground from './directives/lazyBackground'

const app = createApp(App)

app.use(router)
app.directive('lazy-background', lazyBackground)

app.mount('#app')
