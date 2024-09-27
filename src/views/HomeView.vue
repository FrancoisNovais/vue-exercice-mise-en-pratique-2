<script setup></script>

<template>
  <main>
    <div class="left-column">
      <form>
        <label for="firstname">Firstname :</label>
        <input type="text" placeholder="firstname" name="firstname" id="firstname " />
        <label for="lastname">Lastname :</label>
        <input type="text" placeholder="lastname" name="lastname" id="lastname " />
        <label for="email">Email :</label>
        <input type="email" placeholder="youremail@mail.com" name="email" id="email" />
        <label><input type="radio" value="adult" id="adult" name="fruit" />Adult</label>
        <label><input type="radio" value="minor" id="minor" name="fruit" />Minor</label>
        <button>Add to wainting list</button>
      </form>
    </div>
    <div class="right-column">
      <h1>Waiting list</h1>
      <p>Nobody on the list, yet !!!</p>
    </div>
  </main>
</template>

<style scoped></style>
