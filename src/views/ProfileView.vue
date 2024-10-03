<script setup>
import { RouterLink } from 'vue-router'

import { inject } from 'vue'

const Store = inject('GlobalStore')
</script>

<template>
  <main>
    <div class="container">
      <h1>Your profile</h1>

      <div>
        <p><span>Firstname :</span> {{ Store.userInfos.value.firstname }}</p>
        <p><span>Lastname :</span> {{ Store.userInfos.value.lastname }}</p>
        <p><span>Age :</span> {{ Store.userInfos.value.age }}</p>
        <p><span>Job :</span> {{ Store.userInfos.value.job }}</p>
      </div>

      <RouterLink :to="{ name: 'edit' }"> <p>Edit profile</p> </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.container {
  margin-top: 20px;
}
span {
  font-weight: bold;
  text-decoration: underline;
  line-height: 20px;
}
a {
  text-decoration: none;
}
a p {
  margin-top: 20px;
  color: #f99600;
  border: 2px solid #f99600;
  padding: 7px;
  width: 100px;
  text-align: center;
  border-radius: 10px;
}
</style>
