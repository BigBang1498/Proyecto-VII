import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

//Importación de los elementos/iconos de FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

//Se agregan los iconos a la librería
library.add( faFacebook, faInstagram );
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);

//Se conectan las rutas con el sistema
app.use(router);

//Se registra el componente de FontAwesome
app.component( 'font-awesome-icon', FontAwesomeIcon );

app.mount('#app');
