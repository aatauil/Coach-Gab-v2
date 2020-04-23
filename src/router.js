import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue"

Vue.use(Router)

export default new Router({
    linkExactActiveClass: "active-link",
    routes:[
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/About",
            name: "About",
            component: () => import(/* webpackChunkName: "Menu" */ "./components/About.vue")
        },
        {
            path: "/Booking",
            name: "Booking",
            component: () => import(/* webpackChunkName: "Discover" */ "./components/Booking.vue")
        },
        {
            path: "/Gallery",
            name: "Gallery",
            component: () => import(/* webpackChunkName: "Hire" */ "./components/Gallery.vue")
        },
        {
            path: "/Services",
            name: "Services",
            component: () => import(/* webpackChunkName: "Hire" */ "./components/Services.vue")
        }
    ]
})
