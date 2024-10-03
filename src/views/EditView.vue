<script setup>
import { ref } from 'vue'

import { inject } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const firstname = ref('')
const lastname = ref('')
const age = ref()
const job = ref('')

const Store = inject('GlobalStore')

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
    <h1>Edit your profile</h1>

    <form v-on:submit.prevent="handleSubmit">
      <label for="firstname">Firstname :</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Firstname"
        v-model="firstname"
      />
      <label for="lastname">Lastname :</label>
      <input type="text" name="lastname" id="lastname" placeholder="Lastname" v-model="lastname" />
      <label for="age">Age :</label>
      <input type="text" name="age" id="age" placeholder="Age" v-model="age" />
      <label for="job">Job :</label>
      <input type="text" name="job" id="job" placeholder="Job" v-model="job" />
      <button>Valid changes</button>
    </form>
  </main>
</template>
