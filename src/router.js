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
            path: "/Services",
            name: "Services",
            component: () => import(/* webpackChunkName: "Hire" */ "./components/Services.vue")
        },
        {
            path: "/Booking-info",
            name: "Bookinf-info",
            component: () => import(/* webpackChunkName: "Hire" */ "./components/Booking-info.vue")
        },
        {
            path: "/About",
            name: "About",
            component: () => import(/* webpackChunkName: "Menu" */ "./components/About.vue")
        },
        {
            path: "/Contact",
            name: "Contact",
            component: () => import(/* webpackChunkName: "Menu" */ "./components/Contact.vue")
        },
        {
            path: "/Booking",
            name: "Booking",
            component: () => import(/* webpackChunkName: "Discover" */ "./components/Booking.vue")
        },
    ]
})
