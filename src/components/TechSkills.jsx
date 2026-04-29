import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiMysql,
  SiXampp,
  SiRedux,
  SiDocker,
  SiAmazonaws,
  SiJsonwebtokens,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiVisualstudiocode,
  SiNetlify,
  SiNginx,
} from "react-icons/si";
import {
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// 🟢 CATEGORIZED TECHNOLOGIES
const techCategories = [
  {
    category: "Frontend Development",
    technologies: [
      { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 2.5 },
    //   { icon: <TbBrandNextjs className="text-7xl" />, duration: 3 },
      { icon: <RiTailwindCssFill className="text-7xl text-cyan-400" />, duration: 2.5 },
      { icon: <FaBootstrap className="text-7xl text-purple-700" />, duration: 4 },
      { icon: <SiHtml5 className="text-7xl text-orange-400" />, duration: 2.5 },
      { icon: <SiCss3 className="text-7xl text-blue-700" />, duration: 3 },
      { icon: <RiJavascriptFill className="text-7xl text-yellow-400" />, duration: 3 },
    //   { icon: <SiTypescript className="text-7xl text-blue-400" />, duration: 3 },
    //   { icon: <SiRedux className="text-7xl text-purple-500" />, duration: 4 },
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      { icon: <FaNodeJs className="text-7xl text-green-500" />, duration: 4 },
      { icon: <SiExpress className="text-7xl text-gray-400" />, duration: 5 },
      { icon: <BiLogoSpringBoot className="text-7xl text-green-700" />, duration: 5 },
      { icon: <FaJava className="text-7xl text-red-600" />, duration: 2.5 },
      { icon: <FaPython className="text-7xl text-sky-700" />, duration: 3 },
      { icon: <FaPhp className="text-7xl text-blue-500" />, duration: 3 },
    ],
  },
  {
    category: "Database & Cloud",
    technologies: [
      { icon: <SiMongodb className="text-7xl text-green-500" />, duration: 5 },
      { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, duration: 5 },
      { icon: <SiMysql className="text-7xl text-blue-800" />, duration: 4 },
      { icon: <SiAmazonaws className="text-7xl text-orange-500" />, duration: 4 },
    //   { icon: <SiNginx className="text-7xl text-green-600" />, duration: 3 },
    ],
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { icon: <FaGitAlt className="text-7xl text-red-400" />, duration: 4 },
      { icon: <FaGithub className="text-7xl text-slate-200" />, duration: 6 },
      { icon: <SiPostman className="text-7xl text-orange-400" />, duration: 3 },
      { icon: <SiDocker className="text-7xl text-blue-500" />, duration: 4 },
      { icon: <TbBrandVercel className="text-7xl text-white" />, duration: 3 },
    //   { icon: <SiNetlify className="text-7xl text-green-400" />, duration: 4 },
      { icon: <SiVisualstudiocode className="text-7xl text-blue-500" />, duration: 3 },
      { icon: <SiXampp className="text-7xl text-orange-400" />, duration: 2.5 },
    ],
  },
];


const TechSkills = () => {
  return (
    <section id="skills" className="py-20 border-b border-slate-200 dark:border-neutral-900 mx-10 text-center transition-colors duration-300">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-semibold mb-16 text-cyan-600 dark:text-cyan-400"
      >
        Technical Skills
      </motion.h1>

      {/* Map through each category */}
      {techCategories.map((category, i) => (
        <div key={i} className="mb-16">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-slate-800 dark:text-white mb-10"
          >
            {category.category}
          </motion.h2>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center gap-5"
          >
            {category.technologies.map((item, index) => (
              <motion.div
                key={index}
                variants={iconVariants(item.duration)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-200 dark:border-neutral-800 bg-white dark:bg-transparent p-5 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-sm dark:shadow-none transition-all duration-300"
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default TechSkills;
