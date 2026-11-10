<template>
  <div v-if="bazar" class="detalle-container">
    <header class="header-detalle">
      <img :src="bazar.perfil.logo" :alt="bazar.nombre" class="logo-detalle" /><br>
      <h1>{{ bazar.nombre }}</h1><br>
    </header>

    <div class="info-completa">
      <p><strong>Próxima Fecha:</strong> {{ bazar.perfil.proximaFecha }}</p>
      <p><strong>Horario:</strong> {{ bazar.perfil.horario }}</p>
      <p><strong>Costo de Entrada:</strong> {{ bazar.perfil.costoDeEntrada }}</p>
      <p><strong>Ubicación:</strong> {{ bazar.perfil.ubicacion }}</p>
      <hr /><br>

      <h3>Descripción:</h3><br>
      <p>{{ bazar.perfil.descripcion }}</p>
    </div>

    <router-link to="/eventos" class="btn-volver">← Volver a Bazares y Eventos</router-link>
  </div>
  <div v-else>
    <p>Bazar no encontrado.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { testBazares } from '../data/testBazares.js'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// Buscar el bazar por ID[cite: 1]
const bazar = computed(() => testBazares.find((b) => b.id === props.id))
</script>

<style scoped>



.detalle-container {
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
  margin-top: 6rem;
  padding: 1.5rem;
  overflow-x: hidden;
  background: var(--background);
  color: var(--text-dark);
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

.header-detalle h1 {
  margin: 0.4rem 0 0.8rem;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  color: var(--primary);
  font-family: 'Poppins', sans-serif;
}

.logo-detalle {
  max-width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}
.btn-volver {
  display: inline-block;
  margin-top: 1.5rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: bold;
}
</style>