import { motion } from "framer-motion";

const Education = () => {
  const cards = [
    {
      title: "BSc (Hons) in Software Engineering",
      subtitle: "University of Kelaniya (2022 - 2026)",
      detail: "GPA: 3.5 / 4.0 | Research Thesis: A decision support system for intelligent selection of agentic AI frameworks: A multi criteria evaluation approach",
    },
    {
      title: "G.C.E. Advanced Level (2020)",
      subtitle:
        "Chemistry (A), Combined Mathematics (B), Physics (B), English (A)",
      detail: "Index No: 2180558",
    },
    {
      title: "G.C.E. Ordinary Level (2016)",
      subtitle:
        "Mathematics (A), Science (A), English (A), Sinhala (A), ICT (A), Buddhism (A), History (A), Music (A), Business & Accounting (A)",
      detail: "Index No: 61192376",
    },
  ];

  return (
    <section id="education" className="py-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-semibold mb-12 text-slate-800 dark:text-white"
      >
        Education
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((edu, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800/70 backdrop-blur-md rounded-xl p-8 w-full md:w-1/3 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-sm dark:shadow-none transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
              {edu.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">{edu.subtitle}</p>
            <p className="text-slate-500 dark:text-slate-400 mt-2">{edu.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
