// EDITÁ LOS DATOS DE LA INVITACIÓN ACÁ.
// Los datos son de ejemplo. Reemplazá los enlaces antes de compartir la invitación.
// Para fotos propias, guardalas en public/images y usá "/images/tu-foto.jpg".
export const invitation = {
  couple: { first: 'Nico', second: 'Solci' },
  social: {
    // Opcional: completar con el dominio definitivo. En Vercel se detecta al compilar.
    siteUrl: '',
    description: 'Nos casamos. Te invitamos a compartir un día inolvidable con nosotros.',
    image: '/min.png',
    imageAlt: 'Nico y Solci · Nos casamos',
    imageWidth: 350,
    imageHeight: 350,
  },
  weddingDate: '2027-09-27T20:00:00-03:00',
  endDate: '2027-09-28T05:00:00-03:00',
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
    title: 'Ceremonia',
    venue: 'Iglesia de San Francisco',
    intro: 'Te esperamos el',
    date: '2027-09-27T20:00:00-03:00',
    address: 'Alsina 380, Buenos Aires',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Iglesia+San+Francisco+Alsina+380+Buenos+Aires',
  },
  celebration: {
    title: 'Celebración',
    venue: 'Estancia Los Olivos',
    intro: 'La celebración será en',
    date: '2027-09-27T21:00:00-03:00',
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
  gallery: [1, 2, 9, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((number) => ({
    src: `/GALERIA/${number}.jpeg`,
    alt: `Nico y Solci · Recuerdo ${number}`,
    position: 'center',
  })),
  galleryQuote: 'Lo mejor de la vida es compartirla con vos.',
  gifts: {
    title: 'Regalos',
    text: 'Lo más importante es tu presencia. Pero si deseás hacernos un regalo, te compartimos nuestros datos.',
    bank: 'Banco de ejemplo',
    holder: 'Nicolás y Sol · Datos de ejemplo',
    alias: 'NICO.SOLCI.BODA',
    cbu: '0000000000000000000000',
  },
  rsvp: {
    title: 'Confirmá tu asistencia',
    text: 'Hay un lugar especial para vos en nuestra historia. ¡Nos encantaría que estés ahí!',
    deadline: 'Confirmá antes del 1 de septiembre de 2027',
    // Reemplazar por el enlace público real: https://forms.gle/...
    formsUrl: 'https://docs.google.com/forms/',
    button: 'Confirmar asistencia',
  },
  closing: '¡Te esperamos para celebrar el amor!',
};
