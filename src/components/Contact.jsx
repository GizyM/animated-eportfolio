// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaTimes } from "react-icons/fa";

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

export const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const openModal = () => {
    setIsOpen(true);
    setFormStatus({
      submitting: false,
      success: false,
      error: false,
      message: "",
    });
  };

  const closeModal = () => {
    if (formStatus.submitting) return;
    setIsOpen(false);
  };

   useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, formStatus.submitting]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message:
          "Failed to send message. Please email me directly at michelgizy@yahoo.com if error continues.",
      });
    }
  };

  return (
    <>
   <motion.button
        type="button"
        className="mail-button"
        onClick={openModal}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaEnvelope />
      </motion.button>

       <AnimatePresence>
        {isOpen && (
          <motion.div
            className="contact-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              // close when clicking outside the modal panel
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <motion.div
              ref={modalRef}
              className="contact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.18 }}
            >
              <div className="contact-modal-header">
                <motion.h2
                  id="contact-modal-title"
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                >
                  Get in Touch
                </motion.h2>

                <motion.button
                  type="button"
                  className="contact-modal-close"
                  onClick={closeModal}
                  aria-label="Close contact form"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formStatus.submitting}
                >
                  <FaTimes aria-hidden="true" />
                </motion.button>
              </div>

              <motion.form className="contact-form" onSubmit={handleSubmit}>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name..."
                  required
                  value={formData.name}
                  whileFocus={{ scale: 1.02 }}
                  onChange={handleInputChange}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email..."
                  required
                  value={formData.email}
                  whileFocus={{ scale: 1.02 }}
                  onChange={handleInputChange}
                />
                <motion.textarea
                  name="message"
                  placeholder="Your Message..."
                  required
                  value={formData.message}
                  whileFocus={{ scale: 1.02 }}
                  onChange={handleInputChange}
                />

                <motion.button
                  className="submit-btn"
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting
                    ? "Sending..."
                    : "Send it to me and enjoy a good cup of coffee ☕"}
                </motion.button>

                {formStatus.message && (
                  <motion.div
                    className={`form-status ${
                      formStatus.success ? "success" : "error"
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="contact"
        className="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.div className="contact-content" variants={fadeInUp}>
          <motion.form className="contact-form" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name..."
              required
              whileFocus={{ scale: 1.02 }}
              onChange={handleInputChange}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email..."
              required
              whileFocus={{ scale: 1.02 }}
              onChange={handleInputChange}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message..."
              required
              whileFocus={{ scale: 1.02 }}
              onChange={handleInputChange}
            />

            <motion.button
              className="submit-btn"
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={formStatus.submitting}
            >
              {formStatus.submitting
                ? "Sending..."
                : "Send it to me and enjoy a good cup of coffee ☕"}
            </motion.button>

            {formStatus.message && (
              <motion.div
                className={`form-status ${
                  formStatus.success ? "success" : "error"
                } `}
              >
                {formStatus.message}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </motion.section>
    </>
  );
};
