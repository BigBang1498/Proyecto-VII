
<template>
  <div class="home-container">
    <!-- Menú lateral -->
    <aside class="sidebar">
      <div class="user-menu">
        <div class="user-avatar">
          <img
            v-if="logoGuardado"
            :src="logoGuardado"
            alt="Logo del emprendimiento"
          />
          <span v-else>
            {{
              usuarioActivo.nombre
                ? usuarioActivo.nombre.charAt(0).toUpperCase()
                : ""
            }}
          </span>
        </div>

        <div>
          <span>Hola,</span>
          <strong>{{ usuarioActivo.nombre }}</strong>
        </div>
      </div>

      <nav class="sidebar-nav">
        <button
          type="button"
          :class="{ active: seccionActiva === 'perfil' }"
          @click="seccionActiva = 'perfil'"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 21a8 8 0 0 0-16 0"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Mi perfil</span>
        </button>

        <button
          type="button"
          :class="{ active: seccionActiva === 'productos' }"
          @click="seccionActiva = 'productos'"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4z"
            ></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <span>Mis productos</span>
        </button>

        <button
        type="button"
        :class="{ active: seccionActiva === 'publicProfile' }"
        @click="$router.push('/publicProfile')"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
            ></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span>Ver perfil público</span>
        </button>
      </nav>

      <button type="button" class="logout-button" @click="cerrarSesion">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        <span>Cerrar sesión</span>
      </button>
    </aside>

    <!-- Contenido principal -->
    <main class="profile-content">
      <!-- Mi perfil -->
      <template v-if="seccionActiva === 'perfil'">
        <div class="profile-header">
          <h1>Mi perfil</h1>
          <p>Comparte más información sobre tu emprendimiento.</p>
        </div>

        <section class="contact-section">
          <div class="contact-content">
            <form ref="formPerfil" novalidate @submit.prevent="guardarPerfil">
              <div class="contact-info">
                <div class="form-field">
                  <label>
                    Nombre del emprendimiento
                    <span class="required-mark">*</span>
                  </label>
                  <input
                    v-model="perfil.emprendimiento"
                    type="text"
                    placeholder="Ej. Artesanías del Caribe"
                    required
                  />
                </div>

                <div class="form-field">
                  <label>
                    Nombre
                    <span class="required-mark">*</span>
                  </label>
                  <input
                    v-model="perfil.nombreContacto"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <!-- Logotipo -->
                <div class="logo-upload">
                  <img
                    v-if="perfil.logo"
                    class="logo-preview"
                    :src="perfil.logo"
                    alt="Vista previa del logotipo"
                  />

                  <svg
                    v-else
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 13v8"></path>
                    <path d="m8 17 4-4 4 4"></path>
                    <path
                      d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
                    ></path>
                  </svg>

                  <strong :class="{ error: !!errorLogo }" aria-live="polite">
                    {{
                      errorLogo ||
                      nombreArchivoLogo ||
                      (perfil.logo
                        ? "Logotipo seleccionado"
                        : "Sube el logotipo de tu emprendimiento")
                    }}
                  </strong>

                  <span>
                    Formato .jpg o .png
                    <span class="required-mark">*</span>
                  </span>

                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    @change="actualizarLogo"
                  />

                  <button
                    v-if="perfil.logo"
                    type="button"
                    class="remove-logo-button"
                    aria-label="Quitar logotipo"
                    @click="quitarLogo"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>

                <div class="form-field full">
                  <label>
                    Descripción
                    <span class="required-mark">*</span>
                  </label>
                  <textarea
                    v-model="perfil.descripcion"
                    placeholder="Cuéntanos brevemente sobre tu emprendimiento"
                    required
                  ></textarea>
                </div>

                <div class="form-field">
                  <label>
                    WhatsApp
                    <span class="required-mark">*</span>
                  </label>
                  <input
                    v-model="perfil.whatsapp"
                    type="tel"
                    placeholder="+52 998 123 4567"
                    required
                  />
                </div>

                <div class="form-field">
                  <label>
                    Correo electrónico
                    <span class="required-mark">*</span>
                  </label>
                  <input
                    v-model="perfil.correo"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>

                <div class="form-field">
                  <label>Teléfono</label>
                  <input
                    v-model="perfil.telefono"
                    type="tel"
                    placeholder="+52 998 123 4567"
                  />
                </div>

                <div class="form-field">
                  <label>
                    ¿Cuentas con tienda física?
                    <span class="required-mark">*</span>
                  </label>
                  <select v-model="perfil.tiendaFisica" required>
                    <option value="">Selecciona una opción</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div v-if="perfil.tiendaFisica === 'si'" class="form-field">
                  <label>Dirección</label>
                  <input
                    v-model="perfil.direccion"
                    type="text"
                    placeholder="Calle y número"
                  />
                </div>

                <div v-if="perfil.tiendaFisica === 'si'" class="form-field">
                  <label>Horario de atención</label>
                  <input
                    v-model="perfil.horario"
                    type="text"
                    placeholder="Ej. Lunes a sábado, 9:00 a 18:00"
                  />
                </div>

                <!-- Redes sociales -->
                <div class="social-section">
                  <div class="social-grid">
                    <div class="social-field">
                      <label class="social-label instagram-label">
                        <i class="fa-brands fa-instagram"></i>
                        Instagram
                      </label>
                      <input
                        v-model="perfil.instagram"
                        type="url"
                        placeholder="https://instagram.com/ejemplo"
                      />
                    </div>

                    <div class="social-field">
                      <label class="social-label facebook-label">
                        <i class="fa-brands fa-facebook"></i>
                        Facebook
                      </label>
                      <input
                        v-model="perfil.facebook"
                        type="url"
                        placeholder="https://facebook.com/ejemplo"
                      />
                    </div>
                  </div>
                </div>

                <div class="profile-buttons">
                  <button type="submit" class="button">Guardar</button>
                  <button
                    type="button"
                    class="button button-secondary"
                    @click="restablecerPerfil"
                  >
                    Restablecer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </template>

      <!-- Mis productos -->
      <template v-if="seccionActiva === 'productos'">
        <div class="profile-header">
          <h1>Mis productos</h1>
          <p>Administra los productos y servicios de tu emprendimiento.</p>
        </div>

        <!-- Estado vacío -->
        <section
          v-if="productosDelUsuario.length === 0 && !mostrarFormulario"
          class="contact-section"
        >
          <div class="contact-content empty-products">
            <div class="empty-products-content">
              <h2>Aún no tienes productos publicados</h2>
              <p>
                Agrega tu primer producto para mostrarlo en tu perfil público.
              </p>

              <button
                type="button"
                class="button add-product-button"
                @click="abrirFormularioProducto"
              >
                <i class="fa-solid fa-plus"></i>
                Agregar producto
              </button>
            </div>
          </div>
        </section>

        <!-- Productos guardados -->
        <template v-if="productosDelUsuario.length > 0">
          <section class="contact-section">
            <div class="contact-content">
              <div class="add-content">
                <div>
                  <h2>Mis productos publicados</h2>
                  <p>
                    {{ productosDelUsuario.length }} producto(s) agregado(s)
                  </p>
                </div>

                <button
                  v-if="!mostrarFormulario"
                  type="button"
                  class="button add-product-button"
                  @click="abrirFormularioProducto"
                >
                  <i class="fa-solid fa-plus"></i>
                  Agregar producto
                </button>
              </div>

              <div class="product-card-list">
                <article
                  v-for="item in productosDelUsuario"
                  :key="item.id"
                  class="product-card"
                >
                  <div class="product-card-photos">
                    <img :src="item.fotos[0].url" :alt="item.nombre" />
                  </div>

                  <div class="product-card-info">
                    <span class="product-category">
                      {{ nombreCategoria(item.categoria) }}
                    </span>
                    <h3>{{ item.nombre }}</h3>
                    <p>{{ item.descripcion }}</p>

                    <div class="product-card-actions">
                      <button
                        type="button"
                        class="button button-secondary"
                        @click="editarProducto(item)"
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                        Editar
                      </button>

                      <button
                        type="button"
                        class="button"
                        @click="eliminarProducto(item.id)"
                      >
                        <i class="fa-regular fa-trash-can"></i>
                        Eliminar
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </template>

        <!-- Formulario de productos -->
        <section v-if="mostrarFormulario" class="contact-section">
          <div id="formulario-producto" class="contact-content">
            <form
              ref="formProducto"
              class="contact-info"
              @submit.prevent="guardarProducto"
            >
              <div class="form-field">
                <label for="nombreProducto">Nombre del producto *</label>
                <input
                  id="nombreProducto"
                  v-model="producto.nombre"
                  type="text"
                  placeholder="Ej. Collar artesanal"
                  required
                />
              </div>

              <div class="form-field">
                <label for="categoriaProducto">Categoría *</label>
                <select
                  id="categoriaProducto"
                  v-model="producto.categoria"
                  required
                >
                  <option value="">Selecciona una categoría</option>
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

              <div class="form-field full">
                <label for="descripcionProducto">
                  Descripción del producto *
                </label>
                <textarea
                  id="descripcionProducto"
                  v-model="producto.descripcion"
                  placeholder="Describe tu producto, materiales, colores y detalles."
                  required
                ></textarea>
              </div>

              <!-- Img del producto -->
              <div class="form-field full">
                <label>Imágenes del producto *</label>

                <div class="logo-upload">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 13v8"></path>
                    <path d="m8 17 4-4 4 4"></path>
                    <path
                      d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
                    ></path>
                  </svg>

                  <strong :class="{ error: !!errorFotos }" aria-live="polite">
                    {{
                      errorFotos ||
                      (fotosSeleccionadas.length
                        ? "Fotos seleccionadas"
                        : "Sube las imágenes de tu producto")
                    }}
                  </strong>

                  <span>
                    {{
                      fotosSeleccionadas.length
                        ? `${fotosSeleccionadas.length} de 5 imágenes seleccionadas`
                        : "Formato .jpg o .png · Máximo 5 imágenes"
                    }}
                  </span>

                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    multiple
                    @change="seleccionarFotos"
                  />
                </div>

                <!-- Vista previa -->
                <div
                  v-if="fotosSeleccionadas.length"
                  class="product-photo-list"
                >
                  <div
                    v-for="(foto, index) in fotosSeleccionadas"
                    :key="foto.id"
                    class="product-photo-item"
                  >
                    <img :src="foto.url" :alt="foto.name" />

                    <button
                      type="button"
                      class="remove-photo-button"
                      aria-label="Quitar imagen"
                      @click="quitarFoto(index)"
                    >
                      <i class="fa-solid fa-xmark"></i>
                    </button>

                    <span>{{ foto.name }}</span>
                  </div>
                </div>
              </div>

              <div class="profile-buttons">
                <button type="submit" class="button">Guardar</button>

                <button
                  type="button"
                  class="button button-secondary"
                  @click="cancelarProducto"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </section>
      </template>

      <!-- Perfil público -->
      <template v-if="seccionActiva === 'publico'">
        <div class="profile-header">
          <h1>Perfil público</h1>
          <p>
            Aquí podrás visualizar cómo verán los visitantes el perfil de tu
            emprendimiento.
          </p>
        </div>

        <section class="contact-section">
          <div class="contact-content">
            <div v-if="logoGuardado" class="public-profile-logo">
              <img :src="logoGuardado" alt="Logo del emprendimiento" />
            </div>

            <h2>
              {{ perfil.emprendimiento || "Nombre de tu emprendimiento" }}
            </h2>

            <p>
              {{
                perfil.descripcion ||
                "Aquí aparecerá la descripción de tu emprendimiento."
              }}
            </p>

            <p v-if="perfil.nombreContacto">
              <strong>Contacto:</strong> {{ perfil.nombreContacto }}
            </p>

            <p v-if="perfil.correo">
              <strong>Correo electrónico:</strong> {{ perfil.correo }}
            </p>

            <p v-if="perfil.whatsapp">
              <strong>WhatsApp:</strong> {{ perfil.whatsapp }}
            </p>

            <p v-if="perfil.telefono">
              <strong>Teléfono:</strong> {{ perfil.telefono }}
            </p>

            <p v-if="perfil.tiendaFisica === 'si' && perfil.direccion">
              <strong>Dirección:</strong> {{ perfil.direccion }}
            </p>

            <p v-if="perfil.tiendaFisica === 'si' && perfil.horario">
              <strong>Horario:</strong> {{ perfil.horario }}
            </p>

            <div class="social-section">
              <div class="social-grid">
                <a
                  v-if="perfil.instagram"
                  :href="perfil.instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-label instagram-label"
                >
                  <i class="fa-brands fa-instagram"></i>
                  Instagram
                </a>

                <a
                  v-if="perfil.facebook"
                  :href="perfil.facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-label facebook-label"
                >
                  <i class="fa-brands fa-facebook"></i>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </section>

        <div class="profile-header">
          <h2>Productos publicados</h2>
          <hr />
        </div>

        <section
          v-if="productosDelUsuario.length"
          class="contact-section"
        >
          <div class="product-card-list">
            <article
              v-for="item in productosDelUsuario"
              :key="item.id"
              class="contact-content product-card"
            >
              <div class="product-card-photos">
                <img :src="item.fotos[0].url" :alt="item.nombre" />
              </div>

              <div class="product-card-info">
                <span class="product-category">
                  {{ nombreCategoria(item.categoria) }}
                </span>
                <h3>{{ item.nombre }}</h3>
                <p>{{ item.descripcion }}</p>
              </div>
            </article>
          </div>
        </section>

        <section v-else class="contact-section">
          <div class="contact-content">
            <p>Todavía no hay productos publicados.</p>
          </div>
        </section>
      </template>
    </main>
  </div>
