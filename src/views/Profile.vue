<template>
  <div class="home-container">
    <!-- Barra de Navegación -->
    <header class="navbar">
      <div class="logo">
        <span>Hecho en</span>
        <strong>Puerto Morelos</strong>
      </div>

      <nav class="nav-links">
        <a href="#inicio" @click.prevent="scrollTo('inicio')">Inicio</a>
        <a href="#directorio" @click.prevent="scrollTo('directorio')">Explorar</a>
        <a href="#categorias" @click.prevent="scrollTo('categorias')">Categorías</a>
        <a href="#registro" class="btn-emprendedor" @click.prevent="irA('registro')">
          Soy emprendedor
        </a>
      </nav>
    </header>
    
    <div class="profile-header">
        <h2>Nombre de Usuario</h2>
        <hr>
    </div>

    <!-- Sección de Datos de Contacto -->
    <section class="contact-section">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Datos de Contacto</h2>
          <p>
            Nombre de contacto: 
          </p>
           <p>
            Whatsapp: 
          </p>
          <p>
            Correo: 
          </p>
          <a href="#editar">Editar</a>
        </div>
      </div>
    </section>

    <div class="profile-header">
        <h2>Apregar producto</h2>
        <p>Completa los datos sobre tu producto</p>
    </div>

    <!-- Sección de Agregar producto -->
    <section class="contact-section">
      <div class="contact-content">
        <div class="add-content">
          <p>Registra los productos que ofrezcas</p>
          <button class="button" @click="mostrarFormulario = true">
            +Agregar producto
          </button>
          <button class="button" @click="mostrarFormulario = false">
            Cancelar
          </button>
        </div>
        <form class="contact-info" enctype="multipart/form-data" v-show="mostrarFormulario">
          <label> Marca </label><br>
          <input type="text" placeholder="El nombre de tu marca"><br>
          <label> Agregar logotipo </label><br>
          <input type="file" accept="image/*"><br>
          <h6>(Formato .jpg o .png)</h6>
          <label>Tipo de producto</label><br>
          <input type="text" placeholder="¿Qué es tu producto?"><br>
          <label>Categoría: </label><br>
          <select>
            <option value="">Selecciona una opción</option>
            <option value="categoria2">Categoría 2</option>
            <option value="categoria3">Categoría 3</option>
          </select><br>
          <label>Descripción del producto</label><br>
          <textarea placeholder="Describe tu producto, agrega detalls como los materiales, colores y dimensiones"></textarea><br>
          <label>Redes sociales</label><br>
          <input type="url" class="url" placeholder="Link"><br>
          <input type="url" class="url" placeholder="Link"><br>
          <label>Subir fotos</label><br>
          <input type="file" accept="image/*"><br>
          <button class="button" @click="">
            Guardar producto
          </button>
        </form>
      </div>
    </section>
    <div class="profile-header">
        <h2>Mis productos</h2>
        <hr>
    </div>
    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <strong>Hecho en Puerto Morelos</strong>
          <p>Conectando talento, comunidad y comercio local.</p>
        </div>

        <div class="footer-links">
          <a href="#inicio" @click.prevent="scrollTo('inicio')">Inicio</a>
          <a href="#categorias" @click.prevent="scrollTo('categorias')">Categorías</a>
          <a href="#registro" @click.prevent="scrollTo('registro')">Registrarse</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Hecho en Puerto Morelos</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const mostrarFormulario = ref(false);
</script>

<style scoped>
.home-container {
  --primary: #0d9488;
  --primary-dark: #0f766e;
  --text-dark: #17201f;
  --text-medium: #465452;
  --text-light: #687572;
  --background: #f7f9f8;
  --white: #ffffff;
  --border: #e2e8e6;
  --footer: #17201f;
  --footer-border: #2c3836;
  --footer-text: #a7b2b0;
  --footer-link: #d1d9d7;
  --footer-muted: #8c9996;
  font-family: 'Poppins', 'Google Sans', sans-serif !important;
  color: var(--text-dark);
  background-color: var(--background);
  min-height: 100vh;
  overflow-x: hidden;
}

.home-container * {
  font-family: inherit;
}

/* Navbar */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5%;
  background-color: var(--white);
  border-bottom: 1px solid var(--border);
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo span {
  color: var(--text-medium);
  font-size: 0.72rem;
  font-weight: 600;
}

.logo strong {
  color: var(--primary);
  font-size: 1rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links a {
  padding: 0.55rem 0.7rem;
  color: var(--text-dark);
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--primary);
}

.btn-emprendedor {
  margin-left: 0.5rem;
  border-radius: 0.6rem;
  background-color: var(--primary);
  color: var(--white) !important;
}

.btn-emprendedor:hover {
  background-color: var(--primary-dark);
}

/* Encabezados de sección */
.profile-header {
  margin: 0;
  padding: 2rem 1.5rem 1rem;
  text-align: center;
  color: var(--text-dark);
}

.profile-header h2 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.5rem, 3vw, 1.9rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  color: var(--text-dark);
}

.profile-header hr {
  width: 100%;
  max-width: 500px;
  margin: 1rem auto 0;
  border: none;
  border-top: 1px solid var(--text-dark);
}

/* Tarjetas de contacto / producto */
.contact-section {
  padding: 1rem 1.5rem;
}

.contact-content {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-radius: 1rem;
}

.contact-info {
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
}
h6 {
  margin-bottom: 0;
  color: var(--text-medium);
}

.contact-info h2 {
  margin: 0.5rem 0 0.8rem;
  color: var(--text-dark);
  font-size: clamp(1.5rem, 3vw, 1.9rem);
  letter-spacing: -0.035em;
  font-weight: 600;
}

.contact-info p {
  margin: 0 0 1.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

.add-content button {
  margin: 10px;
}

.button {
  padding: 0.75rem 1.2rem;
  border: none;
  border-radius: 0.65rem;
  background-color: var(--primary);
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button:hover {
  background-color: var(--primary-dark);
}

/* Formulario */

label {
  display: block;
  color: var(--text-medium);
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
  margin-top: 0.2rem;
  text-align: left;
}

input, textarea, select {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.65rem;
  background-color: var(--background);
  color: var(--text-dark);
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

/* Footer */
.footer {
  padding: 3rem 5% 1.5rem;
  background-color: var(--footer);
  color: var(--white);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2rem;
}

.footer-logo strong {
  font-size: 1.05rem;
}

.footer-logo p {
  color: var(--footer-text);
  font-size: 0.82rem;
}

.footer-links {
  display: flex;
  gap: 1.4rem;
}

.footer-links a {
  color: var(--footer-link);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--white);
}

.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.4rem;
  border-top: 1px solid var(--footer-border);
  color: var(--footer-muted);
  font-size: 0.72rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 850px) {
  .navbar {
    padding: 0.9rem 1.5rem;
  }

  .nav-links {
    gap: 0.1rem;
  }

  .nav-links a {
    padding: 0.5rem;
    font-size: 0.78rem;
  }

  .contact-info {
    max-width: none;
  }
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    gap: 0.9rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-emprendedor {
    margin-left: 0;
  }

  .contact-content {
    padding: 1.5rem;
  }

  .footer-content,
  .footer-bottom {
    flex-direction: column;
  }

  .footer-links {
    flex-wrap: wrap;
  }
}
</style>