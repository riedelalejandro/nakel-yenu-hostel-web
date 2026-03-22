export const siteConfig = {
  business: {
    name: 'NAKEL YENU HOSTEL',
    tagline: 'Tu base en la Patagonia, con alma tehuelche',
    description:
      'Hostel con identidad patagónica auténtica, ambiente relajado, vistas al Lago Argentino y ubicación a 5–10 minutos caminando del centro de El Calafate.',
    phone: '02966 25-3185',
    whatsapp: '+54 2966 253185',
    // TODO: email contacto
    email: null,
    address: 'Puerto San Julián 244, El Calafate, Santa Cruz, Argentina',
    instagram: 'https://www.instagram.com/nakelyenu/',
    facebook: 'https://www.facebook.com/p/Hostel-Nakel-Yenu-100054245180433/',
  },

  hero: {
    headline: 'Tu base en la Patagonia, con alma tehuelche',
    subheadline:
      'En el corazón de El Calafate, a minutos del centro y con vistas panorámicas al Lago Argentino. Nakel Yenu es el lugar donde los viajeros se encuentran, descansan y parten a los glaciares.',
    ctaPrimary: { label: 'Reservar ahora', href: '#contacto' },
    ctaSecondary: { label: 'Ver habitaciones', href: '#precios' },
    socialProof: '+275 reseñas · 4.5★ · Valorado 8.7/10 en Hostelworld',
    heroImage: '/images/hero.jpg',
    heroAlt: 'Vista panorámica del Lago Argentino desde el Hostel Nakel Yenu, El Calafate',
  },

  problem: {
    title: '¿Qué te preocupa antes de reservar en El Calafate?',
    pains: [
      {
        icon: 'CircleDollarSign',
        title: 'Comisiones de plataformas',
        description:
          'Booking y Hostelworld se quedan con hasta un 15% de tu reserva y a veces la disponibilidad no es real.',
      },
      {
        icon: 'ChefHat',
        title: 'Cocina equipada de verdad',
        description:
          'En el destino más caro de Argentina, necesitás saber si podés cocinar para ahorrar en comidas.',
      },
      {
        icon: 'Wifi',
        title: 'WiFi para gestionar excursiones',
        description:
          'Necesitás conexión estable para reservar el glaciar, el minitrekking o el Big Ice sin perder cupos.',
      },
      {
        icon: 'Clock',
        title: 'Llegada tarde de noche',
        description:
          'Tu bus o vuelo llega tarde y no sabés si vas a poder hacer check-in sin quedarte en la calle.',
      },
      {
        icon: 'MapPin',
        title: 'Ubicación real vs lo que prometen',
        description:
          'En una ciudad sin transporte frecuente, estar lejos del centro o la terminal puede arruinar el viaje.',
      },
    ],
  },

  solution: {
    title: 'Nakel Yenu tiene todo lo que necesitás, sin pagar de más',
    features: [
      {
        icon: 'Mountain',
        name: 'Vistas panorámicas al Lago Argentino',
        benefit:
          'Despertás en la Patagonia de verdad, con el lago y el Cerro Calafate frente a tus ojos, sin pagar precio de hotel boutique.',
      },
      {
        icon: 'ChefHat',
        name: 'Cocina completamente equipada + parrilla BBQ',
        benefit:
          'Cocinás tus propias comidas y ahorrás en el destino más caro de la Argentina turística. La cocina está limpia y bien equipada.',
      },
      {
        icon: 'Coffee',
        name: 'Desayuno continental incluido',
        benefit:
          'Salís a los glaciares con el tanque lleno: pan, jugo, infusiones y galletitas todos los días, sin costo extra.',
      },
      {
        icon: 'BedDouble',
        name: 'Dormitorios de 4 camas con lockers + privadas',
        benefit:
          'Elegís la opción que se adapta a tu presupuesto sin resignar seguridad ni privacidad cuando la necesitás.',
      },
      {
        icon: 'Users',
        name: 'Quincho social + música',
        benefit:
          'Conocés otros viajeros, compartís tips para el glaciar y armás grupos. El hostel tiene vibra relajada y buena música.',
      },
    ],
  },

  gallery: {
    title: 'Tu tribu en El Calafate',
    subtitle: 'Donde cada viajero encuentra su lugar antes de salir a los glaciares',
    images: [
      {
        src: '/images/gallery/01.jpg',
        alt: 'Vista panorámica del Lago Argentino y el Cerro Calafate desde el hostel Nakel Yenu al atardecer',
        caption: 'Vistas que no se olvidan',
        featured: true,
      },
      {
        src: '/images/gallery/02.jpg',
        alt: 'Área común quincho del hostel con viajeros compartiendo mesa y sillas de madera',
        caption: 'El quincho: donde se arman las mejores historias',
        featured: false,
      },
      {
        src: '/images/gallery/03.jpg',
        alt: 'Dormitorio de 4 camas con pisos de madera, lockers y ventana con luz natural',
        caption: 'Cómodo, limpio y con todo lo que necesitás',
        featured: false,
      },
      {
        src: '/images/gallery/04.jpg',
        alt: 'Cocina equipada del hostel con mesada, utensilios y parrilla disponible para huéspedes',
        caption: 'Cocinás vos y ahorrás para más glaciares',
        featured: false,
      },
    ],
  },

  socialProof: {
    testimonials: [
      {
        // TODO: buscar nombre real en Booking.com o Hostelworld
        name: 'Viajero internacional',
        role: 'Huésped verificado',
        photo: null,
        quote:
          'A really clean hostel with a great dining area and nice facilities, with a very social atmosphere and very reasonably priced for Patagonia.',
      },
      {
        // TODO: buscar nombre real en Booking.com o Hostelworld
        name: 'Mochilero europeo',
        role: 'Huésped verificado',
        photo: null,
        quote:
          'The place is fantastic — lovely building, nice rooms, quiet, good kitchen amenities and clean bathrooms, with great location, only a 5–10 minute walk to all shops and restaurants.',
      },
      {
        // TODO: buscar nombre real en Booking.com o Hostelworld
        name: 'Viajero independiente',
        role: 'Huésped verificado',
        photo: null,
        quote:
          'Nakel Yenu has a super relaxed vibe, a cosy atmosphere, and great music — the perfect place to unwind after a day of trekking or hiking.',
      },
    ],
    metrics: [
      {
        value: '+275',
        label: 'reseñas en Google',
        sub: '4.5★ de satisfacción',
      },
      {
        value: '8.7',
        label: '/10 en Hostelworld',
        sub: 'sobre 1.941 reseñas',
      },
      {
        value: '9.2',
        label: '/10 relación precio-calidad',
        sub: 'en Booking.com',
      },
    ],
  },

  pricing: {
    title: 'Precios directos, sin comisiones',
    subtitle: 'Reservar directo te sale más barato — y podemos coordinar todo lo que necesitás.',
    plans: [
      {
        name: 'Cama en Dormitorio Compartido',
        price: 'Desde USD 19',
        period: 'por noche',
        featured: false,
        badge: null,
        includes: [
          'Cama en dormitorio de 4 personas con locker',
          'Desayuno continental',
          'WiFi gratuito',
          'Uso de cocina equipada y parrilla BBQ',
          'Ropa de cama',
        ],
        cta: 'Reservar cama',
        ctaHref: '#contacto',
      },
      {
        name: 'Habitación Privada',
        price: 'Desde USD 54',
        period: 'por noche',
        featured: true,
        badge: 'Más elegida',
        includes: [
          'Habitación doble, triple o cuádruple',
          'Baño privado o compartido según tipo',
          'Desayuno continental',
          'WiFi gratuito',
          'Uso de cocina equipada y parrilla BBQ',
          'Ropa de cama y limpieza periódica',
        ],
        cta: 'Reservar habitación',
        ctaHref: '#contacto',
      },
    ],
    guarantee: 'Mejor precio al reservar directo — sin comisiones de plataforma',
  },

  faq: [
    {
      question: '¿Dónde está ubicado el hostel y cómo llego desde la terminal o el aeropuerto?',
      answer:
        'Estamos en Puerto San Julián 244, a 5–10 minutos caminando del centro de El Calafate y de la terminal de ómnibus. El aeropuerto Armando Tola está a unos 20 minutos en auto. Podés llegar a pie o en remís; te ayudamos a coordinar el traslado si lo necesitás.',
    },
    {
      question: '¿El hostel organiza o ayuda a reservar excursiones al Glaciar Perito Moreno?',
      answer:
        'Sí. Desde la recepción podés consultar sobre excursiones al Glaciar Perito Moreno (pasarelas, minitrekking, Big Ice) y te orientamos sobre operadoras, precios y logística. Los pick-ups para excursiones se coordinan desde el hostel.',
    },
    {
      question: '¿Qué incluye el precio de la estadía? ¿Hay desayuno?',
      answer:
        'Todas las estadías incluyen desayuno continental diario (pan, jugo, infusiones y galletitas), WiFi gratuito y acceso a la cocina completamente equipada con parrilla BBQ. Los dormitorios incluyen locker para guardar tus pertenencias con seguridad.',
    },
    {
      question: '¿Puedo llegar tarde? ¿Qué pasa si mi bus o vuelo llega después de las 17 hs?',
      answer:
        'La recepción está abierta de 9:00 a 17:00 hs. Si llegás fuera de horario, coordinamos con vos por anticipado el acceso al hostel; el check-in formal se completa a la mañana siguiente. Escribinos por WhatsApp antes de llegar.',
    },
    {
      question: '¿Hay lockers? ¿Es seguro dejar mis cosas?',
      answer:
        'Los dormitorios de 4 camas cuentan con lockers individuales para que guardes tus objetos de valor con seguridad. Las habitaciones privadas tienen cerradura propia.',
    },
  ],
  faqCta: 'Reservar en NAKEL YENU',
  faqNote: 'Más de 275 viajeros eligieron Nakel Yenu · 4.5★ en Google · 8.7/10 en Hostelworld',

  map: {
    address: 'Puerto San Julián 244, El Calafate, Santa Cruz, Argentina',
    reference:
      'A 5–10 minutos caminando del centro de El Calafate (Av. del Libertador) y a poca distancia de la terminal de ómnibus. Ubicado en una colina tranquila con vista al lago.',
    checkin: 'Check-in: 14:00 hs',
    checkout: 'Check-out: 10:00 hs',
    receptionHours: 'Recepción: 9:00 a 17:00 hs',
    whatsapp: '+54 2966 253185',
    // TODO: agregar link de Google Maps real
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=Puerto+San+Juli%C3%A1n+244+El+Calafate+Santa+Cruz+Argentina&output=embed',
    mapsUrl:
      'https://maps.google.com/maps?q=Puerto+San+Juli%C3%A1n+244+El+Calafate+Santa+Cruz+Argentina',
  },

  footer: {
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Alojamiento', href: '#precios' },
      { label: 'Ubicación', href: '#ubicacion' },
      { label: 'Contacto', href: '#contacto' },
    ],
    legal: [{ label: 'Política de privacidad', href: '/privacidad' }],
    social: {
      instagram: 'https://www.instagram.com/nakelyenu/',
      facebook: 'https://www.facebook.com/p/Hostel-Nakel-Yenu-100054245180433/',
    },
    copyright: '© 2025 NAKEL YENU HOSTEL. Todos los derechos reservados.',
  },

  seo: {
    title: 'Nakel Yenu Hostel El Calafate | Alojamiento Patagonia',
    description:
      'Hostel en El Calafate con vistas al Lago Argentino, desayuno incluido y ambiente mochilero auténtico. A 5 min del centro. +275 reseñas, 4.5★. Reservá directo y ahorrá.',
  },
}
