<template>
    <div class="px-[5%] xl:px-[10%] py-20 relative">
        <div class="flex flex-col lg:flex-row gap-10">
            <div class="lg:w-[40%] relative">
                <img v-if="aboutButton === 'about'"  src="/src/assets/Landing/image2.png" alt="" class="w-full">
                <img v-if="aboutButton === 'experience'"  src="/src/assets/Landing/image3.jpg" alt="" class="w-full">
                <img v-if="aboutButton === 'contact'"  src="/src/assets/Landing/image1.png" alt="" class="w-full">
                <div class=" bg-white absolute top-5 left-5 rounded-2xl p-5 flex items-center gap-2">
                        <div class="h-[80px] w-[80px] rounded-full border-[5px] border-[#FEBF00] border-t-gray-200 -rotate-45 flex items-center justify-center relative">
                            <p class="h-[15px] w-[15px] border-[3.5px] border-[#FEBF00] rounded-full bg-white top-0 absolute left-0"></p>
                            <p class="text-2xl font-[700] text rotate-45 text-center">50+</p>
                        </div>
                        <div class="font-[700] heading text-sm text-gray-800">
                            <p>Market</p>
                            <p>Experience</p>
                        </div>
                </div>
            </div>
            <div class="lg:w-[60%]">
                <div class="text-[14px] border-b-2 border-b-[#BD1F17]">
                    <button @click="aboutButton = 'about'" class="px-4 py-1.5" :class="aboutButton === 'about' ? 'bg-[#BD1F17] text-white' : 'text-gray-600' ">About</button>
                    <button @click="aboutButton = 'experience'" class="px-4 py-1.5" :class="aboutButton === 'experience' ? 'bg-[#BD1F17] text-white' : 'text-gray-600' ">Experience</button>
                    <button @click="aboutButton = 'contact'" class="px-4 py-1.5" :class="aboutButton === 'contact' ? 'bg-[#BD1F17] text-white' : 'text-gray-600' ">Contact</button>
                </div>
                <div v-if="aboutButton === 'about'" class="space-y-5 mt-5">
                    <h1 class="text-4xl heading uppercase font-[700] tracking-[-2.6px]">
                        Exceptional culinary <br> experience and delicious food
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                    <div class="flex gap-5 lg:gap-8 items-center">
                       <CommonButton :lable="'About More'"/>
                       <div class="font-[700] flex items-center gap-2 text-lg">
                        <img src="/src/assets/icon/call-alt.png" alt="">
                        +88 3426 739 485
                       </div>
                    </div>
                </div>
                <div v-if="aboutButton === 'experience' " class="space-y-5 mt-5">
                    <h1 class="text-4xl heading uppercase font-[700] tracking-[-2.6px]">
                        An Unforgettable Dining Experience
                    </h1>
                    <h2 class="text-2xl heading uppercase font-[700] tracking-[-2.6px]">Exceptional Service, Flavorful Dishes, and Ambiance That Delivers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor lorem50 </p>
                    <div class="flex gap-8 items-center">
                       <CommonButton :lable="'Read More'"/>
                    </div>
                </div>
                <div v-if="aboutButton === 'contact' " class="space-y-5 mt-5">
                    <h1 class="text-4xl heading uppercase font-[700] tracking-tighter">
                       Contact us
                    </h1>
                    <p>We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, we’re here to help. Our team is dedicated to ensuring you have an amazing experience, and we’re ready to assist with anything you need.</p>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                        <div v-for="info in infos" :key="info" class="group">
                            <div class="h-[60px] w-[60px] rounded-full p-2 shadow-lg mb-[-20px] relative z-10 bg-white mx-auto group-hover:animate-bounce">
                                <img :src="info.icon" alt="" class="">
                            </div>
                          <p class="text-lg font-[700] p-2 pt-5 h-[150px] rounded-xl bg-[#BD1F17] text-white text-center shadow-lg flex items-center justify-center"> {{ info.lable }}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="cm in CommonInfos" :key="cm" class="flex gap-5 items-center">
                <div class="h-[75px] w-[75px] rounded-full shadow-lg flex items-center justify-center">
                    <img :src="cm.icon" alt="" class="w-[30px]">
                </div>
                <div>
                    <h2 class="text-2xl font-[700] heading uppercase tracking-[-1.6px]">{{ cm.lable }}</h2>
                    <p class="text-lg text">{{ cm.lable2 }}</p>
                </div> 
            </div>
        </div>
        <img src="/src/assets/background/image1.png" alt="" class="hidden lg:block absolute bottom-32 right-0 h-[250px]">
    </div>
</template>
<script setup>
import { ref } from 'vue'
import CommonButton from "/src/components/Shared/Buttom.vue"

import info1 from "/src/assets/icon/phone-call.png"
import info2 from "//src/assets/icon/mail.png"
import info3 from "/src/assets/icon/location.png"
import info4 from "/src/assets/icon/Vector.png"
import info5 from "/src/assets/icon/medal.png"
import info6 from "/src/assets/icon/bag.png"

const aboutButton = ref('about')

const infos = [
    {
        icon: info1,
        lable:'+88 3426 739 485'
    },

    {
        icon: info2,
        lable:'demo@website.com'
    },
    {
        icon: info3,
        lable:'123 Stree New York City , United States Of America.'
    },
]
const CommonInfos = [
    {
        icon: info4,
        lable: 'fast Delivery',
        lable2:"Within 30 minutes"
    },
    {
        icon: info5,
        lable: 'Absolute dining',
        lable2:"Best buffet restaurant"
    },
    {
        icon: info6,
        lable: 'Pickup Delivery',
        lable2:"Grab your food order"
    },
]
</script>