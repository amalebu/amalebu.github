<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/view/parts/Navbar.vue';
</script>

<template>
  <div class="debug-screens antialiased select-none scroll-smooth overflow-hidden max-w-svw bg-white dark:bg-gray-900 font-primary">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>