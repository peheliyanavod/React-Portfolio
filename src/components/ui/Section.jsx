import Reveal from "./Reveal";

// Shared section wrapper so every section has consistent spacing and headings.
const Section = ({ id, eyebrow, title, description, children, className = "" }) => (
  <section
    id={id}
    className={`scroll-mt-16 border-t border-zinc-200 py-20 dark:border-zinc-800/80 sm:py-24 ${className}`}
  >
    <Reveal className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </Reveal>
    {children}
  </section>
);

export default Section;

