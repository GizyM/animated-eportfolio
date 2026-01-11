//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Skills } from "./components/Skills.jsx";
import { Hero } from "./components/Hero.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>© 2026 Gizy Michel. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
