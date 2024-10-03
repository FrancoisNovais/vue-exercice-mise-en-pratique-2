<script setup>
import { ref } from 'vue'

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const status = ref('adult')

const waitingList = ref([])

const handleSubmit = () => {
  const addPerson = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    status: status.value
  }
  waitingList.value.push(addPerson)
}
</script>

<template>
  <main>
    <div class="container">
      <div class="left-column">
        <form @submit.prevent="handleSubmit">
          <label for="firstname">Firstname :</label>
          <input type="text" placeholder="firstname" id="firstname" v-model="firstname" />
          <label for="lastname">Lastname :</label>
          <input type="text" placeholder="lastname" id="lastname" v-model="lastname" />
          <label for="email">Email :</label>
          <input
            type="email"
            placeholder="youremail@mail.com"
            id="email"
            v-model="email"
            autocomplete="off"
          />
          <label><input type="radio" value="adult" id="adult" v-model="status" />Adult</label>
          <label><input type="radio" value="minor" id="minor" v-model="status" />Minor</label>
          <button>Add to wainting list</button>
        </form>
      </div>
      <div class="right-column">
        <h1>Waiting list</h1>
        <p v-if="waitingList.length === 0">Nobody on the list, yet !!!</p>
        <div v-for="person in waitingList" :key="person.email" v-else>
          <p>Name: {{ person.firstname }} {{ person.lastname }}</p>
          <p>Email : {{ person.email }}</p>
          <p>Is {{ person.status }}</p>
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
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.right-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.right-column > div {
  border: 1px solid black;
  padding: 5px;
}
</style>
