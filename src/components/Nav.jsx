import { useEffect, useState } from 'react';

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
      {/* Desktop nav */}
      <nav className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between
        px-[52px] transition-all duration-500
        ${stuck
          ? 'bg-white/97 backdrop-blur-md shadow-[0_1px_0_rgba(19,18,16,0.1)]'
          : 'bg-transparent'}
        h-[76px] md:h-[76px]`}
        style={{ height: 'var(--nav-h)' }}
      >
        <a href="#hero" onClick={close}
          className="font-serif text-[30px] font-normal tracking-[0.02em] leading-none text-ink shrink-0">
          A<em className="italic">B</em>
        </a>

        {/* Links — hidden on mobile */}
        <ul className="hidden md:flex gap-9 list-none items-center">
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

        {/* CTA — hidden on mobile, fades in when stuck */}
        <a href="#connect"
          className={`hidden md:inline-flex items-center gap-2 px-6 py-3 text-[9px] font-normal
            tracking-[0.2em] uppercase bg-ink text-white border border-ink
            hover:bg-ink2 transition-all duration-300
            ${stuck ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          Request a Session
        </a>

        {/* Burger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1.5"
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

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[190] flex flex-col items-center justify-center gap-10
        bg-white transition-opacity duration-300
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}
            className="font-serif text-[32px] font-light tracking-[0.04em] text-ink hover:italic">
            {l.label}
          </a>
        ))}
        <a href="#connect" onClick={close}
          className="mt-3 inline-flex items-center gap-2 px-8 py-3 text-[11px] font-normal
                     tracking-[0.2em] uppercase bg-ink text-white border border-ink
                     hover:bg-ink2 transition-colors">
          Request a Session
        </a>
      </div>
    </>
  );
}
