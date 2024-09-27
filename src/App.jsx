import { useState, useEffect, useCallback } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './App.css'

const projects = [
  { 
    id: 1, 
    title: "Cat-astrophe", 
    description: "A feline-themed FPS game where players navigate through a cat-infested map.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/3X-iqFRGqbc",
    detailedDescription: "Cat-astrophe is an innovative FPS game that puts players in a city overrun by mischievous cats. As a dog-loving protagonist, your mission is to restore order using non-lethal weapons like water guns and catnip grenades."
  },
  { 
    id: 2, 
    title: "MegaDungeon", 
    description: "A doggy puzzle adventure set in a vast, mysterious dungeon filled with canine-themed challenges.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    detailedDescription: "MegaDungeon is a charming puzzle adventure game that follows the journey of a brave pup through a labyrinthine dungeon collecting bones. Each level is designed as a unique puzzle"
  },
  { 
    id: 3, 
    title: "Neo-Planet", 
    description: "A futuristic platformer where players explore a newly discovered planet with unique gravity mechanics.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/C0DPdy98e4c",
    detailedDescription: "Neo-Planet is a cutting-edge platformer set on an post-apocalyptic world with some enemies and wall jumps"
  },
  { 
    id: 4, 
    title: "Another Zombie Game", 
    description: "My first Unity FPS, featuring a post-apocalyptic world overrun by the undead.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/M5QY2_8704o",
    detailedDescription: "Another Zombie Game was my first foray into Unity development, created as a learning project to understand FPS mechanics and AI behavior. Set in a post-apocalyptic world, players must survive waves of increasingly difficult zombies"
  },
  { 
    id: 5, 
    title: "Baloran", 
    description: "Multiplayer FPS using Photon, set in a fantasy world where magic and technology collide.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/9bZkp7q19f0",
    detailedDescription: "Baloran is an ambitious multiplayer FPS that blends high fantasy with futuristic technology. Using the Photon networking framework, I created a seamless multiplayer experience that supports up to 8 players in massive battle arenas."
  },
]

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0)

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
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('click', closeModal)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [selectedProject, closeModal])

  return (
    <div className="min-h-screen bg-gray-300">
      <section className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-800 text-white">
        <img src="src/RomoUnreal.png" alt="José Antonio Romo Terán" className="w-64 h-64 rounded-full mb-8 object-cover shadow-lg" />
        <h1 className="text-4xl font-bold mb-4">José Antonio Romo Terán</h1>
        <h2 className="text-2xl mb-6">Video Game Programming Engineer</h2>
        <p className="text-lg leading-relaxed max-w-2xl text-center mb-8">
          As a passionate Video Game Programming Engineer, I specialize in creating immersive and engaging gaming experiences. 
          With expertise in various game engines and programming languages, I bring ideas to life through code, 
          crafting intricate game mechanics and optimizing performance for seamless gameplay.
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/BlacktonDev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/antonioromot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            <FaLinkedin size={40} />
          </a>
          <a href="https://twitter.com/cosio_joaquin" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
            <FaTwitter size={40} />
          </a>
        </div>
      </section>

      <section 
        className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-700 text-white"
        style={{
          opacity: Math.min(1, (scrollPosition - window.innerHeight * 0.5) / (window.innerHeight * 0.5)),
          transform: `translateY(${Math.max(0, 100 - scrollPosition * 0.1)}px)`
        }}
      >
        <h2 className="text-3xl font-bold mb-6">Proyecto Chido</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl">
          <h3 className="text-2xl font-semibold mb-4">My Principal Project</h3>
          <img src="src/RomoUnreal.png" alt="Proyecto Chido" className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-gray-300 mb-4">
            "Proyecto Chido" is an innovative game that combines elements of strategy, 
            puzzle-solving, and real-time action. Set in a vibrant, ever-changing world, 
            players must navigate complex challenges while uncovering a rich, 
            interconnected narrative.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      <section 
        className="min-h-screen p-4 bg-gray-600 text-white"
        style={{
          opacity: Math.min(1, (scrollPosition - window.innerHeight * 1.5) / (window.innerHeight * 0.5)),
          transform: `translateY(${Math.max(0, 200 - scrollPosition * 0.1)}px)`
        }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-700 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 modal-overlay">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-bold mb-6">{selectedProject.title}</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={selectedProject.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              ></iframe>
            </div>
            <p className="text-gray-300 mt-6 mb-4 text-lg">{selectedProject.description}</p>
            <p className="mb-6 text-lg leading-relaxed">{selectedProject.detailedDescription}</p>
            <button 
              onClick={() => setSelectedProject(null)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors text-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}