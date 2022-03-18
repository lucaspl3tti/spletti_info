import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash }
        }

        return { top: 0 }
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/legal',
            name: 'legal',
            component: () => import('../views/LegalView.vue'),
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('../views/PrivacyView.vue'),
        },
    ]
})

export default router
