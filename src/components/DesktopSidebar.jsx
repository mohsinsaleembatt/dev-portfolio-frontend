import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
];

const DesktopSidebar = () => {
    const activeSection = useActiveSection();

    return (
        <aside
            className="
        hidden lg:flex
        fixed left-0 top-0
        w-80
        h-screen
        bg-slate-900
        border-r border-slate-800
        px-6 py-8
        flex-col
        justify-between
      "
        >
            {/* Identity */}
            <div>
                <a href="#home">
                    <h1 className="text-3xl font-bold text-slate-200 uppercase">
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
            <div className="mt-96 text-xs text-slate-500">
                © {new Date().getFullYear()}
            </div>
        </aside>
    );
};

export default DesktopSidebar;
