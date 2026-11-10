<template>
  <div class="admin-dashboard">
    <!-- Encabezado del Panel -->
    <header class="admin-header">
      <span class="section-tag">Panel de control</span>
      <h1>Dashboard de Administración</h1>
      <p>Gestiona los usuarios, emprendimientos y productos registrados en la plataforma.</p>
    </header>

    <!-- Tarjetas de Estadísticas -->
    <section class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon"><i class="fa-solid fa-store"></i></div>
        <div class="stat-info">
          <small>Emprendimientos</small>
          <strong>{{ emprendedores.length }}</strong>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon"><i class="fa-solid fa-box-open"></i></div>
        <div class="stat-info">
          <small>Productos Totales</small>
          <strong>{{ productos.length }}</strong>
        </div>
      </div>
    </section>

    <!-- Sección de Gestión de Emprendedores -->
    <section class="admin-section">
      <div class="section-title">
        <h2>Emprendedores Registrados</h2>
        <span>{{ emprendedores.length }} registros</span>
      </div>

      <div class="table-container" v-if="emprendedores.length">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Nombre / Negocio</th>
              <th>Contacto</th>
              <th>Categoría / Tienda</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(emp, index) in emprendedores" :key="emp.id || index">
              <td>
                <strong>{{ emp.perfil?.emprendimiento || emp.nombre || 'Sin nombre' }}</strong>
                <small class="sub-text">{{ emp.correo }}</small>
              </td>
              <td>{{ emp.perfil?.whatsapp || emp.perfil?.telefono || 'No registrado' }}</td>
              <td>
                <span class="badge">
                  {{ emp.perfil?.tiendaFisica === 'si' ? 'Tienda física' : 'En línea' }}
                </span>
              </td>
              <td>
                <button class="btn-delete" @click="eliminarEmprendedor(index)" title="Eliminar registro">
                  <i class="fa-solid fa-trash-can"></i> Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="empty-box">
        <p>No hay emprendedores registrados en el sistema.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emprendedores = ref([])
const productos = ref([])

function cargarDatos() {
  try {
    const empGuardados = localStorage.getItem('emprendedores')
    emprendedores.value = empGuardados ? JSON.parse(empGuardados) : []

    const prodGuardados = localStorage.getItem('productos')
    productos.value = prodGuardados ? JSON.parse(prodGuardados) : []
  } catch (error) {
    console.error('Error al cargar datos del almacenamiento:', error)
  }
}

function eliminarEmprendedor(index) {
  if (confirm('¿Estás seguro de eliminar este emprendimiento?')) {
    emprendedores.value.splice(index, 1)
    localStorage.setItem('emprendedores', JSON.stringify(emprendedores.value))
  }
}

onMounted(() => {
  cargarDatos()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.admin-dashboard {
  --primary: #0d9488;
  --primary-dark: #0f766e;
  --text-dark: #17201f;
  --text-medium: #465452;
  --text-light: #687572;
  --background: #f7f9f8;
  --white: #ffffff;
  --border: #e2e8e6;
  --danger: #dc2626;

  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background-color: var(--background);
  color: var(--text-dark);
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

.admin-dashboard * {
  box-sizing: border-box;
}

/* Encabezado */
.admin-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
}

.section-tag {
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.admin-header h1 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin: 0.3rem 0;
}

.admin-header p {
  color: var(--text-light);
  font-size: 0.88rem;
}

/* Estadísticas */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 0.85rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

.stat-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e6f5f3;
  color: var(--primary-dark);
  border-radius: 0.65rem;
  font-size: 1.2rem;
}

.stat-info small {
  display: block;
  font-size: 0.75rem;
  color: var(--text-light);
  font-weight: 600;
}

.stat-info strong {
  font-size: 1.3rem;
  color: var(--text-dark);
}

/* Secciones de la tabla */
.admin-section {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.8rem;
}

.section-title h2 {
  font-size: 1.1rem;
  color: var(--text-dark);
  margin: 0;
}

.section-title span {
  font-size: 0.78rem;
  color: var(--primary-dark);
  background: #e6f5f3;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-weight: 600;
}

/* Tabla simple */
.table-container {
  overflow-x: auto;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.85rem;
}

.admin-table th {
  background: var(--background);
  color: var(--text-medium);
  padding: 0.75rem;
  font-weight: 600;
  border-bottom: 1px solid var(--border);
}

.admin-table td {
  padding: 0.85rem 0.75rem;
  border-bottom: 1px solid var(--border);
  color: var(--text-dark);
}

.sub-text {
  display: block;
  color: var(--text-light);
  font-size: 0.75rem;
}

.badge {
  background: #e6f5f3;
  color: var(--primary-dark);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 500;
}

.btn-delete {
  background: #fef2f2;
  color: var(--danger);
  border: 1px solid #fecaca;
  padding: 0.4rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-delete:hover {
  background: var(--danger);
  color: #fff;
}

.empty-box {
  text-align: center;
  padding: 2rem;
  color: var(--text-light);
  font-size: 0.85rem;
}
</style>