// import About from "./components/About";
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
    </div>
  );
}

export default App;
