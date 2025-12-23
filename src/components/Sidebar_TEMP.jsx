import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const activeSection = useActiveSection();

  return (

    <>

      {isOpen && (
        <div
          className="sticky bg-slate-500/80 inset-0 z-40 lg:hidden "
          onClick={onClose}
        />
      )}

      <aside
        className={`
        h-screen
        fixed left-0 top-0 
        lg:w-70 w-80 bg-slate-900 
        px-6 py-8 z-50 ml-4
        transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0
  `}
      >

        <button
          className="lg:hidden absolute top-4 right-4 text-slate-400"
          onClick={onClose}
          aria-label="Close Menu"
        >
          ✕
        </button>

        {/* Identity */}
        <div>
          <a href="/">
            <h1 className="text-4xl text-left font-bold text-slate-400 uppercase">
              Mohsin Saleem
            </h1>
          </a>

          <p className="text-lg text-left font-bold text-slate-400 mt-2">
            Full-Stack Web Developer
          </p>

          <p className="text-sm font-normal text-slate-400 mt-2 text-left">
            Building clean, scalable web applications
          </p>

          {/* Navigation */}
          <nav className="my-12 space-y-8 uppercase text-sm font-semibold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <div key={item.id}>
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => isActive}
                    className="group relative block w-fit text-left"
                  >
                    <span
                      className={`inline-block transition-all duration-300 ${isActive
                        ? "text-[#a52a2a] translate-x-10"
                        : "text-slate-300 group-hover:text-slate-100"
                        }`}
                    >
                      {item.label}
                    </span>

                    {/* Hover line */}
                    <span
                      className={`absolute -bottom-1 -left-2 h-[1px] bg-[#a52a2a] transition-all duration-300 ${isActive ? "w-[calc(100%+48px)]" : "w-0.5 group-hover:w-full"
                        }`}
                    />
                  </a>
                </div>
              )
            })}
          </nav>
        </div>

        {/* Footer / Socials */}
        <div className="mt-45 text-xs text-slate-500 text-left">
          © {new Date().getFullYear()} Mohsin Saleem. All rights reserved.
        </div>
      </aside>
    </>

  );
};

export default Sidebar;
