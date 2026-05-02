// import React from "react";
// import { motion } from "framer-motion";

// const AnimatedText = () => {
//   const letters = "What can coaching help with?".split("");
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//   return (
//     <em className="inline-flex flex-wrap overflow-visible">
//       {letters.map((char, i) => (
//         <motion.span
//           key={i}
//           className="inline-block whitespace-pre"
//           whileHover={!isMobile ? {
//             y: -10,
//             rotate: [0, -10, 10, 0],
//             scale: 1.2,
//           } : {}}
//           whileTap={isMobile ? {
//             y: -6,
//             scale: 1.05,
//           } : {}}
//           animate={isMobile ? {
//             y: [0, -3, 0],
//           } : {}}
//           transition={{
//             duration: 0.3,
//             ease: "easeInOut",
//             delay: i * 0.02,
//           }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </em>
//   );
// };

// export default AnimatedText;


// import React from "react";
// import { motion } from "framer-motion";

// const AnimatedText = () => {
//   const text = "What can coaching help with?";
//   const letters = text.split("");

//   const isMobile =
//     typeof window !== "undefined" && window.innerWidth < 768;

//   return (
//     <em className="inline-flex flex-wrap overflow-visible">
//       {letters.map((char, i) => (
//         <motion.span
//           key={i}
//           className="inline-block whitespace-pre will-change-transform"

//           // ✅ Desktop hover (piano wave)
//           whileHover={
//             !isMobile
//               ? {
//                   y: [0, -12, 0],
//                 }
//               : {}
//           }

//           // ✅ Mobile tap interaction
//           whileTap={
//             isMobile
//               ? {
//                   y: [0, -10, 0],
//                   scale: 1.05,
//                 }
//               : {}
//           }

//           // ✅ Mobile idle animation (visible)
//           animate={
//             isMobile
//               ? {
//                   y: [0, -5, 0],
//                 }
//               : {}
//           }

//           transition={{
//             duration: 0.6,
//             ease: "easeInOut",
//             delay: i * 0.04,
//             repeat: isMobile ? Infinity : 0,
//             repeatDelay: 1,
//           }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </em>
//   );
// };

// export default AnimatedText;

import React from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
  const text = "What can coaching help with?";
  const letters = text.split("");

  return (
    <motion.em
      className="inline-flex flex-wrap overflow-visible"
      initial="rest"
      whileHover="hover"
      whileTap="hover" // For mobile
      animate="rest"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre will-change-transform"
          variants={{
            rest: { y: 0 },
            hover: { y: -12 }, // piano lift
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: i * 0.035, //  wave timing
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.em>
  );
};

export default AnimatedText;