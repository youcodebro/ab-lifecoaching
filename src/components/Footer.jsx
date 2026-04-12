const LOGO_SRC = `${process.env.PUBLIC_URL}/media/ab-logo.webp`;

const LINKS = [
  { label: 'Coaching', href: '#coaching' },
  { label: 'Impact',   href: '#impact'   },
  { label: 'FAQ',      href: '#faq'      },
  { label: 'About',    href: '#about'    },
  { label: 'Connect',  href: '#connect'  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white px-[52px] py-10
                       grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6">
      <a href="#hero" className="inline-flex items-center justify-self-center md:justify-self-start">
        <img src={LOGO_SRC} alt="Alexis Bormann" className="h-10 w-auto md:h-11 object-contain" />
      </a>

      <ul className="flex gap-7 list-none justify-center flex-wrap">
        {LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href}
              className="text-[10px] tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <span className="text-[10px] tracking-[0.15em] uppercase text-muted md:text-right text-center">
        © 2025 Alexis Bormann
      </span>
    </footer>
  );
}
