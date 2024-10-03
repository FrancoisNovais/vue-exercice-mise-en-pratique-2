<script setup>
import { ref } from 'vue'

import { inject } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const Store = inject('GlobalStore')

const firstname = ref(Store.userInfos.value.firstname)
const lastname = ref(Store.userInfos.value.lastname)
const age = ref(Store.userInfos.value.age)
const job = ref(Store.userInfos.value.job)

const handleSubmit = () => {
  const newInfos = {
    firstname: firstname.value,
    lastname: lastname.value,
    age: age.value,
    job: job.value
  }

  Store.editProfile(newInfos)

  router.push({ name: 'profile' })
}
</script>

<template>
  <main>
    <div class="container">
      <h1>Edit your profile</h1>

      <form v-on:submit.prevent="handleSubmit">
        <div>
          <label for="firstname">Firstname :</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Firstname"
            v-model="firstname"
          />
        </div>
        <div>
          <label for="lastname">Lastname :</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Lastname"
            v-model="lastname"
          />
        </div>
        <div>
          <label for="age">Age :</label>
          <input type="text" name="age" id="age" placeholder="Age" v-model="age" />
        </div>
        <div>
          <label for="job">Job :</label>
          <input type="text" name="job" id="job" placeholder="Job" v-model="job" />
        </div>
        <button>Valid changes</button>
      </form>
    </div>
  </main>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
form div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
label {
  font-weight: bold;
}
</style>
