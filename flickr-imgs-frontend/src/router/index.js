import {createRouter, createWebHistory} from 'vue-router'

import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about-us',
        name: 'About',
        component: About
    },
    {
        path: '/contact-us',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router