
<template>
    <main class="home-container public-profile">
      <!-- Encabezado del emprendimiento -->
      <header class="profile-header">
        <div class="public-logo">
          <img
            v-if="perfil.logo"
            :src="perfil.logo"
            :alt="nombreEmprendimiento"
          />
  
          <div v-else class="public-logo-placeholder">
            {{ iniciales }}
          </div>
        </div>
  
        <h1>{{ nombreEmprendimiento }}</h1>
  
        <p v-if="perfil.nombreContacto" class="public-contact-name">
          <span>
            <strong>Responsable:</strong>
            {{ perfil.nombreContacto }}
          </span>
        </p>
  
        <p v-if="perfil.descripcion" class="public-description">
          {{ perfil.descripcion }}
        </p>
  
        <a
          v-if="enlaceWhatsApp"
          :href="enlaceWhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          class="button public-contact-button"
        >
          <i class="fa-brands fa-whatsapp"></i>
          Contactar por WhatsApp
        </a>
      </header>
  
      <!-- Información de contacto -->
      <section class="contact-section public-section">
        <div class="contact-content public-contact-content">
          <div class="section-heading">
            <h2>Información de contacto</h2>
          </div>
  
          <div class="public-contact-grid">
            <a
              v-if="perfil.whatsapp"
              :href="enlaceWhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              class="public-info-item"
            >
              <span class="info-icon whatsapp-color">
                <i class="fa-brands fa-whatsapp"></i>
              </span>
  
              <span class="info-text">
                <small>WhatsApp</small>
                <strong>{{ perfil.whatsapp }}</strong>
              </span>
            </a>
  
            <a
              v-if="perfil.telefono"
              :href="`tel:${perfil.telefono}`"
              class="public-info-item"
            >
              <span class="info-icon">
                <i class="fa-solid fa-phone"></i>
              </span>
  
              <span class="info-text">
                <small>Teléfono</small>
                <strong>{{ perfil.telefono }}</strong>
              </span>
            </a>
  
            <a
              v-if="perfil.correo"
              :href="`mailto:${perfil.correo}`"
              class="public-info-item"
            >
              <span class="info-icon">
                <i class="fa-regular fa-envelope"></i>
              </span>
  
              <span class="info-text">
                <small>Correo electrónico</small>
                <strong>{{ perfil.correo }}</strong>
              </span>
            </a>
  
            <div v-if="perfil.direccion" class="public-info-item">
              <span class="info-icon">
                <i class="fa-solid fa-location-dot"></i>
              </span>
  
              <span class="info-text">
                <small>Dirección</small>
                <strong>{{ perfil.direccion }}</strong>
              </span>
            </div>
  
            <div v-if="perfil.horario" class="public-info-item">
              <span class="info-icon">
                <i class="fa-regular fa-clock"></i>
              </span>
  
              <span class="info-text">
                <small>Horario de atención</small>
                <strong>{{ perfil.horario }}</strong>
              </span>
            </div>
  
            <div v-if="perfil.tiendaFisica" class="public-info-item">
              <span class="info-icon">
                <i class="fa-solid fa-store"></i>
              </span>
  
              <span class="info-text">
                <small>Tienda física</small>
                <strong>{{ perfil.tiendaFisica }}</strong>
              </span>
            </div>
  
            <div
              v-if="!hayInformacionContacto"
              class="public-empty-contact"
            >
              <i class="fa-solid fa-circle-info"></i>
              Todavía no se ha agregado información de contacto.
            </div>
          </div>
  
          <!-- Redes sociales -->
          <div
            v-if="perfil.instagram || perfil.facebook"
            class="public-social-section"
          >
            <h3>Síguenos en redes sociales</h3>
  
            <div class="public-social-links">
              <a
                v-if="perfil.instagram"
                :href="enlaceRedSocial(perfil.instagram, 'instagram')"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
              >
                <i class="fa-brands fa-instagram instagram-color"></i>
                Instagram
              </a>
  
              <a
                v-if="perfil.facebook"
                :href="enlaceRedSocial(perfil.facebook, 'facebook')"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
              >
                <i class="fa-brands fa-facebook facebook-color"></i>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Productos -->
      <section class="products-section public-products-section">
        <div class="add-content">
          <h2>Nuestros productos</h2>
  
          <span class="public-product-count">
            {{ productos.length }}
            {{ productos.length === 1 ? 'producto' : 'productos' }}
          </span>
        </div>
  
        <div v-if="productos.length" class="product-card-list">
          <article
            v-for="(producto, indice) in productos"
            :key="producto.id ?? `${producto.nombre}-${indice}`"
            class="product-card"
          >
            <div class="product-card-photos">
              <img
                v-for="(foto, index) in fotosValidas(producto)"
                :key="foto.id ?? foto.url ?? index"
                :src="foto.url"
                :alt="`${producto.nombre} - imagen ${index + 1}`"
                loading="lazy"
              />
  
              <div
                v-if="fotosValidas(producto).length === 0"
                class="public-no-photo"
              >
                <i class="fa-regular fa-image"></i>
                <span>Sin imagen disponible</span>
              </div>
            </div>
  
            <div class="product-card-info">
              <span
                v-if="producto.categoria"
                class="product-category"
              >

                {{ nombreCategoria(producto.categoria) }}
              </span>
  
              <h3>{{ producto.nombre || 'Producto sin nombre' }}</h3>
  
              <p class="public-product-description">
                {{
                  producto.descripcion ||
                  'Consulta para conocer más detalles de este producto.'
                }}
              </p>
  
              <div class="public-product-footer">
                <a
                  v-if="enlaceWhatsApp"
                  :href="mensajeProducto(producto)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="public-product-link"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                  Consultar producto
                </a>
  
                <span v-else class="public-no-contact">
                  <i class="fa-solid fa-circle-info"></i>
                  Contacto no disponible
                </span>
              </div>
            </div>
          </article>
        </div>
  
        <div v-else class="empty-products">
          <div class="empty-products-content">
            <div class="empty-products-icon">
              <i class="fa-solid fa-box-open"></i>
            </div>
  
            <h2>Aún no hay productos publicados</h2>
  
            <p>
              Los productos de este emprendimiento aparecerán aquí cuando
              estén disponibles.
            </p>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { computed, ref, onMounted } from 'vue'
  
  const usuarioActivo = ref({
    nombre: '',
    correo: '',
    perfil: {}
  })
  
  const todosLosProductos = ref([])
  
  function leerLocalStorage(clave, valorPredeterminado) {
    try {
      const valor = localStorage.getItem(clave)
      return valor ? JSON.parse(valor) : valorPredeterminado
    } catch (error) {
      console.error(`Error al leer ${clave}:`, error)
      return valorPredeterminado
    }
  }
  
  const perfil = computed(() => {
    return usuarioActivo.value?.perfil || {}
  })
  
  const nombreEmprendimiento = computed(() => {
    return (
      perfil.value.emprendimiento ||
      usuarioActivo.value?.nombre ||
      'Mi emprendimiento'
    )
  })
  
  const iniciales = computed(() => {
    return nombreEmprendimiento.value
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(palabra => palabra.charAt(0).toUpperCase())
      .join('')
  })
  
  function obtenerIdentificadorUsuario(usuario) {
    return usuario?.id ?? usuario?.correo ?? usuario?.nombre
  }
  
  const productos = computed(() => {
    const identificador = obtenerIdentificadorUsuario(
      usuarioActivo.value
    )
  
    if (identificador == null) return []
  
    return todosLosProductos.value.filter(producto => {
      return (
        producto.usuarioId != null &&
        String(producto.usuarioId) === String(identificador)
      )
    })
  })
  
  const enlaceWhatsApp = computed(() => {
    const numero = String(perfil.value.whatsapp || '').replace(/\D/g, '')
    return numero ? `https://wa.me/${numero}` : ''
  })
  
  const hayInformacionContacto = computed(() => {
    return Boolean(
      perfil.value.whatsapp ||
      perfil.value.telefono ||
      perfil.value.correo ||
      perfil.value.direccion ||
      perfil.value.horario ||
      perfil.value.tiendaFisica
    )
  })
  
  function mensajeProducto(producto) {
    const mensaje = encodeURIComponent(
      `Hola, me interesa conocer más sobre el producto: ${
        producto.nombre || 'producto'
      }`
    )
  
    return `${enlaceWhatsApp.value}?text=${mensaje}`
  }
  
  function enlaceRedSocial(valor, red) {
    const texto = String(valor || '').trim()
  
    if (!texto) return ''
  
    if (/^https?:\/\//i.test(texto)) {
      return texto
    }
  
    const usuario = texto
      .replace(/^@/, '')
      .replace(/^\/+|\/+$/g, '')
  
    if (red === 'instagram') {
      return `https://www.instagram.com/${usuario}/`
    }
  
    return `https://www.facebook.com/${usuario}`
  }
  
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
  
  function nombreCategoria(categoria) {
    return categorias[categoria] || categoria || 'Sin categoría'
  }
  
  function fotosValidas(producto) {
    if (!Array.isArray(producto.fotos)) return []
  
    return producto.fotos.filter(foto => {
      return foto && typeof foto.url === 'string' && foto.url.trim()
    })
  }
  
  onMounted(() => {
    usuarioActivo.value = leerLocalStorage('usuarioActivo', {
      nombre: '',
      correo: '',
      perfil: {}
    })
  
    const productosGuardados = leerLocalStorage('productos', [])
  
    todosLosProductos.value = Array.isArray(productosGuardados)
      ? productosGuardados
      : []
  })
  </script>
