<template>
  <div id="app" class="min-h-screen bg-white">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}
</style>
