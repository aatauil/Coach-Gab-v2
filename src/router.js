import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue"

Vue.use(Router)

export default new Router({
    linkExactActiveClass: "active-link",
    mode: "history",
    routes:[
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/Services",
            name: "Services",
            component: () => import(/* webpackChunkName: "Service" */ "./components/Services.vue")
        },
        {
            path: "/Booking-info",
            name: "Booking-info",
            component: () => import(/* webpackChunkName: "Booking-info" */ "./components/Booking-info.vue")
        },
        {
            path: "/Contact",
            name: "Contact",
            component: () => import(/* webpackChunkName: "Contact" */ "./components/Contact.vue")
        },
        {
        path: "/*",
        name: "404",
        component: () => import(/* webpackChunkName: "Contact" */ "./components/404.vue")
        },
    ]
})
