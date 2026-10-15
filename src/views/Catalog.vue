<template>
  <div class="catalog-page">
    <!-- Encabezado del Catálogo -->
    <header class="catalog-header">
      <span class="section-tag">Explora la comunidad</span>
      <h1>Catálogo de Emprendimientos</h1>
      <p>
        Descubre los negocios locales de Puerto Morelos, filtra por categoría o
        busca por nombre para conocer su oferta.
      </p>
    </header>

    <main class="catalog-container">
      <!-- Barra de herramientas: Búsqueda, Filtros y Ordenamiento -->
      <section class="controls-section">
        <div class="search-bar">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            v-model.trim="busqueda"
            type="text"
            placeholder="Buscar por emprendimiento, producto o descripción..."
          />
          <button
            v-if="busqueda"
            type="button"
            class="clear-search"
            @click="busqueda = ''"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div class="filters-row">
          <!-- Filtro por Categoría -->
          <div class="filter-group">
            <label for="filter-category">Categoría:</label>
            <select id="filter-category" v-model="categoriaSeleccionada">
              <option value="todas">Todas las categorías</option>
              <option value="artesanias">Artesanías</option>
              <option value="gastronomia">Gastronomía</option>
              <option value="productos-organicos">Productos orgánicos</option>
              <option value="servicios">Servicios</option>
              <option value="moda-accesorios">Moda y accesorios</option>
              <option value="belleza-bienestar">Belleza y bienestar</option>
              <option value="hogar-decoracion">Hogar y decoración</option>
              <option value="fitness">Fitness</option>
            </select>
          </div>

          <!-- Filtro por Tipo de Tienda -->
          <div class="filter-group">
            <label for="filter-store">Ubicación:</label>
            <select id="filter-store" v-model="tiendaFisicaFiltro">
              <option value="todos">Todos</option>
              <option value="si">Con tienda física</option>
              <option value="no">Solo en línea</option>
            </select>
          </div>

          <!-- Ordenamiento -->
          <div class="filter-group">
            <label for="sort-order">Ordenar por:</label>
            <select id="sort-order" v-model="ordenamiento">
              <option value="nombre-asc">Nombre (A - Z)</option>
              <option value="nombre-desc">Nombre (Z - A)</option>
              <option value="productos-desc">Más productos</option>
              <option value="recientes">Más recientes</option>
            </select>
          </div>
        </div>
      </section>

      <!-- Contador de resultados -->
      <div class="results-info">
        <span>
          Mostrando <strong>{{ emprendedoresFiltrados.length }}</strong>
          {{ emprendedoresFiltrados.length === 1 ? 'emprendimiento' : 'emprendimientos' }}
        </span>

        <button
          v-if="hayFiltrosActivos"
          type="button"
          class="reset-filters-btn"
          @click="limpiarFiltros"
        >
          Limpiar filtros
        </button>
      </div>

      <!-- Cuadrícula de Emprendedores -->
      <section v-if="emprendedoresFiltrados.length" class="entrepreneurs-grid">
        <article
          v-for="item in emprendedoresFiltrados"
          :key="item.id || item.correo"
          class="entrepreneur-card"
        >
          <div class="card-header">
            <div class="card-logo">
              <img
                v-if="item.perfil?.logo"
                :src="item.perfil.logo"
                :alt="item.perfil.emprendimiento || item.nombre"
              />
              <div v-else class="card-logo-placeholder">
                {{ obtenerIniciales(item.perfil?.emprendimiento || item.nombre) }}
              </div>
            </div>

            <div class="card-title-area">
              <h3>{{ item.perfil?.emprendimiento || 'Emprendimiento local' }}</h3>
              <p v-if="item.perfil?.nombreContacto" class="card-owner">
                <i class="fa-regular fa-user"></i>
                {{ item.perfil.nombreContacto }}
              </p>
            </div>
          </div>

          <p class="card-description">
            {{ item.perfil?.descripcion || 'Sin descripción disponible por el momento.' }}
          </p>

          <div class="card-tags">
            <span v-if="item.perfil?.tiendaFisica === 'si'" class="badge badge-store">
              <i class="fa-solid fa-store"></i> Tienda física
            </span>
            <span v-else class="badge badge-online">
              <i class="fa-solid fa-globe"></i> En línea
            </span>

            <span class="badge badge-products">
              <i class="fa-solid fa-box-open"></i>
              {{ contarProductos(item) }} productos
            </span>
          </div>

          <div class="card-footer">
            <button
              type="button"
              class="button view-profile-button"
              @click="verPerfilPublico(item)"
            >
              <span>Ver perfil y catálogo</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </article>
      </section>

      <section v-else class="empty-results">
        <div class="empty-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <h2>No se encontraron emprendimientos</h2>
        <p>
          Intenta ajustando los términos de búsqueda o cambiando los filtros seleccionados.
        </p>
        <button type="button" class="button button-secondary" @click="limpiarFiltros">
          Restablecer filtros
        </button>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const emprendedores = ref([])
