<template>
 <div class="catalog-page"> 
      <header class="catalog-header">
      <span class="section-tag">Explora la comunidad</span>
      <h1>Próximos Bazares y Eventos</h1>
      <p>
        Conoce los próximos bazares y eventos que se llevarán a cabo en nuestra comunidad. Mantente al tanto de las fechas, ubicaciones y detalles importantes para no perderte ninguna oportunidad de participar y disfrutar de estas actividades.
      </p>
    </header>
<section class="seccion-bazares">
    <h2>Bazares Recomendados</h2>

    <div class="grid-bazares">
      <article 
        v-for="bazar in testBazares" 
        :key="bazar.id" 
        class="card-bazar"
      >
        <!-- Imagen de cabecera -->
        <header class="card-header">
          <img 
            :src="bazar.perfil.logo || placeholderImage" 
            :alt="`Logo de ${bazar.nombre}`" 
            class="card-img"
          />
        </header>

        <!-- Contenido principal de la tarjeta -->
        <div class="card-body">
          <h3 class="card-title">{{ bazar.nombre }}</h3>
          
          <p class="card-fecha">
            📅 <strong>{{ bazar.perfil.proximaFecha }}</strong>
          </p>

          <p class="card-descripcion">
            {{ recortarTexto(bazar.perfil.descripcion, 110) }}
          </p>
        </div>

        <!-- Botón de detalles -->
        <footer class="card-footer">
          <router-link 
           :to="{ name: 'EventDetail', params: { id: bazar.id } }"
            class="btn-detalles"
          >
            Ver detalles
          </router-link>
        </footer>
      </article>
    </div>
  </section>

 </div>
</template>

<script setup>
import { testBazares } from '../data/testBazares.js'

// Imagen por defecto en caso de no encontrar el logo
const placeholderImage = 'https://via.placeholder.com/300x180?text=Sin+Imagen'

// Función para recortar la descripción a un número máximo de caracteres
const recortarTexto = (texto, longitudMaxima) => {
  if (!texto) return ''
  if (texto.length <= longitudMaxima) return texto
  return texto.substring(0, longitudMaxima).trim() + '...'
}
</script>

<style scoped>

.catalog-page {
  --primary: #0d9488;
  --primary-dark: #0f766e;
  --text-dark: #17201f;
  --text-medium: #465452;
  --text-light: #687572;
  --background: #f7f9f8;
  --white: #ffffff;
  --border: #e2e8e6;

  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  background-color: var(--background);
  color: var(--text-dark);
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

.catalog-page *,
.catalog-page *::before,
.catalog-page *::after {
  box-sizing: border-box;
}

/* Encabezado */
.catalog-header {
  max-width: 800px;
  margin: 0 auto 2.5rem;
  text-align: center;
}

.section-tag {
  display: inline-block;
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.catalog-header h1 {
  margin: 0.4rem 0 0.8rem;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  color: var(--text-dark);
  font-family: 'Poppins', sans-serif;
}

.catalog-header p {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

.seccion-bazares {
  padding: 2rem;
}

/* Configuración de la cuadrícula adaptativa */
.grid-bazares {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Tarjeta de bazar */
.card-bazar {
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-bazar:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-header {
  width: 100%;
  height: 180px;
  background-color: #f8fafc;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 1.25rem;
  flex-grow: 1;
}

.card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #1e293b;
}

.card-fecha {
  font-size: 0.9rem;
  color: var(--text-medium);
  margin-bottom: 0.75rem;
}

.card-descripcion {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

.card-footer {
  padding: 1.25rem;
  padding-top: 0;
}

.btn-detalles {
  display: block;
  width: 100%;
  padding: 0.6rem 0;
  text-align: center;
  background-color: var(--primary);
  color: #ffffff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.btn-detalles:hover {
  background-color: var(--primary-dark);
}
</style>

