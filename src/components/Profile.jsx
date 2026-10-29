import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import myPhoto from "../assets/my-image-1.jpg";
import profile from "../data/profile";

const stats = [
  { value: "2+", label: "Years of industry experience" },
  { value: "500+", label: "Active users on systems I build" },
  { value: "3.5", label: "GPA, BSc (Hons) Software Eng." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const Profile = () => {
  return (
    <section id="home" className="pb-20 pt-32 sm:pb-24 sm:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.role} at {profile.company}
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-4 text-xl font-medium text-zinc-700 dark:text-zinc-300 sm:text-2xl"
          >
            Software Engineer building reliable{" "}
            <span className="text-primary-600 dark:text-primary-400">enterprise web applications</span>.
          </motion.p>

          <motion.p
            {...fadeUp(0.15)}
            className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            I design and ship full-stack features across CRM, HRMS and Student
            Management platforms using Spring Boot, Angular, React and Node.js —
            with a focus on stability, performance and clean architecture.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View my work <FaArrowRight size={12} />
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaDownload size={12} /> Download CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              {profile.socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.dl
            {...fadeUp(0.25)}
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-zinc-500 dark:text-zinc-400 sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto lg:mx-0"
        >
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary-500/20 to-transparent blur-2xl" />
            <img
              src={myPhoto}
              alt={profile.name}
              className="w-64 rounded-3xl border border-zinc-200 object-cover shadow-xl dark:border-zinc-800 sm:w-72 lg:w-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
