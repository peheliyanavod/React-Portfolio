import bookManagementSystem from "../assets/Book Management System.png";
import friendsApp from "../assets/Friends App.png";
import pickmath from "../assets/PickMatch.png";

const Projects = () => {
  const myProjects = [
    {
      name: "Book Management System",
      description:
        "A simple book management system with basic crud operations.",
      technologies:["React", "Express", "Node Js", "MySQL"] ,
      image: bookManagementSystem,
    },
    {
      name: "Friends App",
      description:
        "Developed a simple CRUD website according to a practical exam. Consist of user login system and friends management system.",
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
    // {
    //   name: "PetShop",
    //   description:
    //     "Developed an E-commerce website collaboratively with my team members. It is pet’s need shop which has user management system, admin panel, shopping cart and payment system.",
    //   technologies: ["React", "Spring boot", "PostgreSQL"],
    //   image: bookManagementSystem,
    // }
    
  ];
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4 ">
      <h2 className="my-20 text-center text-5xl">Projects</h2>
      <div>
        {myProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt=""
                width={300}
                height={300}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
