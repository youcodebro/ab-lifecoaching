import { useEffect, useRef } from "react";
import gsap from "gsap";

const FluidHeading = () => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    const move = (e) => {
      const { offsetWidth } = el;
      const x = e.offsetX;

      const skew = ((x / offsetWidth) - 0.5) * 20;

      gsap.to(el, {
        skewX: skew,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const leave = () => {
      gsap.to(el, {
        skewX: 0,
        duration: 0.5,
      });
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <h2
      ref={ref}
      className="animate-heading font-serif font-light leading-[1.2] mb-4 md:mb-10 text-[clamp(28px,3.5vw,48px)] text-ink inline-block"
    >
      My own <i>journey</i> <br />
      informs so much <br />
      of what I do
    </h2>
  );
};

export default FluidHeading


