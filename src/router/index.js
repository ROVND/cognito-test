import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/pages/home.vue'
import Test from '@/pages/test.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/test',
        component: Test
    }
]

const router = new VueRouter({
    routes
})

export default router
