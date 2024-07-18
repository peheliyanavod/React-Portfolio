import Logo from "../assets/Navod logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    window.open("/cv.pdf", "_blank");
  };
  return (
    <nav className="mb-100 flex items-center justify-between py-5 bg-gray-200 ">
      <div className="flex flex-shrink-0 item-center">
        <img src={Logo} alt="logo" className="mx-10 w-40 " />
      </div>
      <div className="hidden lg:flex m-8 items-center justify-center gap-5 text-2xl ">
        <a href="#home" className="hover:text-gray-600 hover:font-medium">
          Home
        </a>
        <a href="#education" className="hover:text-gray-600 hover:font-medium">
          Education
        </a>
        <a href="#projects" className="hover:text-gray-600 hover:font-medium">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-600 hover:font-medium">
          Contact
        </a>

        <button
          className="hover:text-gray-600 hover:font-medium"
          onClick={handleDownload}
        >
          Download CV
        </button>
      </div>

      <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2">

          <a href="#home">
          <button className="bg-white hover:text-gray-600 hover:font-medium w-20 py-1 rounded mr-2">
            Home
          </button>
          </a>

          <a href="#education">
          <button className="bg-white hover:text-gray-600 hover:font-medium w-20 py-1 rounded">
            Education
          </button>
          </a>

          <a href="#projects">
          <button className="bg-white hover:text-gray-600 hover:font-medium w-20 py-1 rounded">
            Project
          </button>
          </a>

          <a href="#contact">
          <button className="bg-white hover:text-gray-600 hover:font-medium w-20 py-1 rounded">
            Contact
          </button>
          </a>

          
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
