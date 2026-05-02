import { useEffect, useRef } from "react";
import gsap from "gsap";

const FluidHeading = () => {
  const containerRef = useRef();

  // ✅ Step 2
  useEffect(() => {
    const el = containerRef.current;
    const letters = el.querySelectorAll(".char");

    const move = (e) => {
      const bounds = el.getBoundingClientRect();
      const x = e.clientX - bounds.left;

      letters.forEach((char, i) => {
        // const speed = (i % 5) * 2;

        gsap.to(char, {
          y: Math.sin((x + i * 10) * 0.02) * 10,
          x: Math.cos((x + i * 5) * 0.01) * 5,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    };

    const leave = () => {
      gsap.to(letters, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  // ✅ Step 1
  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block will-change-transform">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <h2
      ref={containerRef}
      className="font-serif font-light leading-[1.2] text-[clamp(28px,3.5vw,48px)] text-ink"
    >
      {splitText("My own ")}
      <i>{splitText(" journey ")}</i>
      <br />
      {splitText("informs so much ")}
      <br />
      {splitText("of what I do")}
    </h2>
  );
};

export default FluidHeading;
