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
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white min-h-screen font-sans">
      <Router>
        <Navbar />
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
