import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDonate, 
  FaClinicMedical, 
  FaTasks, 
  FaBriefcase,
  FaBook,
  FaHamburger,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      icon: <FaDonate className="text-3xl sm:text-4xl text-green-500" />,
      title: "Food Donation System",
      role: "Full Stack Developer",
      tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
      description: "An end-to-end platform to manage food donations between donors, NGOs, and volunteers.",
      features: [
        "Donor, NGO, and Volunteer roles",
        "Food request & delivery tracking",
        "Admin dashboard with stats",
        "Notifications & status updates"
      ],
      live: "https://react-food-mern.netlify.app/"
    },
    {
      id: 2,
      icon: <FaClinicMedical className="text-3xl sm:text-4xl text-blue-500" />,
      title: "Healthcare Management",
      role: "Full Stack Developer",
      tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
      description: "A role-based system for managing patient-doctor interactions, appointments, and prescriptions.",
      features: [
        "Login, Signup, OTP password reset",
        "Book doctor appointments",
        "Lab test cart & medicine shop",
        "Health articles, order history"
      ],
      live: "#"
    },
    {
      id: 3,
      icon: <FaTasks className="text-3xl sm:text-4xl text-purple-500" />,
      title: "Task Management System",
      role: "Frontend-Focused Full Stack",
      tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
      description: "A modern task tracking tool with live updates and user collaboration.",
      features: [
        "Add/Edit/Delete tasks",
        "Comment system",
        "Status updates (Pending, In Progress, Completed)",
        "Toast notifications and animated UI"
      ],
      live: "#"
    },
    {
      id: 4,
      icon: <FaBriefcase className="text-3xl sm:text-4xl text-yellow-500" />,
      title: "Job Portal Platform",
      role: "Full Stack Developer",
      tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Ant Design",
      description: "A job application platform for employers and users with profile creation and job management.",
      features: [
        "Employer registration & job posting",
        "Job application with resume upload",
        "Profile creation (skills, education, experience)",
        "Card/Table toggle view, status updates"
      ],
      live: "#"
    },
    {
      id: 5,
      icon: <FaBook className="text-3xl sm:text-4xl text-red-500" />,
      title: "Library Management",
      role: "Full Stack Developer",
      tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
      description: "A role-based digital library system with sign-in, OTP reset, and profile management.",
      features: [
        "Admin/User/Doctor role-based layouts",
        "Auth with OTP and token handling",
        "Sidebar navigation",
        "Add/view books (customizable extension)"
      ],
      live: "#"
    },
    {
      id: 6,
      icon: <FaHamburger className="text-3xl sm:text-4xl text-orange-500" />,
      title: "Food Ordering App",
      role: "Frontend Developer",
      tech: "React.js, Tailwind CSS, Framer Motion, Toast, Confetti",
      description: "An attractive, interactive food ordering UI with category filters and cart management.",
      features: [
        "Search, category filter pills",
        "Animated product cards & add-to-cart",
        "Cart sidebar with quantity adjustment",
        "Order summary with confetti success effect"
      ],
      live: "https://react-food-mern.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Here are some of my notable projects showcasing my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-5 sm:p-6 border border-gray-700 shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-gray-700 rounded-lg mr-3 sm:mr-4">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-blue-400 text-sm sm:text-base">{project.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
              
              <div className="mb-3 sm:mb-4">
                <h4 className="text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">Tech Stack:</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{project.tech}</p>
              </div>

              <div className="mb-4 sm:mb-6 flex-grow">
                <h4 className="text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1 text-xs sm:text-sm">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-3 sm:space-x-4 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors text-sm sm:text-base"
                >
                  <FaGithub className="mr-1 sm:mr-2" /> Code
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors text-sm sm:text-base"
                >
                  <FaExternalLinkAlt className="mr-1 sm:mr-2" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;