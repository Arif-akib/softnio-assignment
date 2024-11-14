<template>
  <div
    class="px-[5%] xl:px-[10%] py-24 bg-[url('/src/assets/background/f8e8eeffdc29691099a68fb261320bfa.jpg')] bg-cover"
  >
    <div class="w-full lg:w-[45%] 2xl:w-[40%] space-y-5">
      <div class="flex items-center gap-2">
        <p class="h-2 w-2 bg-[#BD1F17]"></p>
        <p class="text-[#BD1F17] text-[20px] font-semibold text">Book Now</p>
      </div>

      <h1
        class="text-4xl font-[700] heading tracking-tighter uppercase text-white"
      >
        Book your table
      </h1>
      <p class="text text-white">
        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
        molestie vel, ornare non id blandit netus.
      </p>
      <div class="flex flex-col sm:flex-row gap-5 pt-5">
        <input
          type="text"
         v-model="data.name"
          required
          class="border border-[#E5E7EB] bg-transparent text-white py-2 px-3 w-full sm:w-1/2"
        />
        <input
          type="email"
         v-model="data.email"
          required
          class="border border-[#E5E7EB] bg-transparent text-white py-2 px-3 w-full sm:w-1/2"
        />
      </div>
      <div class="flex flex-col sm:flex-row gap-5">
        <div
          class="w-full sm:w-1/2 relative border border-[#E5E7EB] text-[#E5E7EB] focus:text-white group"
        >
          <input
            v-model="data.date"
            type="text"
            class="w-full py-2 px-3 relative z-10 bg-transparent text-[#E5E7EB]"
          />
          <input
            v-model="data.date"
            placeholder="dd-mm-yyyy"
            type="date"
            class="w-full py-2 px-3 h-full absolute top-0 left-0 bg-transparent opacity-0 group-hover:z-20 text-[#E5E7EB]"
          />
          <img
            src="/src/assets/icon/date.png"
            alt=""
            class="absolute top-[50%] translate-y-[-50%] right-3"
          />
        </div>

        <div
          class="w-full sm:w-1/2 relative border border-[#E5E7EB] text-[#E5E7EB] focus:text-white group"
        >
          <input
            v-model="data.people"
            type="text"
            class="w-full py-2 px-3 relative z-10 bg-transparent text-[#E5E7EB]"
          />
          <select
            name=""
            id=""
            v-model="data.people"
            class="w-full py-2 px-3 h-full absolute top-0 left-0 bg-transparent opacity-0 group-hover:z-20 text-[#E5E7EB]"
          >
            <option :value="index+1" v-for="(pep,index) in 10" :key="pep" class="text-white bg-black focus:bg-black">
             {{ index+1 }}
            </option>
          </select>
          <img
            src="/src/assets/icon/arrow.png"
            alt=""
            class="absolute top-[50%] translate-y-[-50%] right-3"
          />
        </div>
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        v-model="data.mes"
        class="border border-[#E5E7EB] text-[#E5E7EB] bg-transparent py-2 px-3 w-full"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const data = reactive({
    date :"Reservation Date",
    people: "Total People",
    mes: "Message",
    name: "Your Name*",
    email:"Your Email"
})
</script>
