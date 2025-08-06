"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import ProjectModal from "./components/ProjectModal"
import { projects, navItems, socialLinks, engineIcons } from "./constants"
import {
  FaFolderOpen,
  FaCode,
  FaCogs,
  FaLightbulb,
  FaGamepad,
  FaUsers,
  FaBalanceScale,
  FaChartLine,
  FaPuzzlePiece,
  FaComments,
  FaShieldAlt,
  FaPaintBrush,
  FaFileAlt,
  FaBook,
} from "react-icons/fa"
import "./index.css"

const Section = ({ id, children, backgroundColor }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <motion.section
      id={id}
      ref={ref}
      className="min-h-screen w-full flex flex-col justify-center items-center p-8"
      style={{ backgroundColor, opacity }}
    >
      {children}
    </motion.section>
  )
}

const SocialLink = ({ href, icon: Icon, color, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`text-${color} hover:text-${color === "gray-300" ? "white" : color}-300 transition-colors`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={40} />
  </motion.a>
)

const TipCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-gray-800 rounded-xl p-6 shadow-lg"
    whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-4xl text-blue-400 mb-4" />
    <h3 className="text-xl font-bold text-blue-300 mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/portfolio/cv.pdf"
    link.download = "Jose_Antonio_Romo_Teran_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadArtbook = () => {
    const link = document.createElement("a")
    link.href = "/portfolio/artbook.pdf"
    link.download = "Jose_Antonio_Romo_Teran_Artbook.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full bg-gray-900 text-white">
      <motion.nav
        className="fixed top-0 left-0 right-0 p-4 z-50 bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-lg font-semibold hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <Section id="home" backgroundColor="#1a202c">
        <motion.img
          src="dev.png"
          alt="José Antonio Romo Terán"
          className="w-64 h-64 rounded-full mb-8 object-cover shadow-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-5xl font-bold mb-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          José Antonio Romo Terán
        </motion.h1>
        <motion.div
          className="flex space-x-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((link) => (
            <SocialLink key={link.id} {...link} />
          ))}
        </motion.div>
      </Section>

      <Section id="about" backgroundColor="#2d3748">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Video Game Programming Engineer
        </motion.h2>
        <motion.div
          className="text-xl leading-relaxed max-w-4xl text-center space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            José Antonio Romo Terán was born on March 24, 1999, in Ciudad Valles, San Luis Potosí. In 2021, he began his
            professional training in Video Game Programming Engineering, where he has focused his development on
            creating mechanics and technical gameplay design, standing out for his ability to solve complex problems in
            interactive development.
          </p>
          <p>
            He currently collaborates on a project within ATTA Studio, where he continues to strengthen his technical
            and creative profile in the field of video game development.
          </p>
          <p>
            Since childhood, the world of video games captured his attention. Titles like Spyro the Dragon and Crash
            Bandicoot 3 not only offered him entertainment but awakened his curiosity about what was behind those
            worlds. Over time, games like Skyrim, The Last of Us, and Bioshock Infinite showed him that video games
            could be more than fun: they could tell stories, convey emotions, and become a form of art. That certainty
            motivated him to decide that he wanted to be part of that universe, not just as a player, but as a creator.
          </p>
        </motion.div>
        <motion.div
          className="flex space-x-6 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((link) => (
            <SocialLink key={link.id} {...link} />
          ))}
        </motion.div>
      </Section>

      <Section id="projects" backgroundColor="#4a5568">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Projects
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => {
            const EngineIcon = engineIcons[project.engine]
            return (
              <motion.div
                key={project.id}
                className="bg-gray-700 rounded-xl shadow-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-blue-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Click to view details</span>
                    <EngineIcon className="text-2xl text-blue-400" title={`${project.engine} Engine`} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section id="demoreel" backgroundColor="#1e3a8a">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Demo Reel
        </motion.h2>
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/KjY7W0vjGVk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
            ></iframe>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={downloadCV}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileAlt size={20} />
            <span>Download CV</span>
          </motion.button>
          <motion.button
            onClick={downloadArtbook}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBook size={20} />
            <span>Download Artbook</span>
          </motion.button>
        </motion.div>
      </Section>

      <Section id="tips" backgroundColor="#2C3E50">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Game Development & Design Tips
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <TipCard
            icon={FaFolderOpen}
            title="Organize Your Project"
            description="Use clear folder structures and naming conventions to keep your project tidy and easy to navigate."
          />
          <TipCard
            icon={FaCode}
            title="Maintain Clean Code"
            description="Follow coding standards, use meaningful variable names, and keep your functions small and focused."
          />
          <TipCard
            icon={FaCogs}
            title="Optimize Performance"
            description="Regularly profile your game, optimize resource usage, and consider using object pooling for frequently spawned entities."
          />
          <TipCard
            icon={FaLightbulb}
            title="Iterate and Playtest"
            description="Continuously test your game, gather feedback, and be ready to iterate on your design to create the best player experience."
          />
          <TipCard
            icon={FaGamepad}
            title="Core Gameplay Loop"
            description="Focus on creating a compelling core gameplay loop that keeps players engaged and coming back for more."
          />
          <TipCard
            icon={FaUsers}
            title="Know Your Audience"
            description="Understand your target audience and design game mechanics and features that appeal to their preferences and play styles."
          />
          <TipCard
            icon={FaBalanceScale}
            title="Balance Difficulty"
            description="Strike a balance between challenge and accessibility to keep players motivated without causing frustration."
          />
          <TipCard
            icon={FaChartLine}
            title="Progression System"
            description="Design a satisfying progression system that gives players a sense of achievement and encourages long-term engagement."
          />
          <TipCard
            icon={FaPuzzlePiece}
            title="Modular Design"
            description="Create modular systems and components that can be easily reused and combined to build complex gameplay mechanics."
          />
          <TipCard
            icon={FaComments}
            title="Clear Communication"
            description="Implement clear and intuitive UI/UX design to effectively communicate game mechanics and objectives to players."
          />
          <TipCard
            icon={FaShieldAlt}
            title="Robust Error Handling"
            description="Implement comprehensive error handling and logging to quickly identify and resolve issues during development and after release."
          />
          <TipCard
            icon={FaPaintBrush}
            title="Consistent Art Style"
            description="Develop and maintain a cohesive art style that enhances the game's atmosphere and supports its narrative and gameplay elements."
          />
        </motion.div>
      </Section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center p-4 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
