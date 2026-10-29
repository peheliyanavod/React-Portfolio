import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import projects from "../data/projects";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import ProjectCard from "./ProjectCard";

const FEATURED_COUNT = 4;

const Projects = ({ showAllByDefault = false }) => {
  const [showAll, setShowAll] = useState(showAllByDefault);

  // Projects flagged `featured: true` in data/projects.jsx are shown first (max 4).
  const featured = projects.filter((p) => p.featured).slice(0, FEATURED_COUNT);
  const others = projects.filter((p) => !featured.includes(p));

  const toggle = () => {
    if (showAll) {
      // Bring the user back to the top of the section when collapsing.
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll((s) => !s);
  };

  return (
    <>
      <Section
        id="projects"
        eyebrow="Projects"
        title="Selected work"
        description="A few projects I'm most proud of — spanning enterprise systems, fintech and AI-assisted decision support."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              id="more-projects"
              key="more-projects"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <h3 className="mb-6 mt-16 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                More projects
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {others.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={toggle}
              aria-expanded={showAll}
              aria-controls="more-projects"
              className="btn-secondary"
            >
              {showAll ? "Show less" : `Show more projects (${others.length})`}
              <FaChevronDown
                size={12}
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </Section>
    </>
  );
};

export default Projects;
