<script setup>
import { RouterLink } from 'vue-router'

import { inject } from 'vue'

const Store = inject('GlobalStore')
</script>

<template>
  <main>
    <h1>Your profile</h1>

    <div>
      <p>Firstname : {{ Store.userInfos.value.firstname }}</p>
      <p>Lastname : {{ Store.userInfos.value.lastname }}</p>
      <p>Age : {{ Store.userInfos.value.age }}</p>
      <p>Job : {{ Store.userInfos.value.job }}</p>
    </div>

    <button><RouterLink :to="{ name: 'edit' }"> Edit profile </RouterLink></button>
  </main>
</template>
