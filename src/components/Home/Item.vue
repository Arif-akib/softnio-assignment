<template>
  <div class="px-[5%] xl:px-[10%] py-24 bg-[#FBF7F2] relative">
    <div class="flex justify-between">
      <div>
        <div class="flex items-center gap-2">
          <p class="h-2 w-2 bg-[#BD1F17]"></p>
          <p class="text-[#BD1F17] text-[20px] font-semibold text">
            Crispy, Every Bite Taste
          </p>
        </div>

        <h1 class="text-4xl font-[700] heading tracking-tighter">POPULAR FOOD ITEMS</h1>
      </div>
      <div class="lg:flex gap-5 hidden">
        <NavPrev :swiper="swiperInstance" />
        <NavNext :swiper="swiperInstance" />
      </div>
    </div>
    <div class="relative mt-16 text-center">
      <swiper
        @swiper="onSwiper"
        :slidesPerView="1"
        :spaceBetween="32"
         :breakpoints="breakpoints"
        :speed="1000"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
        }"
        :modules="modules"
        :preventClicks="false"
        class="mySwiper"
      >
        <swiper-slide v-for="item in items" :key="item" class="bg-white">
          <div
            class="h-full p-8 flex flex-col justify-center items-center"
          >
            <img :src="item.img" alt="" class="h-[124px]" />
            <p class="w-[57px] h-[4px] bg-[#BD1F17] my-3"></p>
            <h2
              class="text-[20px] uppercase font-[700] heading tracking-tighter"
            >
              {{ item.title }}
            </h2>
            <p class="text font-[400] tracking-tight mt-1">{{ item.lable }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex justify-center mt-5 gap-5 lg:hidden">
        <NavPrev :swiper="swiperInstance" />
        <NavNext :swiper="swiperInstance" />
      </div>
    <img src="/src/assets/background/Frame.png" alt="" class="hidden lg:block absolute left-0 top-[50%] translate-y-[-50%] h-[250px]">
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import NavPrev from "/src/components/utils/prevbutton.vue";
import NavNext from "/src/components/utils/nextButton.vue";

import { ref } from "vue";

import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

const modules = [Pagination, Navigation, Autoplay,];
const breakpoints = ref({
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  1436: {
    slidesPerView: 4.5,
    spaceBetween: 20,
  },
});

const swiperInstance = ref({});
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const items = [
  {
    img: "/src/assets/item/burger.png",
    title: "vegetables burger",
    lable: "Barbecue Italian cuisine pizza",
  },
  {
    img: "/src/assets/item/pizza.png",
    title: "Spacial Pizza",
    lable: "Barbecue Italian cuisine pizza",
  },
  {
    img: "/src/assets/item/french-fries.png",
    title: "Spacial French fries ",
    lable: "Barbecue Italian cuisine",
  },
  {
    img: "/src/assets/item/fried-shrimp.png",
    title: "Cuisine Chicken",
    lable: "Japanese Cuisine Chicken",
  },
  {
    img: "/src/assets/item/burger.png",
    title: "vegetables burger",
    lable: "Barbecue Italian cuisine pizza",
  },
  {
    img: "/src/assets/item/pizza.png",
    title: "Spacial Pizza",
    lable: "Barbecue Italian cuisine pizza",
  },
  {
    img: "/src/assets/item/french-fries.png",
    title: "Spacial French fries ",
    lable: "Barbecue Italian cuisine",
  },
  {
    img: "/src/assets/item/fried-shrimp.png",
    title: "Cuisine Chicken",
    lable: "Japanese Cuisine Chicken",
  },
];
</script>
