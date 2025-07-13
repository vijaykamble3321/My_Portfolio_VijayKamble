import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCode, FaAward } from 'react-icons/fa';
import resumePDF from '../assets/Vijay Kamble1 Resume.pdf'; 

const Resume = () => {
  const resumeData = {
    name: "Vijay Kamble",
    title: "Full Stack Developer (MERN)",
    contact: {
      email: "vijaykamble3321@gmail.com",
      phone: "+91 8483022465",
      location: "Kolhapur, India"
    },
    summary: "Motivated computer science graduate with proficiency in web technologies seeking a challenging position to leverage my coding skills, problem-solving abilities, and passion for innovative web development to contribute effectively to a dynamic team",
    education: [
      {
        degree: "Bachelor of Computer Application (BCA)",
        institution: "Annasaheb Dange College, Hatkanangle",
        year: "2021 - 2023"
      },
      {
        degree: "Master of Computer Application (MCA)",
        institution: "Sanjay Ghodawat University",
        year: "2023 - 2025 ",
        details: "Current CGPA: 8.5"
      }
    ],
    experience: [
      {
        position: "Full Stack Developer (MERN)",
        company: "Suyotech Solutions, Kollapur",
        duration: "January 2025 - Present",
        responsibilities: [
          "Developing end-to-end web applications using MERN stack technologies",
          "Designing, implementing, and maintaining scalable APIs",
          "Creating responsive and user-friendly interfaces",
          "Collaborating with cross-functional teams",
          "Utilizing Agile development practices",
          "Managing version control using Git"
        ]
      }
    ],
    skills: {
      technical: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      professional: ["Problem Solving", "Team Collaboration", "Time Management", "Communication"]
    },
    certifications: [
      "MERN Stack Certification - Udemy (2022)",
      "React Developer Certification - Coursera (2021)",
      "JavaScript Algorithms - freeCodeCamp (2020)"
    ]
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Vijay_Kamble_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4"
          >
            My <span className="text-blue-400">Resume</span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and qualifications
          </p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg text-sm sm:text-base"
          >
            <FaDownload className="mr-2" />
            Download Resume (PDF)
          </motion.button>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-gray-700 shadow-lg">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{resumeData.name}</h1>
            <h2 className="text-lg sm:text-xl text-blue-400 mb-3 sm:mb-4">{resumeData.title}</h2>
            <div className="flex flex-col items-center space-y-1 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              <p>{resumeData.contact.email}</p>
              <p className="hidden sm:block">•</p>
              <p>{resumeData.contact.phone}</p>
              <p className="hidden sm:block">•</p>
              <p>{resumeData.contact.location}</p>
            </div>
            <p className="text-gray-300 italic max-w-3xl mx-auto text-sm sm:text-base">
              {resumeData.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-700/50 rounded-lg p-4 sm:p-6"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <FaGraduationCap className="text-xl sm:text-2xl text-blue-400 mr-2 sm:mr-3" />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Education</h3>
              </div>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4 sm:mb-6 last:mb-0">
                  <h4 className="text-base sm:text-lg font-medium text-white">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{edu.institution}</p>
                  <p className="text-blue-400 text-xs sm:text-sm">{edu.year}</p>
                  {edu.details && <p className="text-gray-300 text-xs sm:text-sm mt-1">{edu.details}</p>}
                </div>
              ))}
            </motion.div>

            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-700/50 rounded-lg p-4 sm:p-6"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <FaBriefcase className="text-xl sm:text-2xl text-blue-400 mr-2 sm:mr-3" />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Experience</h3>
              </div>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-4 sm:mb-6 last:mb-0">
                  <h4 className="text-base sm:text-lg font-medium text-white">{exp.position}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{exp.company}</p>
                  <p className="text-blue-400 text-xs sm:text-sm mb-1 sm:mb-2">{exp.duration}</p>
                  <h5 className="text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">Key Responsibilities:</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs sm:text-sm">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 sm:mt-8 bg-gray-700/50 rounded-lg p-4 sm:p-6"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <FaCode className="text-xl sm:text-2xl text-blue-400 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">Technical</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {resumeData.skills.technical.map((skill, index) => (
                    <span key={index} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">Professional</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {resumeData.skills.professional.map((skill, index) => (
                    <span key={index} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs sm:text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 sm:mt-8 bg-gray-700/50 rounded-lg p-4 sm:p-6"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <FaAward className="text-xl sm:text-2xl text-blue-400 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Certifications</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs sm:text-sm">
              {resumeData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;