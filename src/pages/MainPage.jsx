import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUserTie,
  FaFileAlt,
  FaEnvelope,
  FaLaptopCode,
  FaProjectDiagram,
  FaBars,
  FaTimes,
  FaLink,
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import vk3 from "../assets/vk3.jpg";

const MainPage = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const roles = [
    "Web Developer",
    "Frontend Specialist",
    "Backend Developer",
    "UI/UX Designer",
    "React Expert",
    "Nodejs Expert",
  ];

  // Animation variants
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { 
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3 }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const navItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.3
      }
    })
  };

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 120;
    const transitionDelay = isDeleting ? 800 : 1500;

    const handleTyping = () => {
      const fullRole = roles[roleIndex];

      if (isDeleting) {
        setCurrentRole(fullRole.substring(0, currentRole.length - 1));
      } else {
        setCurrentRole(fullRole.substring(0, currentRole.length + 1));
      }

      if (!isDeleting && currentRole === fullRole) {
        setTimeout(() => setIsDeleting(true), transitionDelay);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "skills", label: "Skills", icon: <HiOutlineLightBulb /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "education", label: "Education", icon: <FaUserTie /> },
    { id: "resume", label: "Resume", icon: <FaFileAlt /> },
    { id: "experience", label: "Experience", icon: <FaUserTie /> },
    { id: "sociallink", label: "SocialLinks", icon: <FaLink /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (id) => {
    setActiveNav(id);
    scrollToSection(id);
  };

  // Update active nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && 
            scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveNav(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
      {/* Glowing background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden fixed top-6 right-6 z-50 p-3 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <FaTimes className="text-xl text-white" />
        ) : (
          <FaBars className="text-xl text-white" />
        )}
      </motion.button>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="fixed w-full py-4 px-4 sm:px-6 flex justify-between items-center z-40 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          <FaLaptopCode className="inline mr-2" />
          PORTFOLIO
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2 sm:space-x-4">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{
                scale: 1.1,
                color: "#60a5fa",
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2 rounded-lg font-medium text-sm sm:text-lg transition-all flex items-center ${
                activeNav === item.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-700/50"
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="mr-1 sm:mr-2">{item.icon}</span>
              <span>{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation - Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0  z-40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Drawer */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-gray-900/95 backdrop-blur-lg z-50 shadow-2xl border-l border-gray-800 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    <FaLaptopCode className="inline mr-2" />
                    PORTFOLIO
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-800"
                  >
                    <FaTimes className="text-xl text-gray-400" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.id}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      custom={i}
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(59, 130, 246, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium text-lg transition-all flex items-center ${
                        activeNav === item.id
                          ? "bg-blue-600/30 text-white border-l-4 border-blue-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <span className={`mr-3 ${activeNav === item.id ? "text-blue-400" : "text-gray-400"}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Footer in mobile menu */}
                <div className="mt-12 pt-6 border-t border-gray-800">
                  <div className="text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Vijay Kamble</p>
                    <p className="mt-1">Web Developer Portfolio</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="pt-24">
        {/* Home Section */}
        <section
          id="home"
          className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-16 py-12 relative z-10 min-h-[80vh] px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left max-w-2xl order-2 lg:order-1"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-blue-400"
              whileHover={{ scale: 1.01 }}
            >
              Hello, It's Me
            </motion.h2>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 leading-tight"
            >
              Vijay Kamble
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="h-14 sm:h-16 md:h-20 flex items-center justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-medium">
                And I'm a <span className="text-blue-400">{currentRole}</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="ml-1 text-blue-400"
                >
                  █
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 sm:mt-8 text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8 sm:mb-10"
            >
              I'm a Web Developer with extensive experience for over 1 year. My
              expertise is to create websites, frontend designs, responsive
              interfaces, and many more... A passionate Frontend Developer and
              MERN Stack Engineer based in India. I specialize in building modern,
              responsive, and interactive web applications using React, Tailwind
              CSS, Express.js, Node.js, and MongoDB.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-base sm:text-lg shadow-lg overflow-hidden group"
                onClick={() => handleNavClick("skills")}
              >
                More About Me
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-blue-400 text-blue-400 hover:text-white rounded-lg font-semibold text-base sm:text-lg relative overflow-hidden group"
                onClick={() => handleNavClick("contact")}
              >
                <span className="relative z-10">Hire Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative mt-8 sm:mt-12 lg:mt-0 order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <motion.div
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={vk3}
                alt="Vijay Kamble"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;