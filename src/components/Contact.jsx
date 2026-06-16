import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <section className="contact" id="contact">

            <h1>Contact Me</h1>

            <div className="contact-container">

                <div className="contact-box">
                    <FaEnvelope />
                    <h3>Email</h3>
                    <a href="mailto:mdhananjayan67@gmail.com">
                        mdhananjayan67@gmail.com
                    </a>
                </div>

                <div className="contact-box">
                    <FaPhone />
                    <h3>Phone</h3>
                    <a href="tel:+91 9626577633">
                        +91 9629577633
                    </a>
                </div>

                <div className="contact-box">
                    <FaLinkedin />
                    <h3>LinkedIn</h3>
                    <a
                        href="https://www.linkedin.com/in/dhananjayan-m-5b1a4728b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Profile
                    </a>
                </div>

                <div className="contact-box">
                    <FaGithub />
                    <h3>GitHub</h3>
                    <a
                        href="https://github.com/Dhananjayan-maz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit GitHub
                    </a>
                </div>

                <div className="contact-box">
                    <FaMapMarkerAlt />
                    <h3>Location</h3>
                    <p><a href="https://maps.app.goo.gl/TkYXhVWBVxvEC6iw8">Coimbatore, Tamil Nadu, India</a></p>
                </div>

            </div>

        </section>
    );
}

export default Contact;