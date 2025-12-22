import React from 'react';

const SkillCards = ({ skill, onOpen }) => {
  if (!skill) return null;

  return (
    <div
      onClick={onOpen}
      className="
        rounded-xl
        bg-slate-800
        border border-slate-700
        p-6
        cursor-pointer
        transition
        hover:border-indigo-400/50
        active:scale-[0.98]
      "
    >
      {/* Skill header */}
      <div className="flex items-baseline gap-4">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10"
        />

        <h3 className="text-2xl font-semibold text-slate-400">
          {skill.name}
        </h3>
      </div>

      {/* Optional description */}
      {skill.description && (
        <p className="mt-2 text-sm text-slate-400">
          {skill.description}
        </p>
      )}
    </div>
  );
};

export default SkillCards;
