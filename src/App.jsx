// import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import OtherQualifications from "./components/OtherQualifications";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";

function App() {
  return (
    <div>
      <Navbar/>
      <Profile />
      <Education/>
      <Projects />
      <TechSkills/>
      <OtherQualifications />
      <Contact/>
    </div>
  );
}

export default App;
