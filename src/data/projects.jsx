import engineClinic from "../assets/engine-clinic.png";
import postsnap from "../assets/postsnap.png";
import travelAssist from "../assets/travel-assist.png";
import blogMaster from "../assets/blog-master.png";
import bookVerse from "../assets/bookverse.png";
import friendsApp from "../assets/friends-app.png";
import pickMatch from "../assets/pickmatch.png";
import petshop from "../assets/petzone.jpg";

const projects = [
  {
    id: 4,
    title: "Travel Assist",
    description:
      "An intelligent travel assistant web application that helps users plan trips by providing destination recommendations, accommodations, and budgeting tools.",
    technologies: ["React", "Django", "MongoDB", "Chatbot Integration"],
    github: "https://github.com/peheliyanavod/Travel-Assistant-Bot.git",
    liveDemo: "",
    image: travelAssist,
  },
  {
    id: 1,
    title: "Engine-Clinic",
    description:
      "A vehicle repair and online reservation system built using the MERN stack and Auth0 authentication. It allows users to book vehicle services and manage reservations efficiently.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Auth0"],
    github: "https://github.com/peheliyanavod/Engine-Clinic.git",
    liveDemo: "",
    image: engineClinic,
  },
  {
    id: 2,
    title: "PostSnap",
    description:
      "A social media application developed using the MERN stack that allows users to share posts, like, and comment. Includes authentication and image uploads.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/peheliyanavod/PostSnap",
    liveDemo: "",
    image: postsnap,
  },
  {
    id: 5,
    title: "Blog Master",
    description:
      "A blog posting platform with role based login, upload blogs with images, JWT authentication, User verification.",
    technologies: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/peheliyanavod/Blog-App.git",
    liveDemo: "",
    image: blogMaster,
  },
  {
    id: 6,
    title: "Book Verse",
    description:
      "A book management system with basic CRUD operations and user login.",
    technologies: ["React", "Express", "Node.js", "MySQL"],
    github: "https://github.com/peheliyanavod/crud.git",
    liveDemo: "",
    image: bookVerse,
  },
  {
    id: 7,
    title: "Friends App",
    description:
      "Developed a CRUD website according to a practical exam. Consist of user login system and friends management system.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Mysql"],
    github: "https://github.com/peheliyanavod/Friends-App.git",
    liveDemo: "",
    image: friendsApp,
  },
  {
    id: 8,
    title: "PickMatch",
    description:
      "E-commerce website with user login and registration, shopping cart, admin panel, dummy card payment, user review.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Mysql"],
    github: "https://github.com/peheliyanavod/PickMatch.git",
    liveDemo: "",
    image: pickMatch,
  },
  {
    id: 9,
    title: "PetShop",
    description:
      "Developed an E-commerce website collaboratively with my team members. It is pet’s need shop which has user management system, admin panel, shopping cart and payment system.",
    technologies: ["React", "Spring boot", "PostgreSQL"],
    github: "https://github.com/bhashana99/petShop.git",
    liveDemo: "",
    image: petshop,
  },
];

export default projects;
