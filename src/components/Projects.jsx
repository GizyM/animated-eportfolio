//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SearchAPIImage from "../assets/SearchAPI.png";
import LibraryReact from "../assets/LibraryReact.png";
import NetflixClone from "../assets/NetflixClone.png";
import NFTInternship from "../assets/NFT Internship.png";
import Skinstric from "../assets/Skinstric.png";
import Treact from "../assets/Treact.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Work in the Browser
      </motion.h2>
      <motion.p
        className="projects-description"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Clean, modern, and user-focused web applications built with cutting edge
        frontend technologies.
      </motion.p>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url(${SearchAPIImage})` }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Search API </h3>
          <p>
            A movie search app that fetches real-time data from an external API,
            focusing on responsive design, smooth search interactions, and clean
            UI feedback.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: `url(${LibraryReact})`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Library React</h3>
          <p>
            A React e-commerce book store with dynamic routing, sorting, and
            real-time cart updates.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: `url(${NetflixClone})`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Netflix Clone</h3>
          <p>
            A modern media discovery application featuring a global search
            experience, responsive UI, and dynamic routing to showcase detailed
            content pages in a Netflix-inspired design.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Firebase</span>
            <span>JavaScript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: `url(${NFTInternship})`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>NFT Internship</h3>
          <p>
            A static website reworked into a dynamic application using modern
            JavaScript libraries, featuring animated interactions, dynamic
            content loading, and structured GitHub version control.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>AOS</span>
            <span>Owl Carousel</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: `url(${Treact})`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Treact Project</h3>
          <p>
            Crafted a high-fidelity landing page clone with meticulous attention
            to visual accuracy, interactive behavior, and responsive layout.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: `url(${Skinstric})`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Skinstric AI</h3>
          <p>
            An interactive app that collects user information and photos, then
            calls an API to analyze and display demographic insights in a
            responsive interface.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
