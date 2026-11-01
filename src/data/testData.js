// Cargar imágenes 
const assets = import.meta.glob('../assets/*', {
    eager: true,
    query: '?url',
    import: 'default'
  })
  
  // Buscar una imagen por su nombre
  const obtenerImagen = (nombre) => {
    const imagen = Object.entries(assets).find(([ruta]) => {
      const nombreArchivo = ruta.split('/').pop().replace(/\.[^/.]+$/, '')
      return nombreArchivo === nombre
    })
  
    return imagen ? imagen[1] : ''
  }
  
  // Emprendedores de prueba
  export const testEntrepreneurs = [
    {
      id: 'test-001',
      correo: 'tierra@gmail.com',
      nombre: 'Adela',
      perfil: {
        emprendimiento: 'Tierra',
        nombreContacto: 'Adela Medina',
        descripcion:
          'En Tierra creamos piezas de cerámica hechas con amor, inspiradas en la belleza de la naturaleza y la calidez de lo hecho a mano. Cada pieza tiene su propia esencia, combinando formas, texturas y detalles únicos que transforman los momentos cotidianos en algo especial.',
        whatsapp: '3334891639',
        tiendaFisica: false,
        direccion: '',
        horario: '',
        logo: obtenerImagen('img-brand1')
      }
    },
    {
      id: 'test-002',
      correo: 'cornercafe@prueba.com',
      nombre: 'Sofía',
      perfil: {
        emprendimiento: 'Corner Café',
        nombreContacto: 'Sofía Ramírez',
        descripcion:
          'En Corner Café nos encanta crear momentos especiales alrededor de una buena taza de café. Ofrecemos bebidas preparadas al momento, repostería artesanal y un espacio acogedor para disfrutar, trabajar o compartir con amigos.',
        whatsapp: '9981234567',
        tiendaFisica: true,
        direccion: 'Avenida Niños Héroes 44',
        horario: 'Lunes a sábado, de 8:00 a.m. a 8:00 p.m.',
        logo: obtenerImagen('img-brand2')
      }
    },
    {
      id: 'test-003',
      correo: 'lasierra@prueba.com',
      nombre: 'Valeria',
      perfil: {
        emprendimiento: 'La Sierra',
        nombreContacto: 'Valeria Torres',
        descripcion:
          'La Sierra es un espacio dedicado al bienestar y la relajación. Ofrecemos tratamientos faciales, masajes relajantes y experiencias de spa pensadas para renovar tu energía y regalarte un momento de tranquilidad.',
        whatsapp: '9982345678',
        tiendaFisica: true,
        direccion: 'Calle Javier Rojo Gómez 222',
        horario: 'Lunes a sábado, de 9:00 a.m. a 7:00 p.m.',
        logo: obtenerImagen('img-brand3')
      }
    },
    {
      id: 'test-004',
      correo: 'luzboreal@prueba.com',
      nombre: 'Fernanda',
      perfil: {
        emprendimiento: 'Luz Boreal',
        nombreContacto: 'Fernanda Castillo',
        descripcion:
          'En Luz Boreal encontrarás ropa para bebé diseñada para acompañar sus primeros momentos. Ofrecemos prendas cómodas, suaves y llenas de encanto, con diseños delicados y materiales pensados para cuidar la piel de los más pequeños.',
        whatsapp: '9983456789',
        tiendaFisica: false,
        direccion: '',
        horario: '',
        logo: obtenerImagen('img-brand4')
      }
    },
    {
      id: 'test-005',
      correo: 'chic@prueba.com',
      nombre: 'Camila',
      perfil: {
        emprendimiento: 'Chic',
        nombreContacto: 'Camila Fernández',
        descripcion:
          'En Chic encontrarás las últimas tendencias en moda femenina. Ofrecemos prendas modernas, versátiles y llenas de estilo para mujeres que disfrutan expresar su personalidad a través de la ropa. Encuentra tus nuevos looks favoritos y luce increíble en cualquier ocasión.',
        whatsapp: '9984567890',
        tiendaFisica: false,
        direccion: '',
        horario: '',
        logo: obtenerImagen('img-brand5')
      }
    }
  ]
  
  // Productos de prueba
  export const testProducts = [
    {
      id: 'test-prod-001',
      usuarioId: 'test-001',
      nombre: 'Jarrón grande terracota',
      descripcion:
        'Jarrón grande de terracota con acabado brillante y un diseño redondeado que destaca por sus dos asas laterales y su abertura estrecha. Su barniz reactivo, aplicado parcialmente a mano, crea matices únicos que hacen de cada pieza algo especial. Ideal para darle un toque artesanal y lleno de personalidad a cualquier rincón de tu hogar.',
      categoria: 'Artesanías',
      imagen: obtenerImagen('img-product1')
    },
    {
      id: 'test-prod-002',
      usuarioId: 'test-002',
      nombre: 'Latte de la casa',
      descripcion:
        'Café espresso preparado con leche cremosa y una delicada capa de espuma. Una bebida suave y reconfortante, perfecta para comenzar el día.',
      categoria: 'Alimentos y bebidas',
      imagen: obtenerImagen('img-product2')
    },
    {
      id: 'test-prod-003',
      usuarioId: 'test-002',
      nombre: 'Cheesecake de frutos rojos',
      descripcion:
        'Pastel de queso de textura cremosa con una base crujiente y una cobertura de frutos rojos. Preparado artesanalmente para acompañar tu café favorito.',
      categoria: 'Alimentos y bebidas',
      imagen: obtenerImagen('img-product3')
    },
    {
      id: 'test-prod-004',
      usuarioId: 'test-003',
      nombre: 'Masaje relajante',
      descripcion:
        'Experiencia de relajación corporal con movimientos suaves y aceites aromáticos. Ideal para liberar tensiones y disfrutar de un momento de descanso.',
      categoria: 'Servicios',
      imagen: obtenerImagen('img-product4')
    },

    {
      id: 'test-prod-006',
      usuarioId: 'test-004',
      nombre: 'Conjunto osito',
      descripcion:
        'Conjunto para bebé de tela suave y cómoda, compuesto por una blusita y un pantaloncito con un tierno diseño de osito. Ideal para el uso diario.',
      categoria: 'Ropa y accesorios',
      imagen: obtenerImagen('img-product6')
    },
    {
      id: 'test-prod-007',
      usuarioId: 'test-005',
      nombre: 'Top con estola',
      descripcion:
        'Top de diseño moderno y elegante, ideal para combinar con jeans, faldas o pantalones de vestir. Una prenda versátil para crear looks casuales o sofisticados.',
      categoria: 'Ropa y accesorios',
      imagen: obtenerImagen('img-product7')
    }
  ]