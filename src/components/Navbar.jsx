import Logo from "../assets/Navod logo.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#qualifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-md transition-colors duration-300"
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="w-32" />
        </div>

        <div className="hidden md:flex items-center space-x-6 text-lg">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-slate-600 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Dhanuka CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-white dark:text-slate-900 px-4 py-2 rounded-md hover:bg-cyan-400 font-medium transition-colors"
          >
            Download CV
          </a>
          <button
            onClick={toggleTheme}
            className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 focus:outline-none transition-colors"
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <button
          className="md:hidden text-cyan-500 dark:text-cyan-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-3 space-y-2 bg-slate-100/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={toggleTheme}
            className="mb-2 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 focus:outline-none transition-colors"
          >
            {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-slate-600 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 text-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
