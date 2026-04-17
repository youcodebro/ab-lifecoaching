import headshotImg from '../assets/headshot.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className=" py-[80px] px-[52px]">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[50px] items-start">

        {/* Left — bio */}
        <div className='bg-paper p-5 border-2 border-solid border-gray-700'>
          <p className="reveal text-[11px] tracking-[0.28em] uppercase text-muted mb-7">
            About Alexis
          </p>
          <h2 className="reveal delay-1 font-serif font-light leading-[1.2] mb-12
                         text-[clamp(28px,3.5vw,48px)] text-ink">
            My own <i>journey</i> <br />informs so much<br />of <em className="italic">what I do</em>
          </h2>

        </div>

        {/* Right — photo */}
        <div className="bg-paper p-6 reveal-right about-content">
          {/* <div className="w-full aspect-[2/3] overflow-hidden bg-paper2">
            <img src={headshotImg} alt="Alexis Bormann"
              className="w-full h-full object-cover object-top" />
          </div> */}
          <p className="reveal delay-2 text-base font-extralight leading-[2.1] text-ink2 mb-6">
            {/* I was born and raised in the  */}
            <strong className="text-ink font-normal">I was born and raised amidst the</strong> stimulating buzz of New York City. Since I was little,
            I was always chasing big. From age 12, I was a competitive runner always trying to
            beat my own records. I started my own theater company at the age of 26. I landed a
            job in advertising with no prior experience.
          </p>
          <p className="reveal delay-3 text-base font-extralight leading-[2.1] text-ink2 mb-6">
            <strong className="text-ink font-normal">I was accustomed to working hard.</strong> Really
            hard. And I loved it. Until I didn't. After over a decade working as a copywriter, I found
            myself getting burnt out. I started to continually feel blocked creatively. What was once
            important to me, no longer mattered. As a busy parent, I struggled to prioritize myself.
            I felt like a piece was missing from my life, but I couldn't put my finger on what.
          </p>
          <p className="reveal delay-4 text-base font-extralight leading-[2.1] text-ink2 mb-6">
            <strong className="text-ink font-normal">Applying what I've learned as a coach has helped
            me find balance and meaning.</strong> I learned that a life led with genuine purpose can
            create a profound sense of peace and buoyancy. My passion now lies in helping others break
            through what is holding them back from finding their flow. From living a life that feels
            genuine. From the life they are meant to be leading.
          </p>
          <p className="reveal font-serif text-lg text-ink mt-2 mb-0">
          <strong className="text-ink font-normal"> Life is fleeting. Let's seize it together. </strong>
          </p>

          <div className="reveal mt-10 p-8 bg-white border-l-2 border-ink">
            <p className="font-serif italic text-base leading-[1.75] text-ink2">
              I do still love to write and occasionally take on projects.
            </p>
            <a href="https://wordbydesign.com" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-3 text-[10px] tracking-[0.22em] uppercase text-muted
                         border-b border-ink/10 pb-0.5 transition-colors hover:text-ink hover:border-ink">
              WordByDesign ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
