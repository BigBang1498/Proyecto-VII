<template>
  <main class="product-detail">
    <div v-if="producto" class="product-content">
      <!-- Galería de fotografías -->
      <div class="product-photos">
        <div class="main-photo">
          <img
            v-if="fotoPrincipal"
            :src="fotoPrincipal.url"
            :alt="`${producto.nombre} - imagen principal`"
          />
          <p v-else>No hay fotografías disponibles.</p>
        </div>

        <div
          v-if="fotosValidas.length"
          class="product-thumbnails"
          aria-label="Galería de fotografías"
        >
          <button
            v-for="(foto, index) in fotosValidas"
            :key="foto.id ?? foto.url ?? index"
            type="button"
            class="thumbnail"
            :class="{ 'is-active': index === indiceFotoSeleccionada }"
            :aria-label="`Ver imagen ${index + 1} de ${producto.nombre}`"
            :aria-pressed="index === indiceFotoSeleccionada"
            @click="seleccionarFoto(index)"
          >
            <img
              :src="foto.url"
              :alt="`${producto.nombre} - miniatura ${index + 1}`"
            />
          </button>
        </div>
      </div>

      <!-- Información del producto -->
      <section class="product-info">
        <span class="category">
          {{ nombreCategoria(producto.categoria) }}
        </span>

        <h1>{{ producto.nombre || 'Producto sin nombre' }}</h1>

        <p class="description">
          {{ producto.descripcion || 'Sin descripción disponible.' }}
        </p>

        <!-- Botones en la misma línea -->
        <div class="product-actions">
          <button
            type="button"
            class="back-button"
            @click="volver"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span>Regresar</span>
          </button>

          <a
            v-if="enlaceWhatsApp"
            :href="mensajeWhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-button"
          >
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.16 1.59 5.98L0 24l6.25-1.64a11.92 11.92 0 0 0 5.82 1.48h.01c6.58 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.5-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.86 9.86 0 0 1-1.52-5.25c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.89 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"
              />
            </svg>
            <span>Contactar</span>
          </a>

          <p v-else class="no-contact">
            Contacto no disponible
          </p>
        </div>
      </section>
    </div>

    <!-- Producto no encontrado -->
    <div v-else class="not-found">
      <h1>Producto no encontrado</h1>
      <p>Es posible que el producto ya no esté disponible.</p>
      <button type="button" @click="volver">Regresar</button>
    </div>
  </main>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const producto = ref(null)
const emprendedor = ref(null)
const indiceFotoSeleccionada = ref(0)

const categorias = {
  artesanias: 'Artesanías',
  gastronomia: 'Gastronomía',
  'productos-organicos': 'Productos orgánicos',
  servicios: 'Servicios',
  'moda-accesorios': 'Moda y accesorios',
  'belleza-bienestar': 'Belleza y bienestar',
  'hogar-decoracion': 'Hogar y decoración',
  fitness: 'Fitness'
}

const fotosValidas = computed(() => {
  if (!Array.isArray(producto.value?.fotos)) return []

  return producto.value.fotos.filter(
    foto => foto && typeof foto.url === 'string' && foto.url.trim()
  )
})

const fotoPrincipal = computed(() => {
  return (
    fotosValidas.value[indiceFotoSeleccionada.value] ||
    fotosValidas.value[0] ||
    null
  )
})

const perfilEmprendedor = computed(() => {
  return emprendedor.value?.perfil || {}
})

const enlaceWhatsApp = computed(() => {
  const numero = String(
    perfilEmprendedor.value.whatsapp ||
    emprendedor.value?.whatsapp ||
    ''
  ).replace(/\D/g, '')

  return numero ? `https://wa.me/${numero}` : ''
})

const mensajeWhatsApp = computed(() => {
  const mensaje = encodeURIComponent(
    `Hola, me interesa conocer más sobre el producto: ${
      producto.value?.nombre || 'producto'
    }`
  )

  return enlaceWhatsApp.value
    ? `${enlaceWhatsApp.value}?text=${mensaje}`
    : ''
})

