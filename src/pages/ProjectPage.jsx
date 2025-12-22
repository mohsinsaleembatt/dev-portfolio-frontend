import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";
import { Link } from "react-router-dom";

const ProjectPage = () => {
    return (
        <main className="min-h-screen py-24 bg-slate-900">
            <div className="max-w-screen mx-auto px-6 text-left">

                <span className="text-slate-400 text-sm text-center px-2 py-1 rounded-sm border-0.5 border-slate-400 border hover:border-[#a52a2a] hover:bg-slate-950 hover:text-[#a52a2a] transition-all duration-250">
                    <Link to="/">Back to Home</Link>
                </span>

                {/* PAGE TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-4xl font-bold text-slate-100 mt-6 mb-4"
                >
                    All Projects
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-slate-400 max-w-3xl mb-14"
                >
                    A collection of projects where I explored ideas, built real
                    applications, and refined my frontend and backend skills.
                </motion.p>

                {/* PROJECT GRID */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProjectPage;
