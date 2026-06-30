import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import faqImgD from '../assets/faq-cube-d.webp';
import faqImgM from '../assets/faq-cube-m.webp';

const FAQ_ITEMS = [
  {
    q: 'What is life coaching?',
    a: `In the simplest of terms, life coaching is a place of
    exploration, where we clarify what you want and
    empower you toward it. 

    The intention of life coaching is to guide you to
    learn more about yourself. To peel away the top
    layer and go deeper to rewire habits that no longer
    serve you. This is where lasting transformation is
    possible.

    The coach is there as your partner in the process
    of tapping into your natural creativity and
    resourcefulness. By doing this you identify the
    actions you will take, which fuels you with
    achieving what you want.

    Unlike consulting or mentoring, the coach is not
    there to give you answers or tell you how to get
    there.

    I do work with clients who are seeking a
    consultant or mentor. Setting these expectations
    upfront helps us both design how we will work together.`,
    // a: 'In the simplest of terms, life coaching is helping you clarify what you want and empowering you to move toward it.',
  },
  {
    q: 'Life coaching vs therapy?',
    a: "It's helpful to think of it like this — therapy is like going to physical therapy. It often stems from a past event and focuses on healing. Life coaching is like going to a personal trainer, which focuses on moving from functional to optimal.",
  },
  {
    q: 'What is a life coaching session like?',
    a: "During a session, we identify what part of your life is feeling off or unfulfilled. This is done by asking powerful questions that stir your thinking and perspective. You are the one who finds the answers — I am there as your guide to help empower you to take action.",
  },
  {
    q: 'What is the discovery call?',
    a: "We start wherever you are. No preparation needed. In our first conversation we'll explore what's on your mind, clarify what you're hoping to change or uncover, and see if working together feels like the right fit.",
  },
  // {
  //   q: 'What does a first session look like?',
  //   a: "We start wherever you are. No preparation needed. In our first conversation we'll explore what's on your mind, clarify what you're hoping to change or uncover, and see if working together feels like the right fit.",
  // },
  
  // {
  //   q: 'How many sessions will I need?',
  //   a: "Every person is unique. Some find clarity in a single session; others benefit from ongoing support over several months. We'll assess together what serves you best as we go.",
  // },
  // {
  //   q: 'Are sessions online or in person?',
  //   a: "Sessions are available both virtually and in person, depending on your preference and location. Many clients find the flexibility of virtual sessions a perfect fit for their lives.",
  // },
  
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className={`border-b border-ink/10 ${isOpen ? 'open' : ''}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center gap-5 py-[26px]
                   text-[14px] md:text-[18px] font-semibold text-ink text-left hover:text-ink2 transition-colors"
      >
        {q}
        <span className={`w-6 h-6 shrink-0 rounded-full border border-ink/15 flex items-center
                          justify-center text-sm text-muted transition-transform duration-300
                          ${isOpen ? 'rotate-45 border-ink' : ''}`}>
          +
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: isOpen ? '1500px' : '0' }}>
        <p className="pb-[26px] text-[14px] md:text-[16px] font-normal leading-8 text-ink2 md:whitespace-pre-line">{a}</p>
        
      </div>
    </div>

    // <div className="border-b border-ink/10">
    //   <button
    //     onClick={onClick}
    //     className="w-full text-left py-4 font-medium"
    //   >
    //     {q}
        
    //   </button>

    //   {isOpen && (
    //     <p className="pb-4 text-sm text-muted">
    //       {a}
    //     </p>
    //   )}
    // </div>
  );
}

export default function FAQ() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(0);
  const col1 = FAQ_ITEMS.slice(0, 4);

  return (
    <section id="faq" ref={ref} className=" py-[30px] md:py-[80px] px-[30px] md:px-[52px]">
      <div className="max-w-[1140px] mx-auto">
        {/* <div className='faq-content'>

          <p className="reveal text-[11px] tracking-[0.28em] uppercase text-muted mb-6">
            Common Questions
          </p>
          <h2 className="reveal delay-1 font-serif font-light leading-[1.15] mb-[72px]
                        text-[clamp(32px,4vw,56px)]">
            Questions about<br /><em className="italic">coaching</em>
          </h2>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className='faq-left p-[15px] md:p-[30px] bg-paper'>
            <div className='faq-content'>
                <p className="reveal text-[12px] tracking-[0.28em] uppercase text-muted mb-6">
                  Common Questions
                </p>
                <h2 className="reveal delay-1 font-serif font-light leading-[1.15] md:mb-[60px] mb-30px]
                              text-[clamp(32px,4vw,56px)]">
                  {/* Questions about <br /><em className="italic">coaching</em> */}
                  Seeking answers is the first step
                </h2>
              </div>
              <div className="reveal border-t border-ink/10">
                {/* {col1.map(item => <FAQItem key={item.q} {...item} />)} */}
                {col1.map((item, index) => (
                  <FAQItem
                    key={item.q}
                    {...item}
                    isOpen={openIndex === index}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>
          </div>

          
          <div className='faq-thumb'>
            <img src={faqImgD} alt="FAQ"
              className="faq-d object-cover object-top" />
              <img src={faqImgM} alt="FAQ"
              className="faq-m object-cover object-top" />
          </div>
          {/* <div className="reveal delay-2 border-t border-ink/10">
            {col2.map(item => <FAQItem key={item.q} {...item} />)}
          </div> */}
        </div>
      </div>
    </section>
  );
}
