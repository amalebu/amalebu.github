<script setup>
import { ref, onMounted} from 'vue'
import DarkToogle from "@/components/DarkToogle.vue"
import Logo from "@/components/Logo.vue"
import InstagramLogo from "@/components/InstagramLogo.vue"
import GithubLogo from "@/components/GithubLogo.vue"
import NavLink from '@/components/NavLink.vue';
import MenuButton from '@/components/ShowMenuButton.vue';

const navBgActive = ref(false);
const isMobileLayout = ref(false);
const isSideMenuOpen = ref(true);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    watchScreen();
})

const handleScroll = () => {
    navBgActive.value = (window.pageYOffset > 30 || window.scrollY > 30) ? true : false;
}

const watchScreen = () => {
    if (window.innerWidth <= 1024) {
        isSideMenuOpen.value = false;
        isMobileLayout.value = true;
    } else {
        isSideMenuOpen.value = true;
        isMobileLayout.value = false;
    }  
}

</script>

<template>
    <nav class="fixed z-30 w-full flex items-center justify-center"
    :class="{ 'bg-white dark:bg-gray-900 dark:text-gray-100 bg-opacity-40 dark:bg-opacity-25 backdrop-filter backdrop-blur-lg transition-all duration-200 shadow-sm shadow-slate-500/30': navBgActive }" >
    <div class="flex flex-col lg:items-center lg:justify-between lg:flex-row w-full max-w-screen-2xl px-6 lg:px-8">
        <div :class="{ 'py-1.5': navBgActive, 'pt-6 pb-2': !navBgActive }"
            class=" flex flex-row items-center justify-between transition-all duration-500 ease-in-out w-full">
            <a href="/"
                class="text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:shadow-outline h-10 flex items-center gap-2 text-nowrap ">
                <Logo class="h-9 w-auto text-purple-900 dark:text-purple-300"></Logo>
                <div class="text-2xl font-header leading-loose">
                    Amalebu
                </div>
            </a>
            <div class="flex items-center lg:hidden">
                <MenuButton @toogleOpenSideBar="isSideMenuOpen = !isSideMenuOpen" :isSideMenuOpen="isSideMenuOpen"></MenuButton>
            </div>
            <Transition name="slide-fade">
            <div class="bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent w-7/12 sm:w-3/4 lg:w-auto top-0 right-0 h-screen lg:h-auto z-50 absolute lg:relative shadow-lg lg:shadow-none " v-show='isSideMenuOpen'>  
                <div class="flex flex-1 my-auto text-center flex-nowrap items-center justify-end transition-all duration-500 flex-col lg:pb-0 lg:flex-row lg:divide-x divide-gray-400 divide-x-0 max-h-svh h-full lg:h-auto lg:pt-0 pt-24 px-4 w-full">
                    <div class="flex flex-col lg:flex-row items-center w-full gap-4 lg:gap-8 h-full px-4">
                        <NavLink>About</NavLink>
                        <NavLink>Skills & Tools</NavLink>
                        <NavLink>Projects</NavLink>
                        <NavLink>Contact Me</NavLink>
                    </div>
                    <div class="mb-12 lg:mb-0 lg:divide-x divide-gray-400 divide-x-0 flex items-center flex-col-reverse lg:flex-row lg:gap-0 gap-6">       
                        <DarkToogle class="px-4 border rounded-2xl lg:rounded-none lg:border-0 py-2 lg:py-0 border-gray-300 dark:border-gray-800">A</DarkToogle>
                        <div class="flex gap-4 pl-4 h-full">      
                            <a
                            href='https://www.instagram.com/amalebu/' alt="github link" target="_blank"
                            rel="noreferrer noopener nofollow">
                            <InstagramLogo class="text-gray-700 dark:text-gray-200 h-7 w-7"></InstagramLogo>
                            </a>
                            <a href='https://github.com/amalebu' alt="github link" target="_blank"
                                rel="noreferrer noopener nofollow">
                                <GithubLogo class="text-gray-700 dark:text-gray-200 h-7 w-7"></GithubLogo>  
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
        </Transition>
        </div>
    </div>
    <div class="absolute lg:hidden top-0 left-0 w-screen h-screen z-40 bg-black/40" v-show='isSideMenuOpen'
        @click="isSideMenuOpen= false"></div>
</nav>

</template>