```html
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* Estilo general */

.home-container.public-profile {
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
  background-color: var(--background);
  color: var(--text-dark);
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

.public-profile *,
.public-profile *::before,
.public-profile *::after {
  box-sizing: border-box;
}

.public-profile i {
  line-height: 1;
}

.public-profile .profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 2.5rem 1.5rem 2rem;
  color: var(--text-dark);
  text-align: center;
}

.public-profile .public-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 108px;
  flex-shrink: 0;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--white);
  box-shadow: 0 8px 22px rgba(23, 32, 31, 0.06);
}

.public-profile .public-logo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.public-profile .public-logo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #e6f5f3;
  color: var(--primary-dark);
  font-size: 2rem;
  font-weight: 600;
}

.public-profile .profile-header h1 {
  margin: 0 0 0.4rem;
  color: var(--text-dark);
  font-size: clamp(1.5rem, 3vw, 1.9rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  overflow-wrap: anywhere;
}

.public-profile .public-contact-name {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.2rem 0 0;
  color: var(--text-medium);
  font-size: 0.85rem;
}

.public-profile .public-contact-name strong {
  font-weight: 600;
}

.public-profile .public-description {
  max-width: 650px;
  margin: 0.8rem auto 0;
  color: var(--text-light);
  font-size: 0.88rem;
  line-height: 1.8;
  white-space: pre-line;
  overflow-wrap: anywhere;
}

.public-profile .public-contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: auto;
  margin-top: 1.25rem;
  padding: 0.8rem 1.15rem;
  border: 0;
  border-radius: 0.7rem;
  background: var(--primary);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.public-profile .public-contact-button:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.public-profile .public-contact-button i {
  font-size: 1.1rem;
}

.public-profile .public-section {
  width: 100%;
  padding: 1rem 0;
}

.public-profile .public-contact-content {
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  background: var(--white);
  box-shadow: 0 10px 25px -5px rgba(15, 118, 110, 0.05);
}

.public-profile .section-heading {
  margin-bottom: 1.5rem;
  text-align: center;
}

.public-profile .section-heading h2 {
  display: block;
  margin: 0;
  color: var(--text-dark);
  font-size: 1.05rem;
  font-weight: 600;
  text-align: center;
}

.public-profile .public-contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 0.85rem;
}

.public-profile .public-info-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 0;
  min-height: 68px;
  height: 100%;
  padding: 0.9rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background: var(--background);
  color: var(--text-dark);
  text-align: left;
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.public-profile a.public-info-item:hover {
  border-color: var(--primary);
  background: var(--white);
}

.public-profile .info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 0.65rem;
  background: #e6f5f3;
  color: var(--primary-dark);
  font-size: 1rem;
}

.public-profile .info-icon.whatsapp-color {
  background: #e8f7ed;
  color: #16803d;
}

.public-profile .info-text {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
  text-align: left;
  overflow-wrap: anywhere;
}

.public-profile .info-text small {
  display: block;
  color: var(--text-light);
  font-size: 0.72rem;
  line-height: 1.45;
}

.public-profile .info-text strong {
  display: block;
  color: var(--text-dark);
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.45;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.public-profile .public-empty-contact {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem;
  border-radius: 0.75rem;
  background: var(--background);
  color: var(--text-light);
  font-size: 0.8rem;
}

.public-profile .public-social-section {
  margin-top: 1.6rem;
  padding-top: 1.3rem;
  border-top: 1px solid var(--border);
}

.public-profile .public-social-section h3 {
  margin: 0 0 0.9rem;
  color: var(--text-dark);
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.public-profile .public-social-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
}

.public-profile .social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--border);
  border-radius: 0.65rem;
  background: var(--white);
  color: var(--text-medium);
  font-size: 0.8rem;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.public-profile .social-link:hover {
  border-color: var(--primary);
  color: var(--primary-dark);
}

.public-profile .instagram-color {
  color: #e4405f;
}

.public-profile .facebook-color {
  color: #1877f2;
}

.public-profile .social-link > i {
  font-size: 1.05rem;
}

.public-profile .public-products-section {
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 1.5rem;
  border: none;
  border-radius: 1rem;
  background: var(--white);
  box-shadow: 0 10px 25px -5px rgba(15, 118, 110, 0.05);
}

.public-profile .public-products-section .add-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 42px;
  margin-bottom: 1.5rem;
  padding: 0 5rem 1.2rem;
  border: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
  text-align: center;
}

.public-profile .public-products-section .add-content h2 {
  display: block;
  margin: 0;
  padding: 0;
  border: none !important;
  color: var(--text-dark);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  box-shadow: none !important;
}

.public-profile .public-product-count {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  background: #e6f5f3;
  color: var(--primary-dark);
  font-size: 0.75rem;
  font-weight: 600;
}

.public-profile .product-card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  align-items: stretch;
  gap: 1.25rem;
  width: 100%;
}

.public-profile .product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 0.9rem;
  background: var(--white);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.public-profile .product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(23, 32, 31, 0.08);
}

.public-profile .product-card-photos {
  display: flex;
  width: 100%;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  gap: 0;
  overflow: hidden;
  background: var(--background);
}

.public-profile .product-card-photos img {
  display: block;
  flex: 1 1 0;
  width: 0;
  min-width: 0;
  height: 100%;
  object-fit: cover;
}

.public-profile .product-card-photos img:only-child {
  width: 100%;
}

.public-profile .public-no-photo {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: var(--text-light);
  font-size: 0.75rem;
}

.public-profile .public-no-photo i {
  color: var(--primary);
  font-size: 1.7rem;
}

.public-profile .product-card-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  padding: 0.85rem;
}

.public-profile .product-category {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  align-self: flex-start;
  max-width: 100%;
  margin: 0 0 0.6rem;
  padding: 0.3rem 0.6rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(13, 148, 136, 0.1);
  color: var(--primary-dark);
  font-size: 0.7rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.public-profile .product-card-info h3 {
  display: -webkit-box;
  margin: 0 0 0.45rem;
  overflow: hidden;
  color: var(--text-dark);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.public-profile .product-card-info .public-product-description {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: var(--text-medium);
  font-size: 0.8rem;
  line-height: 1.5;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.public-profile .public-product-footer {
  margin-top: auto;
  padding-top: 0.85rem;
}

.public-profile .public-product-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding-top: 0.8rem;
  border-top: 1px solid var(--border);
  color: var(--primary-dark);
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
}

.public-profile .public-product-link:hover {
  color: var(--primary);
}

.public-profile .public-product-link i {
  font-size: 1rem;
}

.public-profile .public-no-contact {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-light);
  font-size: 0.75rem;
}

.public-profile .empty-products {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 230px;
  padding: 2rem;
  border: 1px dashed var(--border);
  border-radius: 0.9rem;
  background: var(--white);
}

.public-profile .empty-products-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  text-align: center;
}

.public-profile .empty-products-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
  background: #e6f5f3;
  color: var(--primary);
  font-size: 1.3rem;
}

.public-profile .empty-products-content h2 {
  margin: 0 0 0.5rem;
  color: var(--text-dark);
  font-size: 1rem;
  font-weight: 600;
}

.public-profile .empty-products-content p {
  margin: 0;
  color: var(--text-light);
  font-size: 0.8rem;
  line-height: 1.7;
}

/* Diseño adaptable */

@media (max-width: 650px) {
  .home-container.public-profile {
    padding: 1rem;
  }

  .public-profile .profile-header {
    padding: 1.5rem 0.5rem;
  }

  .public-profile .public-logo {
    width: 90px;
    height: 90px;
  }

  .public-profile .public-contact-content {
    padding: 1.25rem;
  }

  .public-profile .public-contact-grid {
    grid-template-columns: 1fr;
  }

  .public-profile .public-products-section {
    padding: 1rem;
  }

  .public-profile .add-content {
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 3rem;
  }

  .public-profile .public-product-count {
    top: auto;
    right: auto;
    bottom: 0.7rem;
  }

  .public-profile .product-card-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .public-profile .product-card-info {
    padding: 0.7rem;
  }

  .public-profile .product-card-info h3 {
    font-size: 0.85rem;
  }

  .public-profile .product-card-info .public-product-description {
    font-size: 0.75rem;
  }

  .public-profile .public-product-count {
    font-size: 0.7rem;
  }
}

@media (max-width: 400px) {
  .public-profile .product-card-list {
    grid-template-columns: 1fr;
  }
}
</style>