</template>

<script setup>
import { reactive, ref, computed, nextTick } from "vue";
import { useRouter } from "vue-router";
import "../assets/profile.css";

const router = useRouter();

const mostrarFormulario = ref(false);
const seccionActiva = ref("perfil");
const nombreArchivoLogo = ref("");
const logoGuardado = ref("");
const errorLogo = ref("");
const formPerfil = ref(null);

const fotosSeleccionadas = ref([]);
const errorFotos = ref("");
const productoEditandoId = ref(null);
const formProducto = ref(null);

// Leer datos guardados 
function leerLocalStorage(clave, valorPredeterminado) {
  try {
    const valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) : valorPredeterminado;
  } catch (error) {
    console.error(`No se pudo leer ${clave}:`, error);
    return valorPredeterminado;
  }
}

const usuarioActivo = ref(
  leerLocalStorage("usuarioActivo", {
    nombre: "",
    correo: "",
  })
);

const perfilGuardado = usuarioActivo.value.perfil || {};

// Datos del perfil
const perfil = reactive({
  emprendimiento: perfilGuardado.emprendimiento || "",
  nombreContacto:
    perfilGuardado.nombreContacto || usuarioActivo.value.nombre || "",
  logo: perfilGuardado.logo || "",
  descripcion: perfilGuardado.descripcion || "",
  whatsapp: perfilGuardado.whatsapp || "",
  correo: perfilGuardado.correo || usuarioActivo.value.correo || "",
  telefono: perfilGuardado.telefono || "",
  tiendaFisica: perfilGuardado.tiendaFisica || "",
  direccion: perfilGuardado.direccion || "",
  horario: perfilGuardado.horario || "",
  instagram: perfilGuardado.instagram || "",
  facebook: perfilGuardado.facebook || "",
});

