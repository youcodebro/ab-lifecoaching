import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Impact() {
  const ref = useScrollReveal();

  return (
    <section id="impact" ref={ref}
      className="py-[20px] impact-section">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-[50px] items-start">

        {/* Left */}
        <div className='bg-ink text-white h-full p-[40px]'>
          <p className="reveal text-[11px] tracking-[0.28em] uppercase text-white/80 mb-7">
            Creating Impact
          </p>
          <h2 className="reveal delay-1 font-serif font-light leading-[1.2] text-white
                         text-[clamp(32px,3.5vw,52px)]">
            The <i>impact</i><br />of <em className="italic">coaching</em>
          </h2>
        </div>

        {/* Right */}
        <div className='p-5'>
          <p className="reveal font-serif text-2xl font-light italic leading-[1.55]
                        text-gray/85 pb-6 border-b border-white/10">
            While everyone's journey is different, the breakthroughs experienced
            with coaching can be <em>life changing</em>
          </p>

          <div className="flex flex-col gap-3">
            <p className="reveal delay-1 text-base font-extralight leading-[2.1] text-gray/65">
              A mother asked me to help her 17-year-old daughter get into college.
              At first, I kinda chuckled at such a tall order, but what came next was pretty fascinating.
            </p>
            <p className="reveal delay-2 text-base font-extralight leading-[2.1] text-gray/65">
              Like so many of her classmates, the daughter felt the pressure to know what profession
              she should do. It was clear that this was dampening her confidence and would likely
              make her a bit wobbly during college interviews.
            </p>
            <p className="reveal delay-3 text-base font-extralight leading-[2.1] text-gray/65">
              <strong className="text-gray/70 font-normal block mb-2 text-[11px] tracking-[0.1em] uppercase">
                It's not about figuring out what they want to do
              </strong>
              Over the course of the summer, the daughter and I established a rhythm during our sessions
              that either clarified her innate talents and interests or dove deeper into any ideas we had
              identified. Each session helped unravel her sense of self — even at such a young age, she
              was able to bring to the table what made her tick.
            </p>
            <p className="reveal delay-4 text-base font-extralight leading-[2.1] text-gray/65">
              <strong className="text-gray/70 font-normal block mb-2 text-[11px] tracking-[0.1em] uppercase">
                A clear impact
              </strong>
              During her interviews, an admissions officer commented they were impressed to meet a young
              person who had such a clear sense of self. Even though her personality wasn't outwardly
              passionate, she had a unique "spike" that differentiated her from her peers. It wasn't
              about the job she'd have after graduating — it was about who she is.
            </p>
            <p className="reveal font-serif italic text-lg text-gray/75 leading-[1.6]">
              In the end, she applied early and got in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
