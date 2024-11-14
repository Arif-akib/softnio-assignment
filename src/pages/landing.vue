<template>
    <div>
        <Hero/>
        <About/>
        <Item/>
        <Booking/>
        <Customer/>
    </div>
</template>
<script setup>
import Hero from "/src/components/Home/Hero.vue"
import About from "/src/components/Home/About.vue"
import Item from "/src/components/Home/Item.vue"
import Booking from "../components/Home/Booking.vue";
import Customer from "../components/Home/Customer.vue";
</script>