logoGuardado.value = perfil.logo;

// Datos del producto
const producto = reactive({
  nombre: "",
  categoria: "",
  descripcion: "",
});

const productos = ref(leerLocalStorage("productos", []));

// Identificador del usuario
function obtenerIdentificadorUsuario(usuario) {
  return usuario.id ?? usuario.correo ?? usuario.nombre;
}

// Productos del usuario 
const productosDelUsuario = computed(() => {
  const identificadorUsuario = obtenerIdentificadorUsuario(
    usuarioActivo.value
  );

  return productos.value.filter(
    (item) => item.usuarioId === identificadorUsuario
  );
});

// Guardar perfil
function guardarPerfil() {
  if (!formPerfil.value) return;

  errorLogo.value = "";

  if (!perfil.logo) {
    errorLogo.value = "Debes subir el logotipo de tu emprendimiento.";
    return;
  }

  if (!formPerfil.value.checkValidity()) {
    formPerfil.value.reportValidity();
    return;
  }

  try {
    const usuarioActualizado = {
      ...usuarioActivo.value,
      nombre: perfil.nombreContacto.trim(),
      correo: perfil.correo.trim(),
      perfil: { ...perfil },
    };

    const emprendedores = leerLocalStorage("emprendedores", []);

    const indice = emprendedores.findIndex((emprendedor) => {
      if (
        usuarioActualizado.id != null &&
        emprendedor.id != null
      ) {
        return emprendedor.id === usuarioActualizado.id;
      }

      return emprendedor.correo === usuarioActualizado.correo;
    });

    if (indice !== -1) {
      emprendedores[indice] = {
        ...emprendedores[indice],
        nombre: perfil.nombreContacto.trim(),
        correo: perfil.correo.trim(),
        perfil: { ...perfil },
      };

      localStorage.setItem(
        "emprendedores",
        JSON.stringify(emprendedores)
      );
    }

    localStorage.setItem(
      "usuarioActivo",
      JSON.stringify(usuarioActualizado)
    );

    usuarioActivo.value = usuarioActualizado;
    logoGuardado.value = perfil.logo;
    nombreArchivoLogo.value = "";
    errorLogo.value = "";

    alert("Tu perfil se guardó correctamente.");
  } catch (error) {
    console.error("Error al guardar el perfil:", error);

    alert(
      "No se pudo guardar el perfil. Comprueba el espacio disponible en el navegador e inténtalo de nuevo."
    );
  }
}

