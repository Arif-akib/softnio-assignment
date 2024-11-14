<template>
  <div
    class="flex sticky top-0 justify-between items-center gap-5 px-[5%] xl:px-[10%] h-[90px] bg-[url('/src/assets/background/Rectangle4.png')] bg-[#BD1F17] text-white z-50"
  >
    <div class="flex gap-5 items-center text-[15px]">
      <router-link to="/">
        <img src="/src/assets/common/Logo.png" alt="" />
      </router-link>
      <div class="hidden lg:flex gap-5 items-center">
        <router-link to="/"> Home </router-link>
        <router-link to="/"> About </router-link>
        <router-link to="/"> Portfolio </router-link>
        <router-link to="/"> Clients </router-link>
        <router-link to="/"> Blog </router-link>
        <router-link to="/"> Contact </router-link>
      </div>
    </div>
    <span @click="store.drop=! store.drop" class="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
      </span>
    <button class="py-1.5 px-5 bg-[#FEBF00] hidden lg:block">
      Book a table
    </button>
  </div>
  <DropMenu/>
</template>

<script setup>
import DropMenu from '/src/components/Shared/DropMenu.vue';
import { useStore } from '/src/store/index'
const store = useStore()
</script>
