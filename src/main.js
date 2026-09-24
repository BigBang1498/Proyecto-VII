import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

const app = createApp(App);

//Se conectan las rutas con el sistema
app.use(router);

app.mount('#app');
