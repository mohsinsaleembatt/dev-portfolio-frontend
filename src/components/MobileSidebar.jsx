import { useEffect } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
];

const MobileSidebar = ({ open, onClose }) => {
    const activeSection = useActiveSection();

    // 🔒 Lock body scroll
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                onClick={onClose}
            />

            {/* Drawer */}
            <aside
                className="
          fixed left-0 top-0
          w-80
          h-[100dvh]
          bg-slate-900
          border-r border-slate-800
          px-6 py-8
          z-50
          overflow-y-auto
          overscroll-contain
          lg:hidden
        "
            >
                {/* Close button */}
                <button
                    className="absolute top-4 right-4 text-slate-400 px-4 py-2 bg-slate-950"
                    onClick={onClose}
                    aria-label="Close Menu"
                >
                    ✕
                </button>

                {/* Identity */}
                <div>
                    <a href="#home" onClick={onClose}>
                        <h1 className="text-3xl font-bold text-slate-300 uppercase">
                            Mohsin Saleem
                        </h1>
                    </a>

                    <p className="text-sm font-semibold text-slate-400 mt-2">
                        Full-Stack Web Developer
                    </p>

                    <p className="text-xs text-slate-500 mt-2">
                        Building clean, scalable web applications
                    </p>

                    {/* Navigation */}
                    <nav className="mt-12 space-y-8 uppercase">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={onClose}
                                    className="group relative block w-fit"
                                >
                                    <span
                                        className={`inline-block transition-all duration-300 ${isActive
                                                ? "text-indigo-400 translate-x-6"
                                                : "text-slate-300 group-hover:text-slate-100"
                                            }`}
                                    >
                                        {item.label}
                                    </span>

                                    <span
                                        className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-400 transition-all duration-300 ${isActive
                                                ? "w-[calc(100%+24px)]"
                                                : "w-1 group-hover:w-full"
                                            }`}
                                    />
                                </a>
                            );
                        })}
                    </nav>
                </div>

                {/* Footer */}
                <div className=" mt-75 text-left text-xs text-slate-300">
                    © {new Date().getFullYear()} Mohsin Saleem. All rights reserved.
                </div>
            </aside>
        </>
    );
};

export default MobileSidebar;
