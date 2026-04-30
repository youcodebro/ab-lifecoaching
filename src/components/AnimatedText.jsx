// import React from 'react';
// import { motion } from "framer-motion";

// const AnimatedText = () => {
//     const letters = "What Coaching helps with".split("");
//     return (
//         <em className=" inline-flex">
//           {letters.map((char, i) => (
//             <motion.span
//               key={i}
//               className="inline-block text-space"
//               whileHover={{
//                 y: -10,
//                 rotate: [0, -15, 15, 0],
//                 scale: 1.2,
//               }}
//               transition={{
//                 duration: 0.3,
//                 ease: "easeInOut",
//                 delay: i * 0.03,
//               }}
//             >
//               {char} 
//             </motion.span>
//           ))}
//         </em>
//       );
// }

// export default AnimatedText

import React from 'react';
import { motion } from "framer-motion";

const AnimatedText = () => {
  const letters = "What Coaching helps with".split("");

  return (
    <em className="inline-flex flex-wrap overflow-visible">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          whileHover={{
            y: window.innerWidth < 640 ? -5 : -10,
            rotate: [0, -10, 10, 0],
            scale: window.innerWidth < 640 ? 1.05 : 1.2,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: i * 0.02,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </em>
  );
};

export default AnimatedText;