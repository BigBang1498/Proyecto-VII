// Cargar imágenes de los bazares
const assetsBazares = import.meta.glob('../assets/bazares/*', {
    eager: true,
    query: '?url',
    import: 'default'
  })
  
  // Buscar una imagen por su nombre
  const obtenerImagenBazar = (nombre) => {
    const imagen = Object.entries(assetsBazares).find(([ruta]) => {
      const nombreArchivo = ruta.split('/').pop().replace(/\.[^/.]+$/, '')
      return nombreArchivo === nombre
    })
  
    return imagen ? imagen[1] : ''
  }

  // Catálogo de bazares de prueba
  export const testBazares = [
    {
      id: 'test-b01',
      nombre: 'Origen Bazar',
      perfil: {
        bazar: 'Origen Bazar',
        descripcion:
          'Origen Bazar es un espacio que busca promover la creatividad y el talento local, ofreciendo un espacio para que artesanos y emprendedores exhiban sus productos únicos. Nuestro objetivo es crear una comunidad donde la innovación y la tradición se encuentren, brindando a los visitantes una experiencia de compra enriquecedora y memorable.',
        proximaFecha: '28 de noviembre',
        horario: '11:00 - 21:00',
        costoDeEntrada: 'Entrada libre',
        ubicacion: 'Avenida Niños Héroes 44, Col. Centro, C.P. 97000',
        logo: obtenerImagenBazar('img-logo1')
      }
    },
    {
      id: 'test-b02',
      nombre: 'Impulsa Bazar',
      perfil: {
        bazar: 'Impulsa Bazar',
        descripcion:
          'Impulsa Bazar es un evento que tiene como objetivo apoyar a emprendedores locales, brindándoles un espacio para mostrar sus productos y servicios. Nos enfocamos en la innovación y la sostenibilidad.',
        proximaFecha: '3 de diciembre',
        horario: '10:00 - 15:00',
        costoDeEntrada: 'Entrada libre',
        ubicacion: 'Calle 60 #123, Col. Centro, C.P. 97000',
        logo: obtenerImagenBazar('img-logo2')
      }
    },
    {
      id: 'test-b03',
      nombre: 'Go Green local market',
      perfil: {
        bazar: 'Go Green local market',
        descripcion:
          'Go Green local market es un espacio para que productores locales muestren sus productos ecológicos y artesanales.',
        proximaFecha: '5 de diciembre',
        horario: '12:00 - 18:00',
        costoDeEntrada: 'Entrada libre',
        ubicacion: 'Calle 45 #456, entre 45 y 46, C.P. 97000',
        logo: obtenerImagenBazar('img-logo3')
      }
    },
    {
      id: 'test-b04',
      nombre: 'Bazar con Causa',
      perfil: {
        bazar: 'Bazar con Causa',
        descripcion:
          'Bazar con Causa es un evento que busca apoyar a organizaciones sin fines de lucro, ofreciendo un espacio para que vendan sus productos y recauden fondos para sus causas.',
        proximaFecha: '30 de noviembre',
        horario: '08:00 - 12:00',
        costoDeEntrada: 'Entrada libre',
        ubicacion: 'Calle 50 #789, Av. Timón, C.P. 97000',
        logo: obtenerImagenBazar('img-logo4')
      }
    },
    {
      id: 'test-b05',
      nombre: 'Pop Up Market',
      perfil: {
        bazar: 'Pop Up Market',
        descripcion:
          'Pop Up Market crea espacios para que marcas y emprendimientos exhiban, vendan y conecten con nuevos clientes.',
        proximaFecha: '5 de diciembre',
        horario: '08:00 - 16:00',
        costoDeEntrada: 'Entrada libre',
        ubicacion: 'Av. 20 de Noviembre #123, C.P. 97000',
        logo: obtenerImagenBazar('img-logo5')
      }
    }
  ]