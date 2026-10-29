import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400"
      >
        404 error
      </motion.p>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
      >
        Page not found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400"
      >
        The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8"
      >
        <Link to="/" className="btn-primary">
          <FaArrowLeft size={12} /> Go back home
        </Link>
      </motion.div>
    </section>
  );
};

export default PageNotFound;
