import React, { useEffect, useRef, useState } from 'react';
import './EnvelopeIntro.css';

// Cada pieza es una solapa completa con su propia bisagra, no una mitad recortada.
const paperShapes = {
  top: { viewBox: '0 0 600 520', path: 'M0 0H600V170L320 494Q300 518 280 494L0 170Z', light: '#aab39d', dark: '#929f83' },
  bottom: { viewBox: '0 0 600 520', path: 'M0 357 284 15Q300 0 316 15L600 357V520H0Z', light: '#a1ad94', dark: '#87967a' },
  left: { viewBox: '0 0 318 1000', path: 'M0 145 318 520 0 868Z', light: '#96a287', dark: '#7c8c6e' },
  right: { viewBox: '0 0 318 1000', path: 'M318 145 0 520 318 868Z', light: '#919f82', dark: '#778767' },
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
        <feTurbulence type="fractalNoise" baseFrequency=".055 .18" numOctaves="3" seed="12" stitchTiles="stitch" result="fibers" />
        <feDiffuseLighting in="fibers" surfaceScale="2.6" diffuseConstant="1.1" lightingColor="#ffffff" result="paperRelief">
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
      <path d={shape.path} fill="none" stroke="#e2e8d2" strokeOpacity=".4" strokeWidth="2.5" />
    </g>
  </svg>;
}

// Pétalo central, dos pares de pétalos laterales y la base de la flor de loto.
const lotus = 'M90 113C68 95 70 66 90 45c20 21 22 50 0 68ZM90 114C65 108 53 89 55 65c22 8 34 27 35 49ZM90 114c25-6 37-25 35-49-22 8-34 27-35 49ZM90 116C65 121 45 105 39 86c23 0 42 13 51 30ZM90 116c25 5 45-11 51-30-23 0-42 13-51 30ZM60 124q30 17 60 0';

function WaxSeal() {
  return <svg className="wax-seal-art" viewBox="0 0 180 180" aria-hidden="true">
    <defs>
      <linearGradient id="wax-outer" x1=".15" y1="0" x2=".85" y2="1">
        <stop stopColor="#b5bd82" /><stop offset=".28" stopColor="#7b894c" /><stop offset=".65" stopColor="#44532b" /><stop offset="1" stopColor="#303d21" />
      </linearGradient>
      <radialGradient id="wax-center" cx=".37" cy=".25" r=".85">
        <stop stopColor="#89975c" /><stop offset=".6" stopColor="#63753f" /><stop offset="1" stopColor="#43562b" />
      </radialGradient>
      <linearGradient id="wax-rim" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#d0d5a0" /><stop offset=".4" stopColor="#87944e" /><stop offset=".65" stopColor="#34431e" /><stop offset="1" stopColor="#9da86b" />
      </linearGradient>
      <filter id="wax-grain">
        <feTurbulence type="fractalNoise" baseFrequency=".22" numOctaves="2" seed="6" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <clipPath id="wax-face-clip"><circle cx="90" cy="89" r="59" /></clipPath>
    </defs>
    <path fill="url(#wax-outer)" d="M91 8C104 5 113 12 124 14c17 3 26 13 30 26 4 10 13 17 14 31 4 13-1 23-1 34-1 14-10 20-16 32-8 13-19 15-30 21-13 6-23 10-36 7-12 1-20-7-32-9-15-5-20-16-29-26-8-10-7-23-11-35-4-14 2-23 5-35 3-14 13-20 20-31 9-11 20-13 32-17 8-3 14-2 21-4Z" />
    <path d="M26 64C34 25 67 16 93 16c23-1 47 11 58 37" fill="none" stroke="#d4d7a1" strokeOpacity=".63" strokeWidth="3" strokeLinecap="round" />
    <path d="M25 112c10 31 37 47 66 46 24 1 48-13 59-35" fill="none" stroke="#a4af72" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="91" cy="90" rx="66" ry="67" fill="#354621" />
    <ellipse cx="89" cy="88" rx="65" ry="66" fill="url(#wax-rim)" />
    <circle cx="90" cy="89" r="59" fill="url(#wax-center)" stroke="#3c4d24" strokeWidth="1.5" />
    <path d="M37 102A55 55 0 0 0 143 102" fill="none" stroke="#b2be7c" strokeOpacity=".55" strokeWidth="1.5" />
    <path d={lotus} transform="translate(1.1 1.5)" fill="none" stroke="#2f431c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d={lotus} transform="translate(-.6 -.6)" fill="none" stroke="#b4c386" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <g clipPath="url(#wax-face-clip)" opacity=".065" style={{ mixBlendMode: 'multiply' }}><rect width="180" height="180" filter="url(#wax-grain)" /></g>
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
        <span className="wax-seal"><WaxSeal /></span>
      </span>
    </button>
    <p id="envelope-instruction" className="sr-only" aria-live="polite">{opening ? config.openingText : config.hint}</p>
  </div>;
}
