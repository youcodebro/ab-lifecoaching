import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import faqImg from '../assets/faq-img.jpg';

const FAQ_ITEMS = [
  {
    q: 'What is life coaching?',
    a: 'In the simplest of terms, life coaching is helping you clarify what you want and empowering you to move toward it.',
  },
  {
    q: 'How is it different from therapy?',
    a: "It's helpful to think of it like this — therapy is like going to physical therapy. It often stems from a past event and focuses on healing. Life coaching is like going to a personal trainer, which focuses on moving from functional to optimal.",
  },
  {
    q: 'What is a life coaching session like?',
    a: "During a session, we identify what part of your life is feeling off or unfulfilled. This is done by asking powerful questions that stir your thinking and perspective. You are the one who finds the answers — I am there as your guide to help empower you to take action.",
  },
  {
    q: 'What does a first session look like?',
    a: "We start wherever you are. No preparation needed. In our first conversation we'll explore what's on your mind, clarify what you're hoping to change or uncover, and see if working together feels like the right fit.",
  },
  // {
  //   q: 'How many sessions will I need?',
  //   a: "Every person is unique. Some find clarity in a single session; others benefit from ongoing support over several months. We'll assess together what serves you best as we go.",
  // },
  // {
  //   q: 'Are sessions online or in person?',
  //   a: "Sessions are available both virtually and in person, depending on your preference and location. Many clients find the flexibility of virtual sessions a perfect fit for their lives.",
  // },
  
];

function FAQItem({ q, a, isOpen, onClick  }) {
  // const [openIndex, setOpenIndex] = useState(0); 
  const [open, setOpen] = useState(false);
  
  return (
    <div className={`border-b border-ink/10 ${open ? 'open' : ''}`}>
      <button
        onClick={() => onClick(v => !v)}
        className="w-full flex justify-between items-center gap-5 py-[26px]
                   text-base font-light text-ink text-left hover:text-ink2 transition-colors"
      >
        {q}
        <span className={`w-6 h-6 shrink-0 rounded-full border border-ink/15 flex items-center
                          justify-center text-sm text-muted transition-transform duration-300
                          ${isOpen ? 'rotate-45 border-ink' : ''}`}>
          +
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: isOpen ? '400px' : '0' }}>
        <p className="pb-[26px] text-base font-extralight leading-8 text-ink2">{a}</p>
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
  const col2 = FAQ_ITEMS.slice(2);

  return (
    <section id="faq" ref={ref} className="bg-paper py-[80px] px-[52px]">
      <div className="max-w-[1140px] mx-auto">
        <p className="reveal text-[11px] tracking-[0.28em] uppercase text-muted mb-6">
          Common Questions
        </p>
        <h2 className="reveal delay-1 font-serif font-light leading-[1.15] mb-[72px]
                       text-[clamp(32px,4vw,56px)]">
          Questions about<br /><em className="italic">coaching</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
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
          <div className='faq-thumb'>
            <img src={faqImg} alt="FAQ"
              className=" object-cover object-top" />
          </div>
          {/* <div className="reveal delay-2 border-t border-ink/10">
            {col2.map(item => <FAQItem key={item.q} {...item} />)}
          </div> */}
        </div>
      </div>
    </section>
  );
}
