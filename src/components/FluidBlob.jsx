import { useEffect, useRef } from "react";
import gsap from "gsap";

const FluidBlob = () => {
  const blobRef = useRef();

  useEffect(() => {
    const blob = blobRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(blob, {
        x: mouseX - 150,
        y: mouseY - 150,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="blob-wrapper">
      <div ref={blobRef} className="blob"></div>
    </div>
  );
};

export default FluidBlob;