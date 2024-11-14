<template>
  <div>
    <Navbar />
    <router-view @click="store.drop = false" />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Shared/Footer.vue";
import Navbar from "../components/Shared/Navbar.vue";
import { useStore } from "/src/store/index";
const store = useStore();
</script>
