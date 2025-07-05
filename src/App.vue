<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/NavBar.vue";
</script>

<template>
  <div>
    <Nav />
    <RouterView />
  </div>
</template>

<style scoped></style>
