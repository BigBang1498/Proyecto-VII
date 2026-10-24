<template>
  <div class="contact-page">
    <header class="contact-header">
      <span class="section-tag">Atención y comunidad</span>
      <h1>Contáctanos</h1>
      <p>Ponte en contacto con nosotros para resolver cualquier duda o solicitud.</p>
    </header>

    <main class="contact-container">
      <!-- Información de contacto y redes -->
      <aside class="contact-card">
        <h2>Información de contacto</h2>
        <p class="desc">Estamos para apoyarte a través de nuestros canales.</p>

        <div class="info-list">
          <div class="info-item">
            <i class="fa-solid fa-location-dot icon"></i>
            <div class="info-text">
              <small>Ubicación</small>
              <strong>Puerto Morelos, Q. Roo, México</strong>
            </div>
          </div>

          <a href="mailto:contacto@hechoenpuertomorelos.gob.mx" class="info-item link">
            <i class="fa-regular fa-envelope icon"></i>
            <div class="info-text">
              <small>Correo electrónico</small>
              <strong class="text-break">contacto@hechoenpuertomorelos.gob.mx</strong>
            </div>
          </a>

          <a href="https://wa.me/529981234567" target="_blank" class="info-item link">
            <i class="fa-brands fa-whatsapp icon wa"></i>
            <div class="info-text">
              <small>WhatsApp</small>
              <strong>+52 998 123 4567</strong>
            </div>
          </a>
        </div>

        <div class="socials">
          <h3>Síguenos en redes</h3>
          <div class="social-btns">
            <a href="https://facebook.com" target="_blank" class="social-link"><i class="fa-brands fa-facebook"></i> Facebook</a>
            <a href="https://instagram.com" target="_blank" class="social-link"><i class="fa-brands fa-instagram"></i> Instagram</a>
          </div>
        </div>
      </aside>

      <!-- Formulario de Contacto -->
      <section class="contact-card">
        <form @submit.prevent="enviarMensaje" novalidate>
          <h2>Déjanos tu mensaje</h2>

          <div class="field">
            <label>Nombre completo o marca <span class="req">*</span></label>
            <input v-model.trim="form.nombre" type="text" placeholder="Ej. María López" :class="{ error: errores.nombre }" />
            <small v-if="errores.nombre" class="error-text">{{ errores.nombre }}</small>
          </div>

          <div class="row">
            <div class="field">
              <label>Correo electrónico <span class="req">*</span></label>
              <input v-model.trim="form.correo" type="email" placeholder="correo@ejemplo.com" :class="{ error: errores.correo }" />
              <small v-if="errores.correo" class="error-text">{{ errores.correo }}</small>
            </div>

            <div class="field">
              <label>Teléfono / WhatsApp</label>
              <input v-model.trim="form.telefono" type="tel" placeholder="+52 998 123 4567" />
            </div>
          </div>

          <div class="field">
            <label>Tipo de solicitud <span class="req">*</span></label>
            <select v-model="form.asunto" :class="{ error: errores.asunto }">
              <option value="">Selecciona una opción</option>
              <option value="duda">Duda general</option>
              <option value="registro">Soporte de registro</option>
              <option value="reporte">Reportar problema técnico</option>
              <option value="otro">Otro asunto</option>
            </select>
            <small v-if="errores.asunto" class="error-text">{{ errores.asunto }}</small>
          </div>

          <div class="field">
            <label>Mensaje <span class="req">*</span></label>
            <textarea v-model.trim="form.mensaje" rows="4" placeholder="Escribe aquí tu consulta..." :class="{ error: errores.mensaje }"></textarea>
            <small v-if="errores.mensaje" class="error-text">{{ errores.mensaje }}</small>
          </div>

          <p v-if="mensajeExito" class="success-alert"><i class="fa-solid fa-circle-check"></i> {{ mensajeExito }}</p>

          <button type="submit" class="btn-submit" :disabled="enviando">
            {{ enviando ? 'Enviando...' : 'Enviar mensaje' }}
          </button>
        </form>
      </section>
    </main>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ nombre: '', correo: '', telefono: '', asunto: '', mensaje: '' })
const errores = reactive({ nombre: '', correo: '', asunto: '', mensaje: '' })
const enviando = ref(false)
const mensajeExito = ref('')

function validar() {
  Object.keys(errores).forEach(k => errores[k] = '')
  let valido = true

  if (!form.nombre) { errores.nombre = 'Ingresa tu nombre.'; valido = false }
  if (!form.correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) { errores.correo = 'Correo inválido.'; valido = false }
  if (!form.asunto) { errores.asunto = 'Selecciona un asunto.'; valido = false }
  if (!form.mensaje || form.mensaje.length < 10) { errores.mensaje = 'Mínimo 10 caracteres.'; valido = false }

  return valido
}

