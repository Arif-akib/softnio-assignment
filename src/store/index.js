import { defineStore } from "pinia";

export const useStore = defineStore( 'products',{
    state: () => ({
        drop : false
    }),
    actions:{
    },
    persist: true,
})