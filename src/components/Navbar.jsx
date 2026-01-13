// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logoImage from "../assets/a7940d9cdb124e3eb3c89bfad71b01a5-free.png";

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

export const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={logoImage} 
          alt="Portfolio logo"
          className="logo-image"
        />
        <span>Portfolio</span>
      </motion.div>

      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li variants={fadeInUp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        >
          <a href="#home"> Home</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#skills"> Skills</a>
        </motion.li>
        <motion.li variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects"> Projects</a>
        </motion.li>
        <motion.li variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact"> Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
