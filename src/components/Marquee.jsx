const ITEMS = [
  'Clarify your path',
  'Unlock your potential',
  'Find your nudge',
  'Live with purpose',
  'Start where you are',
];

const DOUBLED = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="overflow-hidden py-[22px] bg-paper border-t border-b border-ink/10">
      <div className="flex w-max animate-marquee">
        {DOUBLED.map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-12 whitespace-nowrap
                                  font-serif text-xl italic font-light text-ink2">
            {item}
            <span className="w-1 h-1 rounded-full bg-muted shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
