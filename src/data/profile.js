import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

// Single source of truth for personal details used in the hero, contact and footer.
const profile = {
  name: "Peheliya Dhanuka Navod",
  shortName: "Navod",
  role: "Associate Software Engineer",
  company: "eArrow Pvt Ltd",
  email: "hwpeheliya@gmail.com",
  phone: "076-4447198",
  phoneHref: "+94764447198",
  location: "Ambalantota, Sri Lanka",
  cv: "/Updated CV.pdf",
  socials: [
    { name: "GitHub", href: "https://github.com/peheliyanavod", icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/peheliya-danuka/", icon: FaLinkedin },
    { name: "Medium", href: "https://medium.com/@hwpeheliya", icon: FaMedium },
  ],
};

export default profile;

