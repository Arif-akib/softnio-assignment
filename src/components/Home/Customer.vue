<template>
  <div class="px-[5%] xl:px-[10%] py-24 relative">
    <div class="flex justify-between">
      <div>
        <div class="flex items-center gap-2">
          <p class="h-2 w-2 bg-[#BD1F17]"></p>
          <p class="text-[#BD1F17] text-[20px] font-semibold text">
            Crispy, Every Bite Taste
          </p>
        </div>

        <h1 class="text-4xl font-[700] heading tracking-tighter">
          What Some of my Customers Say
        </h1>
      </div>
      <div class="hidden lg:flex gap-5">
        <NavPrev :swiper="swiperInstance" />
        <NavNext :swiper="swiperInstance" />
      </div>
    </div>
    <div class="relative mt-16">
      <swiper
        @swiper="onSwiper"
        :slidesPerView="1"
        :spaceBetween="32"
        :speed="1000"
        :loop="true"
        :modules="modules"
        :preventClicks="false"
        class="mySwiper"
      >
        <swiper-slide v-for="item in 3" :key="item" class="bg-white">
          <div class="h-full flex flex-col-reverse lg:flex-row justify-center items-center">
            <div
              class="lg:w-[40%] bg-[#FEBF00] flex flex-col justify-between gap-10 lg:h-[60vh] p-10 sm:p-20"
            >
              <p
                class="text tracking-tighter font-[400] opacity-[87%] relative"
              >
                <span class="text-4xl absolute -top-3 -left-4">“</span> You
                can't go wrong with Chicken Mandi, I had it twice. The chicken
                was cooked perfectly, juicy & soft (usually mandi chicken is a
                bit dry). I would defiantly recommend it.
              </p>
              <div class="flex justify-between border-b border-b-black pb-3">
                <div class="text">
                  <p class="font-semibold">Khalid Al Dawsry</p>
                  <p class="text-sm">Jeddah, Saudi</p>
                </div>
                <div>
                  <img src="/src/assets/background/Image.png" alt="" />
                  <p class="w-[40px] h-1 bg-[#BD1F17] translate-y-3"></p>
                </div>
              </div>
              <svg
                width="40"
                height="78"
                viewBox="0 0 40 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute bottom-5 left-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7943 77.4766L23.3448 61.5335L39.1592 54.9292L32.6086 38.9862L39.1592 23.042L23.3448 16.4377L16.7943 0.494644L0.108093 7.46306V38.6221L0.108144 39.2361L0.108093 39.8652V70.5082L16.7943 77.4766ZM1.85178 36.8641V8.63771L15.8506 2.79156L21.6491 16.9042L1.85178 36.8641ZM22.8821 18.1473L36.8809 23.9934L31.0824 38.1072H3.08475L22.8821 18.1473ZM3.08586 39.8652H31.0824L36.8809 53.9778L22.8821 59.8239L3.08586 39.8652ZM21.6491 61.067L15.8506 75.1796L1.85178 69.3335V41.1071L21.6491 61.067Z"
                  fill="#243054"
                />
              </svg>
            </div>
            <div class="lg:w-[60%] h-[60vh] relative">
              <img
                src="/src/assets/background/cus.png"
                alt=""
                class="w-full h-full object-cover"
              />
              <img src="/src/assets/icon/Play.png" alt="" class="h-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="lg:hidden flex gap-5 mt-5 justify-center">
        <NavPrev :swiper="swiperInstance" />
        <NavNext :swiper="swiperInstance" />
      </div>
    <img
      src="/src/assets/background/221.png"
      alt=""
      class="hidden lg:block absolute left-0 top-40 w-[120px]"
    />
    <img
      src="/src/assets/background/12.png"
      alt=""
      class="hidden lg:block absolute right-0 bottom-10 h-[350px]"
    />
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
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const modules = [Pagination, Navigation, Autoplay, Mousewheel, Keyboard];

const swiperInstance = ref({});
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};
</script>
