<script setup>
import { personsList } from '@/assets/data'
import { ref } from 'vue'

const firstname = ref('')
const result = ref(null)

const handleSubmit = () => {
  const personSearch = personsList.find((person) => {
    return (
      person.firstname.toLowerCase() === firstname.value.toLowerCase() ||
      person.lastname.toLowerCase() === firstname.value.toLowerCase()
    )
  })

  result.value = personSearch
  console.log(firstname, result)
}
</script>

<template>
  <main>
    <div class="container">
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

        <div v-else class="userFound">
          <h2>Found it !!!</h2>
          <div>
            <p>{{ result.firstname }} {{ result.lastname }}</p>
            <p>{{ result.age }} ans</p>
            <p>{{ result.job }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.left-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin-left: 20px;
}
h2 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}
h3 {
  font-size: 20px;
  font-weight: bold;
}

.userFound {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.userFound > div {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 25px;
}
</style>