// Restablecer el último perfil guardado
function restablecerPerfil() {
  const guardado = usuarioActivo.value.perfil || {};

  perfil.emprendimiento = guardado.emprendimiento || "";
  perfil.nombreContacto =
    guardado.nombreContacto || usuarioActivo.value.nombre || "";
  perfil.logo = guardado.logo || "";
  perfil.descripcion = guardado.descripcion || "";
  perfil.whatsapp = guardado.whatsapp || "";
  perfil.correo = guardado.correo || usuarioActivo.value.correo || "";
  perfil.telefono = guardado.telefono || "";
  perfil.tiendaFisica = guardado.tiendaFisica || "";
  perfil.direccion = guardado.direccion || "";
  perfil.horario = guardado.horario || "";
  perfil.instagram = guardado.instagram || "";
  perfil.facebook = guardado.facebook || "";

  logoGuardado.value = perfil.logo;
  nombreArchivoLogo.value = "";
  errorLogo.value = "";

  const inputLogo = formPerfil.value?.querySelector(
    'input[type="file"]'
  );

  if (inputLogo) inputLogo.value = "";
}

// Seleccionar y validar el logotipo
function actualizarLogo(event) {
  const input = event.target;
  const archivo = input.files?.[0];

  if (!archivo) return;

  const formatosPermitidos = ["image/jpeg", "image/png"];

  if (!formatosPermitidos.includes(archivo.type)) {
    input.value = "";
    nombreArchivoLogo.value = "";
    errorLogo.value = "Solo se permiten imágenes JPG o PNG.";
    return;
  }

  errorLogo.value = "";

  const lector = new FileReader();

  lector.onload = () => {
    if (typeof lector.result === "string") {
      perfil.logo = lector.result;
      nombreArchivoLogo.value = archivo.name;
      errorLogo.value = "";
    }
  };

  lector.onerror = () => {
    nombreArchivoLogo.value = "";
    errorLogo.value =
      "No se pudo cargar el logotipo. Inténtalo de nuevo.";
  };

  lector.readAsDataURL(archivo);
}

