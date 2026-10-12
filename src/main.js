import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Importación de los elementos e iconos de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

// Se agregan los iconos a la librería
library.add(faFacebook, faInstagram)

const app = createApp(App)

// Se conectan las rutas con el sistema
app.use(router)

// Se registra el componente de Font Awesome
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
