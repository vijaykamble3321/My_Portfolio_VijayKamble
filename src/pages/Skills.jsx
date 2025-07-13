import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase, FaTools, 
  FaBrain, FaPeopleArrows, FaHtml5, 
  FaCss3Alt, FaJs, FaPython, 
  FaGitAlt, FaGithub, 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiFirebase, SiMongodb, 
  SiMysql, SiPostman, SiVercel, SiNetlify 
} from 'react-icons/si';
import { BsLightningCharge } from 'react-icons/bs';

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skillCategories = [
    {
      icon: <FaBrain className="text-blue-400 text-3xl" />,
      title: 'Technical Skills',
      skills: [
        { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', level: 90, icon: <FaJs className="text-yellow-400" /> },
      ]
    },
    {
      icon: <FaReact className="text-blue-400 text-3xl" />,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 97, icon: <FaReact className="text-blue-400" /> },
        { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Responsive Design', level: 95, icon: <FaCss3Alt className="text-blue-500" /> }
      ]
    },
    {
      icon: <FaNodeJs className="text-blue-400 text-3xl" />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js/Express', level: 95, icon: <FaNodeJs className="text-green-500" /> },
        { name: 'RESTful APIs', level: 80, icon: <SiPostman className="text-orange-500" /> },
        { name: 'JWT Auth', level: 85, icon: <FaDatabase className="text-yellow-500" /> },
      ]
    },
    {
      icon: <FaDatabase className="text-blue-400 text-3xl" />,
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 80, icon: <SiMongodb className="text-green-500" /> },
      ]
    },
    {
      icon: <FaTools className="text-blue-400 text-3xl" />,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 95, icon: <FaGithub className="text-gray-100" /> },
        { name: 'VS Code', level: 100, icon: <FaTools className="text-blue-500" /> },
        { name: 'Postman', level: 95, icon: <SiPostman className="text-orange-500" /> },
      ]
    },
    {
      icon: <FaPeopleArrows className="text-blue-400 text-3xl" />,
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 80, icon: <FaBrain className="text-purple-400" /> },
        { name: 'Teamwork', level: 95, icon: <FaPeopleArrows className="text-green-400" /> },
        { name: 'Communication', level: 80, icon: <FaPeopleArrows className="text-blue-400" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4"
          >
            My <span className="text-blue-400">Skills</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2"
          >
            Technologies and abilities I've mastered through years of development
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-gray-700 shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gray-700 rounded-lg mr-3 sm:mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <span className="mr-2 text-sm sm:text-base">{skill.icon}</span>
                        <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-medium text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 sm:h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: index * 0.1 + skillIndex * 0.05,
                          type: 'spring'
                        }}
                        className="h-2 sm:h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;