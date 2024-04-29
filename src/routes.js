import {createRouter, createWebHistory} from 'vue-router';

const routerHistory = createWebHistory();

// import homePage from '../pages/homePage.vue';
const homePage = () => import('../pages/homePage.vue');
const aboutPage = () => import('../pages/aboutPage.vue');   

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            components: homePage,
        },
        {
            path: '/about',
            components: aboutPage,
        },
    ]
});

export default routers;