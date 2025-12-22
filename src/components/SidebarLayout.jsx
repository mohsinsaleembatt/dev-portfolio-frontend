import { useState } from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

const SidebarLayout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <DesktopSidebar />

            {/* Mobile menu button */}
            <button
                className="lg:hidden fixed z-50 p-2 bg-slate-800 text-white rounded-md left-0"
                onClick={() => setMobileOpen(true)}
            >
                ☰
            </button>

            <MobileSidebar
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
            />

            {/* Main content */}
            <main className="w-full lg:ml-80">
                {children}
            </main>
        </>
    );
};

export default SidebarLayout;
