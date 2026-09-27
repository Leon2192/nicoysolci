# Nico & Solci · Invitación digital

MVP en React JS y Vite, adaptable a celular y escritorio. Diseño inspirado en las capturas: fotografía de portada, tipografía manuscrita, verde salvia y secciones con animación al entrar en pantalla.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

Vercel: usar el preset Vite, comando `npm run build` y directorio `dist`.

## Personalización

Todos los textos, nombres, fechas, domicilios, enlaces de Maps, fotos, datos bancarios y el enlace de Google Forms están en **`src/config/invitation.js`**. El título de la pestaña se actualiza con los nombres. La descripción para buscadores y los datos de la vista previa se encuentran en `social`, en ese mismo archivo.

- **Fecha:** usar ISO con zona horaria (`2027-09-27T20:00:00-03:00`). `weddingDate` controla el contador y el calendario; `ceremony.date` y `celebration.date` controlan cada evento. El contador se detiene en cero al llegar la fecha.
- **Confirmación:** reemplazar `rsvp.formsUrl` por el enlace público de Google Forms (`https://forms.gle/...`). Es un botón externo; no hay formulario ni envío de datos dentro del sitio.
- **Fotos compartidas:** reemplazar `photos.uploadUrl` y `photos.albumUrl` por el álbum o servicio elegido. La carga ocurre en ese servicio externo.
- **Fotografías:** la portada usa `public/assets/portada.jpg` y la galería usa las 19 imágenes de `public/GALERIA/`. Las primeras cinco entradas de `gallery` forman el mosaico (dos verticales, una horizontal, dos verticales); se puede cambiar el orden de los números para elegirlas. Al tocar cualquiera se abre el visor con todas las imágenes, navegación circular, botones, flechas del teclado y gestos horizontales. Se cierra con el botón o Escape. Los encuadres del mosaico se ajustan con `position`; en el visor las fotos se muestran completas.
- **Vista previa al compartir:** `social.image` usa `public/min.png`. Vite incluye los metadatos Open Graph y Twitter en el HTML durante la compilación. Para fijar el dominio, completar `social.siteUrl` con la URL pública o definir `SITE_URL` al compilar. En Vercel, se toma automáticamente `VERCEL_PROJECT_PRODUCTION_URL` (o `VERCEL_URL` como alternativa). Sin dominio, el desarrollo local usa `/min.png`; para compartir en otro hosting hay que configurar la URL pública y volver a compilar. La vista previa real se puede comprobar después de publicar.
- **Música opcional:** guardar un archivo en `public/music/` y completar `music.src` con `/music/cancion.mp3`. Sin archivo, el reproductor no aparece. La reproducción requiere una acción del visitante.
- **Regalos:** el botón abre una ventana con datos bancarios y permite copiar el alias; también se cierra con Escape.
- **Estilos:** colores, tamaños y espaciados en `src/styles.css`. Las fuentes Great Vibes y Montserrat se incluyen localmente desde dependencias; no requieren Google Fonts.

**Antes de compartir:** los datos del evento son de ejemplo. Los enlaces de Google Forms y Google Photos apuntan a las páginas generales de esos servicios, porque todavía no hay un formulario ni un álbum real configurados. Cambiar también los datos bancarios, ubicaciones y fechas.

Las animaciones usan IntersectionObserver y respetan la preferencia de movimiento reducido del dispositivo.
