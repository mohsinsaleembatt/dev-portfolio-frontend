import { useParams, Link } from "react-router-dom";
import { projectDetails } from "../data/data";
import { motion } from "framer-motion";

const ProjectDetails = () => {

    // console.log("ProjectDetails mounted");

    const { projectId } = useParams();

    // console.log("projectId from URL:", projectId);
    // console.log("projects array:", projectDetails);

    projectDetails.forEach((p) => {
        console.log("Available project id:", p.id);
    });
    const projectDetail = projectDetails.find((p) => p.id === projectId);
    // console.log("Found project detail:", projectDetail);
    if (!projectDetail) {
        return (
            <main className="min-h-screen bg-slate-950 flex items-center justify-center">
                <p className="text-slate-400">Project not found.</p>
            </main>
        );
    } 

    return (
        <main className="min-h-screen bg-slate-950 py-32">
            <div className="max-w-4xl mx-auto px-6">
                {/* Back */}
                <Link
                    to="/projects"
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition"
                >
                    ← Back to projects
                </Link>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl font-bold text-slate-100 mt-6"
                >
                    {projectDetail.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-4 text-slate-400"
                >
                    {projectDetail.description}
                </motion.p>

                {/* Tech stack */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">
                        Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {projectDetail.tech.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1 text-sm rounded-md bg-slate-800 text-slate-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Learnings */}
                <div className="mt-10">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">
                        What I Learned
                    </h3>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                        {projectDetail.learnings.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Challenges */}
                <div className="mt-10">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">
                        Challenges
                    </h3>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                        {projectDetail.challenges.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Links */}
                <div className="mt-12 flex gap-6">
                    {projectDetail.live && (
                        <a
                            href={projectDetail.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300"
                        >
                            Live Demo →
                        </a>
                    )}
        
                    {projectDetail.github && (
                        <a
                            href={projectDetail.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300"
                        >
                            GitHub →
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ProjectDetails;
