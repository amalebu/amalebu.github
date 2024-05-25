<script setup>
const props = defineProps({
    active : {
        type: Boolean,
        default: false
    }
});

</script>
<template>
    <button class=" w-full lg:w-auto px-2 py-2 mt-4 2xl:text-lg font-medium rounded-lg lg:mt-0 hover:text-blue-800 focus:outline-none focus:shadow-outline text-gray-800 dark:text-gray-300 text-center" 
    :class="{ 'text-blue-900 font-bold': props.active }">
        <slot />
    </button>
</template> 
