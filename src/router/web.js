import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/view/Home.vue';

const routes = [
    { path: '/', component: HomeView, name:'home' },
    // { path: '/about', component: AboutView },
  ];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router