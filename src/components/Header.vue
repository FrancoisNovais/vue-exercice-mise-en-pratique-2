<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'home' }"> Accueil </RouterLink>
    <RouterLink :to="{ name: 'research' }"> Research </RouterLink>
    <RouterLink :to="{ name: 'profile' }"> Profile </RouterLink>
    <RouterLink :to="{ name: 'edit' }"> Edit </RouterLink>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-bottom: 2px solid #f99600;
}

header a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}
</style>
