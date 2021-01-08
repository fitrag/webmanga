<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm" style="font-family: 'Fira Sans', sans-serif;">
    <div class="container">
      <router-link :to="{name: 'home'}" class="navbar-brand" style="font-weight:700;font-size:20px">Web Manga</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  props:{
    title: String
  }
}
</script>
