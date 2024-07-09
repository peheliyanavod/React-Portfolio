import { motion } from "framer-motion";


const OtherQualifications = () => {
  const qualifications = [
    "Successfully Completed the Diploma in Information Communication Technology (ICT) at Institute of IT Education, Sri Lanka (2017).",
    "Successfully completed Java and Python programming certification course (2021).",
    "Successfully completed a training at People’s bank (2021).",
    "Completed a Figma course in Udemy (2023).",
    "Following a Full-stack Developer course in Cousera.",
  ];
  return (
    <div className="border-b border-neutral-900 pb-4 mx-20">
      <motion.h1
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}} className="my-20 text-center text-5xl">Other Qualifications</motion.h1>

      <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full max-w-xl lg:w-3/4">
            <ul className="list-disc">
              {qualifications.map((qualification, index) => (
                <li key={index} className="my-2 max-w-xl py-3">
                  {qualification}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </motion.div>
    </div>
  );
};

export default OtherQualifications;
