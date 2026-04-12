import { useEffect, useState } from 'react';

const LOGO_SRC = `${process.env.PUBLIC_URL}/media/ab-logo.webp`;

export default function Loader() {
  const [phase, setPhase] = useState('visible');

  useEffect(() => {
    const fade = setTimeout(() => setPhase('fading'), 2500);
    const gone = setTimeout(() => setPhase('gone'),   3400);
    return () => { clearTimeout(fade); clearTimeout(gone); };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8
        bg-ink transition-opacity duration-700
        ${phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Logo size: change h-[…] and max-w on the <img> below; card padding: px/py on this div */}
      <div
        className="opacity-0 animate-loader-logo bg-white px-5 py-4
          shadow-[0_12px_48px_rgba(0,0,0,0.35)]"
      >
        <img
          src={LOGO_SRC}
          alt="Alexis Bormann"
          className="h-[64px] w-auto max-w-[min(200px,78vw)] object-contain block"
        />
      </div>

      {/* Tagline */}
      <p className="font-sans text-[10px] font-light tracking-[0.36em] uppercase
                    text-white/40 opacity-0 animate-loader-tag">
        Life Coaching with Alexis Bormann
      </p>

      {/* Progress bar */}
      <div className="w-[120px] h-px bg-white/10 overflow-hidden opacity-0 animate-loader-track">
        <div className="h-full w-0 bg-white animate-loader-bar" />
      </div>
    </div>
  );
}
