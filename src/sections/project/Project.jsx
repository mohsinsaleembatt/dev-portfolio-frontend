import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import { projectDetails } from "../../data/data";
import { Link } from "react-router-dom";

const Projects = ({ limit = 6, showViewAll = false }) => {
  const displayedProjects = projectDetails.slice(0, limit);

  return (
    <section
      id="projects"
      className="relative py-32 bg-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-100 mb-15"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-slate-400 mb-12 max-w-3xl"
        >
          Here are some projects where I applied what I learned by building real
          interfaces, solving practical problems, and refining my development
          workflow.
        </motion.p>

        {/* PROJECT GRID */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDescription || project.description}
              tech={project.tech}
              live={project.live}
              github={project.github}
              id={project.id}
              image={project.image}
            />
          ))}
        </div>

        {/* VIEW ALL CTA */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-14 flex justify-center"
          >
            <Link
              to="/projects"
              className="
                inline-flex items-center gap-2
                px-6 py-3
                rounded-md
                bg-indigo-500
                text-slate-900
                font-medium
                hover:bg-indigo-400
                transition
              "
            >
              View all projects
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
