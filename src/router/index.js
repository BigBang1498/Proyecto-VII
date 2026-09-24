import { createRouter, createWebHistory } from "vue-router";
import Inicio from '../views/Inicio.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';


const routes = [
    { path: '/', component: Inicio }, 
    { path: '/registro', component: Register },
    { path: '/login', component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;