<script setup></script>

<template>
  <div class="page-not-found">
    <h1>404</h1>
    <p>The page you are looking for cannot be found.</p>
    <router-link to="/" class="btn border border-gray-500"
      >Go to Home Page</router-link
    >
  </div>
</template>

<style scoped>
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 2rem;
  text-align: center;
}

.page-not-found h1 {
  font-size: 8rem;
  margin-bottom: 0;
}

.page-not-found p {
  margin-top: 0;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.page-not-found router-link {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  text-decoration: none;
}

.page-not-found router-link:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}
</style>