function seleccionarFoto(index) {
  indiceFotoSeleccionada.value = index
}

function nombreCategoria(categoria) {
  return categorias[categoria] || categoria || 'Sin categoría'
}

function volver() {
  if (window.history.state?.back) {
    router.back()
  } else {
    router.push('/catalog')
  }
}

onMounted(() => {
  try {
    const productosGuardados = JSON.parse(
      localStorage.getItem('productos') || '[]'
    )

    const emprendedoresGuardados = JSON.parse(
      localStorage.getItem('emprendedores') || '[]'
    )

    const productos = Array.isArray(productosGuardados)
      ? productosGuardados
      : []

    const emprendedores = Array.isArray(emprendedoresGuardados)
      ? emprendedoresGuardados
      : []

    const encontrado = productos.find(
      item => String(item.id) === String(route.params.id)
    )

    if (!encontrado) return

    producto.value = encontrado
    indiceFotoSeleccionada.value = 0

    emprendedor.value =
      emprendedores.find(usuario => {
        const identificador =
          usuario?.id ?? usuario?.correo ?? usuario?.nombre

        return (
          identificador != null &&
          encontrado.usuarioId != null &&
          String(identificador) === String(encontrado.usuarioId)
        )
      }) || null

    // Respaldo para el perfil de la sesión actual.
    if (!emprendedor.value) {
      const usuarioActivo = JSON.parse(
        localStorage.getItem('usuarioActivo') || 'null'
      )

      const identificador =
        usuarioActivo?.id ??
        usuarioActivo?.correo ??
        usuarioActivo?.nombre

      if (
        identificador != null &&
        encontrado.usuarioId != null &&
        String(identificador) === String(encontrado.usuarioId)
      ) {
        emprendedor.value = usuarioActivo
      }
    }
  } catch (error) {
    console.error('Error al cargar el producto:', error)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.product-detail {
  --primary: #0d9488;
  --primary-dark: #0f766e;
  --text-dark: #17201f;
  --text-medium: #465452;
  --text-light: #687572;
  --background: #f7f9f8;
  --white: #ffffff;
  --border: #e2e8e6;

  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1.5rem;
  overflow-x: hidden;
  background: var(--background);
  color: var(--text-dark);
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

.product-detail *,
.product-detail *::before,
.product-detail *::after {
  box-sizing: border-box;
}

.product-detail button,
.product-detail a {
  font-family: inherit;
}

/* Distribución principal */
.product-detail .product-content {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  align-items: start;
  gap: 2.5rem;
  width: 100%;
  margin: 15px auto;
  padding: 0.5rem 0 2rem;
  background: transparent;
}

/* Galería */
.product-detail .product-photos {
  display: grid;
  grid-template-columns: 60px minmax(0, 370px);
  align-items: start;
  justify-content: center;
  gap: 0.7rem;
  min-width: 0;
}

.product-detail .main-photo {
  grid-column: 2;
  grid-row: 1;
  width: 100%;
  min-width: 0;
}

.product-detail .main-photo img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 4.5;
  object-fit: cover;
  border: 1px solid var(--border);
  border-radius: 0.9rem;
  background: var(--white);
}

.product-detail .main-photo p {
  margin: 0;
  padding: 1.5rem;
  border: 1px dashed var(--border);
  border-radius: 0.9rem;
  color: var(--text-light);
  font-size: 0.8rem;
  text-align: center;
}

/* Miniaturas */
.product-detail .product-thumbnails {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 60px;
}

.product-detail .thumbnail {
  display: block;
  flex: 0 0 auto;
  width: 60px;
  height: 70px;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 0.65rem;
  background: var(--white);
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.product-detail .thumbnail img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-detail .thumbnail:hover,
.product-detail .thumbnail.is-active {
  border: 2px solid var(--primary);
}

.product-detail .thumbnail:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Información del producto */
.product-detail .product-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding: 0.4rem 0;
  text-align: left;
}

/* Categoría */
.product-detail .category {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  margin: 0 0 0.7rem;
  padding: 0.4rem 0.7rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(13, 148, 136, 0.1);
  color: var(--primary-dark);
  font-size: 0.8rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Título */
.product-detail .product-info h1 {
  width: 100%;
  margin: 0 0 0.8rem;
  color: var(--text-dark);
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.035em;
  text-align: left;
  overflow-wrap: anywhere;
}

/* Descripción */
.product-detail .description {
  width: 100%;
  margin: 0;
  color: var(--text-medium);
  font-size: 0.85rem;
  line-height: 1.8;
  text-align: left;
  white-space: pre-line;
  overflow-wrap: anywhere;
}

/* Botones inferiores */
.product-detail .product-actions {
  display: flex;
  align-items: stretch;
  gap: 0.6rem;
  width: 100%;
  margin-top: 1.25rem;
}

.product-detail .back-button,
.product-detail .contact-button {
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-width: 0;
  min-height: 42px;
  padding: 0.65rem 0.5rem;
  border: 1px solid var(--primary);
  border-radius: 0.65rem;
  background: var(--primary);
  color: var(--white);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.product-detail .back-button svg,
.product-detail .contact-button svg {
  flex: 0 0 auto;
  width: 15px;
  height: 15px;
}

.product-detail .back-button:hover,
.product-detail .contact-button:hover {
  border-color: var(--primary-dark);
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.product-detail .back-button:focus-visible,
.product-detail .contact-button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}

.product-detail .back-button {
  background: var(--white);
  color: var(--primary-dark);
  border: 1px solid var(--border);
}

.product-detail .back-button:hover {
  background: var(--border);
  border-color: var(--border);
  color: var(--primary-dark);
}

.product-detail .no-contact {
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
  min-width: 0;
  margin: 0;
  color: var(--text-light);
  font-size: 0.8rem;
  text-align: center;
}

/* Producto no encontrado */
.product-detail .not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  min-height: 260px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px dashed var(--border);
  border-radius: 0.9rem;
  background: var(--white);
  text-align: center;
}

.product-detail .not-found h1 {
  margin: 0 0 0.6rem;
  color: var(--text-dark);
  font-size: 1.1rem;
  font-weight: 600;
}

.product-detail .not-found p {
  margin: 0 0 1.25rem;
  color: var(--text-light);
  font-size: 0.8rem;
  line-height: 1.7;
}

.product-detail .not-found button {
  padding: 0.8rem 1.15rem;
  border: none;
  border-radius: 0.7rem;
  background: var(--primary);
  color: var(--white);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.product-detail .not-found button:hover {
  background: var(--primary-dark);
}

.product-detail .not-found button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}

/* Diseño adaptable */
@media (max-width: 700px) {
  .product-detail {
    padding: 1rem;
  }

  .product-detail .product-content {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
    padding-top: 0.25rem;
  }

  .product-detail .product-photos {
    grid-template-columns: 52px minmax(0, 1fr);
    gap: 0.6rem;
  }

  .product-detail .product-thumbnails {
    width: 52px;
    gap: 0.5rem;
  }

  .product-detail .thumbnail {
    width: 52px;
    height: 62px;
  }

  .product-detail .main-photo img {
    aspect-ratio: 4 / 4.2;
    border-radius: 0.8rem;
  }

  .product-detail .product-info {
    padding: 0;
  }

  .product-detail .product-info h1 {
    font-size: 1.4rem;
  }

  .product-detail .description {
    font-size: 0.82rem;
  }

  .product-detail .product-actions {
    margin-top: 1rem;
  }
}

@media (max-width: 400px) {
  .product-detail {
    padding: 0.85rem;
  }

  .product-detail .product-photos {
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 0.5rem;
  }

  .product-detail .product-thumbnails {
    width: 44px;
  }

  .product-detail .thumbnail {
    width: 44px;
    height: 54px;
  }

  .product-detail .back-button,
  .product-detail .contact-button {
    gap: 0.3rem;
    min-height: 40px;
    padding: 0.6rem 0.3rem;
    font-size: 0.72rem;
  }

  .product-detail .back-button svg,
  .product-detail .contact-button svg {
    width: 14px;
    height: 14px;
  }
}
</style>
