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
  FaUniversalAccess,
  FaTachometerAlt,
  FaRoute,
  FaAccessibleIcon,
  FaPaintBrush,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiReacthookform,
  SiVercel,
  SiVite,
  SiFigma,
  SiJest,
  SiStripe,
  SiFramer,
  SiTestinglibrary,
  SiSupabase,
  SiEslint,
  SiAxios,
  SiGoogleanalytics,
  SiRedux,
  SiMui,
  SiStyledcomponents
} from "react-icons/si";

import { VscJson, VscCode } from "react-icons/vsc";

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

const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      { label: "HTML", icon: <FaHtml5 />, className: "html" },
      { label: "CSS", icon: <FaCss3Alt />, className: "css" },
      { label: "JavaScript", icon: <FaJsSquare />, className: "js" },
      { label: "TypeScript", icon: <SiTypescript />, className: "typescript" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { label: "React", icon: <FaReact />, className: "react" },
      { label: "Vite", icon: <SiVite />, className: "vite" },
      { label: "Next.js", icon: <SiNextdotjs />, className: "nextjs" },
      { label: "Redux", icon: <SiRedux />, className: "redux" },
      { label: "React Hooks", icon: <SiReacthookform />, className: "react-hooks" },
      { label: "Tailwind CSS", icon: <SiTailwindcss />, className: "tailwind" },
      {
        label: "Styled Components",
        icon: <SiStyledcomponents />,
        className: "styled-components",
      },
      { label: "Material UI", icon: <SiMui />, className: "mui" },
      { label: "Framer Motion", icon: <SiFramer />, className: "framer-motion" },
    ],
  },
  {
    title: "State & Data",
    items: [
      { label: "REST APIs", icon: <FaUniversalAccess />, className: "rest-api" },
      { label: "Axios", icon: <SiAxios />, className: "axios" },
      { label: "Supabase", icon: <SiSupabase />, className: "supabase" },
      { label: "Firebase", icon: <IoLogoFirebase />, className: "firebase" },
      { label: "Cloud Firestore", icon: <SiFirebase />, className: "firestore" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { label: "Git", icon: <FaGitAlt />, className: "git" },
      { label: "GitHub", icon: <FaGithub />, className: "github" },
      { label: "GitHub Actions (CI/CD)", icon: <FaGithub />, className: "github-actions" },
      { label: "Vercel", icon: <SiVercel />, className: "vercel" },
      { label: "Figma", icon: <SiFigma />, className: "figma" },
      { label: "VS Code", icon: <VscCode />, className: "vscode" },
      { label: "ESLint", icon: <SiEslint />, className: "eslint" },
      { label: "Google Analytics", icon: <SiGoogleanalytics />, className: "google-analytics" },
    ],
  },
  {
    title: "Backend & Integration",
    items: [
      { label: "Node.js", icon: <FaNodeJs />, className: "node" },
      { label: "Stripe", icon: <SiStripe />, className: "stripe" },
      { label: "Jest", icon: <SiJest />, className: "jest" },
      { label: "Testing Library", icon: <SiTestinglibrary />, className: "testing-library" },
      { label: "Web APIs", icon: <FaUniversalAccess />, className: "web-apis" },
    ],
  },
  {
    title: "Other",
    items: [
      {
        label: "Responsive & Accessible Web Dev",
        icon: <FaAccessibleIcon />,
        className: "accessibility",
      },
      { label: "UX/UI Design", icon: <FaPaintBrush />, className: "ux-ui" },
      { label: "Performance Optimization", icon: <FaTachometerAlt />, className: "performance" },
      { label: "Dynamic Route Handling", icon: <FaRoute />, className: "routing" },
      { label: "AI Integration", icon: <VscJson />, className: "ai" },
    ],
  },
];

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
            Technologies, tools, and workflows I use to build modern web applications.
          </motion.p>
          <div className="skills-display">
            {skillGroups.map((group) => (
              <motion.div key={group.title} variants={fadeInUp} className="skills-group">
                <h3 className="skills-group-title">{group.title}</h3>
                <div className="skills-grid">
                  {group.items.map((skill) => (
                    <motion.div
                    key={skill.label}
                    className={`skill-item ${skill.className}`}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.15 }}
                    >
                      {skill.icon}
                      <span>{skill.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
