import bookVerse from "../assets/project-2.png";
import friendsApp from "../assets/project-5.png";
import postsnap from "../assets/project-1.png";
import petshop from "../assets/project-3.jpg";
import blogMaster from "../assets/project-4.png";
import pickmath from "../assets/project-6.png";

import { motion } from "framer-motion";

const Projects = () => {
  const myProjects = [
    {
      name: "Blog Master",
      description:
        "A blog posting platform with role based login, upload blogs with images, JWT authentication, User verification",
      technologies: ["React", "Express", "Node Js", "MongoDB"],
      image: blogMaster,
    },
    {
      name: "PostSnap",
      description:
        "A social media app which can login and post images with caption with the use of Fire base.",
      technologies: ["React", "Express", "Node Js", "MongoDB"],
      image: postsnap,
    },
    {
      name: "Book Verse",
      description:
        "A book management system with basic crud operations and user login.",
      technologies: ["React", "Express", "Node Js", "MySQL"],
      image: bookVerse,
    },
    {
      name: "Friends App",
      description:
        "Developed a CRUD website according to a practical exam. Consist of user login system and friends management system.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Mysql"],
      image: friendsApp,
    },
    {
      name: "PickMatch",
      description:
        "E-commerce website with user login and registration, shopping cart, admin panel, dummy card payment, user review.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Mysql"],
      image: pickmath,
    },
    {
      name: "PetShop",
      description:
        "Developed an E-commerce website collaboratively with my team members. It is pet’s need shop which has user management system, admin panel, shopping cart and payment system.",
      technologies: ["React", "Spring boot", "PostgreSQL"],
      image: petshop,
    }
  ];
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4 mx-2 items-center text-center md:text-center sm:text-center md:items-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl"
      >
        Projects
      </motion.h2>
      <div>
        {myProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap items-center lg:justify-center ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt=""
                width={300}
                height={300}
                className="mb-6 rounded items-center"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.name}</h6>
              <p className="mb-4 text-neutral-600">{project.description}</p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-gray-400 px-2 py-1 text-sm font-medium text-blue-900"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
