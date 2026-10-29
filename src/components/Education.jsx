import { FaGraduationCap } from "react-icons/fa";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

const cards = [
  {
    title: "BSc (Hons) in Software Engineering",
    subtitle: "University of Kelaniya, Sri Lanka",
    period: "2022 - 2026",
    highlight: "GPA: 3.5 / 4.0",
    detail:
      "Research Thesis: A decision support system for intelligent selection of agentic AI frameworks: A multi-criteria evaluation approach",
  },
  {
    title: "G.C.E. Advanced Level 2020 (Physical Science Stream)",
    subtitle: "W/Rajapaksha Central College",
    detail: "Chemistry (A), Physics (B), Combined Mathematics (B), General English (A)",
  },
  {
    title: "G.C.E. Ordinary Level 2016 (English Medium)",
    subtitle: "H/Theraputta National School",
    detail: "Passed with 9 'A' Grades",
  },
];

const Education = () => {
  const [degree, ...school] = cards;

  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="card p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
            <FaGraduationCap size={22} />
          </div>
          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{degree.title}</h3>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{degree.period}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">{degree.subtitle}</p>
          <p className="mt-4 inline-flex rounded-md bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            {degree.highlight}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{degree.detail}</p>
        </Reveal>

        <div className="grid gap-6">
          {school.map((edu, i) => (
            <Reveal key={edu.title} delay={0.08 * (i + 1)} className="card p-6">
              <h3 className="font-semibold text-zinc-900 dark:text-white">{edu.title}</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{edu.subtitle}</p>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{edu.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
