import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import profile from "../data/profile";

const Contact = () => {
  const details = [
    { icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhoneAlt, label: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: FaMapMarkerAlt, label: profile.location },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-zinc-200 py-20 dark:border-zinc-800/80 sm:py-24"
    >
      <Reveal className="card relative overflow-hidden px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-primary-500/15 blur-3xl" />
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          I&apos;m always open to discussing new opportunities, interesting
          projects or collaborations. My inbox is open.
        </p>

        <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
          <FaEnvelope size={14} /> Say hello
        </a>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:gap-8">
          {details.map(({ icon: Icon, label, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                <Icon className="text-zinc-400" /> {label}
              </a>
            ) : (
              <span key={label} className="inline-flex items-center gap-2">
                <Icon className="text-zinc-400" /> {label}
              </span>
            )
          )}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {profile.socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="rounded-lg border border-zinc-200 p-3 text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
