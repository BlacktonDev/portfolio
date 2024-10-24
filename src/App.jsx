import React, { useState, useEffect, useCallback } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUnrealengine, SiUnity } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

const projects = [
  { 
    id: 1, 
    title: "Cat-astrophe", 
    description: "A feline-themed FPS game where players navigate through a cat-infested map.",
    image: "Catastrophe.png",
    video: "https://www.youtube.com/embed/I631z42M1LI",
    detailedDescription: "Cat-astrophe is an innovative FPS game that puts players in a city overrun by mischievous cats. As a dog-loving protagonist, your mission is to restore order using non-lethal weapons like water guns and catnip grenades.",
    engine: "unreal",
    additionalImages: ["Catastrophe1.png", "Catastrophe2.png", "Catastrophe3.png"],
    additionalText: "Cat-astrophe features a unique blend of humor and action, with various cat-themed weapons and power-ups. Players can customize their character with different dog breeds and outfits, each offering unique abilities to combat the feline menace."
  },
  { 
    id: 2, 
    title: "MegaDungeon", 
    description: "A doggy puzzle adventure set in a vast, mysterious dungeon filled with canine-themed challenges.",
    image: "MegaDungeon.png",
    video: "https://www.youtube.com/embed/h0nRngxsBtY",
    detailedDescription: "MegaDungeon is a charming puzzle adventure game that follows the journey of a brave pup through a labyrinthine dungeon collecting bones. Each level is designed as a unique puzzle",
    engine: "unreal",
    additionalImages: ["MegaDungeon1.png", "MegaDungeon2.png", "MegaDungeon3.png"],
    additionalText: "MegaDungeon combines cute, stylized graphics with challenging puzzles that increase in complexity as you progress. The game features a variety of dog breeds as playable characters, each with unique abilities that help solve different types of puzzles."
  },
  { 
    id: 3, 
    title: "Neo-Planet", 
    description: "A futuristic platformer where players explore a newly discovered planet with unique gravity mechanics.",
    image: "NeoPlanet.png",
    video: "https://www.youtube.com/embed/AfcyerSghsY",
    detailedDescription: "Neo-Planet is a cutting-edge platformer set on an post-apocalyptic world with some enemies and wall jumps",
    engine: "unreal",
    additionalImages: ["NeoPlanet1.png", "NeoPlanet2.png", "NeoPlanet3.png"],
    additionalText: "Neo-Planet features a unique gravity-shifting mechanic that allows players to walk on walls and ceilings. The game's vibrant, alien landscapes are filled with dangerous creatures and challenging platforming sections that test players' skills and reflexes."
  },
  { 
    id: 4, 
    title: "Another Zombie Game", 
    description: "My first Unity FPS, featuring a post-apocalyptic world overrun by the undead.",
    image: "AZG.png",
    video: "https://www.youtube.com/embed/5TBytA4nMYw",
    detailedDescription: "Another Zombie Game was my first foray into Unity development, created as a learning project to understand FPS mechanics and AI behavior. Set in a post-apocalyptic world, players must survive waves of increasingly difficult zombies",
    engine: "unity",
    additionalImages: ["AZG1.png", "AZG2.png", "AZG3.png"],
    additionalText: "Another Zombie Game may have a familiar premise, but it stands out with its intense, fast-paced gameplay and a unique crafting system. Players can combine various items to create powerful weapons and defenses against the zombie hordes."
  },
  { 
    id: 5, 
    title: "Baloran", 
    description: "Multiplayer FPS using Photon, set in a fantasy world where magic and technology collide.",
    image: "Baloran.png",
    video: "https://www.youtube.com/embed/S6ZgSKBBbcE",
    detailedDescription: "Baloran is an ambitious multiplayer FPS that blends high fantasy with futuristic technology. Using the Photon networking framework, I created a seamless multiplayer experience that supports up to 8 players in massive battle arenas.",
    engine: "unity",
    additionalImages: ["Baloran1.png", "Baloran2.png", "Baloran3.png"],
    additionalText: "Baloran offers a unique twist on the FPS genre by combining magical abilities with high-tech weaponry. Players can choose from various classes, each with its own set of spells and gadgets, creating endless possibilities for strategic gameplay in both team-based and free-for-all modes."
  },
]

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000) // 3 seconds duration
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 modal-overlay z-50">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-bold mb-6 text-white">{project.title}</h2>
        <div className="space-y-6">
          {project.additionalImages.map((img, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-6`}>
              <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-1/2 h-auto rounded-lg" />
              <div className="w-1/2">
                <p className="text-lg leading-relaxed text-gray-200">
                  {index === 0 ? project.description : (index === 1 ? project.detailedDescription : project.additionalText)}
                </p>
              </div>
            </div>
          ))}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={project.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="mt-6 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors text-lg font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [showSplash, setShowSplash] = useState(true)

  const closeModal = useCallback((e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedProject(null)
    }
  }, [])

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener('click', closeModal)
    } else {
      document.removeEventListener('click', closeModal)
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sectionIndex = Math.floor((scrollPosition + windowHeight / 2) / windowHeight)
      setCurrentSection(sectionIndex)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('click', closeModal)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [selectedProject, closeModal])

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <div className="w-full min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <div className="w-full overflow-x-hidden">
          <section className="h-screen w-full flex flex-col justify-center items-center p-0 bg-gray-900">
            <img src="dev.png" alt="José Antonio Romo Terán" className="w-64 h-64 rounded-full mb-8 object-cover shadow-lg" />
            <h1 className="text-4xl font-bold mb-4">José Antonio Romo Terán</h1>
            <h2 className="text-2xl mb-6">Video Game Programming Engineer</h2>
            <p className="text-lg leading-relaxed max-w-2xl text-center mb-8">
              As a passionate Video Game Programming Engineer, I specialize in creating immersive and engaging gaming experiences. 
              With a solid foundation in Unity, Unreal Engine 5, and various programming languages, I bring ideas to life through code, 
              crafting intricate game mechanics and optimizing performance for seamless gameplay.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/BlacktonDev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaGithub size={40} />
              </a>
              <a href="https://linkedin.com/in/antonioromot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                <FaLinkedin size={40} />
              </a>
            </div>
          </section>

          <section 
            className="h-screen w-full flex flex-col justify-center items-center p-4 bg-gray-800"
            style={{
              opacity: currentSection >= 1 ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <h2 className="text-3xl font-bold mb-6">Work in Progress</h2>
            <div className="bg-gray-700 rounded-lg shadow-lg p-6 max-w-2xl">
              <h3 className="text-2xl font-semibold mb-4">My Principal Project</h3>
              <img src="RomoUnreal.png" alt="Strain: Cursed Miracle" className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-300 mb-4">
                "Strain: Cursed Miracle" is an innovative game that combines elements of Survival Horror, 
                puzzle-solving, and real-time action. Set in a post-apocalyptic, ever-changing world, 
                players must navigate complex challenges while uncovering a rich, 
                interconnected narrative in a world full of abominations.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </section>

          <section 
            className="min-h-screen w-full p-4 bg-gray-700"
            style={{
              opacity: currentSection >= 2 ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center pt-16">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-gray-600 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      {project.engine === 'unreal' ? (
                        <SiUnrealengine className="text-2xl text-blue-400" title="Unreal Engine" />
                      ) : (
                        <SiUnity className="text-2xl text-gray-300" title="Unity Engine" />
                      )}
                    </div>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </>
  )
}