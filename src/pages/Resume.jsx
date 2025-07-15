import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import resumePDF from '../assets/Vijay Kamble1 Resume.pdf';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Vijay_Kamble_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.4)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: { scale: 0.95 }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
      <motion.div 
        className="max-w-4xl mx-auto w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: 0.2
            }}
          >
            Download My <span className="text-blue-400">Resume</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Get a copy of my professional resume in PDF format
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <motion.div
            className="mb-8"
            variants={pulseVariants}
            animate="pulse"
          >
            <FaFilePdf className="text-6xl text-red-500" />
          </motion.div>

          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={handleDownload}
            className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl text-white font-bold text-lg shadow-xl relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            />
            <FaDownload className="mr-3 text-xl" />
            Download Resume PDF
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-1 bg-blue-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            />
          </motion.button>

          <motion.p 
            className="mt-4 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            File size: ~2MB • Updated: July 2024
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-gray-400 text-sm">
            Need a different format? <span className="text-blue-400 cursor-pointer">Contact me</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;