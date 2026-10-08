<template>
  <div class="register-page">
    <h1>Crea tu cuenta</h1>

    <p class="register-description">
      Completa tus datos para crear el perfil de tu emprendimiento.
    </p>

    <form id="register-container" @submit.prevent="registrar">

      <label>Nombre</label><br>
      <input id="name" type="text" v-model.trim="form.nombre" placeholder="Tu nombre completo">
      <small v-if="errores.nombre" class="error">{{ errores.nombre }}</small>

      <label>Usuario</label><br>
      <input id="user" type="text" v-model.trim="form.usuario" placeholder="Nombre de usuario">
      <small v-if="errores.usuario" class="error">{{ errores.usuario }}</small>

      <label>Correo electrónico</label><br>
      <input type="email" id="email" v-model.trim="form.correo" placeholder="correo@ejemplo.com">
      <small v-if="errores.correo" class="error">{{ errores.correo }}</small>

      <label>Contraseña</label><br>
      <input type="password" id="password" v-model="form.password" placeholder="Mínimo 6 caracteres">
      <small v-if="errores.password" class="error">{{ errores.password }}</small>

      <label>Confirmar contraseña</label><br>
      <input type="password" id="confirm-password" v-model="form.confirmarPassword" placeholder="Repite tu contraseña">
      <small v-if="errores.confirmarPassword" class="error">{{ errores.confirmarPassword }}</small>

      <small v-if="mensajeExito" class="success">{{ mensajeExito }}</small>

      <button type="submit">
        Registrarse
      </button>

      <div class="login-link">
        <span>¿Ya tienes una cuenta?</span>
        <router-link to="/login">Inicia sesión</router-link>
      </div>

    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
  nombre: '',
  usuario: '',
  correo: '',
  password: '',
  confirmarPassword: ''
});

const errores = reactive({
  nombre: '',
  usuario: '',
  correo: '',
  password: '',
  confirmarPassword: ''
});

const mensajeExito = ref('');

function validarFormulario() {
  errores.nombre = '';
  errores.usuario = '';
  errores.correo = '';
  errores.password = '';
  errores.confirmarPassword = '';

  let valido = true;

  // Nombre
  if (!form.nombre) {
    errores.nombre = 'El nombre es obligatorio.';
    valido = false;
  }

  // Usuario
  if (!form.usuario) {
    errores.usuario = 'El usuario es obligatorio.';
    valido = false;
  }

  // Correo
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!form.correo) {
    errores.correo = 'El correo es obligatorio.';
    valido = false;
  } else if (!correoValido.test(form.correo)) {
    errores.correo = 'Ingresa un correo electrónico válido.';
    valido = false;
  }

// Contraseña
if (!form.password) {
  errores.password = 'La contraseña es obligatoria.';
  valido = false;
} else if (form.password.length < 6) {
  errores.password = 'Debe tener al menos 6 caracteres.';
  valido = false;
} 

  // Confirmar contraseña
  if (!form.confirmarPassword) {
    errores.confirmarPassword = 'Confirma tu contraseña.';
    valido = false;
  } else if (form.password !== form.confirmarPassword) {
    errores.confirmarPassword = 'Las contraseñas no coinciden.';
    valido = false;
  }

  return valido;
}

function registrar() {
  mensajeExito.value = '';

  if (!validarFormulario()) {
    return;
  }

  const emprendedores = JSON.parse(localStorage.getItem('emprendedores')) || [];

  const correoExiste = emprendedores.some(
    emprendedor => emprendedor.correo.toLowerCase() === form.correo.toLowerCase()
  );

  if (correoExiste) {
    errores.correo = 'Este correo ya está registrado.';
    return;
  }


  const nuevoEmprendedor = {
    id: Date.now(),
    nombre: form.nombre,
    usuario: form.usuario,
    correo: form.correo,
    password: form.password
  };

  emprendedores.push(nuevoEmprendedor);

  localStorage.setItem(
    'emprendedores',
    JSON.stringify(emprendedores)
  );

  mensajeExito.value = 'Usuario registrado';

  form.nombre = '';
  form.usuario = '';
  form.correo = '';
  form.password = '';
  form.confirmarPassword = '';

  setTimeout(() => {
    router.push('/login');
  }, 1200);
}
</script>

<style scoped>
.register-page {
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

.register-page * {
  font-family: inherit;
  box-sizing: border-box;
}

h1 {
  color: var(--text-dark);
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 600;
  margin-bottom: 1.4rem;
  text-align: center;
}

.register-description {
  color: var(--text-light);
  font-size: 0.85rem;
  text-align: center;
  max-width: 400px;
  margin: 0 0 1.5rem;
}

#register-container {
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

#register-container label:first-of-type {
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

.success {
  display: block;
  margin-top: 1rem;
  color: var(--primary-dark);
  font-size: 0.8rem;
  text-align: center;
}

.login-link {
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: var(--text-light);
}

.login-link a {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
}

.login-link a:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

@media (max-width: 480px) {
  #register-container {
    padding: 1.8rem 1.2rem;
  }
}
</style>