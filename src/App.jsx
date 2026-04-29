import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";
import OtherQualifications from "./components/OtherQualifications";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Experience from "./components/Experience";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 dark:text-white min-h-screen font-sans transition-colors duration-300">
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="px-4 sm:px-8 lg:px-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Profile />
                  </section>
                  <Education />
                  <Experience />
                  <Projects />
                  <TechSkills />
                  <OtherQualifications />
                  <Contact />
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
