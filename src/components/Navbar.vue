<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg-gradient-to-r from-slate-800 via-black to-slate-800 text-white w-full  navbar  justify-center  ">
    <RouterLink to="/" active-class="active"  class="btn btn-ghost normal-case text-lg">Currency Converter</RouterLink> | &nbsp
    <RouterLink to="/aboutus" active-class="active" class="btn btn-ghost normal-case text-lg" >About Us</RouterLink>
    <hr>
  </div>
</template>



<style scoped>
.active {
  color: red;
}

</style>
