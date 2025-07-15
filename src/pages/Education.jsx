import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';

// Sample university images (replace with actual images)
import university1 from '../assets/collegesgu.JPG';
import university2 from '../assets/ShivajiUniversity.JPG';
import university3 from '../assets/ShivajiUniversity.JPG';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Sanjay Ghodawat University",
      period: "2023 - 2025",
      details: "CGPA: 8.5",
      link: "https://www.sanjayghodawatuniversity.ac.in/",
      image: university1,
      achievements: [
        "Completed with advanced knowledge in Software Development, Full-Stack Web Technologies,",
        "and Database Management, enhancing expertise in building scalable applications."
      ]
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Annasahab Dange College",
      period: "2021 - 2023",
      details: "First Class with Distinction",
      link: "https://dangecollege.edu.in/",
      image: university2,
      achievements: [
        " Completed with a strong foundation in",
        "Programming, Database Management, and Web Development"
      ]
    },
    {
      degree: "12th Science (HSC)",
      institution: "Maharashtra State Board",
      period: "2020 - 2021",
      
      link: "https://mahahsscboard.in/",
      image: university3,
      achievements: [
        "12th Science (HSC) – Completed with a strong foundation",
        "building analytical & problem-solving skills"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 15px 30px -5px rgba(139, 92, 246, 0.4)"
    }
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center relative">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -left-8 -top-4 w-16 h-16 bg-purple-500/20 rounded-full"
            />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 relative z-10">
              <FaGraduationCap className="inline mr-4 mb-1" />
              Education Journey
            </h2>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -right-6 -bottom-4 w-12 h-12 bg-blue-500/20 rounded-full"
            />
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mt-4">
            My academic path in computer science and technology that shaped my career
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative group overflow-hidden rounded-2xl shadow-2xl h-96 bg-gray-800"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90 z-10"></div>
              <img 
                src={edu.image} 
                alt={edu.institution}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-70"
              />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
                <div>
                  {/* Degree Badge */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-lg"
                  >
                    <IoIosSchool className="mr-1" /> {index === 0 ? 'Completed' : 'Completed'}
                  </motion.div>
                  
                  {/* Institution Logo Placeholder */}
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg mb-4 flex items-center justify-center">
                    <FaGraduationCap className="text-2xl text-purple-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  
                  <a 
                    href={edu.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-300 hover:text-white transition-colors duration-300 mb-2 flex items-center"
                  >
                    {edu.institution}
                    <FaExternalLinkAlt className="ml-2 text-xs" />
                  </a>
                  
                  <div className="flex items-center text-gray-300 mb-3">
                    <span className="bg-gray-700/50 px-2 py-1 rounded text-sm">{edu.period}</span>
                    {edu.details && (
                      <span className="ml-3 bg-purple-600/20 px-2 py-1 rounded text-sm font-medium flex items-center">
                        <FaAward className="mr-1 text-yellow-300" /> {edu.details}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Achievements List */}
                <div className="mt-4">
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-300 mr-2">✓</span>
                        <span className="text-gray-200 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Connector (for desktop) */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-3/4"></div>
          {educationData.map((_, index) => (
            <div 
              key={index}
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{ 
                marginLeft: `${(index - 1) * 33.33}%`,
                width: '33.33%'
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="w-4 h-4 bg-purple-500 rounded-full mx-auto -mt-1.5 shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;