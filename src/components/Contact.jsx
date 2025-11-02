import { motion } from "framer-motion";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import mediumLogo from "../assets/Medium.jpg";

const Contact = () => {
  const socials = [
    { href: "https://www.linkedin.com/in/peheliya-danuka/", img: linkedinLogo },
    { href: "https://github.com/peheliyanavod", img: githubLogo },
    { href: "https://medium.com/@hwpeheliya", img: mediumLogo },
  ];

  return (
    <section id="contact" className="py-20 text-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold mb-8"
      >
        Get in Touch
      </motion.h2>

      <div className="space-y-4 text-lg text-slate-300">
        <p>📞 076-4447198</p>
        <p>📍 Jayamini, Dehigahalanda, Ambalantota</p>
        <p>📧 hwpeheliya@gmail.com</p>
      </div>

      <div className="flex justify-center gap-8 mt-10">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full border border-slate-600 hover:border-cyan-400 transition-all"
          >
            <img src={social.img} alt="social" className="w-8" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
