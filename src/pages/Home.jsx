import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../sections/hero/Hero";
import Projects from "../sections/project/Project";
import Sidebar from "../components/Sidebar";
import Skills from "../sections/skills/Skills";
import About from "../sections/about/About";
import Process from "../sections/process/Process";
import Contact from "../sections/contact/Contact";
import Footer from "../components/Footer";
// import DesktopSidebar from "../components/DesktopSidebar";
// import SidebarLayout from "../components/SidebarLayout";

const Home = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);


  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="w-full lg:ml-80">
        {/* Mobile menu button */}
        {!isSidebarOpen && (
          <button
            className="hamBurger fixed lg:hidden w-10 h-12 text-xl flex items-center top-15 -m-10 z-50 p-2 rounded-md bg-slate-800 text-slate-100"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>

        )}

        {/* <DesktopSidebar /> */}
        {/* <SidebarLayout /> */}
        <Hero />
        <About />
        <Process />
        <Skills />
        <Projects limit={4} showViewAll={true} />
        <Contact />
        <Footer />
      </main>
    </div>
  );




};

export default Home;
