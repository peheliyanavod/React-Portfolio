import Logo from "../assets/Navod logo.png";

const Navbar = () => {
  const handleDownload = () => {
    window.open("/cv.pdf", "_blank");
  };
  return (
    <nav className="mb-100 flex items-center justify-between py-5 bg-gray-200 ">
      <div className="flex flex-shrink-0 item-center">
        <img src={Logo} alt="logo" className="mx-10 w-40 " />
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl">
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
    </nav>
  );
};

export default Navbar;
