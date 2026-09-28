import React, { useEffect, useRef, useState } from 'react';
import './EnvelopeIntro.css';

// Dos mitades del mismo papel abren el sobre hacia arriba y hacia abajo.
function EnvelopePaper({ side }) {
  const id = `paper-${side}`;
  return <svg className="envelope-paper" viewBox="0 0 600 1000" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-base`} x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#9ca48f" /><stop offset="1" stopColor="#7c876e" />
      </linearGradient>
      <linearGradient id={`${id}-left`} x1="0" y1="0" x2="1" y2=".4">
        <stop stopColor="#9da791" /><stop offset="1" stopColor="#89947b" />
      </linearGradient>
      <linearGradient id={`${id}-right`} x1="1" y1="0" x2="0" y2=".6">
        <stop stopColor="#939e85" /><stop offset="1" stopColor="#768365" />
      </linearGradient>
      <linearGradient id={`${id}-bottom`} x1="0" y1="0" x2=".6" y2="1">
        <stop stopColor="#a8b09c" /><stop offset="1" stopColor="#8d997f" />
      </linearGradient>
      <linearGradient id={`${id}-flap`} x1="0" y1="0" x2=".7" y2="1">
        <stop stopColor="#b0b7a5" /><stop offset=".65" stopColor="#a6af99" /><stop offset="1" stopColor="#939f82" />
      </linearGradient>
      <filter id={`${id}-shadow`} x="-20%" y="-20%" width="150%" height="160%">
        <feDropShadow dx="5" dy="12" stdDeviation="9" floodColor="#26351c" floodOpacity=".48" />
        <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#25351a" floodOpacity=".4" />
      </filter>
      <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="3" seed="14" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
    </defs>
    <path fill={`url(#${id}-base)`} d="M0 0H600V1000H0Z" />
    <path fill={`url(#${id}-left)`} d="M0 145 318 520 0 868Z" />
    <path fill={`url(#${id}-right)`} d="M600 145 282 520 600 868Z" />
    <path fill={`url(#${id}-bottom)`} d="M0 837 284 495Q300 480 316 495L600 837V1000H0Z" />
    <path d="M0 837 284 495Q300 480 316 495L600 837" fill="none" stroke="#dee3d0" strokeOpacity=".35" strokeWidth="1.5" />
    <path d="M0 842 284 500Q300 485 316 500L600 842" fill="none" stroke="#526346" strokeOpacity=".18" strokeWidth="2" />
    <path filter={`url(#${id}-shadow)`} fill={`url(#${id}-flap)`} d="M0 0H600V170L320 494Q300 518 280 494L0 170Z" />
    <path d="M1 171 281 493Q300 514 319 493L599 171" fill="none" stroke="#cdd5bd" strokeOpacity=".55" strokeWidth="1.4" />
    <path fill="#566346" opacity=".15" filter={`url(#${id}-grain)`} d="M0 0H600V1000H0Z" style={{ mixBlendMode: 'multiply' }} />
    <path fill="#fff" opacity=".085" filter={`url(#${id}-grain)`} d="M0 0H600V1000H0Z" style={{ mixBlendMode: 'soft-light' }} />
  </svg>;
}

const sprig = 'M69 135C83 112 100 84 103 47M79 117C58 116 52 101 55 89c16 6 25 15 24 28Zm7-17c20 2 34-7 38-21-20 0-32 7-38 21Zm7-15C75 82 69 70 72 58c15 5 23 15 21 27Zm7-15c15-3 25-14 23-25-14 3-23 12-23 25Zm3-23c-10-7-9-17-2-24 7 8 9 15 2 24Z';

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
    <path d={sprig} transform="translate(1.1 1.5)" fill="none" stroke="#2f431c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d={sprig} transform="translate(-.6 -.6)" fill="none" stroke="#b4c386" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 2100;
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
        <span className="envelope-panel envelope-panel-top"><EnvelopePaper side="top" /></span>
        <span className="envelope-panel envelope-panel-bottom"><EnvelopePaper side="bottom" /></span>
        <span className="wax-seal"><WaxSeal /></span>
      </span>
    </button>
    <p id="envelope-instruction" className="sr-only" aria-live="polite">{opening ? config.openingText : config.hint}</p>
  </div>;
}
