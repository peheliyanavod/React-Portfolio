import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "eArrow Pvt Ltd, Sri Lanka",
    duration: "Jan 2026 - Present",
    description: [
      "Led the revamp of the Center for Banking Studies (CBS) Student Management System, transforming a legacy, bug-prone system into a stable platform with ~90% reduction in reported issues.",
      "Designed and implemented new features and client-driven enhancements for enterprise HRMS solutions (Anura Group), ensuring alignment with real-world business requirements.",
      "Designed and implemented the Advanced HRMS using Spring Boot and Angular, delivering features aligned with complex enterprise requirements.",
      "Optimized database queries and refactored backend logic, improving system performance and maintainability across multiple enterprise applications.",
      "Delivered end-to-end features across CRM, HRMS, and SMS platforms used by 500+ active users.",
      "Collaborated in Agile teams, contributing to sprint planning, UAT cycles, and continuous system improvements."
    ],
    tech: ["Spring Boot", "Angular", "PostgreSQL", "PHP", "MySQL"],
  },
  {
    role: "Trainee Software Engineer",
    company: "eArrow Pvt Ltd, Sri Lanka",
    duration: "April 2025 - December 2025",
    description: [
      "Developed and maintained enterprise web applications using PHP, HTML, CSS, JavaScript, and MySQL within an MVC architecture.",
      "Built applications utilizing the CodeIgniter framework.",
      "Contributed to internal Customer Relationship Management (CRM) for eArrow.",
      "Contributed to CRM, HRMS, and Student Management Systems through feature development and bug resolution.",
      "Enhanced Higher Education Management Systems for Universal College Lanka (UCL), Center for Banking Studies (CBS), and Sri Lanka Institute of Tourism and Hotel Management (SLITHM).",
      "Assisted in API development, integrations, and data handling processes for production systems.",
      "Collaborated in Agile sprints, contributing to planning, development, and user acceptance testing (UAT).",
      "Participated in technical discussions, QA testing, and UI/UX enhancements to ensure project quality and performance."
    ],
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
  },
  {
    role: "Software Engineering Intern",
    company: "eArrow Pvt Ltd, Sri Lanka",
    duration: "October 2024 - March 2025",
    description: [
      "Supported development of PHP-based applications in a LAMP environment (Linux, Apache, MySQL, PHP).",
      "Assisted in backend implementation, debugging, and testing activities across multiple systems.",
      "Contributed to backend development, API integration, and data visualization features for internal and client-based systems.",
      "Supported multiple projects including CRM, HRIS, and Higher Education Management Systems (UCL, CBS, SLITHM).",
      "Gained hands-on experience in version control (Git), Agile development, and collaborative software delivery processes."
    ],
    tech: ["PHP", "Linux", "Apache", "MySQL", "Git"],
  },
  // {
  //   role: "Bank Trainee",
  //   company: "People's Bank, Ambalantota, Sri Lanka",
  //   duration: "2022 (6 Months)",
  //   description: [
  //     "Gained direct exposure to day-to-day banking operations, financial transaction processing, and customer relationship management.",
  //     "Assisted with document verification, data entry, and resolving customer inquiries, developing a strong foundational understanding of financial workflows and branch operations."
  //   ]
  // }
];

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="Two years of growth at eArrow — from intern to Associate Software Engineer — shipping production features for enterprise clients."
    >
      <ol className="relative ml-2 border-l border-zinc-200 dark:border-zinc-800">
        {experiences.map((exp, index) => (
          <li key={exp.role} className="mb-12 ml-8 last:mb-0">
            <span
              className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-zinc-950 ${
                index === 0 ? "bg-primary-500" : "bg-zinc-300 dark:bg-zinc-700"
              }`}
            />
            <Reveal delay={index * 0.05}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                {exp.company}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
              {exp.tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
