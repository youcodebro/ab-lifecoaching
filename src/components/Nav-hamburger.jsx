import { useEffect, useState } from 'react';

const LOGO_SRC = `${process.env.PUBLIC_URL}/media/ab-logo-updated.webp`;

const NAV_LINKS = [
  { label: 'Is Coaching For You?', href: '#coaching' },
  { label: 'Creating Impact',      href: '#impact'   },
  { label: 'Common Questions',     href: '#faq'      },
  { label: 'About',                href: '#about'    },
  { label: 'Connect',              href: '#connect'  },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open,  setOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/*
        ─── ORIGINAL NAV (shown only at top — when NOT scrolled) ───────────────
        Hidden on mobile always (mobile just uses the burger drawer).
        Hidden on desktop once user scrolls (stuck = true).
      */}
      <nav className={`navigation-wrap fixed top-0 left-0 right-0 z-[200] flex items-center justify-between
        md:px-[52px] px-[15px] transition-all duration-500
        bg-white
        h-[76px] md:h-[76px]
        ${stuck ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}
        `}
        style={{ height: 'var(--nav-h)' }}
      >
        <a href="#hero" onClick={close}
          className="logo shrink-0 flex items-center leading-none">
          <img src={LOGO_SRC} alt="Alexis Bormann" className="h-12 w-auto md:h-14 object-contain" />
        </a>

        {/* Links — hidden on mobile, visible on desktop when NOT scrolled */}
        <ul className="mobile-nav-wrap hidden md:flex gap-9 list-none items-center">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                className="text-[10px] font-light tracking-[0.18em] uppercase text-ink
                           relative pb-0.5 after:content-[''] after:absolute after:bottom-[-2px]
                           after:left-0 after:w-0 after:h-px after:bg-ink
                           after:transition-all after:duration-300 hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/*
          CTA button — desktop only, was fading in on scroll.
          Now hidden because on scroll we switch to hamburger instead.
          Keeping this commented in case client wants it back.
        */}
        {/* <a href="#connect"
          className={`btn-request btn-bg-hover hidden md:inline-flex items-center gap-2 px-6 py-3 text-[9px] font-normal
            tracking-[0.2em] uppercase bg-ink text-white border border-ink
            transition-all duration-300
            ${stuck ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <span className='text'> Request a Session</span>
        </a> */}

        {/* Burger — mobile only in top nav (original behaviour) */}
        <button
          className="btn-burger md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1.5"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-[22px] h-px bg-ink transition-transform duration-300
            ${open ? 'translate-y-[6px] rotate-45 bg-white' : ''}`} />
          <span className={`block w-[22px] h-px bg-ink transition-opacity duration-300
            ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-px bg-ink transition-transform duration-300
            ${open ? '-translate-y-[6px] -rotate-45 bg-white' : ''}`} />
        </button>
      </nav>

      {/*
        ─── STICKY CORNER HAMBURGER (shown on scroll — both mobile & desktop) ──
        Appears in top-right corner when user scrolls down (stuck = true).
        On desktop this replaces the full nav.
        On mobile this replaces the full sticky nav bar.
      */}
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className={`fixed top-5 right-5 z-[210] flex flex-col gap-[5px] p-3
          bg-white shadow-md rounded-full
          transition-all duration-300
          ${stuck ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <span className={`block w-[20px] h-px bg-ink transition-transform duration-300
          ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
        <span className={`block w-[20px] h-px bg-ink transition-opacity duration-300
          ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-[20px] h-px bg-ink transition-transform duration-300
          ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
      </button>

      {/* Mobile / Hamburger drawer — same as original, used by both mobile & desktop now */}
      <div className={`fixed inset-0 z-[190] flex flex-col items-center justify-center gap-4
        bg-gray-800 transition-opacity duration-300
        ${open ? 'opacity-100 pointer-events-auto mobile-wrapper' : 'opacity-0 pointer-events-none'}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}
            className="font-serif text-[20px] font-light tracking-[0.04em] text-white hover:italic">
            {l.label}
          </a>
        ))}
        <a href="#connect" onClick={close}
          className="mt-3 inline-flex items-center gap-1 px-8 py-3 text-[11px] font-normal
                     tracking-[0.2em] uppercase bg-ink text-white border border-ink
                     hover:bg-ink2 transition-colors">
          Request a Session
        </a>
      </div>
    </>
  );
}
