import { motion } from "framer-motion";

const experiences = [
  {
    role: "Trainee Software Engineer",
    company: "eArrow Pvt Ltd, Sri Lanka",
    duration: "April 2025 - Present",
    description: [
      "Developing and maintaining scalable web applications using PHP, HTML, CSS, JavaScript, and CodeIgniter (MVC).",
      "Enhancing core projects including CRM, HRIS, and Higher Education Management Systems (UCL, CBS, SLITHM, HRMI).",
      "Collaborating in Agile sprints, contributing to planning, development, and UAT processes.",
      "Participating in QA testing, code reviews, and UI/UX enhancements to ensure product quality and performance."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "eArrow Pvt Ltd, Sri Lanka",
    duration: "October 2024 - March 2025",
    description: [
      "Assisted in developing PHP-based web solutions using the LAMP stack (Linux, Apache, MySQL, PHP).",
      "Contributed to backend development, API integration, and data visualization.",
      "Worked on CRM, HRIS, and Higher Education Management Systems.",
      "Gained hands-on experience with Git, Agile, and software deployment workflows."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-semibold mb-12"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-slate-800/70 p-6 rounded-xl border border-slate-700 hover:border-cyan-400"
          >
            <h3 className="text-2xl font-semibold text-cyan-400">{exp.role}</h3>
            <p className="text-slate-400">{exp.company}</p>
            <p className="text-sm text-slate-500 mb-4">{exp.duration}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
