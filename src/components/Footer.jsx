import { FaArrowUp } from "react-icons/fa";
import profile from "../data/profile";

const Footer = () => (
  <footer className="border-t border-zinc-200 dark:border-zinc-800/80">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
      </p>
      <a
        href="#home"
        className="inline-flex items-center gap-2 font-medium transition-colors hover:text-zinc-900 dark:hover:text-white"
      >
        Back to top <FaArrowUp size={12} />
      </a>
    </div>
  </footer>
);

export default Footer;

