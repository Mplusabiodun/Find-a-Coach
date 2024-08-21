import { createRouter, createWebHistory } from 'vue-router'

import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/request/ContactCoach.vue'
import RequestReceived from './pages/request/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches' },
        {path: '/coaches', component: CoachesList },
        {path: '/coaches/:id', component: CoachDetails, props: true, children: [
            { path: 'contact', component: ContactCoach}
        ]},
        {path: '/register', component: CoachRegistration },
        {path: '/requests', component: RequestReceived },
        {path: '/:notFount(.*)', component: NotFound }
    ]
})

export default router