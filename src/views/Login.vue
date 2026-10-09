<template>
    <div class="login-page">
      <h1>Inicia sesión</h1>
  
      <p class="login-description">
        Accede al perfil de tu emprendimiento.
      </p>
  
      <form id="login-container" @submit.prevent="iniciarSesion">
  
        <label>Correo electrónico</label><br>
        <input type="email" id="email" v-model.trim="form.correo" placeholder="correo@ejemplo.com" :class="{ 'input-error': errores.correo }">
        <small v-if="errores.correo" class="error">{{ errores.correo }}</small>
  
        <label>Contraseña</label><br>
        <input type="password" id="password" v-model="form.password" placeholder="Mínimo 6 caracteres" :class="{ 'input-error': errores.password }">
        <small v-if="errores.password" class="error">{{ errores.password }}</small>
  
        <small v-if="mensajeError" class="error general-error">{{ mensajeError }}</small>
  
        <button type="submit">
          Iniciar sesión
        </button>
  
        <div class="register-link">
          <span>¿No tienes una cuenta?</span>
          <router-link to="/registro">Regístrate</router-link>
        </div>
  
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const form = reactive({
    correo: '',
    password: ''
  });
  
  const errores = reactive({
    correo: '',
    password: ''
  });
  
  const mensajeError = ref('');
  
  function validarFormulario() {
    errores.correo = '';
    errores.password = '';
    mensajeError.value = '';
  
    let valido = true;
  
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!form.correo) {
      errores.correo = 'El correo es obligatorio.';
      valido = false;
    } else if (!correoValido.test(form.correo)) {
      errores.correo = 'Ingresa un correo electrónico válido.';
      valido = false;
    }
  
    if (!form.password) {
      errores.password = 'La contraseña es obligatoria.';
      valido = false;
    } else if (form.password.length < 6) {
      errores.password = 'Debe tener al menos 6 caracteres.';
      valido = false;
    }
  
    return valido;
  }
  
  function iniciarSesion() {
    if (!validarFormulario()) {
      return;
    }
  
    const emprendedores = JSON.parse(localStorage.getItem('emprendedores')) || [];
  
    const emprendedor = emprendedores.find(
      usuario =>
        usuario.correo.toLowerCase() === form.correo.toLowerCase() &&
        usuario.password === form.password
    );
  
    if (!emprendedor) {
      mensajeError.value = 'Correo o contraseña incorrectos.';
      return;
    }
  
    localStorage.setItem(
      'usuarioActivo',
      JSON.stringify(emprendedor)
    );
  
    router.push('/profile');
  }
  </script>
  
  <style scoped>
  .login-page {
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
  
    font-family: 'Poppins', 'Google Sans', sans-serif !important;
    color: var(--text-dark);
    background-color: var(--background);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1.5rem;
  }
  
  .login-page * {
    font-family: inherit;
    box-sizing: border-box;
  }
  
  h1 {
    color: var(--text-dark);
    font-size: clamp(1.8rem, 4vw, 2.2rem);
    font-weight: 600;
    margin-bottom: 0.8rem;
    text-align: center;
  }
  
  .login-description {
    color: var(--text-light);
    font-size: 0.85rem;
    text-align: center;
    max-width: 400px;
    margin: 0 0 1.5rem;
  }
  
  #login-container {
    width: 100%;
    max-width: 420px;
    background-color: var(--white);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 2.5rem 2rem;
    box-shadow: 0 10px 25px -5px rgba(15, 118, 110, 0.05);
  }
  
  label {
    display: inline-block;
    width: 100%;
    color: var(--text-medium);
    font-size: 0.82rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    margin-top: 0.8rem;
    text-align: left;
  }
  
  #login-container label:first-of-type {
    margin-top: 0;
  }
  
  input {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border);
    border-radius: 0.65rem;
    background-color: var(--background);
    color: var(--text-dark);
    font-size: 0.82rem;
    outline: none;
    transition: border-color 0.2s ease, background-color 0.2s ease;
  }
  
  input:focus {
    border-color: var(--primary);
    background-color: var(--white);
  }
  
  .input-error {
    border-color: #dc2626;
    background-color: #fef2f2;
  }
  
  .input-error:focus {
    border-color: #dc2626;
    background-color: #fef2f2;
  }
  
  button {
    width: 100%;
    margin-top: 1.8rem;
    padding: 0.85rem 1.2rem;
    border: none;
    border-radius: 0.65rem;
    background-color: var(--primary);
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }
  
  button:hover {
    background-color: var(--primary-dark);
  }
  
  button:active {
    transform: scale(0.98);
  }
  
  .error {
    display: block;
    margin-top: 0.1rem;
    color: #dc2626;
    font-size: 0.7rem;
    text-align: left;
  }
  
  .general-error {
    margin-top: 1rem;
    text-align: center;
  }
  
  .register-link {
    margin-top: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    color: var(--text-light);
  }
  
  .register-link a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
  }
  
  .register-link a:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
  
  @media (max-width: 480px) {
    #login-container {
      padding: 1.8rem 1.2rem;
    }
  }
  </style>