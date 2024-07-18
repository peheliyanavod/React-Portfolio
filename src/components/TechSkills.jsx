import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiXampp } from "react-icons/si";


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const TechSkills = () => {
  return (
    <div>
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl">Technical Skills</motion.h1>
        <div>
        <motion.div
      whileInView={{opacity: 1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4 mx-10">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <TbBrandNextjs className="text-7xl" />
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <FaNodeJs className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <FaJava className="text-7xl text-cyan-800" />
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <FaPython className="text-7xl text-sky-700" />
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <SiExpress className="text-7xl text-gray-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <FaGitAlt className="text-7xl text-red-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <FaGithub className="text-7xl text-black-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <SiPostman className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <TiHtml5 className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <IoLogoCss3 className="text-7xl text-blue-700" />
        </motion.div>

        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <FaBootstrap className="text-7xl text-purple-700" />
        </motion.div>

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <BiLogoSpringBoot className="text-7xl text-green-700" />
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <FaPhp className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <SiMysql className="text-7xl text-blue-800" />
        </motion.div>

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 m-1">
            <SiXampp className="text-7xl text-orange-400" />
        </motion.div>

      </motion.div>
        </div>
       





    </div>
  )
}

export default TechSkills;