import { useState} from "react";
import profileImg from '../assets/profile.webp';
import instaImg from '../assets/instagram.png';
import linkedinImg from '../assets/linkedin.png';
import mailImg from '../assets/mail.png';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Copy, Mail, Check} from "lucide-react";


// const ArrowIcon = () => (
//   <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
//     <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
//   </svg>
// );

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const ref = useScrollReveal();

  // Mail Button 
  const email = "alexis@alexisbormann.com";

  const handleMailClick = (e) => {
    // 1. Copy the email to clipboard so they can paste it manually if mailto fails
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Reset the "Copied!" text back to original after 3 seconds
    setTimeout(() => setCopied(false), 3000);
  };

  // Create a reusable function to handle the copy action
const handleCopyEmail = () => {
  navigator.clipboard.writeText("alexis@alexisbormann.com");
  setCopied(true);
  setTimeout(() => setCopied(false), 1500);
};


  return (
    <section id="connect" ref={ref}
      className="relative overflow-hidden bg-white pt-[40px] md:pt-[80px] pb-[30px] md:pb-[60px] px-[30px] md:px-[52px] text-center">

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(240,237,230,.85) 0%, transparent 70%)' }} />

      <div className="relative z-10">
        <p className="reveal text-[18px] tracking-[0.24em] font-medium uppercase mb-4">
          Connect
        </p>
        {/* <h2 className="reveal delay-1 font-serif font-light leading-[1.06] mb-8 text-ink
                       text-[clamp(42px,7vw,100px)]">
          Ready for<br />your <em className="italic">nudge?</em>
        </h2> */}
        <div className="reveal flex justify-center mt-6 mb-5">
          <img src={profileImg} alt="Coaching illustration" className="max-w-[360px] w-full" />
        </div>
        <p className="mt-15 reveal delay-2 text-base font-normal text-black tracking-[0.06em] mb-5">
          {/* To see what coaching is like, <br></br> book a discovery call. */}
          To see what coaching is like, <br></br> let’s book a discovery call.
        </p>
        {/* <p className="reveal delay-3 font-serif italic text-xl text-ink2 mb-[20px]">
          Reach out at{' '}
          <a href="mailto:alexis@alexisbormann.com"
            className="border-b border-ink/15 pb-0.5 hover:border-ink transition-colors">
            alexis@alexisbormann.com
          </a>
        </p> */}

        <div className="d-inflex reveal delay-4 mb-7">
        {/* <a
          href="mailto:alexis@alexisbormann.com?subject=Book%20Life%20Coaching%20Exploration%20Session&body=I%27d%20Like%20to%20learn%20more%20about%20life%20coaching%20with%20you%2C%20Alexis"

            className="btn-effect2 btn-bg-hover inline-flex items-center gap-2 px-6 md:px-11 py-4 text-[11px] font-normal
                       tracking-[0.2em] uppercase bg-ink text-white border border-ink
                        transition-colors">
                        <span className='text'>Request A Session</span>
                        <span className='icon2'> <Mail /> </span>
    
          </a> */}
          <a
          href={`mailto:${email}?subject=Book%20Life%20Coaching%20Exploration%20Session&body=I%27d%20Like%20to%20learn%20more%20about%20life%20coaching%20with%20you%2C%20Alexis`}
          onClick={handleMailClick}
          className="btn-effect2 btn-bg-hover inline-flex items-center gap-2 px-6 md:px-11 py-4 text-[10px] md:text-[11px] font-normal
                    tracking-[0.2em] uppercase bg-ink text-white border border-ink transition-colors"
        >
          <span className='text'>
            {copied ? "Email Copied to Clipboard!" : "Request A Session"}
          </span>
          <span className='icon2'> 
            {copied ? <Check size={14} /> : <Mail />} 
          </span>
        </a>
        </div>

        <ul className='social-links flex gap-9 justify-center mb-3'>
          <li>
            <a 
              href="mailto:alexis@alexisbormann.com"
              onClick={handleCopyEmail}
              
              >
              <img src={mailImg} className='max-w-[40px]' alt="Alexis Bormann Email Address" />
            </a>
          </li>
          <li>
            <a 
              href='https://www.linkedin.com/in/alexisbormann/'
              target="_blank" 
              rel="noreferrer"
              >
              <img src={linkedinImg} className='max-w-[40px]' alt="Alexis Bormann Linkedin" />
            </a>
          </li>
          <li>
            <a 
              href='https://www.instagram.com/alexislifecoach/'
              target="_blank" 
              rel="noreferrer"
              >
              <img src={instaImg} className='max-w-[40px]' alt="Alexis Bormann Instagram" />
            </a>
          </li>
        </ul>

          {/* Email Old Code */}
          {/* <a href="mailto:alexis@alexisbormann.com"
            className="border-b border-ink/15 pb-0.5 hover:border-ink transition-colors">
            Alexis@AlexisBormann.com
          </a> */}

          <div className="flex relative items-center justify-center gap-2 mt-6">
              <a
                href="mailto:alexis@alexisbormann.com"
                onClick={handleCopyEmail}
                className="text-black"
              >
                Alexis@AlexisBormann.com
                
                {copied && (
                  <span className="absolute -bottom-6 left-0 right-0 text-md text-blue-500">
                    Email copied ✓
                  </span>
                )}
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("alexis@alexisbormann.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className="opacity-100 group-hover:opacity-100 transition"
              >
                <Copy className="w-5 h-5 text-grey-400 hover:text-blue-600" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6 max-w-[400px] mx-auto">
              <p className="text-[14px] font-normal">Lifepath & Career Coach</p>
              <p className="text-[14px] font-normal">Resumé Coach</p>
              <p className="text-[14px] font-normal">Mindset Coach</p>
              <p className="text-[14px] font-normal">Somatic Coaching</p>
            </div>

        

        
      </div>
    </section>
  );
}
