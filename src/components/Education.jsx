import { motion } from "framer-motion";
import { FaCalendarAlt, FaAward, FaGraduationCap } from "react-icons/fa";

function Education() {
    return (
        <motion.section
            className="education"
            id="education"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >

            <h1>Education</h1>

            <div className="education-container">

                <div className="education-card">
                    <h3>
                        <FaGraduationCap className="edu-icon" />
                        B.Tech Artificial Intelligence & Data Science
                    </h3>

                    <p>
                        Coimbatore Institute of Engineering and Technology
                    </p>

                    <p className="edu-score">
                        <FaAward className="edu-small-icon" />
                        CGPA: 8.48
                    </p>

                    <span>
                        <FaCalendarAlt className="edu-small-icon" />
                        2023 - 2027
                    </span>
                </div>

                <div className="education-card">
                    <h3>
                        <FaGraduationCap className="edu-icon" />
                        Higher Secondary Education
                    </h3>

                    <p className="school" style={{height: '50px'}}>
                        Sri Venkateswara Matric Higher Secondary School
                    </p>

                    <p className="edu-score">
                        <FaAward className="edu-small-icon" />
                        Percentage: 78%
                    </p>

                    <span>
                        <FaCalendarAlt className="edu-small-icon" />
                        2022 - 2023
                    </span>
                </div>

            </div>

        </motion.section>
    );
}

export default Education;