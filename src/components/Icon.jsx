import React from 'react';

const drawings = {
  rings: <><circle cx="24" cy="34" r="13" /><circle cx="42" cy="34" r="13" /><path d="m18 13 6-7 6 7-6 8-6-8Zm0 0h12M21 8l3 5 3-5M24 13v8" /></>,
  glasses: <><path d="m16 8 16 4-5 18c-3 9-17 5-14-4l3-18Zm-1 12 14 4M20 34l-4 17m-7-2 15 4M40 12l14-4 4 18c2 9-11 13-14 4l-4-18Zm3 11 13-4M51 34l4 17m-7 2 14-4M32 3l2 5m8-6-3 6m9-1-5 4" /></>,
  dress: <><path d="m7 15 10-5 10 5 3 18-7 2-2-12v31h-7l-1-17-1 17H5V23L3 35l-6-2 4-18m10-3 2 11 5-11m-5 11v11M40 10v9m10-9v9m-10-4c-8 7-3 12 0 17L31 54h27l-9-22c4-5 7-10 1-17m-10 17h9m-5 0-3 22m5-22 5 22" transform="translate(4 0) scale(.94)" /></>,
  camera: <><rect x="8" y="18" width="48" height="34" rx="5" /><path d="m20 18 4-8h16l4 8M13 13h8" /><circle cx="32" cy="35" r="11" /><circle cx="32" cy="35" r="7" /><path d="M47 25h3" /></>,
  gift: <><path d="M12 28v27h40V28M8 19h48v10H8zM28 19v36m8-36v36" /><path d="M32 19C7 21 15-3 26 10l6 9Zm0 0C57 21 49-3 38 10l-6 9Z" /></>,
  heart: <path d="M32 53 10 32C-5 13 20-2 32 17 44-2 69 13 54 32Z" />,
  calendar: <><rect x="10" y="14" width="44" height="42" rx="4" /><path d="M20 7v14M44 7v14M10 28h44m-32 9h4m12 0h4m-20 9h4m12 0h4" /></>,
  arrow: <path d="m18 26 14 14 14-14" />,
  close: <path d="m18 18 28 28m0-28L18 46" />,
};

export default function Icon({ name, className = '' }) {
  return <svg className={`icon ${className}`} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[name]}</svg>;
}
