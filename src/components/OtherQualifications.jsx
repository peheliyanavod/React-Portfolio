import { FaCertificate, FaUsers } from "react-icons/fa";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

// NOTE: The previous "Education & Experience" list was removed from this section
// because it duplicated the dedicated Education and Experience sections.

const qualifications2 = {
  certifications: [
    {
      title: "What Is Generative AI?",
      organization: "LinkedIn Learning",
      year: "2025",
    },
    {
      title: "Introduction to Cloud 101",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "Getting Started with Compute / AWS Compute Fundamentals",
      organization: "Amazon Web Services (AWS)",
      year: "2025",
    },
    {
      title: "MERN Stack Course",
      organization: "Udemy",
      year: "2024",
    },
    {
      title: "Figma UI/UX Course",
      organization: "Udemy",
      year: "2023",
    },
    {
      title: "Certified in Java and Python Programming",
      organization: "Dekma Institute",
      year: "2021",
    },
    {
      title: "Diploma in ICT",
      organization: "Institute of IT Education, Sri Lanka",
      year: "2017",
    },
  ],
  extracurricular: [
    "Subcommittee Member, IEEE WIE Student Branch - University of Kelaniya (2023–Present)",
    "Participant - PyHack Hackathon (2023)",
    "Participant - JuniorHack Hackathon (2022)",
  ],
};

const OtherQualifications = () => {
  return (
    <Section id="qualifications" eyebrow="Certifications" title="Continuous learning">
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="card p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <FaCertificate className="text-primary-500" /> Certifications
          </h3>
          <ul className="mt-4 divide-y divide-zinc-200 dark:divide-zinc-800">
            {qualifications2.certifications.map((cert) => (
              <li key={cert.title} className="flex items-start justify-between gap-4 py-3">
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{cert.title}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{cert.organization}</p>
                </div>
                <span className="chip flex-none">{cert.year}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="card h-fit p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <FaUsers className="text-primary-500" /> Activities
          </h3>
          <ul className="mt-4 space-y-3">
            {qualifications2.extracurricular.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-500" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
};

export default OtherQualifications;
