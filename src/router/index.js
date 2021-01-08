import { createRouter, createWebHistory } from 'vue-router'

//Import Component
import Home from '../views/manga/Index.vue'
import Detail from '../views/manga/Detail.vue'
import Manga from '../views/manga/Manga.vue'

//Mendaftarkan Route
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/manga/detail/:link',
        name: 'detail',
        component: Detail
    },
    {
        path: '/chapter/:link',
        name: 'chapter',
        component: Manga
    }
]

//Menjalankan Routing
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router