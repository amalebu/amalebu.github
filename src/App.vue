<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/view/parts/Navbar.vue';
</script>

<template>
  <div class="debug-screens antialiased select-none scroll-smooth overflow-hidden max-w-svw bg-white dark:bg-gray-900 transition-colors ease-in-out duration-1000 font-primary">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>