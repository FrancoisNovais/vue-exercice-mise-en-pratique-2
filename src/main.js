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

const editProfile = (infos) => {
  if (infos.firstname) {
    userInfos.value.firstname = infos.firstname
  }
  if (infos.lastname) {
    userInfos.value.lastname = infos.lastname
  }
  if (infos.age) {
    userInfos.value.age = infos.age
  }
  if (infos.job) {
    userInfos.value.job = infos.job
  }
}

app.provide('GlobalStore', { userInfos: userInfos, editProfile: editProfile })

app.mount('#app')
