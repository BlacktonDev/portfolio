import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './App.css'

const projects = [
  { id: 1, title: "Cat-astrophe", description: "A feline-themed FPS game", image: "/RomoUnreal.png" },
  { id: 2, title: "MegaDungeon", description: "A doggy puzzle adventure", image: "/RomoUnreal.png" },
  { id: 3, title: "Neo-Planet", description: "A platformer", image: "/RomoUnreal.png" },
  { id: 4, title: "Another Zombie Game", description: "My first Unity FPS", image: "/RomoUnreal.png" },
  { id: 5, title: "Baloran", description: "Multiplayer FPS using Photon", image: "/RomoUnreal.png" },
]

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">José Antonio Romo Terán</h1>
          <p className="text-xl">Video Game Programming Engineer</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 flex flex-col md:flex-row items-center">
          <img src="src\RomoUnreal.png" alt="Profile" className="w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-8 object-cover" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Professional Description</h2>
            <p className="text-lg">
              As a passionate Video Game Programming Engineer, I specialize in creating immersive and engaging gaming experiences. 
              With expertise in various game engines and programming languages, I bring ideas to life through code, 
              crafting intricate game mechanics and optimizing performance for seamless gameplay.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/BlacktonDev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com/in/antonioromot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <FaLinkedin size={32} />
            </a>
            <a href="https://twitter.com/cosio_joaquin" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">
              <FaTwitter size={32} />
            </a>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-8 max-w-4xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/3X-iqFRGqbc"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <p className="text-gray-300 mt-4 mb-4">{selectedProject.description}</p>
            <p className="mb-4">
              This is where you would put a more detailed description of {selectedProject.title}. 
              Include information about the technologies used, your role in the project, challenges overcome, 
              and any notable features or achievements.
            </p>
            <button 
              onClick={() => setSelectedProject(null)}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}