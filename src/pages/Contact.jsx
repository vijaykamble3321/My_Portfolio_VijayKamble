import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaPaperPlane, 
  FaSpinner, 
  FaCheck, 
  FaTimes, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

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
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    }
  };

  const cardHover = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const buttonHover = {
    rest: { 
      scale: 1,
      boxShadow: "0px 4px 8px rgba(59, 130, 246, 0.2)"
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400
      }
    },
    tap: { 
      scale: 0.98,
      boxShadow: "0px 2px 5px rgba(59, 130, 246, 0.2)"
    }
  };

  const successVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        ease: "easeIn"
      }
    }
  };

  const socialIcon = {
    rest: { 
      scale: 1,
      y: 0
    },
    hover: {
      scale: 1.2,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 500
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex items-center"
      id="contact"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }}
          className="mb-12 text-center"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            whileHover={{ scale: 1.02 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            Have a project in mind or want to chat? Reach out below or connect with me on social media.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                delay: 0.2
              }
            }}
            className="w-full lg:w-2/5"
          >
            <motion.div 
              className="bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-700 backdrop-blur-sm"
              whileHover="hover"
              variants={cardHover}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2"
                variants={itemVariants}
              >
                <motion.span 
                  className="inline-block bg-blue-500/20 p-2 rounded-lg text-blue-400"
                  whileHover={{ rotate: 15 }}
                >
                  <FaPaperPlane />
                </motion.span>
                Contact Information
              </motion.h3>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-4 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 sm:p-3 bg-blue-900/20 rounded-lg text-blue-400">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Location</h4>
                    <p className="text-gray-400 text-sm">Kolhapur, Maharashtra</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="p-2 sm:p-3 bg-purple-900/20 rounded-lg text-purple-400">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:Vijaykamble3321@gmail.com" 
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm break-all"
                    >
                      Vijaykamble3321@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="p-2 sm:p-3 bg-green-900/20 rounded-lg text-green-400">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                    <a 
                      href="tel:+919876543210" 
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      +91 9876543210
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div 
                className="mt-8 pt-6 border-t border-gray-700"
                variants={itemVariants}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-sm font-medium mb-4 text-gray-400">Connect with me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-600/20 transition-colors"
                    variants={socialIcon}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaLinkedin className="text-blue-400 text-xl" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/20 transition-colors"
                    variants={socialIcon}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaGithub className="text-gray-300 text-xl" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div
                  key="success"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700"
                >
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ 
                        scale: 1, 
                        rotate: 0,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }
                      }}
                      className="mx-auto mb-6 w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center"
                    >
                      <FaCheck className="text-green-400 text-3xl" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold mb-3"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        transition: { delay: 0.2 }
                      }}
                    >
                      Message Sent!
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 mb-6"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        transition: { delay: 0.3 }
                      }}
                    >
                      Thank you for reaching out. I'll get back to you soon.
                    </motion.p>
                    <motion.button
                      variants={buttonHover}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setIsSent(false)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg"
                    >
                      Send Another Message
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={form}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700"
                  onSubmit={sendEmail}
                >
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold mb-2"
                    variants={itemVariants}
                  >
                    Send Me a Message
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 text-sm sm:text-base mb-6"
                    variants={itemVariants}
                  >
                    Fill out the form below and I'll respond as soon as possible.
                  </motion.p>
                  
                  {error && (
                    <motion.div
                      variants={itemVariants}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-900/30 border border-red-700 text-red-300 p-3 rounded-lg flex items-start gap-3 mb-6"
                    >
                      <div className="p-1 bg-red-900/50 rounded-full">
                        <FaTimes className="text-red-400" />
                      </div>
                      <div>
                        <p className="font-semibold">Error sending message</p>
                        <p className="text-sm">{error}</p>
                      </div>
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants} className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="email"
                        id="email"
                        name="from_email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Hello! I'd like to discuss..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                        required
                      ></textarea>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      disabled={isSending}
                      variants={buttonHover}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <FaSpinner />
                          </motion.div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;