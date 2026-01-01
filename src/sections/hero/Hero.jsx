// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center bg-slate-900">
//       <div className="max-w-3xl px-12">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-semibold text-slate-100 leading-tight"
//         >
//           Building clean, scalable web applications
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mt-6 text-lg text-slate-400"
//         >
//           I focus on crafting thoughtful user interfaces and reliable backend
//           logic using modern web technologies.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-10 flex gap-6"
//         >
//           <a
//             href="#projects"
//             className="px-6 py-3 rounded-md bg-indigo-500 text-slate-900 font-medium hover:bg-indigo-400 transition"
//           >
//             View Projects
//           </a>

//           <a
//             href="#contact"
//             className="px-6 py-3 rounded-md border border-slate-700 text-slate-100 hover:border-slate-500 transition"
//           >
//             Contact Me
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import { profile, assets } from "./assets/assets";
import { motion } from "framer-motion";
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className=" min-h-screen flex items-center text-left">
      <div className="hero max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-xl md:text-5xl font-semibold text-slate-400 leading-tight"
          >
            Building <span className="text-[#a52a2a]">clean, scalable</span>{" "}
            web applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-slate-400"
          >
            I focus on crafting thoughtful user interfaces and reliable backend
            logic using modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex gap-6"
          >
            <a
              href="#projects"
              className="heroButton px-6 py-3 rounded-md bg-[#a52a2a]/40 text-slate-100/80 font-medium hover:bg-lime-500/40 transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="heroButton px-6 py-3 rounded-md border border-slate-700 text-slate-100/80 hover:border-slate-500 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end bg-[#a52a2a]/10 rounded-xl shadow-slate-600/20 shadow-2xl p-3 border border-slate-600 mr-2 hover:p-1 hover:scale-120 transition-all duration-400"
        >
          <img
            src="/assets/mohsinProfile.png"
            alt="Mohsin Portrait"
            className="w-92 md:w-100 rounded-xl border border-slate-800 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
