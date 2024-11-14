import { createRouter, createWebHistory } from "vue-router";

import Landing from "../pages/landing.vue"

const routes=[
    {   path:'/',
        component:Landing,
        name:'Landing',
    },

]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
});

export default router;