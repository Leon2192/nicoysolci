import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

export default function Gallery({ photos }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const touchStart = useRef(null);
  const isOpen = activeIndex !== null;
  const photo = isOpen ? photos[activeIndex] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || photos.length < 2) return;
    // Precargamos solo las fotos vecinas al abrir el visor.
    for (const offset of [-1, 1]) {
      const image = new Image();
      image.src = photos[(activeIndex + offset + photos.length) % photos.length].src;
    }
  }, [activeIndex, isOpen, photos]);

  function move(direction) {
    setActiveIndex((index) => index === null ? null : (index + direction + photos.length) % photos.length);
  }

  function finishSwipe(event) {
    if (!touchStart.current) return;
    const { clientX, clientY } = event.changedTouches[0];
    const dx = clientX - touchStart.current.x;
    const dy = clientY - touchStart.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
    touchStart.current = null;
  }

  return <>
    <div className="gallery">
      {photos.slice(0, 5).map((item, index) => <button
        type="button"
        className={`gallery-item gallery-item-${index + 1}`}
        key={item.src}
        onClick={() => setActiveIndex(index)}
        aria-label={`Abrir foto ${index + 1} de ${photos.length}`}
        aria-haspopup="dialog"
      >
        <img src={item.src} alt={item.alt} loading="lazy" style={{ objectPosition: item.position }} />
        {index === 4 && photos.length > 5 && <span className="gallery-more">+{photos.length - 5} fotos</span>}
      </button>)}
    </div>
    <p className="gallery-hint">Tocá una foto para ver nuestra historia</p>
    <dialog
      ref={dialogRef}
      className="gallery-dialog"
      aria-label="Visor de nuestra galería"
      onClose={() => setActiveIndex(null)}
      onClick={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      }}
    >
      <button type="button" className="viewer-close" onClick={() => setActiveIndex(null)} aria-label="Cerrar galería" autoFocus><Icon name="close" /></button>
      {photo && <>
        <div className="viewer-stage"
          onTouchStart={(event) => {
            touchStart.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
          }}
          onTouchEnd={finishSwipe}
          onTouchCancel={() => { touchStart.current = null; }}
        >
          <img key={photo.src} src={photo.src} alt={photo.alt} draggable="false" />
        </div>
        <div className="viewer-controls">
          <button type="button" className="viewer-arrow viewer-previous" onClick={() => move(-1)} aria-label="Foto anterior" disabled={photos.length < 2}><Icon name="arrow" /></button>
          <p className="viewer-count" aria-live="polite" aria-atomic="true">{activeIndex + 1} / {photos.length}</p>
          <button type="button" className="viewer-arrow viewer-next" onClick={() => move(1)} aria-label="Foto siguiente" disabled={photos.length < 2}><Icon name="arrow" /></button>
        </div>
      </>}
    </dialog>
  </>;
}
