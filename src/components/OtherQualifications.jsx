import { motion } from "framer-motion";

const qualifications = [
  {
    title: "B.Sc. (Hons) in Software Engineering",
    organization: "University of Kelaniya, Sri Lanka",
    duration: "2022 - 2026",
  },
  {
    title: "Software Engineering Intern",
    organization: "eArrow Pvt Ltd",
    duration: "Oct 2024 - Mar 2025",
  },
  {
    title: "Trainee Software Engineer",
    organization: "eArrow Pvt Ltd",
    duration: "Apr 2025 - Dec 2025",
  },
  {
    title: "Associate Software Engineer",
    organization: "eArrow Pvt Ltd",
    duration: "Jan 2026 - Present",
  },
  {
    title: "Bank Trainee",
    organization: "People's Bank, Ambalantota, Sri Lanka",
    duration: "2022",
  },
];

const qualifications2 = {
  certifications: [
    {
      title: "What Is Generative AI?",
      organization: "LinkedIn Learning",
      year: "2025",
    },
    {
      title: "Introduction to Cloud 101",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "Getting Started with Compute / AWS Compute Fundamentals",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "MERN Stack Course",
      organization: "Udemy",
      year: "2024",
    },
    {
      title: "Figma UI/UX Course",
      organization: "Udemy",
      year: "2023",
    },
    {
      title: "Certified in Java and Python Programming",
      organization: "Dekma Institute",
      year: "2021",
    },
    {
      title: "Diploma in ICT",
      organization: "Institute of IT Education, Sri Lanka",
      year: "2017",
    },
  ],
  extracurricular: [
    "Subcommittee Member, IEEE WIE Student Branch - University of Kelaniya (2023–Present)",
    "Participant - PyHack Hackathon (2023)",
    "Participant - JuniorHack Hackathon (2022)",
  ],
};

const OtherQualifications = () => {
  return (
    <section id="qualifications" className="py-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-semibold mb-12 text-slate-800 dark:text-white"
      >
        Other Qualifications
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-6 text-center">
            Education & Experience
          </h3>
          <div className="space-y-6">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-white dark:bg-slate-800/70 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-sm dark:shadow-none transition-colors duration-300"
              >
                <h4 className="text-cyan-600 dark:text-cyan-400 text-lg font-semibold">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{item.organization}</p>
                <p className="text-slate-500 text-xs">{item.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-6 text-center">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {qualifications2.certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800/70 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-sm dark:shadow-none transition-colors duration-300"
              >
                <h4 className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg">
                  {cert.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{cert.organization}</p>
                <p className="text-slate-500 text-xs">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-6 text-center">
            Extracurricular Activities
          </h3>
          <ul className="list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            {qualifications2.extracurricular.map((item, index) => (
              <motion.li
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-200"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OtherQualifications;
