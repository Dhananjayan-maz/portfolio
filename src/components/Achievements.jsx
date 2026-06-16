import nptel from "../assets/certificates/NPTEL-Dhananjayan.M-Data Analytics with Python.jpg";
import fullstack from "../assets/certificates/Python Full stack certificate.png";
import tnau from "../assets/certificates/TNAU conference.png";
import bannari from "../assets/certificates/National conference on Bannari amman clge.jpeg";

function Achievements() {
  return (
    <section className="certifications" id="certifications">

      <h1>Certifications & Conferences</h1>

      <div className="certificate-container">

        {/* Conference 1 */}
        <div className="certificate-card">
          <img src={bannari} alt="SSMA 2026" />

          <h3>
            An Explainable AI-Based Vehicle Component Recognition and
            Bilingual Learning System for Automation in Process Industries
          </h3>
        </div>


        {/* Conference 2 */}
        <div className="certificate-card">
          <img src={tnau} alt="ECOFEST 2026" />

          <h3>
            An AI-Based Smart Farming Decision Support System for Precision Agriculture
          </h3>
        </div>


        {/* Certificate 1 */}
        <div className="certificate-card">
          <img src={nptel} alt="Python for Data Science" />

          <h3 className="mt-5">Data Analytics with Python</h3>
        </div>


        {/* Certificate 2 */}
        <div className="certificate-card">
          <img src={fullstack} alt="Prompt Engineering" />

          <h3>Python Full stack Web Development</h3>
        </div>

      </div>

    </section>
  );
}

export default Achievements;