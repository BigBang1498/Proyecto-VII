import { createRouter, createWebHistory } from "vue-router";
import Inicio from '../views/Inicio.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import PublicProfile from "../views/PublicProfile.vue";
import Catalog from "../views/Catalog.vue";
import Contact from "../views/Contact.vue";


const routes = [
    { path: '/', component: Inicio }, 
    { path: '/registro', component: Register },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/publicProfile', component: PublicProfile },
    { path: '/catalog', component: Catalog },
    { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
