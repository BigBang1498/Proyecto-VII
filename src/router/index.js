import { createRouter, createWebHistory } from "vue-router";
import Inicio from '../views/Inicio.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import PublicProfile from "../views/PublicProfile.vue";
import Catalog from "../views/Catalog.vue";
import Contact from "../views/Contact.vue";
import ProductDetail from "../views/ProductDetail.vue";
<<<<<<< HEAD
import Dashboard from "../views/Dashboard.vue";
=======
import eventos from "../views/eventos.vue";
import EventDetail from "../views/EventDetail.vue";
>>>>>>> 5fc9e5b829ab3a7c186cf1225311618964ba0c84

const routes = [
    { path: '/', component: Inicio }, 
    { path: '/registro', component: Register },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/publicProfile', component: PublicProfile },
    { path: '/catalog', component: Catalog },
    { path: '/contact', component: Contact },
    { path: '/producto/:id', component: ProductDetail },
<<<<<<< HEAD
    { path: '/dashboard', component: Dashboard },
=======
    {path: '/eventos', component: eventos},
    { path: '/eventos/:id', name: 'EventDetail', component: EventDetail, props: true}

>>>>>>> 5fc9e5b829ab3a7c186cf1225311618964ba0c84
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
