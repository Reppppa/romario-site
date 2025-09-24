import { createRouter, createWebHistory } from 'vue-router'
import Main from '@views/MainPage.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Main
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home'
    },
    // { path: '/about', name: 'About', component: '' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            const el = document.querySelector(to.hash)
            if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100
                window.scrollTo({ top: y, behavior: 'smooth' })
            }
            return false
        }
        return { top: 0 }
    }
})

router.afterEach(() => {
    window.location.hash && history.replaceState(null, '', window.location.pathname)
});

export default router
