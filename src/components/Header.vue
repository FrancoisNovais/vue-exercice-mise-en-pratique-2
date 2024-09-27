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
  padding: 10px;
  display: flex;
  gap: 20px;
}
</style>
