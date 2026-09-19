```vue
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

    <!-- Sección Banner Principal -->
    <section id="inicio" class="hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1>
          Descubre el talento
          <span>de Puerto Morelos</span>
        </h1>

        <p>
          Conecta con artesanos, productores y pequeños emprendedores de nuestra comunidad. Descubre productos únicos y apoya el comercio local.
        </p>

        <div class="search-box">
          <input type="text" placeholder="Busca productos, servicios o emprendedores..." />
          <button>Buscar</button>
        </div>
      </div>
    </section>

    <!-- Sección accesos rápidos -->
    <section id="directorio" class="features-section">
      <div class="section-heading">
        <span class="section-tag">EXPLORA LO LOCAL</span>
        <h2>¿Qué deseas encontrar hoy?</h2>
        <p>Conoce los productos, servicios y personas que hacen especial a nuestra comunidad.</p>
      </div>

      <div class="cards-grid">
        <div class="card" @click="irA('directorio')">
          <div class="card-header">
            <span class="card-number">01</span>
            <span class="card-label">DIRECTORIO</span>
          </div>

          <div class="card-content">
            <h3>Directorio de emprendedores</h3>
            <p>
              Encuentra productos artesanales, gastronomía, servicios y mucho más creado por personas de nuestra comunidad.
            </p>
          </div>

          <div class="card-footer">
            <span>Explorar directorio</span>
            <strong>↗</strong>
          </div>
        </div>

        <div class="card" @click="irA('bazares')">
          <div class="card-header">
            <span class="card-number">02</span>
            <span class="card-label">EVENTOS</span>
          </div>

          <div class="card-content">
            <h3>Eventos locales</h3>
            <p>
              Consulta próximos eventos, fechas, horarios y ubicaciones para descubrir lo mejor del comercio local.
            </p>
          </div>

          <div class="card-footer">
            <span>Ver eventos</span>
            <strong>↗</strong>
          </div>
        </div>

        <div class="card" @click="irA('registro')">
          <div class="card-header">
            <span class="card-number">03</span>
            <span class="card-label">EMPRENDEDORES</span>
          </div>

          <div class="card-content">
            <h3>¿Eres emprendedor?</h3>
            <p>
              Registra tu negocio y permite que residentes y visitantes conozcan tus productos y servicios.
            </p>
          </div>

          <div class="card-footer">
            <span>Registrar mi negocio</span>
            <strong>↗</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Categorías -->
    <section id="categorias" class="categories-section">
      <div class="categories-heading">
        <span class="section-tag">ENCUENTRA LO QUE BUSCAS</span>
        <h2>Explora por categoría</h2>
        <p>
          Descubre productos y servicios creados por emprendedores de Puerto Morelos.
        </p>
      </div>

      <div class="category-grid">
        <div class="category-card" @click="irA('artesanias')">
          <h3>Artesanías</h3>
        </div>

        <div class="category-card" @click="irA('gastronomia')">
          <h3>Gastronomía</h3>
        </div>

        <div class="category-card" @click="irA('naturales')">
          <h3>Productos orgánicos</h3>
        </div>

        <div class="category-card" @click="irA('servicios')">
          <h3>Servicios</h3>
        </div>

        <div class="category-card" @click="irA('moda')">
          <h3>Moda y accesorios</h3>
        </div>

        <div class="category-card" @click="irA('belleza')">
          <h3>Belleza y bienestar</h3>
        </div>

        <div class="category-card" @click="irA('hogar')">
          <h3>Hogar y decoración</h3>
        </div>

        <div class="category-card" @click="irA('fitness')">
          <h3>Fitness</h3>
        </div>
      </div>
    </section>

    <!-- Sección de Emprendimientos -->
    <section class="brands-section">
      <div class="brands-heading">
        <span class="section-tag">COMUNIDAD LOCAL</span>
        <h2>Emprendimientos que se suman</h2>
        <p>
          Conoce algunas de las marcas que forman parte de Hecho en Puerto Morelos.
        </p>
      </div>

      <div class="brands-grid">
        <div class="brand-card" @click="irA('emprendimiento-1')">
          <img src="../assets/img-marca1.png" alt="Emprendimiento 1" />
        </div>

        <div class="brand-card" @click="irA('emprendimiento-2')">
          <img src="../assets/img-marca2.png" alt="Emprendimiento 2" />
        </div>

        <div class="brand-card" @click="irA('emprendimiento-3')">
          <img src="../assets/img-marca3.png" alt="Emprendimiento 3" />
        </div>

        <div class="brand-card" @click="irA('emprendimiento-4')">
          <img src="../assets/img-marca4.png" alt="Emprendimiento 4" />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <strong>Hecho en Puerto Morelos</strong>
          <p>Conectando talento, comunidad y comercio local.</p>
        </div>

        <div class="footer-links">
          <a href="#inicio" @click.prevent="scrollTo('inicio')">Inicio</a>
          <a href="#directorio" @click.prevent="scrollTo('directorio')">Explorar</a>
          <a href="#categorias" @click.prevent="scrollTo('categorias')">Categorías</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Hecho en Puerto Morelos</span>
        <span>Impulsando el talento local</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
const irA = (seccion) => {
  alert(`Navegando a la sección: ${seccion}`)
}

const scrollTo = (id) => {
  const elemento = document.getElementById(id)

  if (elemento) {
    elemento.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
/* Estilos generales */
.home-container {
  --primary: #0f766e;
  --primary-dark: #115e59;
  --text-dark: #1f2937;
  --text-medium: #4b5563;
  --text-light: #6b7280;
  --text-muted: #9ca3af;
  --background: #f8fafc;
  --white: #ffffff;
  --card-gray: #f1f3f5;
  --border: #e5e7eb;
  --border-hover: #cbd5d3;
  --card-border: #e2e5e7;
  --card-hover: #e9eeee;
  --footer: #17201f;
  --footer-border: #2c3836;
  --footer-text: #a7b2b0;
  --footer-link: #d1d9d7;
  --footer-muted: #8c9996;
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  color: var(--text-dark);
  background-color: var(--background);
  min-height: 100vh;
  overflow-x: hidden;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  color: var(--primary);
}

.logo span {
  font-size: 0.8rem;
  color: var(--text-medium);
  font-weight: 600;
}

.logo strong {
  font-size: 0.95rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.nav-links a {
  position: relative;
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 400;
  font-size: 0.85rem;
  padding: 0.65rem 0.9rem;
  border-radius: 0.5rem;
  transition: color 0.25s ease;
}

.nav-links a:not(.btn-emprendedor)::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0.3rem;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  border-radius: 2px;
  transform: translateX(-50%);
  transition: width 0.25s ease;
}

.nav-links a:not(.btn-emprendedor):hover {
  color: var(--primary);
}

.nav-links a:not(.btn-emprendedor):hover::after {
  width: 65%;
}

.btn-emprendedor {
  background-color: var(--white);
  color: var(--primary) !important;
  padding: 0.7rem 1.2rem !important;
  border: 2px solid var(--primary);
  border-radius: 2rem !important;
  margin-left: 0.5rem;
  font-weight: 500 !important;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.btn-emprendedor:hover {
  background-color: var(--primary) !important;
  color: var(--white) !important;
}

/* Hero */
.hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  color: var(--white);
  text-align: center;
  background-image: url('../assets/img-hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 118, 110, 0.55);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
}

.hero h1 {
  margin: 0 auto 1.2rem;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 800;
}

.hero h1 span {
  display: block;
  color: #fcd34d;
}

.hero p {
  max-width: 650px;
  margin: 0 auto 2rem;
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.95;
}

/* Barra de búsqueda */
.search-box {
  display: flex;
  align-items: center;
  max-width: 680px;
  margin: 0 auto;
  padding: 0.4rem;
  background-color: var(--white);
  border-radius: 2rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.search-box input {
  flex: 1;
  min-width: 0;
  padding: 0.9rem 1rem;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-dark);
  font-family: inherit;
  font-size: 0.9rem;
}

.search-box input::placeholder {
  color: var(--text-muted);
  font-family: inherit;
}

.search-box button {
  padding: 0.85rem 1.4rem;
  border: none;
  border-radius: 2rem;
  background-color: var(--primary);
  color: var(--white);
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.search-box button:hover {
  background-color: var(--primary-dark);
}

/* Sección ¿Qué deseas encontrar hoy? */
.features-section {
  padding: 5.5rem 1.5rem;
  background-color: var(--card-gray);
}

.section-heading {
  max-width: 650px;
  margin: 0 auto 3rem;
  text-align: center;
}

.section-tag {
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.section-heading h2 {
  margin: 0.5rem 0 0.8rem;
  color: var(--text-dark);
  font-size: 2.2rem;
}

.section-heading p {
  color: var(--text-light);
  line-height: 1.6;
}

.cards-grid {
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.card {
  position: relative;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--white);
  border: 1px solid var(--border);
  border-radius: 1rem;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.25s ease;
}

.card::after {
  content: '';
  position: absolute;
  left: 2rem;
  right: 2rem;
  bottom: 0;
  height: 2px;
  background-color: var(--primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.card:hover {
  border-color: var(--border-hover);
}

.card:hover::after {
  transform: scaleX(1);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.card-number {
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.card-label {
  color: var(--text-muted);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.card-content {
  flex: 1;
  padding: 2rem 0 1.5rem;
}

.card h3 {
  max-width: 250px;
  margin: 0 0 0.8rem;
  color: var(--text-dark);
  font-size: 1.2rem;
  line-height: 1.35;
  font-weight: 700;
}

.card p {
  margin: 0;
  color: var(--text-light);
  font-size: 0.88rem;
  line-height: 1.7;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2rem;
  border-top: 1px solid var(--border);
  color: var(--text-dark);
  font-size: 0.82rem;
  font-weight: 600;
}

.card-footer strong {
  color: var(--primary);
  font-size: 1.15rem;
  font-weight: 500;
}

/* Sección de Categorías */
.categories-section {
  padding: 5.5rem 1.5rem;
  background-color: var(--white);
}

.categories-heading {
  max-width: 1100px;
  margin: 0 auto 3rem;
  text-align: center;
}

.categories-heading h2 {
  margin: 0.5rem 0 0.8rem;
  color: var(--text-dark);
  font-size: 2.2rem;
}

.categories-heading p {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

.category-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.9rem;
}

.category-card {
  min-height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--card-gray);
  border: 1px solid var(--card-border);
  border-radius: 0.8rem;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.category-card:hover {
  transform: scale(1.03);
  border-color: var(--primary);
  background-color: var(--card-hover);
}

.category-card h3 {
  margin: 0;
  color: var(--text-dark);
  font-size: 0.95rem;
  line-height: 1.3;
  font-weight: 700;
  text-align: center;
}

/* Sección de Emprendimientos */
.brands-section {
  padding: 5rem 1.5rem;
  background-color: var(--card-gray);
}

.brands-heading {
  max-width: 700px;
  margin: 0 auto 2.5rem;
  text-align: center;
}

.brands-heading h2 {
  margin: 0.5rem 0 0.8rem;
  color: var(--text-dark);
  font-size: 2.1rem;
}

.brands-heading p {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

.brands-grid {
  max-width: 850px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;
  justify-items: center;
}

.brand-card {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.brand-card:hover {
  transform: scale(1.05);
}

.brand-card img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
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
  font-size: 1.1rem;
}

.footer-logo p {
  color: var(--footer-text);
  font-size: 0.85rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--footer-link);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--white);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid var(--footer-border);
  color: var(--footer-muted);
  font-size: 0.75rem;
}

/* Responsive */
@media (max-width: 850px) {
  .navbar {
    padding: 1rem 1.5rem;
  }

  .nav-links {
    gap: 0.1rem;
  }

  .nav-links a {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
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
    padding: 4rem 1.5rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .search-box {
    flex-direction: column;
    padding: 0.5rem;
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

  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  .brand-card img {
    width: 90px;
    height: 90px;
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