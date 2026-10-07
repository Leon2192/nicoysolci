// EDITÁ LOS DATOS DE LA INVITACIÓN ACÁ.
// Datos bancarios proporcionados por los titulares.
// Para fotos propias, guardalas en public/images y usá "/images/tu-foto.jpg".
// Fecha única para la cuenta regresiva y todas las secciones (hora argentina).
const eventDate = '2027-04-02T19:00:00-03:00';

export const invitation = {
  couple: { first: 'Nico', second: 'Solci' },
  entrance: {
    enabled: true,
    sealImage: '/assets/lacre-loto.png',
    hint: 'Tocá el sello para abrir el sobre',
    openingText: 'Con mucho amor, para vos…',
  },
  social: {
    // Opcional: completar con el dominio definitivo. En Vercel se detecta al compilar.
    siteUrl: '',
    description: 'Nos casamos. Te invitamos a compartir un día inolvidable con nosotros.',
    image: '/min.png',
    imageAlt: 'Nico y Solci · Nos casamos',
    imageWidth: 350,
    imageHeight: 350,
  },
  weddingDate: eventDate,
  timeZone: 'America/Argentina/Buenos_Aires',
  hero: {
    image: '/assets/portada.jpg',
    alt: 'Nico y Solci abrazados en una fotografía en blanco y negro',
    // La imagen ya tiene los nombres: se muestra completa, sin textos encima.
    imageIncludesText: true,
    position: 'center 35%',
    eyebrow: 'UN DÍA, UNA VIDA, CON VOS',
    title: 'Nos casamos',
  },
  welcome: {
    title: '¡Estás invitado!',
    text: 'Nos encantaría que seas parte de este momento tan especial para nosotros. ¡Falta poco!',
  },
  // Opcional: agregá un MP3 en public/music y su ruta para mostrar el reproductor.
  music: { src: '', title: 'Nuestra canción' },
  ceremony: {
    title: 'Lugar del Evento',
    venue: 'Círculo Olivos',
    intro: 'Te esperamos el',
    date: eventDate,
    address: 'San Lorenzo 60, La Lucila, Provincia de Buenos Aires',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=C%C3%ADrculo+Olivos%2C+San+Lorenzo+60%2C+La+Lucila%2C+Provincia+de+Buenos+Aires',
  },
  celebration: {
    title: 'Celebración',
    venue: 'Estancia Los Olivos',
    intro: 'La celebración será en',
    date: eventDate,
    address: 'Av. del Libertador 1500, Buenos Aires',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+del+Libertador+1500+Buenos+Aires',
  },
  dressCode: { title: 'Dress code', style: 'Formal', text: '¡Lucí tu mejor look!' },
  photos: {
    title: 'Compartí tus fotos',
    text: 'Los mejores recuerdos también los hacés vos.',
    subtitle: '¡Sumá tus fotos de la boda a nuestro álbum!',
    // Reemplazar por el enlace de un álbum compartido con carga habilitada.
    uploadUrl: 'https://photos.google.com/',
    albumUrl: 'https://photos.google.com/',
  },
  // Las primeras cinco aparecen en el mosaico; todas se pueden recorrer en el visor.
  // Cambiá el orden de los números para elegir las fotos destacadas.
  gallery: [1, 2, 9, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((number) => ({
    src: `/GALERIA/${number}.jpeg`,
    alt: `Nico y Solci · Recuerdo ${number}`,
    position: 'center',
  })),
  galleryQuote: 'Allá donde nos lleve la vida, juntos',
  gifts: {
    title: 'Regalos',
    text: 'Lo más importante es tu presencia. Pero si deseás hacernos un regalo, te compartimos nuestros datos.',
    bank: 'Banco del Sol',
    holder: 'Nicolas Agustin Atala',
    alias: 'Solci.Tango.',
    cbu: '3108100900010003996143',
  },
  rsvp: {
    title: 'Confirmá tu asistencia',
    text: 'Hay un lugar especial para vos en nuestra historia. ¡Nos encantaría que estés ahí!',
    formsUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd3oMPVqPbz69-mlC9GLZ_3Y1e0WJbdrQoQNW7p1dLSY--L_A/viewform',
    button: 'Confirmar asistencia',
  },
  closing: '¡Te esperamos para celebrar el amor!',
};
