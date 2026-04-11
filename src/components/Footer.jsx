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
      <span className="font-serif text-[22px] font-normal tracking-[0.04em] text-ink">
        A<em className="italic">B</em>
      </span>

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
