import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// setiap yang sudah dibuat di bagian vue harus didaftar kan dibawah ini
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import PesananSukses from '../views/PesananSukses.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/foods',
        name: 'Foods',
        component: Foods


    },

    {
        path: '/foods/:id',
        // penamaan name sama component sama mengikuti views
        name: 'FoodDetail',
        component: FoodDetail


    },

    {
        path: '/keranjang',
        // penamaan name sama component sama mengikuti views
        name: 'Keranjang',
        component: Keranjang

    },


    {
        path: '/pesanan-sukses',
        // penamaan name sama component sama mengikuti views
        name: 'PesananSukses',
        component: PesananSukses

    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router