import bookManagementSystem from '../assets/Book Management System.png'

const Projects = () => {
    const myProjects = [
        {
            name:"Book Management System",
            description:"A simple book management system with basic crud operations.",
            technologies:["React","Express","Node Js","MySQL"],
            image:bookManagementSystem,
        },
        {
            name:"Book Management System",
            description:"A simple book management system with basic crud operations.",
            technologies:["React","Express","Node Js","MySQL"],
            image:bookManagementSystem,
        },
        {
            name:"Book Management System",
            description:"A simple book management system with basic crud operations.",
            technologies:["React","Express","Node Js","MySQL"],
            image:bookManagementSystem,
        },
        {
            name:"Book Management System",
            description:"A simple book management system with basic crud operations.",
            technologies:["React","Express","Node Js","MySQL"],
            image:bookManagementSystem,
        },
        {
            name:"Book Management System",
            description:"A simple book management system with basic crud operations.",
            technologies:["React","Express","Node Js","MySQL"],
            image:bookManagementSystem,
        }
    ]
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        
          {myProjects.map((project,index)=>(
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
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((technology,index)=>(
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900" >{technology}</span>
              ))}
                
            </div>
          </div>
          ))}
        
      </div>
    </div>
  )
}

export default Projects;