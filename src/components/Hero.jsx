import heroImg from '../assets/hero.jpg';

const ArrowIcon = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="hero"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden
                 relative bg-white pt-[var(--nav-h)]">

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 72% 50%, rgba(240,237,230,.7) 0%, transparent 70%)' }} />

      {/* Text */}
      <div className="relative z-10 px-[52px] py-20 md:pr-14 order-2 md:order-1">
        <p className="hero-anim animate-fade-up-1 text-[11px] font-normal tracking-[0.3em]
                      uppercase text-muted mb-9">
          Life Coaching with Alexis Bormann
        </p>

        <h1 className="hero-anim animate-fade-up-2 font-serif font-light leading-[1.04]
                       tracking-[-0.01em] text-[clamp(52px,6.5vw,96px)]">
          Sometimes<br />life just<br />needs a <em className="italic">nudge</em>
        </h1>

        <p className="hero-anim animate-fade-up-3 mt-9 text-base font-extralight leading-8
                      tracking-[0.04em] text-ink2 max-w-[420px]">
          Clarifying what matters. Uncovering what's possible.
          Starting exactly where you are.
        </p>

        <div className="hero-anim animate-fade-up-4 mt-13 flex gap-4 flex-wrap mt-[52px]">
          <a href="#connect"
            className="inline-flex items-center gap-2 px-8 py-3 text-[11px] font-normal
                       tracking-[0.2em] uppercase bg-ink text-white border border-ink
                       hover:bg-ink2 transition-colors">
            Request a Session <ArrowIcon />
          </a>
          <a href="#coaching"
            className="inline-flex items-center gap-2 px-8 py-3 text-[11px] font-normal
                       tracking-[0.2em] uppercase bg-transparent text-ink border border-ink
                       hover:bg-ink hover:text-white transition-colors">
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hero-anim animate-fade-up-6 hidden md:flex absolute bottom-10
                        left-[52px] flex-col items-start gap-3">
          <span className="text-[9px] tracking-[0.24em] uppercase text-muted">Scroll</span>
          <div className="w-px h-[60px] animate-scroll-pulse"
            style={{ background: 'linear-gradient(to bottom, #131210, transparent)' }} />
        </div>
      </div>

      {/* Image */}
      <div className="relative h-full min-h-[600px] flex items-stretch order-1 md:order-2">
        <div className="flex-1 overflow-hidden">
          <img src={heroImg} alt="Life coaching session"
            className="w-full h-full object-cover object-top" />
        </div>

        {/* Floating quote card */}
        <div className="hero-anim animate-fade-up-5 hidden md:block absolute bottom-[52px]
                        -left-9 bg-white p-7 max-w-[310px] z-10
                        shadow-[0_12px_48px_rgba(19,18,16,0.1)]">
          <p className="font-serif text-base italic leading-[1.65] text-ink2">
            "Her guidance helped bring clarity and focus, which were the
            key missing ingredients for me."
          </p>
          <cite className="block mt-4 text-[10px] tracking-[0.18em] uppercase text-muted not-italic">
            Lila C. — TV Animator &amp; Designer
          </cite>
        </div>
      </div>
    </section>
  );
}
