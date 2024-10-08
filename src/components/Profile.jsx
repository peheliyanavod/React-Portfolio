import myPhoto from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Profile = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  const aboutMe = "Hi, I'm Peheliya Dhanuka Navod, a 3rd year undergraduate at University of Kelaniya skilled in JavaScript, React, Node.js, Express, and MongoDB. I focus on creating efficient and seamless web applications. I'm passionate about turning ideas into functional and userfriendly digital solutions. Beyond the technical skills, I bring strong communication, time management and attention to details. I am currently seeking a Software Engineering internship to enhance my first-hand experience. I have a keen interest in full-stack development and am looking to apply and grow my skills in this area."
  return (
    <div className="border-b border-nuetral-900 pb-4 lg:mb-35 mx-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-3/4">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Dhanuka Navod
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-600 via-slate-800 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent p-2"
            >
              Software Engineering (UG)
            </motion.span>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="m-6 max-w-xl py-6 tracking-tighter text-center text-2xl font-normal"
            >
              {aboutMe}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center w-full lg:w-5/6">
            <motion.img
              src={myPhoto}
              alt="Photo of me"
              className="rounded"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
