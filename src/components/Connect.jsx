import therapyImg from '../assets/therapy.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ArrowIcon = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default function Connect() {
  const ref = useScrollReveal();

  return (
    <section id="connect" ref={ref}
      className="relative overflow-hidden bg-white pt-[160px] pb-[60px] px-[52px] text-center">

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(240,237,230,.85) 0%, transparent 70%)' }} />

      <div className="relative z-10">
        <p className="reveal text-[11px] tracking-[0.28em] uppercase text-muted mb-6">
          Connect
        </p>
        <h2 className="reveal delay-1 font-serif font-light leading-[1.06] mb-8 text-ink
                       text-[clamp(42px,7vw,100px)]">
          Ready for<br />your <em className="italic">nudge?</em>
        </h2>
        <p className="reveal delay-2 text-base font-extralight text-muted tracking-[0.06em] mb-5">
          To see what coaching is like, book a discovery call.
        </p>
        <p className="reveal delay-3 font-serif italic text-xl text-ink2 mb-[52px]">
          Reach out at{' '}
          <a href="mailto:alexis@alexisbormann.com"
            className="border-b border-ink/15 pb-0.5 hover:border-ink transition-colors">
            alexis@alexisbormann.com
          </a>
        </p>

        <div className="reveal delay-4">
          <a href="mailto:alexis@alexisbormann.com"
            className="inline-flex items-center gap-2 px-11 py-4 text-[11px] font-normal
                       tracking-[0.2em] uppercase bg-ink text-white border border-ink
                       hover:bg-ink2 transition-colors">
            Request a Session <ArrowIcon />
          </a>
        </div>

        <div className="reveal flex justify-center mt-10">
          <img src={therapyImg} alt="Coaching illustration" className="max-w-[360px] w-full" />
        </div>
      </div>
    </section>
  );
}
