import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, FaCode, FaLaptopCode, FaMobileAlt, 
  FaPalette, FaServer, FaDatabase, FaReact, 
  FaLink, FaNodeJs, FaCss3Alt, FaGitAlt,
  FaAws, FaDocker, FaFigma
} from 'react-icons/fa';
import { SiRedux, SiTypescript, SiJest, SiNextdotjs } from 'react-icons/si';
import lap1 from '../assets/lap1.jpg';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer (MERN)',
      type: 'fullstack',
      company: 'Suyotech Solutions',
      location: 'Kolhapur',
      period: 'January 2025 - Present',
      website: 'https://suyotech.com/',
      image: lap1,
      icon: <FaServer className="text-blue-400 text-xl" />,
      responsibilities: [
        'Developed end-to-end web applications using MERN stack',
        'Implemented RESTful APIs with Express.js',
        'Created responsive UIs with React and Tailwind CSS',
        'Integrated authentication using JWT',
        'Optimized performance with pagination and caching',
        'Built admin dashboards and user management systems'
      ],
      skills: [
        { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', icon: <FaServer className="text-gray-300" /> },
        { name: 'MongoDB', icon: <FaDatabase className="text-green-400" /> },
        { name: 'JWT', icon: <FaCode className="text-yellow-500" /> },
        { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-400" /> },
      
        { name: 'Framer Motion', icon: <FaCode className="text-pink-500" /> },
        { name: 'REST APIs', icon: <FaServer className="text-blue-300" /> },
        { name: 'Mongoose', icon: <FaDatabase className="text-red-500" /> }
      ],
      projects: [
        'Food Donation System',
        'Healthcare Management',
        'Job Portal',
        'Task Manager'
      ],
      achievements: [
        'Increased performance by 40%',
        'Reduced server costs by 25%',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      id: 2,
      role: 'Frontend Developer ',
      type: 'frontend',
      company: 'Suyotech Solution Kolhapur',
      location: 'Remote',
      
      website: 'https://techinnovators.example.com',
      icon: <FaReact className="text-blue-400 text-xl" />,
      responsibilities: [
        'Developed responsive UIs with React.js',
        'Collaborated with UI/UX designers',
        'Optimized components for performance',
        'Integrated with backend APIs',
        'Implemented state management'
      ],
      skills: [
        { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
    
       
        
        { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-400" /> },
       
      ],
      projects: [
        'E-commerce Dashboard',
        'Customer Portal',
        'Admin Analytics'
      ],
      achievements: [
        'Improved page speed by 35%',
        'Reduced bundle size by 28%',
        'Achieved 95% test coverage'
      ]
    },
    {
      id: 3,
      role: 'Backend Developer ',
      type: 'backend',
      company: 'API Masters',
      location: 'Remote',
  
      website: 'https://apimasters.example.com',
      icon: <FaServer className="text-green-400 text-xl" />,
      responsibilities: [
        'Designed and implemented RESTful APIs',
        'Optimized database queries',
        'Implemented authentication systems',
        'Created documentation for API endpoints',
        'Set up caching mechanisms'
      ],
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', icon: <FaServer className="text-gray-300" /> },
        { name: 'MongoDB', icon: <FaDatabase className="text-green-400" /> },
       
      ],
      projects: [
        'Payment Gateway API',
        'User Authentication Service',
        'Data Analytics Backend'
      ],
      achievements: [
        'Reduced API response time by 50%',
        'Increased throughput by 300%',
        'Achieved 99.9% uptime'
      ]
    }
  ];

  const developmentPractices = [
    {
      title: "Code Quality",
      description: "Clean code principles, SOLID architecture, and code reviews",
      icon: <FaCode className="text-green-400 text-2xl" />,
      animation: {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }
    },
    {
      title: "Testing",
      description: "Unit, integration, and end-to-end tests",
      icon: <FaDatabase className="text-purple-400 text-2xl" />,
      animation: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }
    },
    {
      title: "DevOps",
      description: "CI/CD pipelines and cloud deployment",
      icon: <FaServer className="text-blue-400 text-2xl" />,
      animation: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
      }
    },
    {
      title: "UI/UX Focus",
      description: "Accessible, responsive interfaces",
      icon: <FaPalette className="text-yellow-400 text-2xl" />,
      animation: {
        hidden: { opacity: 0, rotate: -5 },
        visible: { opacity: 1, rotate: 0 }
      }
    }
  ];

  const roleColors = {
    frontend: 'from-blue-400 to-cyan-400',
    backend: 'from-green-400 to-emerald-400',
    fullstack: 'from-purple-400 to-indigo-400'
  };

  const roleIcons = {
    frontend: <FaLaptopCode className="text-blue-400" />,
    backend: <FaServer className="text-green-400" />,
    fullstack: <FaCode className="text-purple-400" />
  };

  return (
    <section id="experience" className="py-10 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Professional Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto px-2">
            My work experience across frontend, backend, and fullstack roles
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute left-0 top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 border-2 border-blue-500 flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300 z-10">
                {roleIcons[exp.type]}
              </div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className={`ml-8 bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden`}
              >
                {/* Role type indicator */}
                <div className={`absolute top-0 right-0 px-2 py-1 text-xs font-semibold bg-gradient-to-r ${roleColors[exp.type]} rounded-bl-lg`}>
                  {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                      <div>
                        <motion.h3 
                          whileHover={{ x: 5 }}
                          className="text-lg sm:text-xl font-bold text-blue-400"
                        >
                          {exp.role}
                        </motion.h3>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <h4 className="text-base sm:text-lg font-semibold text-gray-200">
                            {exp.company}, {exp.location}
                          </h4>
                          {exp.website && (
                            <motion.a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-400 transition-colors"
                              aria-label={`Visit ${exp.company} website`}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaLink className="text-xs sm:text-sm" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-0 bg-gray-700/50 px-2 py-1 rounded-full"
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    
                    <div className="mb-4 sm:mb-6">
                      <motion.h5 
                        initial={{ x: -10 }}
                        whileInView={{ x: 0 }}
                        className="text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 flex items-center"
                      >
                        <FaCode className="mr-1 sm:mr-2 text-blue-400 text-sm sm:text-base" />
                        Key Responsibilities:
                      </motion.h5>
                      <ul className="space-y-1 sm:space-y-2 pl-4 sm:pl-5">
                        {exp.responsibilities.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-blue-400 mr-1 sm:mr-2 mt-0.5 sm:mt-1 text-xs sm:text-sm">▹</span>
                            <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4 sm:mb-6">
                      <motion.h5 
                        initial={{ x: -10 }}
                        whileInView={{ x: 0 }}
                        className="text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 flex items-center"
                      >
                        <FaLaptopCode className="mr-1 sm:mr-2 text-purple-400 text-sm sm:text-base" />
                        Projects:
                      </motion.h5>
                      <div className="flex flex-wrap gap-1 sm:gap-2 pl-4 sm:pl-5">
                        {exp.projects.map((project) => (
                          <motion.span
                            key={project}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            viewport={{ once: true }}
                            className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm text-gray-200 border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-all"
                          >
                            {project}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <motion.h5 
                        initial={{ x: -10 }}
                        whileInView={{ x: 0 }}
                        className="text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 flex items-center"
                      >
                        <FaMobileAlt className="mr-1 sm:mr-2 text-green-400 text-sm sm:text-base" />
                        Technologies:
                      </motion.h5>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            viewport={{ once: true }}
                            className="flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-700 rounded-full text-xs sm:text-sm text-gray-200 border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all"
                          >
                            <span className="mr-1">{skill.icon}</span>
                            {skill.name}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {exp.image && (
                    <motion.div 
                      className="w-full md:w-1/3 flex items-center justify-center mt-4 md:mt-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="overflow-hidden rounded-lg border border-gray-600"
                      >
                        <img 
                          src={exp.image} 
                          alt={`${exp.company} workspace`}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {exp.achievements && (
                  <motion.div 
                    className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 flex items-center">
                      <FaBriefcase className="mr-1 sm:mr-2 text-yellow-400 text-sm sm:text-base" />
                      Achievements:
                    </h5>
                    <ul className="space-y-1 sm:space-y-2 pl-4 sm:pl-5">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-yellow-400 mr-1 sm:mr-2 mt-0.5 sm:mt-1 text-xs sm:text-sm">★</span>
                          <span className="text-xs sm:text-sm text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
              
              {index !== experiences.length - 1 && (
                <motion.div 
                  className="absolute left-0 top-8 bottom-0 w-0.5 bg-gray-700 group-hover:bg-blue-500 transition-all duration-300 ml-3 sm:ml-4"
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Development Practices
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {developmentPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={practice.animation}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  backgroundColor: 'rgba(30, 41, 59, 0.7)',
                  borderColor: '#3b82f6'
                }}
                className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-3 sm:mb-4">
                    {practice.icon}
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-blue-400">{practice.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-300">{practice.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;