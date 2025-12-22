import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

/**
 * SkillPreviewPanelMobile
 * - Bottom sheet for mobile devices
 * - Takes 70% of screen height
 * - Slides from bottom
 */
const SkillPreviewPanelMobile = ({ skill, onClose, onPrev, onNext }) => {
    if (!skill) return null;

    // Lock background scroll while panel is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50"  onClick={onClose}>
            {/* DIM BACKDROP */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm " />

            {/* BOTTOM SHEET */}
            <AnimatePresence>
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    onClick={(e) => e.stopPropagation()}
                    className="
                    absolute bottom-0 left-0
                    w-full
                    lg:w-screen
                    box-border
                    h-[70vh]
                    bg-slate-900/80
                    backdrop-blur-xl
                    border-t border-white/10
                    rounded-t-2xl
                    px-4 py-5
                    flex flex-col
                    overflow-hidden
          "
                    style={{ width: "100vw" }}
                >
                    {/* DRAG INDICATOR */}
                    <div className="w-12 h-1.5 bg-slate-600 rounded-full mx-auto mb-4" />

                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-8 h-8"
                            />
                            <h3 className="text-lg font-semibold text-slate-100">
                                {skill.name}
                            </h3>
                        </div>

                        <button
                            onClick={onClose}
                            className="text-slate-400 text-xl"
                        >
                            ✕
                        </button>
                    </div>

                    {/* CONTENT (SCROLLABLE) */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden text-sm text-left text-slate-300 space-y-4">
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

                        {skill.codeSnippet && (
                            <pre className="mt-4 text-xs text-indigo-400 font-mono whitespace-pre-wrap break-words max-w-full overflow-x-auto">
                                {skill.codeSnippet}
                            </pre>
                        )}
                    </div>

                    {/* NAVIGATION BUTTONS (BOTTOM) */}
                    <div className="mt-4 flex justify-between gap-4">
                        <button
                            onClick={onPrev}
                            className="
                flex-1
                py-3
                rounded-lg
                bg-slate-800
                text-slate-200
                text-sm
              "
                        >
                            ← Previous
                        </button>

                        <button
                            onClick={onNext}
                            className="
                flex-1
                py-3
                rounded-lg
                bg-slate-800
                text-slate-200
                text-sm
              "
                        >
                            Next →
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default SkillPreviewPanelMobile;
