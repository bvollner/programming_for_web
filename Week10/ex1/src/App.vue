<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/alpaca">Alpaca</RouterLink> |
      <RouterLink to="/llama">Llama</RouterLink>
  </nav>
  <div class="container">
      <RouterView></RouterView>
  </div>
</template>

<style>
html {
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
body, #app {
  margin: 0;
  padding: 0;
}
nav {
  width: 100%;
  height: 45px;
  background: #17174a;
  text-align: center;
}
nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
  color: white;
  font-weight: 900;
  font-size: 24px;
  line-height: 1.75;
  text-decoration: none;
}
nav a.router-link-active {
  text-decoration: underline;
  color: rgb(237, 237, 158);
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
.container h1 {
  text-align: center;
  font-size: 48px;
}
.container p {
  width: 1000px;
  font-size: inherit;
}
.container img {
  display: block;
  max-width: 1000px;
  width: 100%;
  margin: 20px auto 20px;
}
</style>
