import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

// New Code SVG
const svgVariants = [

    // 1️⃣ Clean straight line
    `<svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 25 L305 25"
        fill="none"
        stroke="currentColor"
        stroke-width="10"
        stroke-linecap="round"/>
    </svg>`,
  
    // 2️⃣ Smooth wave
    `<svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 25 Q80 5 155 25 T305 25"
        fill="none"
        stroke="currentColor"
        stroke-width="10"
        stroke-linecap="round"/>
    </svg>`,
  
    // 3️⃣ Curved / organic line (Dribbble-like)
    `<svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 28 C60 10, 120 35, 180 20 S260 10, 305 25"
        fill="none"
        stroke="currentColor"
        stroke-width="10"
        stroke-linecap="round"/>
    </svg>`,
  
    // 4️⃣ Messy scribble line
    `<svg viewBox="0 0 310 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 25 C30 5, 60 45, 90 20 S150 5, 180 30 S240 10, 305 25"
        fill="none"
        stroke="currentColor"
        stroke-width="10"
        stroke-linecap="round"/>
    </svg>`,
  ];

  // New Code
  const animateLine = (path, index) => {
    const length = path.getTotalLength();
  
    // Reset line
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
  
    switch (index % 4) {
      // 1 Smooth draw
      case 0:
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        break;
  
      // 2 Wave feel
      case 1:
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 0.6,
          ease: "power3.out",
        });
  
        gsap.fromTo(
          path,
          { y: 0 },
          {
            y: -3,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut",
          }
        );
        break;
  
      // 3 Elastic (Dribbble feel)
      case 2:
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });
        break;
  
      // 4 Stretch / morph feel
      case 3:
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power2.out",
        });
  
        gsap.fromTo(
          path,
          { scaleX: 0.95 },
          {
            scaleX: 1,
            duration: 0.4,
            transformOrigin: "left center",
            ease: "power2.out",
          }
        );
        break;

        default:
        // fallback (optional but required by ESLint)
        gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: "power2.out",
        });
    }
  };

let globalIndex = null;

export default function DrawUnderline({ text }) {
  const containerRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const box = boxRef.current;

    let enterTween = null;
    let leaveTween = null;

    const decorateSVG = (svg) => {
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.setAttribute("preserveAspectRatio", "none");
      
        svg.querySelectorAll("path").forEach((p) => {
          p.setAttribute("fill", "none");
          p.setAttribute("stroke", "currentColor");
          p.setAttribute("stroke-width", "10");
          p.setAttribute("stroke-linecap", "round");
        });
      };

    const handleEnter = () => {
      if (enterTween?.isActive()) return;
      if (leaveTween?.isActive()) leaveTween.kill();

    // New Code
    if (globalIndex === null) {
        globalIndex = 0;
      }

      box.innerHTML = svgVariants[globalIndex];
      const svg = box.querySelector("svg");

      if (!svg) return;

      decorateSVG(svg);

      const path = svg.querySelector("path");

    // New Code
    enterTween = animateLine(path, globalIndex);

      globalIndex = (globalIndex + 1) % svgVariants.length;
    };

    const handleLeave = () => {
      const path = box.querySelector("path");
      if (!path) return;

      const playOut = () => {
        if (leaveTween?.isActive()) return;

        leaveTween = gsap.to(path, {
          drawSVG: "100% 100%",
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            box.innerHTML = "";
            leaveTween = null;
          },
        });
      };

      if (enterTween?.isActive()) {
        enterTween.eventCallback("onComplete", playOut);
      } else {
        playOut();
      }
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <a href="#hero" ref={containerRef} className="text-draw">
      <p className="text-draw__p italic leading-[1.04] tracking-[-0.01em] text-[clamp(52px,6.5vw,96px)]">{text}</p>
      <div ref={boxRef} className="text-draw__box"></div>
    </a>
  );
}