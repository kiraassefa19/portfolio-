"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import {
  BiLogoSpringBoot,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoFlutter,
} from "react-icons/bi";
import Image from "next/image";
import images from "@/app/imges";
import { MdEmail } from "react-icons/md";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem("darkMode", !darkMode ? "true" : "false");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center p-6 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800"
      }`}
    >
      {/* Dark Mode Toggle */}
      <div onClick={toggleTheme} className="flex  top-4 right-4 p-2 fixed ">
        <button
          className="flex items-center justify-center p-2 fixed top-4 right-4 rounded-full  transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <BsFillSunFill size={24} color="gray" />
          ) : (
            <BsFillMoonFill size={24} color="gray" />
          )}
        </button>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full text-center py-12">
        <motion.h1
          className="text-5xl font-bold md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kirubel Shimeles
        </motion.h1>

        <motion.h2
          className="mt-4 text-2xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Backend,",
              2000,
              "Frontend And",
              2000,
              "Mobile App Devloper.",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-4 max-w-4xl mx-auto text-lg text-left text-gray-500 dark:text-gray-500"
        >
          As a proactive learner, I continuously update my skills and knowledge
          by exploring new frameworks, development kits, and programming
          languages. With hands-on experience in backend and frontend
          development, I am well-equipped to contribute to innovative projects.
          A collaborative team player with strong problem-solving skills, I am
          dedicated to delivering high-quality solutions while adapting to new
          technologies and development methodologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-8 flex justify-center space-x-6"
        >
          <a
            href="https://linkedin.com/in/kirubel-assefa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/kiraassefa19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-600 transition"
          >
            <MdEmail size={30} />
          </a>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* About Section */}
        <section className="py-16 max-w-4xl mx-auto">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-semibold">About Me</h2>
          </motion.div>

          <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
            <motion.div
              className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-2 border-gray-500 dark:border-gray-300 dark:bg-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images.pic2}
                alt="My Profile"
                width={128}
                height={128}
                className="py-5"
              />
            </motion.div>

            <motion.div
              className="text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Kifiya Financial Technology
              </h3>
              <ul className="list-disc pl-5">
                <li>Intern</li>
              </ul>
              <p className="mt-4 max-w-4xl mx-auto text-lg text-left text-gray-500 dark:text-gray-500">
                I was there as an intern for 3 months and worked on Spring Boot
                and React.js. During my internship, I collaborated with the
                backend developer, Mr. Hassen, During my internship, Mr. Hassen
                provided guidance and mentorship, particularly in the area of
                Spring Boot and helped me to develop projects. I was responsible
                for creating the frontend using React.js and React Native. I
                expanded my knowledge by reading documentation and watching
                tutorials to enhance my skills in frontend development.
              </p>
            </motion.div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
            <motion.div
              className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-2 border-gray-500 dark:border-gray-300 dark:bg-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images.pic2}
                alt="My Profile"
                width={128}
                height={128}
                className="py-5"
              />
            </motion.div>

            <motion.div
              className="text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Kifiya Financial Technology
              </h3>
              <ul className="list-disc pl-5">
                <li>Software Enginner</li>
              </ul>
              <p className="mt-4 max-w-4xl mx-auto text-lg text-left text-gray-500 dark:text-gray-500">
                I began my journey as an employee at Kifiya in August 2023,
                taking on the role of a software enginner. Since then, I&apos;ve
                been an integral part of the company&apos;s development team,
                actively contributing to various projects. Working alongside a
                talented group of professionals, I&apos;ve had the opportunity
                to tackle diverse challenges in software development. My
                responsibilities have spanned from creating user-friendly
                front-end interfaces to developing robust back-end systems.
                It&apos;s been a rewarding experience, and I&apos;m excited to
                continue making valuable contributions to Kifiya&apos;s mission.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-semibold">Skills</h2>
          </motion.div>
          <div
            className={`mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto `}
          >
            {/* Skill Cards */}
            {[
              {
                icon: <BiLogoSpringBoot color="green" />,
                label: "Spring Boot",
              },
              { icon: <BiLogoCss3 color="#264de4" />, label: "CSS3" },
              {
                icon: <BiLogoJavascript color="#f7df1e" />,
                label: "JavaScript",
              },
              { icon: <BiLogoReact color="#61dafb" />, label: "React" },
              { icon: <BiLogoHtml5 color="#e34f26" />, label: "HTML5" },
              { icon: <BiLogoFlutter color="#02569b" />, label: "Flutter" },
            ].map(({ icon, label }) => (
              <motion.div
                key={label}
                className=" rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center mb-2 text-4xl ">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-white dark:text-gray-400">
                  {label}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-semibold">Projects</h2>
          </motion.div>

          <div className="mt-8 grid justify-around gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {/* Project Cards */}
            {[
              {
                title: "Information Technology Support Management (ITSM)",
                description:
                  "A web application that allows companies to track and manage tasks efficiently.",
                link: "https://github.com/kiraassefa19/ITSM.git",
              },
              {
                title: "Chat Messenger",
                description: "A social media web that allows users to chat.",
                link: "https://github.com/kiraassefa19/chat_messenger.git",
              },
              {
                title: "Budget Planner",
                description:
                  "Enables users to track expenses, monitor spending, and create financial reports in real time. It also allows users to create budgets and forecast future spending.",
                link: "https://github.com/kiraassefa19/budget-planner.git",
              },
            ].map(({ title, description, link }) => (
              <motion.div
                key={title}
                className=" rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold  text-gray-200 dark:text-gray-600">
                  {title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">
                  {description}
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-500 hover:text-blue-700"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        className="relative w-full py-6 text-gray-200 dark:text-gray-600 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center space-x-4 mb-4">
          <motion.a
            href="https://linkedin.com/in/kirubel-assefa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/kiraassefa19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdEmail size={24} />
          </motion.a>
        </div>
        <motion.p
          className="text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Kirubel Shimeles. All rights
          reserved.
        </motion.p>
      </motion.footer>
    </div>
  );
};

export default Home;
