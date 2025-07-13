import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaLaptopCode, FaMobileAlt, FaPalette, FaServer, FaDatabase, FaReact, FaLink } from 'react-icons/fa';
import lap1 from '../assets/lap1.jpg';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer (MERN)',
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
        'React.js', 'Node.js', 'Express.js', 'MongoDB',
        'JWT', 'Tailwind CSS', 'Shadcn/UI',
        'Framer Motion', 'REST APIs', 'Mongoose'
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
      role: 'Frontend Developer Intern',
      company: 'Tech Innovators Inc.',
      location: 'Remote',
      period: 'June 2024 - December 2024',
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
        'React.js', 'Next.js', 'TypeScript', 
        'Redux', 'Tailwind CSS', 'Jest'
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
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: 'January 2023 - May 2024',
      icon: <FaLaptopCode className="text-blue-400 text-xl" />,
      responsibilities: [
        'Developed websites for small businesses',
        'Implemented SEO best practices',
        'Created custom WordPress themes',
        'Optimized for performance'
      ],
      skills: [
        'HTML5', 'CSS3', 'JavaScript', 
        'WordPress', 'SEO', 'Responsive Design'
      ],
      projects: [
        'Restaurant Website',
        'Photographer Portfolio',
        'Non-Profit Site'
      ],
      achievements: [
        'Delivered 15+ projects',
        'Improved page speed scores',
        'Increased organic traffic'
      ]
    }
  ];

  const developmentPractices = [
    {
      title: "Code Quality",
      description: "Clean code principles, SOLID architecture, and code reviews",
      icon: <FaCode className="text-green-400 text-2xl" />
    },
    {
      title: "Testing",
      description: "Unit, integration, and end-to-end tests",
      icon: <FaDatabase className="text-purple-400 text-2xl" />
    },
    {
      title: "DevOps",
      description: "CI/CD pipelines and cloud deployment",
      icon: <FaServer className="text-blue-400 text-2xl" />
    },
    {
      title: "UI/UX Focus",
      description: "Accessible, responsive interfaces",
      icon: <FaPalette className="text-yellow-400 text-2xl" />
    }
  ];

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
            My work experience and contributions to various projects.
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
                {exp.icon}
              </div>
              
              <div className="ml-8 bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-400">{exp.role}</h3>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <h4 className="text-base sm:text-lg font-semibold text-gray-200">
                            {exp.company}, {exp.location}
                          </h4>
                          {exp.website && (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-400 transition-colors"
                              aria-label={`Visit ${exp.company} website`}
                            >
                              <FaLink className="text-xs sm:text-sm" />
                            </a>
                          )}
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-0 bg-gray-700/50 px-2 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="mb-4 sm:mb-6">
                      <h5 className="text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 flex items-center">
                        <FaCode className="mr-1 sm:mr-2 text-blue-400 text-sm sm:text-base" />
                        Key Responsibilities:
                      </h5>
                      <ul className="space-y-1 sm:space-y-2 pl-4 sm:pl-5">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-400 mr-1 sm:mr-2 mt-0.5 sm:mt-1 text-xs sm:text-sm">▹</span>
                            <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4 sm:mb-6">
                      <h5 className="text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 flex items-center">
                        <FaLaptopCode className="mr-1 sm:mr-2 text-purple-400 text-sm sm:text-base" />
                        Projects:
                      </h5>
                      <div className="flex flex-wrap gap-1 sm:gap-2 pl-4 sm:pl-5">
                        {exp.projects.map((project) => (
                          <motion.span
                            key={project}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm text-gray-200 border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-all"
                          >
                            {project}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 flex items-center">
                        <FaMobileAlt className="mr-1 sm:mr-2 text-green-400 text-sm sm:text-base" />
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.1 }}
                            className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-700 rounded-full text-xs sm:text-sm text-gray-200 border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {exp.image && (
                    <div className="w-full md:w-1/3 flex items-center justify-center mt-4 md:mt-0">
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
                    </div>
                  )}
                </div>

                {exp.achievements && (
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700">
                    <h5 className="text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 flex items-center">
                      <FaBriefcase className="mr-1 sm:mr-2 text-yellow-400 text-sm sm:text-base" />
                      Achievements:
                    </h5>
                    <ul className="space-y-1 sm:space-y-2 pl-4 sm:pl-5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-400 mr-1 sm:mr-2 mt-0.5 sm:mt-1 text-xs sm:text-sm">★</span>
                          <span className="text-xs sm:text-sm text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-gray-700 group-hover:bg-blue-500 transition-all duration-300 ml-3 sm:ml-4"></div>
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
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 sm:mb-4">
                    {practice.icon}
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-blue-400">{practice.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-300">{practice.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;