import React from "react";
import "./App.css";
import Home from "./pages/Home";
import CursorShadow from "./components/CursorShadow";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (

    <div className="App">

      <CursorShadow />

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