// Quitar el logotipo
function quitarLogo() {
  perfil.logo = "";
  nombreArchivoLogo.value = "";
  errorLogo.value = "";

  const inputLogo = formPerfil.value?.querySelector(
    'input[type="file"]'
  );

  if (inputLogo) inputLogo.value = "";
}

// Abrir el formulario para crear un producto
async function abrirFormularioProducto() {
  productoEditandoId.value = null;
  producto.nombre = "";
  producto.categoria = "";
  producto.descripcion = "";
  fotosSeleccionadas.value = [];
  errorFotos.value = "";
  mostrarFormulario.value = true;

  await nextTick();

  document.getElementById("formulario-producto")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Editar un producto existente
async function editarProducto(item) {
  productoEditandoId.value = item.id;
  producto.nombre = item.nombre;
  producto.categoria = item.categoria;
  producto.descripcion = item.descripcion;

  fotosSeleccionadas.value = (item.fotos || []).map((foto) => ({
    ...foto,
  }));

  errorFotos.value = "";
  mostrarFormulario.value = true;

  await nextTick();

  document.getElementById("formulario-producto")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Seleccionar y validar fotografías.
async function seleccionarFotos(event) {
  const input = event.target;
  const archivos = Array.from(input.files || []);
  const formatosPermitidos = ["image/jpeg", "image/png"];

  errorFotos.value = "";

  if (fotosSeleccionadas.value.length + archivos.length > 5) {
    errorFotos.value =
      "Solo puedes seleccionar un máximo de 5 imágenes.";
    input.value = "";
    return;
  }

  if (
    archivos.some(
      (archivo) => !formatosPermitidos.includes(archivo.type)
    )
  ) {
    errorFotos.value = "Solo se permiten imágenes JPG o PNG.";
    input.value = "";
    return;
  }

  try {
    const nuevasFotos = await Promise.all(
      archivos.map(
        (archivo) =>
          new Promise((resolve, reject) => {
            const lector = new FileReader();

            lector.onload = () => {
              if (typeof lector.result !== "string") {
                reject(new Error("No se pudo leer una imagen."));
                return;
              }

              resolve({
                id: `${archivo.name}-${archivo.size}-${archivo.lastModified}-${Math.random()}`,
                name: archivo.name,
                url: lector.result,
              });
            };

            lector.onerror = () => {
              reject(new Error("No se pudo leer una imagen."));
            };

            lector.readAsDataURL(archivo);
          })
      )
    );

    fotosSeleccionadas.value.push(...nuevasFotos);
    errorFotos.value = "";
  } catch (error) {
    console.error("Error al cargar las fotos:", error);

    errorFotos.value =
      "No se pudieron cargar las imágenes. Inténtalo de nuevo.";
  }

  input.value = "";
}

// Quitar una fotografía
function quitarFoto(index) {
  if (
    index >= 0 &&
    index < fotosSeleccionadas.value.length
  ) {
    fotosSeleccionadas.value.splice(index, 1);
  }

  errorFotos.value = "";
}

// Limpiar fotografías seleccionadas
function limpiarFotos() {
  fotosSeleccionadas.value = [];
  errorFotos.value = "";
}

// Cancelar creación o edición
function cancelarProducto() {
  mostrarFormulario.value = false;
  productoEditandoId.value = null;
  producto.nombre = "";
  producto.categoria = "";
  producto.descripcion = "";
  limpiarFotos();

  if (formProducto.value) {
    formProducto.value.reset();
  }
}

// Guardar producto nuevo o actualizado
function guardarProducto() {
  errorFotos.value = "";

  // Siempre se exige al menos una imagen.
  if (fotosSeleccionadas.value.length === 0) {
    errorFotos.value =
      "Debes subir al menos una imagen del producto.";
    return;
  }

  if (!formProducto.value?.reportValidity()) {
    return;
  }

  const nuevoProducto = {
    id:
      productoEditandoId.value ??
      `${Date.now()}-${Math.random()}`,
    usuarioId: obtenerIdentificadorUsuario(usuarioActivo.value),
    nombre: producto.nombre.trim(),
    categoria: producto.categoria,
    descripcion: producto.descripcion.trim(),
    fotos: fotosSeleccionadas.value.map((foto) => ({
      id: foto.id,
      name: foto.name,
      url: foto.url,
    })),
  };

  try {
    const productosGuardados = leerLocalStorage("productos", []);

    const indice = productosGuardados.findIndex(
      (item) =>
        item.id === productoEditandoId.value &&
        item.usuarioId === nuevoProducto.usuarioId
    );

    if (indice !== -1 && productoEditandoId.value != null) {
      productosGuardados[indice] = {
        ...productosGuardados[indice],
        ...nuevoProducto,
      };
    } else {
      productosGuardados.push(nuevoProducto);
    }

    localStorage.setItem(
      "productos",
      JSON.stringify(productosGuardados)
    );

    productos.value = productosGuardados;

    producto.nombre = "";
    producto.categoria = "";
    producto.descripcion = "";
    productoEditandoId.value = null;

    limpiarFotos();
    mostrarFormulario.value = false;
  } catch (error) {
    console.error("Error al guardar el producto:", error);

    alert(
      "No se pudo guardar el producto. Comprueba el espacio disponible e inténtalo de nuevo."
    );
  }
}

// Eliminar producto
function eliminarProducto(id) {
  const confirmar = window.confirm(
    "¿Seguro que quieres eliminar este producto?"
  );

  if (!confirmar) return;

  const usuarioId = obtenerIdentificadorUsuario(usuarioActivo.value);

  const productosActualizados = productos.value.filter(
    (item) => !(item.id === id && item.usuarioId === usuarioId)
  );

  try {
    localStorage.setItem(
      "productos",
      JSON.stringify(productosActualizados)
    );

    productos.value = productosActualizados;

    if (productoEditandoId.value === id) {
      cancelarProducto();
    }
  } catch (error) {
    console.error("No se pudo eliminar el producto:", error);

    alert("No se pudo eliminar el producto. Inténtalo de nuevo.");
  }
}

// Mostrar el nombre de cada categoría
function nombreCategoria(categoria) {
  const categorias = {
    artesanias: "Artesanías",
    gastronomia: "Gastronomía",
    "productos-organicos": "Productos orgánicos",
    servicios: "Servicios",
    "moda-accesorios": "Moda y accesorios",
    "belleza-bienestar": "Belleza y bienestar",
    "hogar-decoracion": "Hogar y decoración",
    fitness: "Fitness",
  };

  return categorias[categoria] || categoria;
}

// Cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
  router.push("/login");
}
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
input[type="file"]::file-selector-button {
  margin-right: 0.8rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--primary);
  color: var(--white);
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

input[type="file"]::file-selector-button:hover {
  background-color: var(--primary-dark);
}

/* Redes sociales */
.social-media {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
} 
.social-media .facebook-icon {
  color: #1877F2;
}
.social-media .instagram-icon {
  color: #E1306C;
  
}
.social-media .instagram-icon, .facebook-icon {
  width: 50px;
  height: 50px;
  font-size: 35px;
  border-radius: 12px;
  margin-top: 10px;
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
