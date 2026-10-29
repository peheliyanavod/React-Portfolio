import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";
import OtherQualifications from "./components/OtherQualifications";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

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
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <main className="mx-auto max-w-6xl px-6">
                  <Profile />
                  <About />
                  <Experience />
                  <Projects />
                  <TechSkills />
                  <Education />
                  <OtherQualifications />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <main className="mx-auto max-w-6xl px-6 pt-16">
                  <Projects showAllByDefault />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <main className="mx-auto max-w-6xl px-6 pt-16">
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
