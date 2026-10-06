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
        <div class="event-info">

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

          <a href="#editar" @click.prevent="scrollTo('editar')">Editar</a>
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
          <button class="event-button" @click="irA('add')">
            +Agregar producto
          </button>
        </div>
        <form class="event-info" enctype="multipart/form-data">
          <label> Marca </label><br>
          <input type="text" placeholder="El nombre de tu marca"><br>
          <label> Agregar logotipo </label><br>
          <input type="file" accept="image/*"><br>
          <p>(Formato .jpg o .png)</p><br>
          <label>Tipo de producto</label><br>
          <input type="text" placeholder="¿Qué es tu producto?"><br>
          <label>Categoría: </label>
          <select>
            <option value="">Selecciona una opción</option>
            <option value="categoria2">Categoría 2</option>
            <option value="categoria3">Categoría 3</option>
          </select><br>
          <label>Descripción del producto</label><br>
          <textarea placeholder="Describe tu producto"></textarea><br>
          <label>Redes sociales</label><br>
          <input type="url" class="url" placeholder="Link"><br>
          <input type="url" class="url" placeholder="Link"><br>
          <label>Subir fotos</label><br>
          <input type="file" accept="image/*"><br>
          <button class="event-button" @click="irA('save')">
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
  --card-gray: #f0f3f2;
  --border: #e2e8e6;
  --border-hover: #b9cfcb;
  --gold: #fcd34d;
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

.btn-emprendedor {
  margin-left: 0.5rem;
  border-radius: 0.6rem;
  background-color: var(--primary);
  color: var(--white) !important;
}

.btn-emprendedor:hover {
  background-color: var(--primary-dark);
}

.hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  padding: 5rem 1.5rem;
  background-image: url('../assets/img-hero.jpg');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 118, 110, 0.68);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  color: var(--white);
  text-align: center;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 3rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  font-weight: 600;
}

.hero h1 span {
  display: block;
  color: var(--gold);
}

.hero p {
  max-width: 680px;
  margin: 1.3rem auto 2rem;
  color: rgba(255, 255, 255, 0.92);
  font-size: 1rem;
  line-height: 1.7;
}

.search-box {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;
  padding: 0.35rem;
  background-color: var(--white);
  border-radius: 0.75rem;
}

.search-box input {
  flex: 1;
  min-width: 0;
  padding: 0.85rem 1rem;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-dark);
  font-size: 0.82rem;
}

.search-box button {
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0.55rem;
  background-color: var(--primary);
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
}

.search-box button:hover {
  background-color: var(--primary-dark);
}

.categories-section {
  padding: 5.5rem 1.5rem;
  background-color: var(--white);
}

.categories-heading {
  max-width: 1100px;
  margin: 0 auto 2.7rem;
  text-align: center;
}

.section-tag {
  display: inline-block;
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.categories-heading h2 {
  margin: 0.5rem 0 0.8rem;
  color: var(--text-dark);
  font-size: clamp(0.7rem, 3vw, 1.7rem);
  letter-spacing: -0.035em;
  font-weight: 600;
}

.categories-heading p {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
  font-size: 0.88rem;
  line-height: 1.7;
}

.category-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.85rem;
}

.category-card {
  min-height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 0.85rem;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.category-card:hover {
  transform: scale(1.035);
  background-color: var(--primary-dark);
}

.category-card h3 {
  margin: 0;
  color: var(--white);
  font-size: 0.92rem;
  line-height: 1.3;
  font-weight: 500;
  text-align: center;
}

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
  gap: 1.5rem;
  padding: 2rem;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-radius: 1rem;
}

.event-info {
  max-width: 560px;
}

.event-info h2 {
  margin: 0.5rem 0 0.8rem;
  color: var(--text-dark);
  font-size: clamp(1.5rem, 3vw, 1.9rem);
  letter-spacing: -0.035em;
  font-weight: 600;
}

.event-info p {
  margin: 0 0 1.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

.event-button {
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

.event-button:hover {
  background-color: var(--primary-dark);
}

.event-image {
  width: 320px;
  height: 230px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 0.85rem;
}

.event-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.brands-section {
  padding: 5rem 1.5rem;
  background-color: var(--white);
}

.brands-heading {
  max-width: 700px;
  margin: 0 auto 2.5rem;
  text-align: center;
}

.brands-heading h2 {
  margin: 0.5rem 0 0.8rem;
  color: var(--text-dark);
  font-size: clamp(0.7rem, 3vw, 1.7rem);
  letter-spacing: -0.035em;
  font-weight: 600;
}

.brands-heading p {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
  font-size: 0.88rem;
  line-height: 1.7;
}

.brands-grid {
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.brand-card {
  width: 135px;
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-gray);
  border: 1px solid var(--border);
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
  overflow: hidden;
}

.brand-card:hover {
  transform: scale(1.04);
  border-color: var(--border-hover);
}

.brand-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.register-section {
  padding: 5rem 1.5rem;
  background-color: var(--primary);
  color: var(--white);
  text-align: center;
}

.register-content {
  max-width: 700px;
  margin: 0 auto;
}

.register-section .section-tag {
  color: var(--gold);
}

.register-section h2 {
  margin: 0.5rem 0 0.8rem;
  font-size: clamp(0.7rem, 3vw, 1.7rem);
  letter-spacing: -0.035em;
  font-weight: 600;
}

.register-section p {
  max-width: 600px;
  margin: 0 auto 1.8rem;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.9rem;
  line-height: 1.7;
}

.register-button {
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 0.65rem;
  background-color: var(--white);
  color: var(--primary-dark);
  font-size: 0.84rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.register-button:hover {
  background-color: var(--gold);
}

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

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .event-content {
    flex-direction: column;
    align-items: stretch;
  }

  .event-info {
    max-width: none;
  }

  .event-image {
    width: 100%;
    height: 240px;
  }

  .brands-grid {
    gap: 2rem;
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

  .hero {
    min-height: auto;
    padding: 4.5rem 1.5rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 0.9rem;
  }

  .search-box {
    flex-direction: column;
    padding: 0.45rem;
  }

  .search-box input {
    width: 100%;
    box-sizing: border-box;
  }

  .search-box button {
    width: 100%;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    min-height: 80px;
  }

  .event-content {
    padding: 1.5rem;
  }

  .event-image {
    height: 200px;
  }

  .brands-grid {
    gap: 1.2rem;
  }

  .brand-card {
    width: 100px;
    height: 100px;
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