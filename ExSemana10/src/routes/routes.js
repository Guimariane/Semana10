import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/views/home/Home.vue'
import Sobre from '../components/views/about/Sobre.vue'
import Cadastro from '../components/views/cadastro/Cadastro.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/sobre',
            name: 'Sobre',
            component: Sobre

        },

        {
            path: '/cadastro',
            name: 'Cadastro',
            component: Cadastro
        },

        {
            path: '/home',
            name: 'Home',
            component: Home
        }]})

        export default router