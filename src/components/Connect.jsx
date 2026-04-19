import profileImg from '../assets/profile-img.jpg';
import instaImg from '../assets/instagram.png';
import linkedinImg from '../assets/linkedin.png';
import mailImg from '../assets/mail.png';
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
      className="relative overflow-hidden bg-white pt-[40px] md:pt-[80px] pb-[30px] md:pb-[60px] px-[30px] md:px-[52px] text-center">

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(240,237,230,.85) 0%, transparent 70%)' }} />

      <div className="relative z-10">
        <p className="reveal text-[14px] tracking-[0.28em] uppercase text-muted mb-6">
          Connect
        </p>
        {/* <h2 className="reveal delay-1 font-serif font-light leading-[1.06] mb-8 text-ink
                       text-[clamp(42px,7vw,100px)]">
          Ready for<br />your <em className="italic">nudge?</em>
        </h2> */}
        <div className="reveal flex justify-center mt-10 mb-5">
          <img src={profileImg} alt="Coaching illustration" className="max-w-[360px] w-full" />
        </div>
        <p className="mt-15 reveal delay-2 text-base font-extralight text-black tracking-[0.06em] mb-5">
          To see what coaching is like, <br></br> book a discovery call.
        </p>
        {/* <p className="reveal delay-3 font-serif italic text-xl text-ink2 mb-[20px]">
          Reach out at{' '}
          <a href="mailto:alexis@alexisbormann.com"
            className="border-b border-ink/15 pb-0.5 hover:border-ink transition-colors">
            alexis@alexisbormann.com
          </a>
        </p> */}

        <ul className='social-links flex gap-4 justify-center mb-7'>
          <li>
            <a href="mailto:alexis@alexisbormann.com">
              <img src={mailImg} className='max-w-[40px]' alt="Alexis Bormann Email Address" />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/alexisbormann/'>
              <img src={linkedinImg} className='max-w-[40px]' alt="Alexis Bormann Linkedin" />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/alexislifecoach/'>
              <img src={instaImg} className='max-w-[40px]' alt="Alexis Bormann Instagram" />
            </a>
          </li>
        </ul>

        <div className="reveal delay-4">
          <a href="mailto:alexis@alexisbormann.com"
            className="inline-flex items-center gap-2 px-6 md:px-11 py-4 text-[11px] font-normal
                       tracking-[0.2em] uppercase bg-ink text-white border border-ink
                       hover:bg-ink2 transition-colors">
            Request a Session <ArrowIcon />
            
          </a>
        </div>

        
      </div>
    </section>
  );
}
