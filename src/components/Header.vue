<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }"> Accueil </RouterLink>
      <RouterLink :to="{ name: 'research' }"> Research </RouterLink>
      <RouterLink :to="{ name: 'profile' }"> Profile </RouterLink>
      <RouterLink :to="{ name: 'edit' }"> Edit </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: var(--header-height);
  border-bottom: 2px solid #f99600;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
}

header a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}
</style>
