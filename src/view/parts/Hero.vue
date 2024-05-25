<script setup>
import logo from "@/assets/profile.png"
</script>

<template>
 <section class="relative h-full" id="hero">
    <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
        <div class="blur-[110px] opacity-80 h-56 lg:h-72 bg-gradient-to-tr from-purple-500 to-purple-400">
        </div>
        <div class="blur-[110px] opacity-90 h-36 bg-gradient-to-r from-blue-700 to-purple-800"></div>
    </div>
    <div class="absolute left-0 2xl:top-[90vh] lg:top-[80vh] top-[105vh] opacity-80">
        <div
            class="blur-[110px] 2xl:blur-[130px] opacity-30 border h-64 w-64 lg:h-96 lg:w-96 xl:w-[30vw] xl:h-[30vw] bg-gradient-to-r rounded-full from-purple-500 to-purple-400">
        </div>
    </div>
    <div class="relative webcontainer pt-24 lg:pt-28 xl:pt-32 overflow-hidden mb-12 lg:mb-14 ">
        <div class="relative ml-auto flex flex-col lg:flex-row-reverse items-center xl:items-center justify-between">
            <div class="w-full text-left p-0 mb-8 lg:mb-0 lg:mt-0 mt-4">
                <div class="mb-3 flex justify-start">
                    <span class="flex space-x-2 text-xl" data-aos="fade-up" data-aos-delay="50">
                            <span class="block w-6 md:w-14 mb-2 border-b border-gray-600 dark:border-gray-300"></span>
                            <span class="font-medium text-gray-700 dark:text-gray-400">Hello! 👋 I'm</span>
                        </span>
                </div>
                <h1 class="text-black dark:text-white font-bold text-6xl md:text-8xl lg:text-7xl xl:text-8xl mb-4 py-1" data-aos="fade-up"
                    data-aos-delay="500">
                    <p class="tracking-tight">
                        Crisantus <span class="bg-gradient-to-l from-purple-600 from-10% via-purple-900 to-blue-700 inline-block text-transparent bg-clip-text text-nowrap">Lebu Raya</span>
                    </p>
                </h1>
                <p class="text-lg my-2 text-gray-800 dark:text-gray-300" 
                data-aos="fade-up" data-aos-delay="150" data-aos-duration='1050'>
                    a <span class="text-purple-500 font-semibold p-0">Web</span> Developer with ideas, creativity and so much fun.
                </p>
                <p class="text-lg text-center lg:text-left mb-6 flex p-0 gap-2 items-center text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="250" data-aos-duration='1050'>
                    From
                    <span class="text-secondary">Adonara, East Flores, Indonesia</span>
                </p>
                <div class="flex justify-start flex-wrap gap-6 mt-4 " data-aos="fade-up" data-aos-delay="450" data-aos-duration='1050'>
                    <button type="button" class="cursor-pointer uppercase font-bold bg-purple-800 hover:bg-purple-900 py-3 px-7 rounded-full transition duration-300 text-white flex items-center justify-center gap-2 text-sm sm:text-sm shadow-xl group">
                        Have a look
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white relative transition-transform duration-500 arrow-down ease-in-out group-hover:translate-y-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                          </svg>
                    </button>
                </div>
            </div>
            <div class="w-full flex items-center justify-center lg:mt-0 mt-4">
                <img class="w-full sm:w-4/5 md:w-3/5 lg:w-full px-2 lg:p-0 object-cover object-center rounded saturate-[1.25] dark:saturate-[0.8]" alt="amalebu"
                    :src="logo" data-aos="fade-up" data-aos-delay="200">
            </div>

        </div>
    </div>
</section>
</template>
