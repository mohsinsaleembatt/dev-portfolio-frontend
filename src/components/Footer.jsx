/**
 * Footer
 * - Minimal, calm closing section
 * - No animations (intentional)
 * - Responsive by layout, not tricks
 */
const Footer = () => {
    return (
        <footer className="border-t-2 border-slate-800">
            <div
                className="
          max-w-6xl mx-auto
          px-6 py-10
          grid
          gap-8
          md:grid-cols-3
          text-sm
          text-slate-400
        "
            >
                {/* LEFT: Identity */}
                <div className="text-left">
                    <p className="text-slate-200 font-medium">
                        Mohsin Saleem
                    </p>
                    <p className="mt-1">
                        Full-Stack Web Developer
                    </p>
                </div>

                {/* CENTER: Location / Availability */}
                <div className="text-left">
                    <p>Based in India</p>
                    <p className="mt-1">
                        Open to remote opportunities
                    </p>
                </div>

                {/* RIGHT: Social Links */}
                <div className="flex gap-4 md:justify-end">
                    <a
                        href="https://github.com/mohsinsaleembatt"
                        target="_blank"
                        rel="noreferrer"
                        className=" bg-slate-950 hover:bg-slate-800 pt-3 px-4 rounded-sm hover:text-slate-200 transition-all duration-200"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/mohsin-saleem-49a9a5221"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-slate-950 hover:bg-slate-800 pt-3 px-4 rounded-sm hover:text-slate-200 transition-all duration-200"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://wa.me/917051015197"
                        className="bg-slate-950 hover:bg-slate-800 pt-3 px-4 rounded-sm hover:text-slate-200 transition-all duration-200"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>

            {/* BOTTOM LINE */}
            <div className="text-center -ml-4 text-xs text-slate-500 pb-6">
                © {new Date().getFullYear()} Mohsin Saleem. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