const productos = ref([])

const busqueda = ref('')
const categoriaSeleccionada = ref('todas')
const tiendaFisicaFiltro = ref('todos')
const ordenamiento = ref('nombre-asc')

function leerLocalStorage(clave, valorPredeterminado) {
  try {
    const valor = localStorage.getItem(clave)
    return valor ? JSON.parse(valor) : valorPredeterminado
  } catch (error) {
    console.error(`Error al leer ${clave}:`, error)
    return valorPredeterminado
  }
}

function obtenerIdentificador(usuario) {
  return usuario?.id ?? usuario?.correo ?? usuario?.nombre
}

function contarProductos(usuario) {
  const id = obtenerIdentificador(usuario)
  if (id == null) return 0
  return productos.value.filter(
    p => p.usuarioId != null && String(p.usuarioId) === String(id)
  ).length
}

function obtenerIniciales(nombre) {
  if (!nombre) return 'EM'
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(p => p.charAt(0).toUpperCase())
    .join('')
}

const hayFiltrosActivos = computed(() => {
  return (
    busqueda.value !== '' ||
    categoriaSeleccionada.value !== 'todas' ||
    tiendaFisicaFiltro.value !== 'todos' ||
    ordenamiento.value !== 'nombre-asc'
  )
})

function limpiarFiltros() {
  busqueda.value = ''
  categoriaSeleccionada.value = 'todas'
  tiendaFisicaFiltro.value = 'todos'
  ordenamiento.value = 'nombre-asc'
}

const emprendedoresFiltrados = computed(() => {
  let resultado = [...emprendedores.value]

  if (busqueda.value) {
    const query = busqueda.value.toLowerCase()
    resultado = resultado.filter(emp => {
      const nombreNegocio = (emp.perfil?.emprendimiento || '').toLowerCase()
      const contacto = (emp.perfil?.nombreContacto || emp.nombre || '').toLowerCase()
      const descripcion = (emp.perfil?.descripcion || '').toLowerCase()

      const idUsuario = obtenerIdentificador(emp)
      const tieneProductoCoincidente = productos.value.some(p => {
        return (
          String(p.usuarioId) === String(idUsuario) &&
          ((p.nombre || '').toLowerCase().includes(query) ||
           (p.descripcion || '').toLowerCase().includes(query))
        )
      })

      return (
        nombreNegocio.includes(query) ||
        contacto.includes(query) ||
        descripcion.includes(query) ||
        tieneProductoCoincidente
      )
    })
  }

  if (categoriaSeleccionada.value !== 'todas') {
    resultado = resultado.filter(emp => {
      const idUsuario = obtenerIdentificador(emp)
      return productos.value.some(
        p =>
          String(p.usuarioId) === String(idUsuario) &&
          p.categoria === categoriaSeleccionada.value
      )
    })
  }

  if (tiendaFisicaFiltro.value !== 'todos') {
    resultado = resultado.filter(emp => {
      return emp.perfil?.tiendaFisica === tiendaFisicaFiltro.value
    })
  }

  resultado.sort((a, b) => {
    const nombreA = (a.perfil?.emprendimiento || a.nombre || '').toLowerCase()
    const nombreB = (b.perfil?.emprendimiento || b.nombre || '').toLowerCase()

    if (ordenamiento.value === 'nombre-asc') {
      return nombreA.localeCompare(nombreB)
    }
    if (ordenamiento.value === 'nombre-desc') {
      return nombreB.localeCompare(nombreA)
    }
    if (ordenamiento.value === 'productos-desc') {
      return contarProductos(b) - contarProductos(a)
    }
    if (ordenamiento.value === 'recientes') {
      return (b.id || 0) - (a.id || 0)
    }
    return 0
  })

  return resultado
})

