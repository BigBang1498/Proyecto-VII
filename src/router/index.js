import { createRouter, createWebHistory } from "vue-router";
import Inicio from '../views/Inicio.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';


const routes = [
    { path: '/', component: Inicio }, 
    { path: '/registro', component: Register },
    { path: '/login', component: Login },
    { path: '/form-profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
