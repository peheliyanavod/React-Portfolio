import { motion } from "framer-motion";


const Education = () => {
  
  return (
    <div id="education" className="border-b border-neutral-900 pb-4 mx-20">
      <motion.h1
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}} className="my-20 text-center text-5xl">Education</motion.h1>
      <div className="flex flex-wrap mb-40" >

        <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        className="w-full lg:w-2/5 mx-auto bg-gray-300 p-10">
          <h2 className="my-4 font-medium text-2xl text-center">Bachelor of Science (Hons)<br/> in Software Engineering</h2>
          <div className="text-center">
            <p className="my-2 max-w-xl ">University of Kelaniya</p>
          </div>
          <div className="text-center">
            <p className="my-2 max-w-xl ">2022 - present</p>
          </div>
          <div className="text-center">
            <p className="my-2 max-w-xl ">Current GPA - 3.76</p>
          </div>
        </motion.div>

        <motion.div
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}} 
            className="w-full lg:w-2/5 mx-auto bg-gray-300 p-10">
          <h2 className="my-4 font-medium text-2xl text-center">G.C.E. A/L (2020) - 2180558</h2>
          <div className="text-center">
            <p className="my-2 max-w-xl ">Chemistry - A</p>
          </div>
          <div className="text-center">
            <p className="my-2 max-w-xl ">Combined Mathematics - B</p>
          </div>
          <div className="text-center">
            <p className="my-2 max-w-xl ">Physics - B</p>
          </div>
          <div className=" text-center">
            <p className="my-2 max-w-xl ">General English - A (2019)</p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Education;