function verPerfilPublico(emprendedor) {
  localStorage.setItem('usuarioActivo', JSON.stringify(emprendedor))
  router.push('/publicProfile')
}

onMounted(() => {
  emprendedores.value = leerLocalStorage('emprendedores', [])
  productos.value = leerLocalStorage('productos', [])
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

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
}

.catalog-header p {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

/* Contenedor Principal */
.catalog-container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Sección de Controles */
.controls-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  background-color: var(--white);
  box-shadow: 0 10px 25px -5px rgba(15, 118, 110, 0.05);
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 1rem;
  color: var(--text-light);
  font-size: 0.9rem;
}

.search-bar input {
  width: 100%;
  padding: 0.85rem 2.5rem 0.85rem 2.6rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background-color: var(--background);
  color: var(--text-dark);
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.search-bar input:focus {
  border-color: var(--primary);
  background-color: var(--white);
}

.clear-search {
  position: absolute;
  right: 0.8rem;
  border: none;
  background: transparent;
  color: var(--text-light);
  cursor: pointer;
  padding: 0.4rem;
}

.clear-search:hover {
  color: var(--text-dark);
}

/* Fila de Filtros */
.filters-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.filter-group label {
  color: var(--text-medium);
  font-size: 0.75rem;
  font-weight: 600;
}

.filter-group select {
  padding: 0.65rem 0.8rem;
  border: 1px solid var(--border);
  border-radius: 0.65rem;
  background-color: var(--background);
  color: var(--text-dark);
  font-size: 0.82rem;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.filter-group select:focus {
  border-color: var(--primary);
}

/* Info de Resultados */
.results-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  font-size: 0.82rem;
  color: var(--text-medium);
}

.reset-filters-btn {
  border: none;
  background: transparent;
  color: var(--primary-dark);
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: underline;
}

.reset-filters-btn:hover {
  color: var(--primary);
}

/* Tarjetas de Emprendedores */
.entrepreneurs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.entrepreneur-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  background-color: var(--white);
  box-shadow: 0 4px 15px rgba(23, 32, 31, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.entrepreneur-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(23, 32, 31, 0.08);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-logo {
  width: 58px;
  height: 58px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--border);
  background-color: var(--background);
}

.card-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-logo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #e6f5f3;
  color: var(--primary-dark);
  font-weight: 600;
  font-size: 1.1rem;
}

.card-title-area h3 {
  margin: 0 0 0.2rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-dark);
}

.card-owner {
  margin: 0;
  font-size: 0.78rem;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.card-description {
  display: -webkit-box;
  margin: 0 0 1.2rem;
  overflow: hidden;
  color: var(--text-medium);
  font-size: 0.82rem;
  line-height: 1.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  margin-bottom: 1.2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 500;
}

.badge-store {
  background-color: #e6f5f3;
  color: var(--primary-dark);
}

.badge-online {
  background-color: #f0f3f2;
  color: var(--text-medium);
}

.badge-products {
  background-color: #fef3c7;
  color: #92400e;
}

.card-footer {
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.view-profile-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.65rem;
  background-color: var(--primary);
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.view-profile-button:hover {
  background-color: var(--primary-dark);
}

/* Estado Vacío */
.empty-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background-color: var(--white);
  border: 1px dashed var(--border);
  border-radius: 1rem;
}

.empty-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  border-radius: 50%;
  background-color: #e6f5f3;
  color: var(--primary);
  font-size: 1.4rem;
}

.empty-results h2 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
}

.empty-results p {
  margin: 0 0 1.5rem;
  color: var(--text-light);
  font-size: 0.85rem;
}

.button-secondary {
  padding: 0.7rem 1.2rem;
  border: 1px solid var(--border);
  border-radius: 0.65rem;
  background-color: var(--background);
  color: var(--text-dark);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
}

.button-secondary:hover {
  background-color: var(--border);
}

/* Adaptabilidad para móviles */
@media (max-width: 768px) {
  .filters-row {
    grid-template-columns: 1fr;
  }

  .entrepreneurs-grid {
    grid-template-columns: 1fr;
  }
}
</style>