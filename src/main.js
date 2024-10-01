import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const userInfos = ref({
  gender: 'female',
  firstname: 'Sophia',
  lastname: 'Rodriguez',
  age: 31,
  job: 'environmental scientist'
})

app.provide('GlobalStore', { userInfos: userInfos })

app.mount('#app')
