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

// Pétalo central, dos pares de pétalos laterales y la base de la flor de loto.
const lotus = 'M90 113C68 95 70 66 90 45c20 21 22 50 0 68ZM90 114C65 108 53 89 55 65c22 8 34 27 35 49ZM90 114c25-6 37-25 35-49-22 8-34 27-35 49ZM90 116C65 121 45 105 39 86c23 0 42 13 51 30ZM90 116c25 5 45-11 51-30-23 0-42 13-51 30ZM60 124q30 17 60 0';

function WaxSeal() {
  return <svg className="wax-seal-art" viewBox="0 0 180 220" aria-hidden="true">
    <defs>
      <linearGradient id="wax-outer" x1=".1" y1="0" x2=".85" y2="1">
        <stop stopColor="#d0dcba" /><stop offset=".3" stopColor="#b8c89f" /><stop offset=".75" stopColor="#95aa7d" /><stop offset="1" stopColor="#7a9365" />
      </linearGradient>
      <radialGradient id="wax-center" cx=".33" cy=".25" r=".95">
        <stop stopColor="#b9c8a3" /><stop offset=".65" stopColor="#a6b991" /><stop offset="1" stopColor="#8fa67a" />
      </radialGradient>
      <filter id="wax-grain">
        <feTurbulence type="fractalNoise" baseFrequency=".38" numOctaves="2" seed="6" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <clipPath id="wax-face-clip"><ellipse cx="90" cy="111" rx="55" ry="82" /></clipPath>
    </defs>
    <path fill="url(#wax-outer)" d="M90 9C128 6 158 51 159 109c3 55-24 99-68 102-43 4-72-37-71-97C18 55 48 12 90 9Z" />
    <path d="M27 124C20 73 45 20 83 16c29-4 51 19 63 49" fill="none" stroke="#e0e8cb" strokeOpacity=".6" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 162c13 29 35 44 59 43 31-2 52-27 60-60" fill="none" stroke="#657f51" strokeOpacity=".4" strokeWidth="2.5" strokeLinecap="round" />
    <path fill="#6b8457" opacity=".6" d="M91 27c33 0 55 35 55 81 3 49-19 88-55 91-36 2-59-33-58-81C31 66 55 29 91 27Z" />
    <path fill="url(#wax-center)" d="M91 32c30 0 49 33 50 76 2 46-18 82-51 85-32 2-52-32-52-76-1-48 21-83 53-85Z" />
    <path d="M43 85c6-31 24-56 46-57 25-2 45 25 52 53" fill="none" stroke="#e0e9cd" strokeOpacity=".62" strokeWidth="3" strokeLinecap="round" />
    <path d="M41 142c7 33 24 52 48 53 25-1 43-24 49-53" fill="none" stroke="#cfdebb" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" />
    <g transform="translate(22.5 30) scale(.75)">
      <path d={lotus} transform="translate(1.3 1.6)" fill="none" stroke="#617e4e" strokeOpacity=".75" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d={lotus} transform="translate(-.5 -.5)" fill="none" stroke="#e0eaca" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <path d="M91 130c-5 15 3 29 19 41m-18-27c9-10 17-10 24-9-5 8-14 12-24 9" transform="translate(1 1.5)" fill="none" stroke="#617e4e" strokeOpacity=".7" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M91 130c-5 15 3 29 19 41m-18-27c9-10 17-10 24-9-5 8-14 12-24 9" fill="none" stroke="#e0eaca" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <g clipPath="url(#wax-face-clip)" opacity=".035" style={{ mixBlendMode: 'multiply' }}><rect width="180" height="220" filter="url(#wax-grain)" /></g>
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
