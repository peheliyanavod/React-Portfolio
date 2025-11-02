import { motion } from "framer-motion";

const qualifications = [
  {
    title: "B.Sc. (Hons) in Software Engineering",
    organization: "University of Kelaniya, Sri Lanka",
    duration: "2021 - Present",
  },
  {
    title: "Internship in Software Engineering",
    organization: "eArrow Pvt Ltd",
    duration: "Oct 2024 - Mar 2025",
  },
  {
    title: "Trainee Software Engineer",
    organization: "eArrow Pvt Ltd",
    duration: "Apr 2025 - Present",
  },
];

const qualifications2 = {
  certifications: [
    {
      title: "AWS Educate - Introduction to Cloud 101",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "AWS Educate Getting Started with Compute",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "AWS Educate Getting Started with Storage",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "AWS Educate Getting Started with Serverless",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "AWS Educate Getting Started with Security",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "AWS Educate Getting Started with Networking",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "AWS Educate Getting Started with Databases",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "Full Stack Web Development with MERN",
      organization: "Udemy",
      year: "2024",
    },
    {
      title: "Figma for Beginners: UI/UX Design Essentials",
      organization: "Udemy",
      year: "2023",
    },
    {
      title: "Certified in Java and Python Programming",
      organization: "Dekma Institute",
      year: "2021",
    },
    {
      title: "Diploma in ICT, Institute of IT Education, Sri Lanka",
      organization: "Institute of IT Education",
      year: "2017",
    },
  ],
  extracurricular: [
    "Participated in hackathons and university-level coding competitions(Junior Hack, PiHack).",
    "Active member of the University of Kelaniya Software Engineering Society.",
    "Subcommittee Member, IEEE WIE Student Branch, University of Kelaniya (2023-2024).",
  ],
};

const OtherQualifications = () => {
  return (
    <section id="qualifications" className="py-20 border-b border-slate-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-semibold mb-12"
      >
        Other Qualifications
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
            Education & Experience
          </h3>
          <div className="space-y-6">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-slate-800/70 p-5 rounded-xl border border-slate-700 hover:border-cyan-400"
              >
                <h4 className="text-cyan-400 text-lg font-semibold">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-sm">{item.organization}</p>
                <p className="text-slate-500 text-xs">{item.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {qualifications2.certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800/70 p-5 rounded-xl border border-slate-700 hover:border-cyan-400"
              >
                <h4 className="text-cyan-400 font-semibold text-lg">
                  {cert.title}
                </h4>
                <p className="text-slate-300 text-sm">{cert.organization}</p>
                <p className="text-slate-500 text-xs">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
            Extracurricular Activities
          </h3>
          <ul className="list-disc list-inside space-y-3 text-slate-300 max-w-3xl mx-auto">
            {qualifications2.extracurricular.map((item, index) => (
              <motion.li
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="hover:text-cyan-300 transition-colors duration-200"
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
