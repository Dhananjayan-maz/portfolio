import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "../assets/resume/Resume.jpg";
import profile from "../assets/images/Profile_Picture.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <img
        src={profile}
        alt="Profile"
        className="profile-img"
      />

      <h1>Hi, I'm Dhananjayan M</h1>

      <h2>AI & Data Science Student</h2>

      <p>
        Full Stack Developer | Data Engineering Enthusiast
      </p>

      <button><a href="#projects" style={{textDecoration:'none', color:'white'}}>View Projects</a></button>

      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View Resume</button>
      </a>

      {/* Social Icons */}

      <div className="social-icons">

        <a
          href="https://github.com/Dhananjayan-maz"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/dhananjayan-m-5b1a4728b/"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:mdhananjayan67@gmail.com"
        >
          <FaEnvelope />
        </a>

      </div>
    </section>
  );
}

export default Hero;