// import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import OtherQualifications from "./components/OtherQualifications";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="mx-7">
      <Navbar/>
      <Profile />
      <Education/>
      <Projects />
      <OtherQualifications />
      <Contact/>
    </div>
  );
}

export default App;
