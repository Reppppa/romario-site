import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@views/HomePage.vue'),
    },
    {
        path: '/:projectName',
        name: 'Project',
        component: () => import('@views/ProjectPage.vue'),
    },
    {
        path: '/:projectName/:caseName',
        name: 'Case',
        component: () => import('@views/ProjectCase.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home',
    },
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
    },
})

router.afterEach(() => {
    if (window.location.hash) {
        history.replaceState(history.state, '', window.location.pathname)
    }
})

export default router
