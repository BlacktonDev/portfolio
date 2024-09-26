import { useState, useEffect, useCallback } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './App.css'

const projects = [
  { 
    id: 1, 
    title: "Cat-astrophe", 
    description: "A feline-themed FPS game where players navigate through a cat-infested city.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/3X-iqFRGqbc",
    detailedDescription: "Cat-astrophe is an innovative FPS game that puts players in a city overrun by mischievous cats. As a dog-loving protagonist, your mission is to restore order using non-lethal weapons like water guns and catnip grenades. The game features advanced AI for cat behavior, realistic fur rendering, and a dynamic day-night cycle that affects cat activity. I implemented a custom physics engine to simulate realistic cat movements and interactions with the environment. One of the biggest challenges was optimizing the game to handle hundreds of cats on screen simultaneously without compromising performance."
  },
  { 
    id: 2, 
    title: "MegaDungeon", 
    description: "A doggy puzzle adventure set in a vast, mysterious dungeon filled with canine-themed challenges.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    detailedDescription: "MegaDungeon is a charming puzzle adventure game that follows the journey of a brave pup through a labyrinthine dungeon. Each level is designed as a unique puzzle, incorporating dog-themed elements like bones, squeaky toys, and fire hydrants. I developed a procedural generation system for the dungeon layouts, ensuring that no two playthroughs are the same. The game features a unique 'bark' mechanic that allows players to interact with the environment in various ways. One of the main challenges was creating an intuitive hint system that guides players without spoiling the puzzles."
  },
  { 
    id: 3, 
    title: "Neo-Planet", 
    description: "A futuristic platformer where players explore a newly discovered planet with unique gravity mechanics.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/C0DPdy98e4c",
    detailedDescription: "Neo-Planet is a cutting-edge platformer set on an alien world with ever-changing gravitational fields. Players must navigate through exotic landscapes, solving puzzles and overcoming obstacles that behave differently based on the local gravity. I implemented a dynamic gravity system that allows for seamless transitions between different gravitational zones, creating mind-bending gameplay scenarios. The game features a unique art style inspired by retro sci-fi, with all assets procedurally generated to create a truly alien feel. One of the biggest technical challenges was optimizing the physics calculations to maintain smooth performance across various platforms."
  },
  { 
    id: 4, 
    title: "Another Zombie Game", 
    description: "My first Unity FPS, featuring a post-apocalyptic world overrun by the undead.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/M5QY2_8704o",
    detailedDescription: "Another Zombie Game was my first foray into Unity development, created as a learning project to understand FPS mechanics and AI behavior. Set in a post-apocalyptic world, players must survive waves of increasingly difficult zombies while scavenging for resources. I implemented a dynamic difficulty system that adjusts based on player performance, ensuring a challenging experience for all skill levels. The game features a crafting system allowing players to create unique weapons and defenses. One of the main challenges I faced was optimizing the zombie AI to handle large numbers of enemies without impacting performance."
  },
  { 
    id: 5, 
    title: "Baloran", 
    description: "Multiplayer FPS using Photon, set in a fantasy world where magic and technology collide.",
    image: "src/RomoUnreal.png",
    video: "https://www.youtube.com/embed/9bZkp7q19f0",
    detailedDescription: "Baloran is an ambitious multiplayer FPS that blends high fantasy with futuristic technology. Using the Photon networking framework, I created a seamless multiplayer experience that supports up to 64 players in massive battle arenas. The game features a unique class system where players can customize their characters by combining different magical abilities with high-tech weaponry. I developed a sophisticated matchmaking system that balances teams based on player skill and chosen classes. One of the most significant challenges was implementing client-side prediction and server reconciliation to ensure smooth gameplay even under varying network conditions."
  },
]

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

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

    return () => {
      document.removeEventListener('click', closeModal)
    }
  }, [selectedProject, closeModal])

  return (
    <div className="min-h-screen bg-gray-300 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-gray-800 text-white min-h-screen rounded-3xl overflow-hidden shadow-2xl">
        <header className="bg-gray-900 py-6 px-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">José Antonio Romo Terán</h1>
            <p className="text-xl mt-2">Video Game Programming Engineer</p>
          </div>
        </header>

        <main className="container mx-auto px-8 py-12">
          <section className="mb-16 flex flex-col md:flex-row items-center">
            <img src="src/RomoUnreal.png" alt="Profile" className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-12 object-cover shadow-lg" />
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Description</h2>
              <p className="text-lg leading-relaxed">
                As a passionate Video Game Programming Engineer, I specialize in creating immersive and engaging gaming experiences. 
                With expertise in various game engines and programming languages, I bring ideas to life through code, 
                crafting intricate game mechanics and optimizing performance for seamless gameplay.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Connect with Me</h2>
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
        </main>
      </div>

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