// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SearchAPIImage from '../assets/Search-API.png';

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
        Clean, modern, and user-focused web applications built with cutting-edge
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
          <motion.div className="project-image" 
          style={{backgroundImage: `url(${SearchAPIImage})` }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3>Search API</h3>
            <p>
              A movie search app that fetches real-time data from an external
              API, focusing on responsive design, smooth search interactions,
              and clean UI feedback.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div className="project-image" 
          style={{backgroundImage: "url('/assets/SearchAPI.png')" }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3>Library React</h3>
            <p>
              
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div className="project-image" 
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3>Netflix Clone</h3>
            <p>
              
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div className="project-image" 
          style={{backgroundImage: "url('/assets/SearchAPI.png')" }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3>NFT Internship</h3>
            <p>
              
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div className="project-image" 
          style={{backgroundImage: "url('/assets/SearchAPI.png')" }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3>Treact Project</h3>
            <p>
              
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div className="project-image" 
          style={{backgroundImage: "url('/public/assets/SearchAPI.png')" }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3>Skinstric AI</h3>
            <p>
              
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
