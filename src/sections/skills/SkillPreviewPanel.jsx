
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

/**
 * SkillPreviewPanel
 * - Glassmorphic side panel
 * - Closes on outside click
 * - Supports Prev / Next navigation
 */
const SkillPreviewPanel = ({ skill, onClose, onPrev, onNext }) => {
    if (!skill) return null;

    return (
        <div className="fixed inset-0 z-40" onClick={onClose}>
            {/* BACKDROP */}
         
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

            {/* PANEL */}
            <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="
          absolute right-0 top-0
          h-full w-full sm:w-[400px]
          bg-slate-900/10
          backdrop-blur-sm
          border-l border-white/10
          shadow-2xl
          p-6
          flex flex-col
        "
            >
                {/* HEADER */}
                <div className="sticky top-0 z-10 bg-slate-900/70 backdrop-blur-xl pb-4 flex items-center justify-between">
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-200 bg-slate-950 hover:bg-indigo-800/50 px-4 py-2 cursor-pointer rounded-sm border hover:border-indigo-800/50 transition-all duration-200"
                    >
                        ✕
                    </button>

                    {/* NAV BUTTONS */}
                    <div className="flex gap-3">
                        <button
                            onClick={onPrev}
                            className="text-slate-400 hover:text-slate-200 bg-slate-950 hover:bg-indigo-800/50 px-4 py-2 cursor-pointer rounded-sm border hover:border-l-indigo-800/50 transition-all duration-200"
                            aria-label="Previous skill"
                        >
                            ←
                        </button>

                        <button
                            onClick={onNext}
                            className="text-slate-400 hover:text-slate-200 bg-slate-950 hover:bg-indigo-800/50 px-4 py-2 cursor-pointer rounded-sm border hover:border-r-indigo-800/50 transition-all duration-200"
                            aria-label="Next skill"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* CONTENT (ANIMATED SWITCH) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="flex-1 overflow-y-auto"
                    >
                        {/* TITLE */}
                        <div className="flex items-center gap-4">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-10 h-10"
                            />
                            <h3 className="text-xl font-semibold text-slate-100">
                                {skill.name}
                            </h3>
                        </div>


                        {/* DETAILS */}
                        <div className="mt-6 space-y-4 text-sm text-slate-300 text-left">
                            <p>
                                <span className="text-slate-400">Experience:</span>{" "}
                                {skill.experienceLevel}
                            </p>

                            <p>
                                <span className="text-slate-400">Usage:</span>{" "}
                                {skill.usageContext}
                            </p>

                            <p>
                                <span className="text-slate-400">Confidence:</span>{" "}
                                {skill.confidence}
                            </p>
                        </div>

                        {/* CODE */}
                        {skill.codeSnippet && (
                            <pre className="mt-8 text-xs text-indigo-400 font-mono whitespace-pre-wrap">
                                {skill.codeSnippet}
                            </pre>
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.aside>
        </div>
    );
};

export default SkillPreviewPanel;
