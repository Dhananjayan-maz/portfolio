import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      >
    <h1>About Me</h1>

      <p>
        I am an AI & Data Science student passionate about Python
        development, Data Engineering, and AI applications.
        I enjoy building database-driven applications, ETL pipelines,
        and intelligent systems using modern technologies.
      </p>

      <p>
        My interests include Backend Development, Data Engineering,
        Machine Learning, and Generative AI.
      </p>
  </motion.section>
);
}

export default About;