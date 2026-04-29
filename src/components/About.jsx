import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-semibold mb-12"
      >
        About Me
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center text-slate-300 leading-relaxed"
      >
        <p className="mb-4">
          Hi, I'm <span className="text-cyan-400 font-semibold">Peheliya Dhanuka Navod</span>, 
          a Software Engineer with experience delivering enterprise-level web applications across CRM, HRMS, and Student Management Systems used by 500+ users. I have a proven ability to improve system reliability, optimize performance, and take ownership of critical modules in production environments.
        </p>
        <p className="mb-4">
          Currently, I’m working as an <span className="text-cyan-400 font-semibold">Associate Software Engineer</span> 
          at <span className="text-cyan-400 font-semibold">eArrow Pvt Ltd</span>, Sri Lanka. I am skilled in full-stack development, API integration, and system optimization, with a growing focus on modern backend technologies and scalable architectures.
        </p>
        <p>
          I am passionate about contributing to large-scale software and IT-driven systems in dynamic environments.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
