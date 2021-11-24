import Home from '../components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]

export const router = createRouter ({
    history: createWebHistory(),
    routes
})