import { motion } from "framer-motion";

const steps = [
  {
    title: "Planning & Design",
    text: "I start by understanding the problem, defining requirements, and designing the structure of the application. This includes wireframing layouts, planning component hierarchy, and deciding data flow before writing code.",
  },
  {
    title: "Development",
    text: "I build features incrementally using modern tools like React and Node.js, focusing on clean, readable code and reusable components. I prioritize responsiveness, accessibility, and predictable state management.",
  },
  {
    title: "Review & Refinement",
    text: "I test components, refine UI interactions, improve performance, and revisit earlier decisions to ensure the solution remains simple and scalable as the project grows.",
  },
  {
    title: "Deployment & Production",
    text: "I prepare projects for production by optimizing builds, managing environment variables, and deploying applications using modern hosting platforms. I treat deployment as part of development, not an afterthought.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-22 bg-slate-900">
      <div className="max-w-3xl px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-left uppercase font-black text-[#a52a2a] mb-10"
        >
          How I Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-left text-slate-400"
        >
          I approach every project with a structured, end-to-end workflow,
          focusing on clarity, scalability, and long-term maintainability.
        </motion.p>

        <div className="mt-12 space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg text-left font-medium text-slate-100">
                {String(index + 1).padStart(2, "0")}. {step.title}
              </h3>
              <p className="mt-2 text-left text-slate-400 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
