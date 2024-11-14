<template>
     <button class="uppercase text-sm font-semibold bg-[#FEBF00] px-5 py-3 text">{{ props.lable }}</button>
</template>
<script setup>
const props = defineProps(["lable"])
</script>