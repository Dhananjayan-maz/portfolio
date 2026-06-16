import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
className="skills"
id="skills"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
>
    <h1>Skills</h1>

      <div className="skills-container">

        <div className="skill-box">
          <h3>Languages</h3>
          <p>Python, JavaScript</p>
        </div>

        <div className="skill-box">
          <h3>Frameworks</h3>
          <p>Django, React</p>
        </div>

        <div className="skill-box">
          <h3>Databases</h3>
          <p>MySQL, SQLite</p>
        </div>

        <div className="skill-box">
          <h3>AI & ML</h3>
          <p>Scikit-learn, TensorFlow, LangChain, FAISS, YOLOv8</p>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>
          <p>GitHub, VS Code, Jupyter Notebook, Roboflow</p>
        </div>

      </div>
    </motion.section>
  );
}

export default Skills;