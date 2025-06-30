<template>
  <div>
    <Navbar />

   <!-- <button class="theme-toggle" @click="toggleTheme">
      {{ isDark ? '🌞' : '🌙' }}
    </button> -->

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'

const isDark = ref(false)

// function toggleTheme() {
//   isDark.value = !isDark.value

//   const html = document.documentElement
//   if (isDark.value) {
//     html.classList.add('dark-mode')
//   } else {
//     html.classList.remove('dark-mode')
//   }

//   localStorage.setItem('dark-mode', JSON.stringify(isDark.value))
// }

// onMounted(() => {
//   const saved = localStorage.getItem('dark-mode')
//   isDark.value = saved ? JSON.parse(saved) : false

//   if (isDark.value) {
//     document.documentElement.classList.add('dark-mode')
//   }
// })
</script>

<style>
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1200;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.dark-mode {
  background-color: #2e2e2e;
  color: #f9fafb;
}

.dark-mode a {
  color: #f9fafb;
}
</style>
