<script setup>
import { personsList } from '@/assets/data'
</script>

<template>
  <main>
    <div class="left-column">
      <h1>Research by name</h1>
      <form v-on:submit="handleSubmit">
        <input type="text" name="name" id="name" />
        <button>Search</button>
      </form>
    </div>
    <div class="right-column">
      <p>This name doesn't exist in the list, sorry !!</p>
    </div>
  </main>
</template>
