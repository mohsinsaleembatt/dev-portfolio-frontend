import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SkillCards from "../../components/SkillCards";
import SkillPreviewPanel from "./SkillPreviewPanel";
import SkillPreviewPanelMobile from "./SkillPreviewPanelMobile";
import { skills } from "../../assets/assets";

const Skills = () => {
  // Index of the currently selected skill
  const [activeIndex, setActiveIndex] = useState(null);

  // Detect mobile screens
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const closePanel = () => setActiveIndex(null);

  const showPrev = () => {
    setActiveIndex((prev) =>
      prev > 0 ? prev - 1 : skills.length - 1
    );
  };

  const showNext = () => {
    setActiveIndex((prev) =>
      prev < skills.length - 1 ? prev + 1 : 0
    );
  };

  const activeSkill =
    activeIndex !== null ? skills[activeIndex] : null;

  return (
    <section id="skills" className="py-32 bg-slate-900">
      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl text-center font-bold text-slate-100 mb-15 ml-6"
      >
        Skills & TechStack
      </motion.h2>

      {/* SKILLS GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCards
            key={skill.name}
            skill={skill}
            onOpen={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* PREVIEW PANEL (DESKTOP vs MOBILE) */}
      {isMobile ? (
        <SkillPreviewPanelMobile
          skill={activeSkill}
          onClose={closePanel}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : (
        <SkillPreviewPanel
          skill={activeSkill}
          onClose={closePanel}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
};

export default Skills;