function enviarMensaje() {
  if (!validar()) return
  enviando.value = true
  setTimeout(() => {
    enviando.value = false
    mensajeExito.value = '¡Mensaje enviado con éxito!'
    Object.keys(form).forEach(k => form[k] = '')
  }, 1000)
}
</script>

<style scoped>
.contact-page {
  --primary: #0d9488;
  --primary-dark: #0f766e;
  --text-dark: #17201f;
  --text-body: #374151;
  --text-sub: #4b5563;
  --bg: #f7f9f8;
  --border: #d1d5db;

  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  color: var(--text-dark);
  padding: 2rem 1.5rem;
  min-height: 100vh;
}

/* Encabezado */
.contact-header { text-align: center; max-width: 600px; margin: 0 auto 2rem; }
.section-tag { color: var(--primary-dark); font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; }
.contact-header h1 { font-size: 2.2rem; color: var(--text-dark); font-weight: 600; margin: 0.3rem 0; font-family: 'Poppins', sans-serif; }
.contact-header p { color: var(--text-body); font-size: 0.9rem; font-weight: 500; }

.contact-container { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 320px 1fr; gap: 1.5rem; }
.contact-card { background: #fff; border: 1px solid var(--border); border-radius: 1rem; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.contact-card h2 { font-size: 1.2rem; color: var(--text-dark); font-weight: 600; margin-top: 0; margin-bottom: 0.5rem; font-family: 'Poppins', sans-serif;}
.desc { font-size: 0.85rem; color: var(--text-body); margin-bottom: 1rem; font-family: 'Poppins', sans-serif; }

/* Lista de Información de Contacto */
.info-list { display: flex; flex-direction: column; gap: 0.8rem; margin: 1rem 0; }
.info-item { 
  display: flex; 
  justify-content: center;
  align-items: center; 
  gap: 0.85rem; 
  padding: 0.75rem; 
  background: var(--bg); 
  border-radius: 0.5rem; 
  text-decoration: none; 
  color: var(--text-dark); 
}
.info-item.link:hover { background: #e6f5f3; }

.info-text {
  display: flex;
  flex-direction: column;
  min-width: 0; 
}

.info-item small { display: block; font-size: 0.75rem; color: var(--text-sub); font-weight: 600; }
.info-item strong { font-size: 0.82rem; color: var(--text-dark); font-weight: 600; }

.text-break {
  word-break: break-all;
  overflow-wrap: anywhere;
}

.icon { font-size: 1.2rem; color: var(--primary-dark); flex-shrink: 0; }
.icon.wa { color: #16803d; }

/* Redes Sociales */
.socials { border-top: 1px solid var(--border); padding-top: 1rem; margin-top: 1rem; }
.socials h3 { font-size: 0.9rem; color: var(--text-dark); font-weight: 600; margin-bottom: 0.8rem; }
.social-btns { display: flex; gap: 0.5rem; }
.social-link { flex: 1; text-align: center; padding: 0.6rem; border: 1px solid var(--border); border-radius: 0.5rem; font-size: 0.8rem; font-weight: 600; color: var(--text-dark); text-decoration: none; }
.social-link:hover { border-color: var(--primary); color: var(--primary-dark); }

/* Formulario */
.field { display: flex; flex-direction: column; margin-bottom: 1rem; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
label { font-size: 0.85rem; font-weight: 600; color: var(--text-dark); margin-bottom: 0.35rem; }
.req { color: #dc2626; }

input, select, textarea {
  width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 0.5rem; background: #fff; font-family: inherit; font-size: 0.85rem; color: var(--text-dark); outline: none; box-sizing: border-box;
}
input::placeholder, textarea::placeholder { color: #9ca3af; }
input:focus, select:focus, textarea:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15); }
input.error, select.error, textarea.error { border-color: #dc2626; background: #fef2f2; }
.error-text { color: #dc2626; font-size: 0.75rem; font-weight: 500; margin-top: 0.25rem; }

.success-alert { background: #e6f5f3; color: var(--primary-dark); padding: 0.75rem; border-radius: 0.5rem; font-size: 0.85rem; font-weight: 600; }
.btn-submit { width: 100%; padding: 0.85rem; border: none; border-radius: 0.5rem; background: var(--primary); color: #fff; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: background 0.2s; font-family: 'Poppins', sans-serif;}
.btn-submit:hover { background: var(--primary-dark); }

@media (max-width: 768px) {
  .contact-container, .row { grid-template-columns: 1fr; }
}
</style>