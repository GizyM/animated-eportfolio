// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
          <div className="butterflies">
          <span className="butterfly b1">🦋</span>
          <span className="butterfly b2">🦋</span>
          <span className="butterfly b3">🦋</span>
          <span className="butterfly b4">🦋</span>
          <span className="butterfly b5">🦋</span>
          <span className="butterfly b6">🦋</span>
          <span className="butterfly b7">🦋</span>
          <span className="butterfly b8">🦋</span>
          <span className="butterfly b9">🦋</span>
        </div>

        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>⋆.˚🦋༘⋆ Hi there, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Gizy Michel
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Frontend Software Developer & Designer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I'm a 27-year-old American frontend software engineer with a strong
            passion for building modern, user-focused web interfaces. I thrive
            on tackling complex frontend challenges while continuously learning
            from highly skilled and experienced engineers.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="public/Gizy Michel Resume.docx.pdf"
              target="_blank"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Resume
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a
              href="https://github.com/GizyM"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <i className="fab fa-github"></i>
              <motion.span
                className="social-tooltip"
                variants={{
                  rest: { opacity: 0, y: 6 },
                  hover: { opacity: 1, y: 0 },
                }}
              >
                GitHub
              </motion.span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/gizy-michel-8268033a2"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <i className="fab fa-linkedin"></i>
              <motion.span
                className="social-tooltip"
                variants={{
                  rest: { opacity: 0, y: 6 },
                  hover: { opacity: 1, y: 0 },
                }}
              >
                LinkedIn
              </motion.span>
            </motion.a>

            <motion.a
              href="public/Gizy Michel Resume.docx.pdf"
              download
              className="social-link"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              <motion.span
                className="social-tooltip"
                variants={{
                  rest: { opacity: 0, y: 6 },
                  hover: { opacity: 1, y: 0 },
                }}
              >
                Download Resume
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "GizyM", "CaffeineFueledCoder is also an acceptable title",
  origin: "🌍 Where my brain meets code and the terminal never sleeps",
  role: "Fullstack Web Developer",
  focus: {
    experience: ["Responsive Design", "Accessibility", 
    "Performance Optimization"],
  },
  traits: [
    "flexible problem solver",
    "quick learner",
    "data-driven thinker",
    "collaborative team player",
    "love traveling, as long as there's WiFi and good coffee",
    "anime is my escapism",
  ],
  missionStatement:
    "Crafting seamless web experiences one line of code at a time",
  Status: "open_to_work && getting_coffee_regularly",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                {" "}
                Currently shipping pixels and components.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
