<template>
    <div class="bg-[url('/src/assets/background/foot.jpg')] bg-cover bg-center">
        <div class="py-20 px-[5%] xl:px-[10%] bg-[#000000d3]">
            <h1 class="text tracking-tighter text-3xl md:text-4xl text-white text-center uppercase font-[700]">we ready to have you the best dinning experience</h1>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 mt-14 mb-20 gap-5">
                <div v-for="data in datas" :key="data" class="flex flex-col items-center justify-center text-white text-sm">
                    <img :src="data.img" alt="">
                    <h3 class="pt-5 pb-2 text-lg font-bold heading uppercase">{{ data.heading }}</h3>
                    <p>
                        {{ data.text }}
                    </p>
                    <p>{{ data.sub }}</p>
                </div>
            </div>
            <div class="flex gap-5 items-center justify-center mb-2">
                <p class="rounded-full border h-9 w-9 flex items-center justify-center">
                    <img src="/src/assets/icon/facebook-circle.png" alt="" class="h-5">
                </p>
                <p class="rounded-full border h-9 w-9 flex items-center justify-center">
                    <img src="/src/assets/icon/x.png" alt="" class="h-[14px]">
                </p>
                <p class="rounded-full border h-9 w-9 flex items-center justify-center">
                    <img src="/src/assets/icon/instagram-round.png" alt="" class="h-5">
                </p>
                <p class="rounded-full border h-9 w-9 flex items-center justify-center">
                    <img src="/src/assets/icon/link.png" alt="" class="h-[14px]">
                </p>
            </div>
            <p class="text-white text-center">© 2023 All Rights Reserved </p>
        </div>
    </div>
</template>
<script setup>
const datas = [
    {
        img: '/src/assets/icon/clock.png',
        heading: "Opening hours",
        text: "Monday - Sunday",
        sub:"9:00 AM to 11:30 PM"
    },
    {
        img: '/src/assets/icon/call.png',
        heading: "LET'S TALK",
        text: "Phone: 1-800 - 222 - 4545",
        sub:"Fax: 1 - 800 - 222 - 4545"
    },
    {
        img: '/src/assets/icon/mail2.png',
        heading: "BOOK A TABLE",
        text: "Email: demo@website.com",
        sub:"Support: support@website.com"
    },
    {
        img: '/src/assets/icon/location2.png',
        heading: "Our Address",
        text: "123 Stree New York City , United",
        sub:"States Of America."
    },
]
</script>