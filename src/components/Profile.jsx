import { motion } from "framer-motion";
import myPhoto from "../assets/my-image-1.jpg";
import About from "./About";

const Profile = () => {

  return (
    <section className="pt-32 pb-20 border-b border-slate-800">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-cyan-400 mb-3">
            Peheliya Dhanuka Navod
          </h1>
          <h2 className="text-2xl lg:text-3xl text-slate-300 mb-6">
            Software Engineer | BSc (Hons) in Software Engineering
          </h2>
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3 flex justify-center"
        >
          <img
            src={myPhoto}
            alt="Profile"
            className="rounded-2xl shadow-lg shadow-cyan-900/40 w-72 lg:w-80 border border-slate-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
