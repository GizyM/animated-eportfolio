//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

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

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="skills-container">
        <motion.div
          className="skills-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="skills-title" variants={fadeInUp}>
            Skills
          </motion.h2>
          <motion.p className="skills-description" variants={fadeInUp}>
            Here are my technical skills and tools I work with.
          </motion.p>
          <div className="skills-display">
            <div className="skills-grid">
              <div className="skill-item">
                <FaHtml5 aria-hidden="true" />
                <span>HTML</span>
              </div>

              <div className="skill-item">
                <FaCss3Alt aria-hidden="true" />
                <span>CSS</span>
              </div>

              <div className="skill-item">
                <FaJsSquare aria-hidden="true" />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <FaReact aria-hidden="true" />
                <span>React</span>
              </div>

              <div className="skill-item">
                <SiNextdotjs aria-hidden="true" />
                <span>Next.js</span>
              </div>

              <div className="skill-item">
                <SiTypescript aria-hidden="true" />
                <span>TypeScript</span>
              </div>

              <div className="skill-item">
                <SiTailwindcss aria-hidden="true" />
                <span>Tailwind CSS</span>
              </div>

              <div className="skill-item">
                <FaNodeJs aria-hidden="true" />
                <span>Node.js</span>
              </div>

              <div className="skill-item">
                <FaGitAlt aria-hidden="true" />
                <span>Git</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
