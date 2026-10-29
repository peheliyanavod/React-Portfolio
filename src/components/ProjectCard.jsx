import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, featured = false }) => {
  const maxTech = featured ? 6 : 4;
  const shownTech = project.technologies.slice(0, maxTech);
  const hiddenCount = project.technologies.length - shownTech.length;

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5 dark:hover:border-zinc-700 dark:hover:shadow-black/40">
      <div className="relative aspect-video overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {featured && (
          <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-zinc-800 backdrop-blur dark:bg-zinc-950/80 dark:text-zinc-100">
            Featured
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-6" : "p-5"}`}>
        <h3
          className={`font-semibold text-zinc-900 dark:text-white ${
            featured ? "text-lg" : "text-base"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 ${
            featured ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {shownTech.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
          {hiddenCount > 0 && <span className="chip">+{hiddenCount}</span>}
        </div>

        {(project.github || project.liveDemo) && (
          <div className="mt-5 flex items-center gap-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-primary-600 dark:text-zinc-300 dark:hover:text-primary-400"
              >
                <FaGithub size={16} /> Source code
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-primary-600 dark:text-zinc-300 dark:hover:text-primary-400"
              >
                <FaExternalLinkAlt size={12} /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;

