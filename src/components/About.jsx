import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

const highlights = [
  "Full-stack development (Spring Boot, Angular, React, Node.js)",
  "Enterprise systems: CRM, HRMS & Student Management",
  "Database optimisation & backend refactoring",
  "Agile delivery: sprint planning, UAT & QA",
];

const About = () => {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            I&apos;m a Software Engineer with hands-on experience delivering
            enterprise-level web applications across CRM, HRMS and Student
            Management Systems used by <strong className="font-semibold text-zinc-900 dark:text-zinc-100">500+ users</strong>.
            I enjoy taking ownership of critical modules in production and
            making systems more reliable and faster.
          </p>
          <p>
            I currently work as an{" "}
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Associate Software Engineer</strong>{" "}
            at <strong className="font-semibold text-zinc-900 dark:text-zinc-100">eArrow Pvt Ltd</strong>, Sri
            Lanka, with a growing focus on modern backend technologies and
            scalable architectures.
          </p>
          <p>
            I&apos;m passionate about contributing to large-scale software and
            IT-driven systems in dynamic, fast-moving teams.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="card p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            What I focus on
          </h3>
          <ul className="mt-4 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary-500" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
};

export default About;
