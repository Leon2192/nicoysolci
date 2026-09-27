// EDITÁ LOS DATOS DE LA INVITACIÓN ACÁ.
// Los datos son de ejemplo. Reemplazá los enlaces antes de compartir la invitación.
// Para fotos propias, guardalas en public/images y usá "/images/tu-foto.jpg".
export const invitation = {
  couple: { first: 'Nico', second: 'Solci' },
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
  gallery: [
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=85', alt: 'Un abrazo para toda la vida', position: 'center' },
    { src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=85', alt: 'Juntos en nuestro día especial', position: 'center' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85', alt: 'Una celebración llena de amor', position: 'center 55%' },
    { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=700&q=85', alt: 'Pequeños detalles de una gran historia', position: 'center' },
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=85', alt: 'El lugar donde vamos a celebrar', position: 'center' },
  ],
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
