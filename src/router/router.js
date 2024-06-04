import {createRouter, createWebHistory} from "vue-router";

import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import postIDPage from "@/components/postIDPage.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: postIDPage
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;