import clientCircleImg from '../assets/circle-img.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ArrowIcon = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

// const SCENARIOS = [
//   'Is the life you want to lead feel out of reach?',
//   'Are you chasing happniess?',
//   'Is your life lacking an element of fun?',
//   'Burnt out or stumped in your career?',
//   'Looking to find a romantic life partner?',
//   'Is parenthood highjacking your own needs?',
//   'Does your college-bound or post-college child need direction?',
// ];
const SCENARIOS = [
  <>Is the life you want to lead feel out of reach?</>,
  <>Are you chasing happiness?</>,
  <>Is your life lacking an element of fun?</>,
  <>Burnt out or stumped in your career?</>,
  <>Looking to find a <span className="text-red-500">romantic</span> life partner?</>,
  <>Is parenthood <span className="text-red-500">hijacking</span> your own needs?</>,
  <>Does your college-bound or post-college child <span className="text-red-500">need</span> direction?</>,
];

export default function Coaching() {
  const ref = useScrollReveal();

  return (
    <section id="coaching" ref={ref}
      className="bg-white py-[100px] px-[30px] md:px-[52px] pd-section">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[100px] gap-[40px] items-start">

        {/* Left */}
        <div>
          <p className="reveal text-[11px] tracking-[0.28em] uppercase text-muted mb-7">
            Is Life Coaching For You?

          </p>
          <h2 className="reveal delay-1 font-serif font-light leading-[1.12]
                         text-[clamp(38px,4.5vw,64px)]">
            {/* Is life coaching<br />for <em className="italic">you?</em> */}
            What Coaching helps with
          </h2>
          {/* <p className="reveal delay-2 mt-9 text-base font-extralight leading-[2.1] text-ink2">
            I am here to help you explore barriers and navigate them with clarity and purpose.
            Together we identify how you can grow and connect with your natural creativity,
            strengths, and resourcefulness one step at a time.
          </p> */}
          <p className="reveal delay-2 mt-9 text-base font-extralight leading-[2.1] text-ink2">
          It’s not about what we do in our lives, it’s what we want our lives to be about
          When it comes to barriers we face in life, I have a knack for translating the complex into actionable simplicity—helping clarify and uncover what is lingering under the surface. <br></br>

          My approach stems from a sense of playfulness and curiosity rooted in disruption and depth. I am here to help you explore barriers and navigate them with clarity and purpose. <br></br>

          Together we identify how you can grow and connect with your natural creativity, strengths, and resourcefulness one step at a time.

          </p>

          {/* <ul className="mt-[52px] flex flex-col">
            {SCENARIOS.map((item, i) => (
              <li key={i}
                className={`reveal delay-${Math.min(i + 1, 4)} flex items-start gap-5 py-[22px]
                  border-b border-ink/10 first:border-t first:border-ink/10
                  transition-transform duration-300 hover:translate-x-1.5`}>
                <span className="font-serif text-[13px] italic text-muted min-w-[28px] pt-0.5">
                  {NUMERALS[i]}.
                </span>
                <p className="text-base font-light leading-[1.7] text-ink">{item}</p>
              </li>
            ))}
          </ul>

          <div className="reveal mt-[52px]">
            <a href="#connect"
              className="inline-flex items-center gap-2 px-8 py-3 text-[11px] font-normal
                         tracking-[0.2em] uppercase bg-ink text-white border border-ink
                         hover:bg-ink2 transition-colors">
              What is Coaching? <ArrowIcon />
            </a>
          </div> */}
        </div>

        {/* Right — image */}
        <div className="reveal-right md:order-last order-firs thumb-order">
          <div className="w-full coaching-wrapper">
            
            <div className='thumb-wrapper overflow-hidden'>
              <img src={clientCircleImg} alt="Happy coaching client"
              className=" object-cover object-top m-auto" />
            </div>
            {/* <ul className="mt-[52px] flex flex-col">
            {SCENARIOS.map((item, i) => (
              <li key={i}
                className={`reveal delay-${Math.min(i + 1, 4)} flex items-start gap-5 py-[22px]
                  border-b border-ink/10 first:border-t first:border-ink/10
                  transition-transform duration-300 hover:translate-x-1.5`}>
                <span className="font-serif text-[13px] italic text-muted min-w-[28px] pt-0.5">
                  {NUMERALS[i]}.
                </span>
                <p className="text-base font-light leading-[1.7] text-ink">{item}</p>
              </li>
            ))}
          </ul> */}
          <ul className="mt-[52px] flex flex-col">
            {SCENARIOS.map((item, i) => (
              <li key={i}
                className={`reveal delay-${Math.min(i + 1, 4)} flex items-start gap-5 py-[22px]
                  border-b border-ink/10 first:border-t first:border-ink/10
                  transition-transform duration-300 hover:translate-x-1.5`}>
                {/* <span className="font-serif text-[13px] italic text-muted min-w-[28px] pt-0.5">
                  {NUMERALS[i]}.
                </span> */}
                <p className="text-base font-light leading-[1.7] text-ink">{item}</p>
              </li>
            ))}
          </ul>

          <div className="reveal mt-[52px]">
            <a href="#connect"
              className="inline-flex items-center gap-2 px-8 py-3 text-[11px] font-normal
                         tracking-[0.2em] uppercase bg-ink text-white border border-ink
                         hover:bg-ink2 transition-colors">
              What is Coaching? <ArrowIcon />
            </a>
          </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
