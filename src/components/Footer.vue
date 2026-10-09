<template>
    <footer class="footer">
      <div class="footer-content">
  
        <div class="footer-logo">
          <strong>Hecho en Puerto Morelos</strong>
          <p>Conectando talento, comunidad y comercio local.</p>
        </div>
  
        <div class="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#categorias">Categorías</a>
          <a href="#registro">Registrarse</a>
        </div>
  
      </div>
  
      <div class="footer-bottom">
        <span>© 2026 Hecho en Puerto Morelos</span>
      </div>
    </footer>
  </template>

<style>
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
</style>