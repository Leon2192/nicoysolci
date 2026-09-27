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

Todos los textos, nombres, fechas, domicilios, enlaces de Maps, fotos, datos bancarios y el enlace de Google Forms están en **`src/config/invitation.js`**. El título de la pestaña se actualiza con los nombres. La descripción para buscadores se encuentra en `index.html`.

- **Fecha:** usar ISO con zona horaria (`2027-09-27T20:00:00-03:00`). `weddingDate` controla el contador y el calendario; `ceremony.date` y `celebration.date` controlan cada evento. El contador se detiene en cero al llegar la fecha.
- **Confirmación:** reemplazar `rsvp.formsUrl` por el enlace público de Google Forms (`https://forms.gle/...`). Es un botón externo; no hay formulario ni envío de datos dentro del sitio.
- **Fotos compartidas:** reemplazar `photos.uploadUrl` y `photos.albumUrl` por el álbum o servicio elegido. La carga ocurre en ese servicio externo.
- **Fotografías:** las fotos de muestra se cargan desde Unsplash y necesitan conexión. Para usar archivos propios, guardarlos en `public/images/` y cambiar las rutas a `/images/archivo.jpg`. Se pueden ajustar los encuadres con `position`.
- **Música opcional:** guardar un archivo en `public/music/` y completar `music.src` con `/music/cancion.mp3`. Sin archivo, el reproductor no aparece. La reproducción requiere una acción del visitante.
- **Regalos:** el botón abre una ventana con datos bancarios y permite copiar el alias; también se cierra con Escape.
- **Estilos:** colores, tamaños y espaciados en `src/styles.css`. Las fuentes Great Vibes y Montserrat se incluyen localmente desde dependencias; no requieren Google Fonts.

**Antes de compartir:** todos los datos son de ejemplo. Los enlaces de Google Forms y Google Photos apuntan a las páginas generales de esos servicios, porque todavía no hay un formulario ni un álbum real configurados. Cambiar también los datos bancarios, ubicaciones, fechas y fotos.

Las animaciones usan IntersectionObserver y respetan la preferencia de movimiento reducido del dispositivo.
