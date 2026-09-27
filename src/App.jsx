import React, { useEffect, useRef, useState } from 'react';
import { invitation as data } from './config/invitation.js';
import Icon from './components/Icon.jsx';

const names = `${data.couple.first} & ${data.couple.second}`;
const external = { target: '_blank', rel: 'noopener noreferrer' };

function Reveal({ children, className = '', ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    element.classList.add('will-reveal');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible');
        observer.unobserve(element);
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} {...props}>{children}</div>;
}

function Countdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const seconds = Math.max(0, Math.floor((new Date(data.weddingDate).getTime() - now) / 1000));
  const values = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
  return <div className="countdown" role="timer" aria-label="Tiempo hasta nuestro casamiento">
    {['Días', 'Horas', 'Minutos', 'Segundos'].map((label, index) => <div className="countdown-item" key={label}><span className="countdown-number">{String(values[index]).padStart(2, '0')}</span><span className="countdown-label">{label}</span></div>)}
  </div>;
}

function calendarUrl() {
  const format = (date) => new Date(date).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const params = new URLSearchParams({ action: 'TEMPLATE', text: `Casamiento de ${names}`, dates: `${format(data.weddingDate)}/${format(data.endDate)}`, details: '¡Te esperamos para compartir nuestro gran día!', location: `${data.ceremony.venue}, ${data.ceremony.address}`, ctz: data.timeZone });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function EventSection({ event, icon }) {
  const date = new Date(event.date);
  const day = new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: 'short', timeZone: data.timeZone }).format(date).replace('.', '');
  const time = new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: data.timeZone }).format(date);
  return <section className="event-section section-pad">
    <Reveal>
      <Icon name={icon} />
      <h2>{event.title}</h2>
      <div className="event-description">{icon === 'rings' ? <><p>{event.venue}</p><p>{event.intro}</p></> : <><p>{event.intro}</p><p>{event.venue}</p></>}</div>
      <div className="event-date"><span>{day}</span><span>{time} <small>hs.</small></span></div>
      <p className="event-address">{event.address}</p>
      <a className="button" href={event.mapsUrl} {...external}>Ver ubicación</a>
    </Reveal>
  </section>;
}

function GiftDetails({ open, onClose }) {
  const ref = useRef(null);
  const [copied, setCopied] = useState('');
  useEffect(() => {
    if (open) { setCopied(''); ref.current.showModal(); }
    else if (ref.current.open) ref.current.close();
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  async function copyAlias() {
    try { await navigator.clipboard.writeText(data.gifts.alias); setCopied('¡Alias copiado!'); }
    catch { setCopied('Seleccioná el alias para copiarlo.'); }
  }
  return <dialog ref={ref} className="gift-dialog" aria-labelledby="gift-title" onClose={onClose} onClick={(event) => { if (event.target === ref.current) onClose(); }}>
    <button className="close-button" onClick={onClose} aria-label="Cerrar datos bancarios"><Icon name="close" /></button>
    <Icon name="gift" />
    <h2 id="gift-title">Un regalo con amor</h2>
    <p>Gracias por ser parte de este comienzo.</p>
    <dl><dt>Titulares</dt><dd>{data.gifts.holder}</dd><dt>Banco</dt><dd>{data.gifts.bank}</dd><dt>Alias</dt><dd>{data.gifts.alias}</dd><dt>CBU</dt><dd>{data.gifts.cbu}</dd></dl>
    <button className="button" onClick={copyAlias}>Copiar alias</button>
    <p className="copy-status" role="status">{copied}</p>
  </dialog>;
}

export default function App() {
  const [giftsOpen, setGiftsOpen] = useState(false);
  useEffect(() => { document.title = `${names} · Nos casamos`; }, []);
  return <>
    <a className="skip-link" href="#bienvenida">Ir a la invitación</a>
    <main className="invitation">
      <header className={`hero${data.hero.imageIncludesText ? ' hero-artwork' : ''}`}>
        <img className="hero-image" src={data.hero.image} alt={data.hero.alt} style={{ objectPosition: data.hero.position }} fetchPriority="high" />
        {data.hero.imageIncludesText ? <h1 className="sr-only">{names} · {data.hero.title}</h1> : <>
        <div className="hero-shade" />
        <div className="hero-content"><p className="eyebrow">{data.hero.eyebrow}</p><h1>{names}</h1><p className="hero-subtitle">{data.hero.title}</p><span className="hero-line" /><p className="hero-date">{new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: data.timeZone }).format(new Date(data.weddingDate)).replaceAll('/', ' . ')}</p></div>
        </>}
        <a className="scroll-cue" href="#bienvenida" aria-label="Descubrir la invitación"><Icon name="arrow" /></a>
      </header>

      <section id="bienvenida" className="welcome section-pad">
        <Reveal>
          {data.music.src && <div className="music"><p>{data.music.title}</p><audio controls preload="none" src={data.music.src} aria-label={data.music.title} /></div>}
          <span className="tiny-label">NUESTRO GRAN DÍA</span>
          <h2 className="script-heading">{data.welcome.title}</h2>
          <p className="intro-copy">{data.welcome.text}</p>
          <Countdown />
          <a className="calendar-link" href={calendarUrl()} {...external}><Icon name="calendar" />Agendar recordatorio</a>
        </Reveal>
      </section>

      <div className="little-divider"><span /><Icon name="heart" /><span /></div>
      <EventSection event={data.ceremony} icon="rings" />
      <EventSection event={data.celebration} icon="glasses" />

      <section className="dress-code section-pad"><Reveal><Icon name="dress" /><h2>{data.dressCode.title}</h2><p>{data.dressCode.style}</p><p>{data.dressCode.text}</p></Reveal></section>

      <section className="photo-section section-pad"><Reveal><Icon name="camera" /><span className="short-line" /><h2>{data.photos.title}</h2><p>{data.photos.text}</p><p>{data.photos.subtitle}</p><div className="photo-actions"><a className="button button-outline" href={data.photos.uploadUrl} {...external}>Subir fotos</a><a className="button button-outline" href={data.photos.albumUrl} {...external}>Ver fotos del álbum</a></div></Reveal></section>

      <section className="gallery-section" aria-label="Nuestra historia en fotos"><Reveal><span className="tiny-label">VOS, YO Y TODO LO QUE VIENE</span><div className="gallery">{data.gallery.map((photo, index) => <div className={`gallery-item gallery-item-${index + 1}`} key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" style={{ objectPosition: photo.position }} /></div>)}</div><p className="gallery-quote">{data.galleryQuote}</p></Reveal></section>

      <section className="gifts section-pad"><Reveal><Icon name="gift" /><h2>{data.gifts.title}</h2><p className="intro-copy">{data.gifts.text}</p><button className="button" onClick={() => setGiftsOpen(true)}>Ver datos bancarios</button></Reveal></section>

      <section className="rsvp section-pad"><Reveal><Icon name="heart" /><span className="tiny-label">EL MEJOR PLAN ES CON VOS</span><h2 className="script-heading">{data.rsvp.title}</h2><p className="intro-copy">{data.rsvp.text}</p><a className="button rsvp-button" href={data.rsvp.formsUrl} {...external}>{data.rsvp.button}</a><p className="rsvp-deadline">{data.rsvp.deadline}</p></Reveal></section>

      <footer><Reveal><p className="footer-names">{names}</p><p>{data.closing}</p><Icon name="heart" /></Reveal></footer>
    </main>
    <GiftDetails open={giftsOpen} onClose={() => setGiftsOpen(false)} />
  </>;
}
