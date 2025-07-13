import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'GitHub',
      url: 'https://github.com/vijaykamble3321',
      icon: <FaGithub />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vijaykamble3321',
      icon: <FaLinkedin />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Gmail',
      url: 'https://www.gmail.com/vijaykamble3321@gmail.com',
      icon: <HiMail />,
      color: 'hover:text-red-400'
    },
   
  ];

  return (
    <section id="sociallink" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Connect With Me
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-4xl md:text-5xl text-gray-400 transition-colors duration-300 ${platform.color} flex flex-col items-center`}
              aria-label={platform.name}
              title={platform.name}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="icon-container">
                {platform.icon}
              </div>
              <span className="text-sm mt-2">{platform.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;