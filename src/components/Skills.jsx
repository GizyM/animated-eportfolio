//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiReactquery,
  SiReacthookform,
  SiVercel,
  SiVite,
  SiFigma,
  SiJest,
  SiStripe,
  SiFramer,
  SiTestinglibrary,
  SiSupabase,
  SiChatbot,
  SiAxios,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

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
              <div className="skill-item html">
                <FaHtml5 />
                <span>HTML</span>
              </div>

              <div className="skill-item css">
                <FaCss3Alt />
                <span>CSS</span>
              </div>

              <div className="skill-item js">
                <FaJsSquare />
                <span>JavaScript</span>
              </div>

              <div className="skill-item react">
                <FaReact />
                <span>React</span>
              </div>

              <div className="skill-item nextjs">
                <SiNextdotjs />
                <span>Next.js</span>
              </div>

              <div className="skill-item typescript">
                <SiTypescript />
                <span>TypeScript</span>
              </div>

              <div className="skill-item tailwind">
                <SiTailwindcss />
                <span>Tailwind CSS</span>
              </div>

              <div className="skill-item github">
                <FaGithub />
                <span>Github</span>
              </div>

              <div className="skill-item firebase">
                <SiFirebase />
                <span>Firebase</span>
              </div>

              <div className="skill-item cloud firestore">
                <SiFirebase />
                <span>Cloud Firestore</span>
              </div>

              <div className="skill-item reactquery">
                <SiReactquery />
                <span>React Query</span>
              </div>

              <div className="skill-item reacthookform">
                <SiReacthookform />
                <span>React Hook Forms</span>
              </div>

              <div className="skill-item vercel">
                <SiVercel />
                <span>Vercel</span>
              </div>

              <div className="skill-item vite">
                <SiVite />
                <span>Vite</span>
              </div>

              <div className="skill-item figma">
                <SiFigma />
                <span>Figma</span>
              </div>

              <div className="skill-item vscode">
                <VscCode />
                <span>VS Code</span>
              </div>

              <div className="skill-item supabase">
                <SiSupabase />
                <span>Supabase</span>
              </div>

              <div className="skill-item api">
                <FaHtml5 />
                <span>API Integration</span>
              </div>

              <div className="skill-item github-copilot">
                <FaGithub />
                <span>GitHub Copilot</span>
              </div>

              <div className="skill-item eslint">
                <SiEslint />
                <span>ESLint</span>
              </div>

              <div className="skill-item redux">
                <VscJson />
                <span>Redux</span>
              </div>

              <div className="skill-item axios">
                <SiAxios />
                <span>Axios</span>
              </div>

              <div className="skill-item google-analytics">
                <SiChatbot />
                <span>Google Analytics</span>
              </div>

              <div className="skill-item node">
                <FaNodeJs />
                <span>Node.js</span>
              </div>

              <div className="skill-item ux-ui">
              <VscCode />
              <span>UX/UI Design</span>
              </div>

              <div className="skill-item framer-motion">
                <SiFramer />
                <span>Framer Motion</span>
              </div>

              <div className="skill-item jest">
                <SiJest />
                <span>Jest</span>
              </div>

              <div className="skill-item stripe">
                <SiStripe />
                <span>Stripe</span>
              </div>

              <div className="skill-item testinglibrary">
                <SiTestinglibrary />
                <span>Testing Library</span>
              </div>

              <div className="skill-item git">
                <FaGitAlt />
                <span>Git</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
