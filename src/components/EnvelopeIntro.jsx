import React, { useEffect, useRef, useState } from 'react';
import './EnvelopeIntro.css';

// Cada pieza es una solapa completa con su propia bisagra, no una mitad recortada.
const paperShapes = {
  top: { viewBox: '0 0 600 740', path: 'M0 0H600V425L320 710Q300 734 280 710L0 425Z', light: '#929e83', dark: '#7d8b6e' },
  bottom: { viewBox: '0 0 600 300', path: 'M0 300 284 15Q300 0 316 15L600 300Z', light: '#8a997a', dark: '#778667' },
  left: { viewBox: '0 0 318 1000', path: 'M0 400 318 740 0 1000Z', light: '#859375', dark: '#6d7d5d' },
  right: { viewBox: '0 0 318 1000', path: 'M318 400 0 740 318 1000Z', light: '#7e8d6d', dark: '#697a59' },
};

function EnvelopePaper({ side }) {
  const id = `paper-${side}`;
  const shape = paperShapes[side];
  return <svg className="envelope-paper" viewBox={shape.viewBox} preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-color`} x1="0" y1="0" x2=".8" y2="1">
        <stop stopColor={shape.light} /><stop offset="1" stopColor={shape.dark} />
      </linearGradient>
      <filter id={`${id}-fibers`} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency=".28 .34" numOctaves="3" seed="12" stitchTiles="stitch" result="fibers" />
        <feDiffuseLighting in="fibers" surfaceScale=".65" diffuseConstant="1.1" lightingColor="#ffffff" result="paperRelief">
          <feDistantLight azimuth="225" elevation="55" />
        </feDiffuseLighting>
        <feBlend in="SourceGraphic" in2="paperRelief" mode="multiply" />
        <feComposite in2="SourceAlpha" operator="in" />
      </filter>
      <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" seed="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <clipPath id={`${id}-clip`}><path d={shape.path} /></clipPath>
    </defs>
    <path fill={`url(#${id}-color)`} d={shape.path} filter={`url(#${id}-fibers)`} />
    <g clipPath={`url(#${id}-clip)`}>
      <path d={shape.path} filter={`url(#${id}-grain)`} opacity=".26" style={{ mixBlendMode: 'multiply' }} />
      <path d={shape.path} fill="none" stroke="#c0cbb1" strokeOpacity=".2" strokeWidth="1.2" />
    </g>
  </svg>;
}

export default function EnvelopeIntro({ couple, config, onBegin, onComplete }) {
  const [opening, setOpening] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const sealRef = useRef(null);
  const names = `${couple.first} & ${couple.second}`;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    sealRef.current?.focus({ preventScroll: true });
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);

  useEffect(() => {
    if (!opening) return;
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 2700;
    const timer = window.setTimeout(onComplete, duration);
    return () => window.clearTimeout(timer);
  }, [opening, onComplete]);

  function openEnvelope() {
    if (opening) return;
    setOpening(true);
    onBegin();
  }

  return <div
    className={`envelope-intro${opening ? ' is-opening' : ''}${keyboardFocus ? ' has-keyboard-focus' : ''}`}
    role="dialog"
    aria-modal="true"
    aria-label={`Invitación de ${names}`}
    onKeyDown={(event) => {
      if (event.key === 'Escape') onComplete();
      if (event.key === 'Tab') {
        event.preventDefault();
        setKeyboardFocus(true);
        sealRef.current?.focus();
      }
    }}
  >
    <button
      ref={sealRef}
      type="button"
      className="envelope-trigger"
      aria-label="Abrir invitación"
      aria-describedby="envelope-instruction"
      aria-disabled={opening}
      onClick={openEnvelope}
      onPointerDown={() => setKeyboardFocus(false)}
    >
      <span className="envelope-art" aria-hidden="true">
        <span className="envelope-flap envelope-flap-left"><EnvelopePaper side="left" /></span>
        <span className="envelope-flap envelope-flap-right"><EnvelopePaper side="right" /></span>
        <span className="envelope-flap envelope-flap-bottom"><EnvelopePaper side="bottom" /></span>
        <span className="envelope-flap envelope-flap-top"><EnvelopePaper side="top" /></span>
        <span className="wax-seal"><img className="wax-seal-art" src={config.sealImage} alt="" width="1100" height="1429" draggable="false" fetchPriority="high" /></span>
      </span>
    </button>
    <p id="envelope-instruction" className="sr-only" aria-live="polite">{opening ? config.openingText : config.hint}</p>
  </div>;
}
