import { motion } from "framer-motion";

import etl from "../assets/images/ETL workflow.png";
import rag from "../assets/images/upload_rag.png";
import formbuilder from "../assets/images/dynamic form 3.png"
import railconnect from "../assets/images/train ticket booking 1.png";
import vehicle from "../assets/images/ai vec 2.png";
import EB from "../assets/images/EB bill.png"
import Bank from "../assets/images/bank.png"

function Projects() {
  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>Projects</h1>

      <div className="project-container">

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >

          <img src={etl} alt="ETL Dashboard" />

          <h3>Sales Data ETL Dashboard</h3>

          <p>
            Web-based ETL pipeline built using Django,
            Pandas and MySQL with interactive analytics.
          </p>

          <a
            href="https://github.com/Dhananjayan-maz/sales-etl-dashboard-django"
            target="_blank"
          >
            <button>View GitHub</button>
          </a>

        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >

          <img src={rag} alt="RAG Dashboard" />

          <h3>AI Document Question Answering System</h3>

          <p>
            RAG-based application for semantic search and question answering from PDF documents.
          </p>

          <a
            href="https://github.com/Dhananjayan-maz/ChatWithPDF-RAG"
            target="_blank"
          >
            <button>View GitHub</button>
          </a>

        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >

          <img src={formbuilder} alt="Dynamic form Dashboard" />

          <h3>Dynamic Form Builder</h3>

          <p>
            Create custom forms dynamically and export responses to Excel and PDF.
          </p>

          <a
            href="https://github.com/Dhananjayan-maz/Dynamic-Form"
            target="_blank"
          >
            <button>View GitHub</button>
          </a>

        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >

          <img src={railconnect} alt="Train Dashboard" />

          <h3>RailConnect – Train Ticket Booking System</h3>

          <p>
            Railway ticket booking application with dynamic fare calculation and admin configuration.
          </p>

          <a
            href="https://github.com/Dhananjayan-maz/Railways-Train-Ticket-Booking"
            target="_blank"
          >
            <button>View GitHub</button>
          </a>

        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >

          <img src={vehicle} alt="Vehicle Dashboard" />

          <h3>Vehicle Component Detection</h3>

          <p>
            YOLOv8-based intelligent system for detecting vehicle components from images.
          </p>

          <a
            href="https://github.com/Dhananjayan-maz/Vehicle-Component-Prediction"
            target="_blank"
          >
            <button>View GitHub</button>
          </a>

        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >

          <img src={EB} alt="EB Dashboard" />

          <h3>EB Bill Calculation System</h3>

          <p>
            A Django web app for customers and employees to manage
            electricity consumption, calculate slab-based bills, and track history via an interactive dashboard.
          </p>

          <a
            href="https://github.com/Dhananjayan-maz/eb-bill-calculation"
            target="_blank"
          >
            <button>View GitHub</button>
          </a>

        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >

          <img src={Bank} alt="Bank Dashboard" />

          <h3>Bank Management System</h3>

          <p>
            A Django-based banking web app for users to securely manage accounts,
            process deposits and withdrawals, and track transactions via an interactive dashboard.
          </p>

          <a
            href="https://github.com/Dhananjayan-maz/Simple-Bank-Project"
            target="_blank"
          >
            <button>View GitHub</button>
          </a>

        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >

          <div className="project-placeholder">
            <h1>📈</h1>
            <h3>CLI Application</h3>
          </div>

          <h3>Binance Futures Testnet Trading Bot</h3>

          <p>
            Python-based CLI trading bot that integrates with the Binance Futures Testnet API to fetch market data, place orders, and simulate automated trading strategies.
          </p>

          <a
            href="https://github.com/Dhananjayan-maz/binance-futures-trading-bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View GitHub</button>
          </a>

        </motion.div>
      </div>
    </motion.section >
  );
}

export default Projects;