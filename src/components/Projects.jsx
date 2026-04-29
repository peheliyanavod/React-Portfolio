import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-semibold mb-12 text-slate-800 dark:text-white"
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-800/70 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-sm dark:shadow-none transition-colors duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6 text-left">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400">
                  {project.title}
                </h3>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    title="View on GitHub"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-transparent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
