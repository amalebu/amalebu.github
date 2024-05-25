<script setup>
const props = defineProps({
    isSideMenuOpen : {
        type: Boolean,
        default: false
    }
}
);
// const emit = defineEmits(['toogleOpenSideBar']);
</script>
<template>
    <button
        class="rounded-lg focus:outline-none focus:shadow-outline z-[99] no-tap-highlight"
        @click="$emit('toogleOpenSideBar')">
        <svg fill="currentColor " viewBox="0 0 24 24 " class="w-7 h-7 transition duration-300 ease-in-out">
            <path v-show="!isSideMenuOpen" fill-rule="evenodd "
            d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"
                clip-rule="evenodd "></path>
            <path v-show="isSideMenuOpen" fill-rule="evenodd "
            d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" clip-rule="evenodd "></path>
        </svg>
    </button>
</template>
