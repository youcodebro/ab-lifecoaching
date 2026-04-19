const LOGO_SRC = `${process.env.PUBLIC_URL}/media/ab-logo.webp`;
// const YCB_LOGO_SRC = `${process.env.PUBLIC_URL}/media/ycb-logo.png`;

const LINKS = [
  { label: 'Coaching', href: '#coaching' },
  { label: 'Impact',   href: '#impact'   },
  { label: 'FAQ',      href: '#faq'      },
  { label: 'About',    href: '#about'    },
  { label: 'Connect',  href: '#connect'  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-white px-[30px] md:px-[52px] py-4 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6">
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
          © {year} Alexis Bormann
        </span>
      </div>

      <div className="md:pt-8 md:mt-8 pt-4 mt-4 border-t border-ink/20 text-center">
        {/* <a
          href="https://youcodebro.com/services"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center gap-2 text-sm font-bold text-ink/70
                     hover:text-ink transition-colors"
          style={{ textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}
        >
          <span>Built by YouCodeBro</span>
          <img
            src={YCB_LOGO_SRC}
            alt="YouCodeBro logo"
            width={120}
            height={36}
            decoding="async"
            className="h-7 w-auto object-contain brightness-0"
          />
        </a> */}
        <a 
                href="https://www.youcodebro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition"
            >
            <b>
            Built by {" "}
            </b>
            
               
                <b>
             YouCodeBro {" "}
            </b>
                <img src='/media/ycb-icon.png' alt='YouCodeBro Logo' className='sm-logo inline-block brightness-0 w-9 h-9 mr-2' />
                
            </a>
      </div>
    </footer>
  );
}
