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
  // Sticky nav 
  const [stuck, setStuck] = useState(false);
  const [open,  setOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
     
      <nav
        className={`navigation-wrap fixed top-0 left-0 right-0 z-[200] flex items-center justify-between
          md:px-[52px] px-[15px] transition-all duration-500 bg-white
          h-[76px] md:h-[76px]
          ${stuck ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
        style={{ height: 'var(--nav-h)' }}
      >
        {/* Logo */}
        <a href="#hero" onClick={close}
          className="logo shrink-0 flex items-center leading-none">
          <img src={LOGO_SRC} alt="Alexis Bormann" className="h-12 w-auto md:h-14 object-contain" />
        </a>

        {/* Nav links — desktop only */}
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
          Original CTA 
        */}
        {/* <a href="#connect"
          className="btn-request btn-bg-hover hidden md:inline-flex items-center gap-2 px-6 py-3
            text-[9px] font-normal tracking-[0.2em] uppercase bg-ink text-white border border-ink">
          <span className='text'>Request a Session</span>
        </a> */}

        {/* Burger — mobile only in top nav */}
        <button
          className="btn-burger md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1.5"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-[22px] h-px bg-ink transition-transform duration-300
            ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-px bg-ink transition-opacity duration-300
            ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-px bg-ink transition-transform duration-300
            ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/*
        STICKY CONTAINED FLOATING HEADER 
        
      */}
      <div
        className={`fixed top-2 md:top-3 left-1/2 -translate-x-1/2 z-[210]
          w-[calc(100%-32px)] max-w-[1200px]
          flex items-center justify-between
          px-5 md:px-8 h-[64px]
          bg-white shadow-lg rounded-full md:rounded-sm
          transition-all duration-500
          ${stuck ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}
      >
        {/* Logo — left */}
        <a href="#hero" onClick={close}
          className="logo shrink-0 flex items-center leading-none">
          <img src={LOGO_SRC} alt="Alexis Bormann" className="h-9 w-auto md:h-10 object-contain" />
        </a>

        {/* Right side: hamburger + CTA */}
        <div className="flex items-center gap-4">

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-[5px] bg-transparent border-none p-1.5 cursor-pointer"
          >
            <span className={`block w-[20px] h-px bg-ink transition-transform duration-300
              ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block w-[20px] h-px bg-ink transition-opacity duration-300
              ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-[20px] h-px bg-ink transition-transform duration-300
              ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>

          {/* Request Button */}
          <a href="#connect"
            className="btn-request btn-bg-hover inline-flex items-center gap-2
              px-5 py-2.5 text-[9px] font-normal tracking-[0.2em] uppercase
              bg-ink text-white border border-ink transition-all duration-300 hover:opacity-80">
            Request a Session
          </a>

        </div>
      </div>

      {/*
        FULL-SCREEN DRAWER 
        
      */}
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
