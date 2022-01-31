import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Index from '../components/pages/Index.vue';


export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({y: 0}),
        routes: [
            {
                path: '',
                name: 'main',
                component: Index,
                meta: {
                    language: 'ru',
                    type: 'main',
                    animation: 'slice'
                }
            }
        ]
    });
}