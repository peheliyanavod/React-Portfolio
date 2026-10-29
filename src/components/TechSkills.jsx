import { RiReactjsLine, RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { TbBrandVercel } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiMysql,
  SiXampp,
  SiDocker,
  SiAmazonaws,
  SiHtml5,
  SiCss3,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaNodeJs, FaJava, FaPython, FaGitAlt, FaBootstrap, FaPhp, FaAngular } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

// Categorised technologies. `color` is the brand colour applied to the icon.
const techCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: RiReactjsLine, color: "text-sky-500" },
      { name: "Angular", icon: FaAngular, color: "text-red-600" },
      { name: "JavaScript", icon: RiJavascriptFill, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-500" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Spring Boot", icon: BiLogoSpringBoot, color: "text-green-600" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-zinc-700 dark:text-zinc-300" },
      { name: "Python", icon: FaPython, color: "text-sky-600" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
    ],
  },
  {
    category: "Database & Cloud",
    technologies: [
      { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-sky-700 dark:text-sky-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-700 dark:text-blue-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "AWS", icon: SiAmazonaws, color: "text-orange-500" },
    ],
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-zinc-900 dark:text-zinc-100" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Vercel", icon: TbBrandVercel, color: "text-zinc-900 dark:text-zinc-100" },
      { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-500" },
      { name: "XAMPP", icon: SiXampp, color: "text-orange-500" },
    ],
  },
];

const TechSkills = () => {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      description="The languages, frameworks and tools I use day-to-day to design, build and ship software."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {techCategories.map((category, i) => (
          <Reveal key={category.category} delay={(i % 2) * 0.08} className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {category.category}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {category.technologies.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700"
                >
                  <Icon className={`text-lg ${color}`} aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default TechSkills;
