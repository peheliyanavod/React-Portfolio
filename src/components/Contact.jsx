import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import mediumLogo from "../assets/Medium.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20 mx-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-5xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter items-center mx-auto">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          076-4447198
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          Jayamini, Dehigahalanda, Ambalantota
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          hwpeheliya@gmail.com
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="items-center flex flex-wrap w-1/6 text-center mx-auto"
        >
          <a
            href="https://www.linkedin.com/in/peheliya-danuka/"
            className="border-b p-1"
          >
            <img src={linkedinLogo} alt="" className="w-10" />
          </a>
          <a href="https://github.com/peheliyanavod" className="border-b p-1">
            <img src={githubLogo} alt="" className="w-10" />
          </a>
          <a href="https://medium.com/@hwpeheliya" className="border-b p-1">
            <img src={mediumLogo} alt="" className="w-12" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
