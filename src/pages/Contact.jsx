import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaPaperPlane, 
  FaSpinner, 
  FaCheck, 
  FaTimes, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    emailjs.sendForm(
      'service_0otw43v',
      'template_ivcvkub',
      form.current,
      'yb1dHr8oa0dRreWGc'
    )
    .then((result) => {
      console.log(result.text);
      setIsSent(true);
      form.current.reset();
    })
    .catch((error) => {
      console.error(error.text);
      setError('Failed to send message. Please try again or email me directly.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen py-12 px-4 bg-gray-900 text-gray-100"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Contact Me</h2>
        </motion.div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Info - Mobile First */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-3 bg-blue-900/30 rounded-full text-blue-400">
                    <FaMapMarkerAlt className="text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Location</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Kolhapur, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-3 bg-purple-900/30 rounded-full text-purple-400">
                    <FaEnvelope className="text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:Vijaykamble3321@gmail.com" 
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm break-all"
                    >
                      Vijaykamble3321@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-3 bg-green-900/30 rounded-full text-green-400">
                    <FaPhoneAlt className="text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                    <a 
                      href="tel:+919876543210" 
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                    >
                      +91 9876543210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          {isSent ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full lg:w-3/5 bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20 bg-green-900/30 rounded-full flex items-center justify-center"
                >
                  <FaCheck className="text-green-400 text-2xl sm:text-3xl" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4">Thank you for reaching out. I'll get back to you soon.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSent(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Send Another Message
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              ref={form}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-3/5 bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700"
              onSubmit={sendEmail}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">Have a project in mind or want to chat? Reach out below.</p>
              
              {error && (
                <motion.div
                  variants={itemVariants}
                  className="bg-red-900/30 border border-red-700 text-red-300 p-3 rounded-lg flex items-start gap-2 mb-4 text-sm sm:text-base"
                >
                  <FaTimes className="text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Error sending message</p>
                    <p>{error}</p>
                  </div>
                </motion.div>
              )}

              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 text-sm sm:text-base"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 text-sm sm:text-base"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Hello! I'd like to discuss..."
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 text-sm sm:text-base"
                  required
                ></textarea>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSending ? (
                    <>
                      <FaSpinner className="animate-spin text-sm sm:text-base" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-sm sm:text-base" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;