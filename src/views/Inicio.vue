<template>
  <div class="home-container">
    <!--Barra de Navegación -->
    <header class="navbar">
      <div class="logo">
        Emprende aquí
      </div>
      <nav class="nav-links">
        <a href="#directorio" @click.prevent="scrollTo('directorio')">Directorio</a>
        <a href="#bazares" @click.prevent="scrollTo('bazares')">Bazares y Ferias</a>
        <a href="#registro" class="btn-secondary" @click.prevent="scrollTo('registro')">Soy Emprendedor</a>
      </nav>
    </header>

    <!-- Sección Banner Principal -->
    <section class="hero">
      <div class="hero-content">
        <h1>Apoya al talento local de Puerto Morelos</h1>
        <p>
          Descubre artesanos, productores y pequeños emprendedores de nuestra comunidad.
          Encuentra sus productos, redes sociales y contacto directo en un solo lugar.
        </p>
        <div class="hero-buttons">
          <button class="btn-primary" @click="irA('directorio')">Explorar Directorio</button>
          <button class="btn-outline" @click="irA('bazares')">Ver Próximos Bazares</button>
        </div>
      </div>
    </section>

    <!-- Sección de Accesos Rápidos (Secciones Principales) -->
    <section id="directorio" class="features-section">
      <h2>¿Qué deseas encontrar hoy?</h2>
      <div class="cards-grid">
     
        <!-- Tarjeta 1: Directorio -->
        <div class="card" @click="irA('directorio')">
          <h3>Directorio de Emprendedores</h3>
          <p>Encuentra productos artesanales, gastronomía, servicios y más sin intermediarios.</p>
          <span class="card-link">Ver catálogo &rarr;</span>
        </div>

        <!-- Tarjeta 2: Bazares -->
        <div class="card" @click="irA('bazares')">
          <h3>Bazares y Ferias Locales</h3>
          <p>Consulta los días, horarios y ubicaciones de las ferias semanales en la localidad.</p>
          <span class="card-link">Consultar fechas &rarr;</span>
        </div>

        <!-- Tarjeta 3: Registro -->
        <div class="card" @click="irA('registro')">
          <h3>¿Eres Emprendedor/Artesano?</h3>
          <p>Regístrate gratis, crea tu perfil y da a conocer tus productos a residentes y turistas.</p>
          <span class="card-link">Registrar mi negocio &rarr;</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const irA = (seccion) => {
  alert(`Navegando a la sección: ${seccion}`)
}

const scrollTo = (id) => {
  const elemento = document.getElementById(id)
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Reset y estilos generales */
.home-container {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
  background-color: #f9fafb;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
  color: #0f766e;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
}

.nav-links a:hover {
  color: #0f766e;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.15rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* Botones */
.btn-primary {
  background-color: #f59e0b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary:hover {
  background-color: #d97706;
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-secondary {
  background-color: #e0f2fe;
  color: #0369a1 !important;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}

/* Sección de Tarjetas */
.features-section {
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  text-align: center;
}

.features-section h2 {
  font-size: 1.8rem;
  color: #1f2937;
  margin-bottom: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #f3f4f6;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card h3 {
  font-size: 1.25rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.card p {
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.card-link {
  color: #0f766e;
  font-weight: bold;
  font-size: 0.9rem;
}
</style>
