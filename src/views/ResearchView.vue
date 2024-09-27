<script setup>
import { personsList } from '@/assets/data'
import { ref } from 'vue'

const firstname = ref('')
const result = ref(null)

const handleSubmit = () => {
  const personSearch = personsList.find((person) => {
    return person.firstname === firstname.value
  })

  result.value = personSearch
  console.log(firstname, result)
}
</script>

<template>
  <main>
    <div class="left-column">
      <h1>Research by name</h1>
      <form v-on:submit.prevent="handleSubmit">
        <input type="text" name="name" id="name" placeholder="Name" v-model="firstname" />
        <button>Search</button>
      </form>
    </div>
    <div class="right-column">
      <h3 v-if="result === null">Enter a firstname</h3>

      <h3 v-else-if="result === undefined">This name doesn't exist in the list, sorry !!</h3>

      <div v-else>
        <h2>Found it !!!</h2>
        <p>{{ result.firstname }} {{ result.lastname }}</p>
        <p>{{ result.age }} ans</p>
        <p>{{ result.job }}</p>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
