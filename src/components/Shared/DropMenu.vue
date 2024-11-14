<template>
    <div class="flex flex-col lg:hidden gap-5 fixed z-40 bg-[#7f0b0bd0] w-full text-white py-8 px-[5%] duration-200" :class="store.drop == false ?'translate-y-[-100%]':'translate-y-0'" @click="store.drop = false">
        <router-link to="/"> About </router-link>
        <router-link to="/"> Portfolio </router-link>
        <router-link to="/"> Clients </router-link>
        <router-link to="/"> Blog </router-link>
        <router-link to="/"> Contact </router-link>
      </div>
</template>
<script setup>
import { useStore } from '/src/store/index'
const store = useStore()
</script>