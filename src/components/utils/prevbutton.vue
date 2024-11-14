<template>
    <button
      @click="slidePrev" class="h-[40px] w-[40px] rounded-full bg-white drop-shadow-md hover:text-[#BD1F17] flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    swiper: {
      type: Object,
      required: true,
    },
  })
  
  const slidePrev = () => {
    if (props.swiper) {
      props.swiper.slidePrev()
    }
  }
  </script>