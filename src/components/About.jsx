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
          a passionate Software Engineering undergraduate at the University of Kelaniya, Sri Lanka. 
          I specialize in building efficient, user-focused web applications using modern technologies.
        </p>
        <p className="mb-4">
          Currently, I’m working as a <span className="text-cyan-400 font-semibold">Trainee Software Engineer</span> 
          at <span className="text-cyan-400 font-semibold">eArrow Pvt Ltd</span>, where I contribute to the 
          development of enterprise-level systems including CRM, HRIS, and Higher Education Management Systems 
          for reputed institutions like UCL, CBS, SLITHM, and HRMI. My role involves backend development, 
          UI/UX improvements, data visualization, and collaborating in Agile sprints.
        </p>
        <p>
          I’m enthusiastic about full-stack development and continuously learning frameworks like 
          React, Node.js, and Spring Boot to enhance my technical versatility and build impactful software solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
