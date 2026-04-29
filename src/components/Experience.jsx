import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "eArrow Pvt Ltd, Sri Lanka",
    duration: "Jan 2026 - Present",
    description: [
      "Led the revamp of the Center for Banking Studies (CBS) Student Management System, transforming a legacy, bug prone system into a stable platform with ~90% reduction in reported issues.",
      "Designed and implemented new features and client-driven enhancements for enterprise HRMS solutions (Anura Group), ensuring alignment with real-world business requirements.",
      "Optimized database queries and refactored backend logic, improving system performance and maintainability across multiple enterprise applications.",
      "Delivered end-to-end features across CRM, HRMS, and SMS platforms used by 500+ active users.",
      "Collaborated in Agile teams, contributing to sprint planning, UAT cycles, and continuous system improvements."
    ]
  },
  {
    role: "Trainee Software Engineer",
    company: "eArrow Pvt Ltd, Sri Lanka",
    duration: "April 2025 - December 2025",
    description: [
      "Developed and maintained enterprise web applications using PHP, JavaScript, and MySQL within MVC architecture.",
      "Contributed to CRM, HRMS, and Student Management Systems through feature development and bug resolution.",
      "Assisted in API development, integrations, and data handling processes for production systems."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "eArrow Pvt Ltd, Sri Lanka",
    duration: "October 2024 - March 2025",
    description: [
      "Supported development of PHP-based applications in a LAMP environment.",
      "Assisted in backend implementation, debugging, and testing activities across multiple systems."
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
