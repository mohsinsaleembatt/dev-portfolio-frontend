import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, tech, live, github, id, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-xl bg-slate-800 p-6 border border-slate-700 relative overflow-hidden"
    >
      {/* Image Container with Hover Animation */}
      {image && (
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            initial={{ y: "100%" }}
            animate={{ y: isHovered ? 0 : "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full p-5"
          />
          {/* Gradient overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.7 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#a52a2a]/80"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>

        <p className="text-slate-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-md bg-slate-700 text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a href={live} className="text-indigo-400 hover:text-indigo-300">
            Live
          </a>
          <a href={github} className="text-indigo-400 hover:text-indigo-300">
            GitHub
          </a>
        </div>

        <Link
          to={`/projects/${id}`}
          className="text-indigo-400 px-2 py-1 rounded-sm hover:text-slate-300 border hover:border-[#a52a2a] text-sm mt-4 inline-block transition-all duration-250"
        >
          View case study →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;



