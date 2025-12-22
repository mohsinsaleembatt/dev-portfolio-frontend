import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-22 bg-slate-900">
      <div className="max-w-3xl px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center font-semibold text-slate-100 mb-15"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-left text-slate-400 leading-relaxed"
        >
          I’m a full-stack web developer focused on building clean, maintainable
          applications with attention to both user experience and backend
          reliability. I enjoy working with modern JavaScript frameworks and
          designing systems that are easy to scale and understand.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-left text-slate-400 leading-relaxed"
        >
          I approach development with a learning-first mindset, preferring to
          understand how things work under the hood rather than relying on
          abstractions blindly. I value clarity in code, thoughtful UI
          decisions, and steady improvement through building real projects.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
