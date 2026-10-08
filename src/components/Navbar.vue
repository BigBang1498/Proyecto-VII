<template>
    <header class="navbar">
      <div class="logo">
        <span>Hecho en</span>
        <strong>Puerto Morelos</strong>
      </div>
  
      <nav class="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#directorio">Explorar</a>
        <a href="#categorias">Categorías</a>
        <router-link to="/registro" class="btn-emprendedor">Soy emprendedor</router-link>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .navbar {
    --primary: #0d9488;
    --primary-dark: #0f766e;
    --text-dark: #17201f;
    --text-medium: #465452;
    --white: #ffffff;
    --border: #e2e8e6;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 5%;
    background-color: var(--white);
    border-bottom: 1px solid var(--border);
    font-family: 'Poppins', 'Google Sans', sans-serif;
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
  }
  </style>