<template>
<div class="register-page">
    <h1>Registrate</h1>
    <form id="register-container">
        <label>Nombre: </label><br>
        <input id="name"><br>
        <label>Usuario: </label><br>
        <input id="user"><br>
        <label>Correo: </label><br>
        <input type="email" id="email"><br>
        <label>Contraseña: </label><br>
        <input type=password id="password"><br>
        <button type="button">Registrarse</button>
    </form>
</div>
</template>
<script setup>

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
  margin-bottom: 1.5rem;
  text-align: center;
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
  color: var(--text-medium);
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  margin-top: 0.8rem;
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
  font-size: 0.88rem;
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

@media (max-width: 480px) {
  #register-container {
    padding: 1.8rem 1.2rem;
  }
}
</style>