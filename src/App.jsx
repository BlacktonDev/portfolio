import React, { useState, useEffect, useCallback } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUnrealengine, SiUnity } from 'react-icons/si'
import './App.css'

const projects = [
  { 
    id: 1, 
    title: "Cat-astrophe", 
    description: "A feline-themed FPS game where players navigate through a cat-infested map.",
    image: "Catastrophe.png",
    video: "https://www.youtube.com/embed/I631z42M1LI",
    engine: "unreal",
    gifs: [
      { src: "Catastrophe1.gif", description: "Players can use various cat-themed weapons to navigate through the city." },
      { src: "Catastrophe2.gif", description: "The game features a unique blend of humor and action with cat-themed power-ups." },
      { src: "Catastrophe3.gif", description: "Players can customize their character with different dog breeds and outfits." }
    ],
    generalDescription: "Cat-astrophe is an innovative FPS game that puts players in a city overrun by mischievous cats. As a dog-loving protagonist, your mission is to restore order using non-lethal weapons like water guns and catnip grenades. The game features a unique blend of humor and action, with various cat-themed weapons and power-ups. Players can customize their character with different dog breeds and outfits, each offering unique abilities to combat the feline menace."
  },
  { 
    id: 2, 
    title: "MegaDungeon", 
    description: "A doggy puzzle adventure set in a vast, mysterious dungeon filled with canine-themed challenges.",
    image: "MegaDungeon.png",
    video: "https://www.youtube.com/embed/h0nRngxsBtY",
    engine: "unreal",
    gifs: [
      { src: "MegaDungeon1.gif", description: "Players navigate through intricate maze-like levels, solving puzzles." },
      { src: "MegaDungeon2.gif", description: "Various dog breeds can be unlocked, each with unique abilities." },
      { src: "MegaDungeon3.gif", description: "Interact with canine-themed obstacles and collect bones to progress." }
    ],
    generalDescription: "MegaDungeon is a charming puzzle adventure game that follows the journey of a brave pup through a labyrinthine dungeon collecting bones. Each level is designed as a unique puzzle, challenging players to use their wits and their character's special abilities. The game combines cute, stylized graphics with increasingly complex puzzles, offering a delightful and brain-teasing experience for players of all ages."
  },
  { 
    id: 3, 
    title: "Neo-Planet", 
    description: "Wall-jumping platformer using blueprints in Unreal Engine 5.",
    image: "NeoPlanet.png",
    video: "https://www.youtube.com/embed/AfcyerSghsY",
    engine: "unreal",
    gifs: [
      { src: "NeoPlanetWallJump.gif", description: "Showcase of the wall-jumping mechanic, allowing players to scale vertical surfaces." },
      { src: "NeoPlanetAttacks.gif", description: "Demonstration of melee and distance attacks available to the player." },
      { src: "NeoPlanetSlide.gif", description: "The sliding mechanic in action, useful for dodging attacks and quick traversal." }
    ],
    generalDescription: "Neo-Planet is a cutting-edge platformer set in a post-apocalyptic world. Players must navigate through challenging environments using a variety of movement mechanics including wall-jumping and sliding. The game features both melee and ranged combat, with players having to strategically use their abilities to overcome enemies and obstacles. Ammo pickups scattered throughout the levels add an element of resource management to the fast-paced gameplay."
  },
  { 
    id: 4, 
    title: "Another Zombie Game", 
    description: "My first Unity FPS, featuring a post-apocalyptic world overrun by the undead.",
    image: "AZG.png",
    video: "https://www.youtube.com/embed/5TBytA4nMYw",
    engine: "unity",
    gifs: [
      { src: "AZG1.gif", description: "Fast-paced zombie combat with various weapons." },
      { src: "AZG2.gif", description: "Crafting system allows players to create unique weapons and defenses." },
      { src: "AZG3.gif", description: "Increasingly difficult waves of zombies test player's survival skills." }
    ],
    generalDescription: "Another Zombie Game was my first foray into Unity development, created as a learning project to understand FPS mechanics and AI behavior. Set in a post-apocalyptic world, players must survive waves of increasingly difficult zombies. The game features intense, fast-paced gameplay and a unique crafting system. Players can combine various items to create powerful weapons and defenses against the zombie hordes, adding a layer of strategy to the survival horror experience."
  },
  { 
    id: 5, 
    title: "Baloran", 
    description: "Multiplayer FPS using Photon, set in a fantasy world where magic and technology collide.",
    image: "Baloran.png",
    video: "https://www.youtube.com/embed/S6ZgSKBBbcE",
    engine: "unity",
    gifs: [
      { src: "Baloran1.gif", description: "Showcase of various character classes and their unique abilities." },
      { src: "Baloran2.gif", description: "Multiplayer combat featuring magic and high-tech weaponry." },
      { src: "Baloran3.gif", description: "Large-scale battle arena supporting up to 8 players simultaneously." }
    ],
    generalDescription: "Baloran is an ambitious multiplayer FPS that blends high fantasy with futuristic technology. Using the Photon networking framework, I created a seamless multiplayer experience that supports up to 8 players in massive battle arenas. The game offers a unique twist on the FPS genre by combining magical abilities with high-tech weaponry. Players can choose from various classes, each with its own set of spells and gadgets, creating endless possibilities for strategic gameplay in both team-based and free-for-all modes."
  },
]

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 modal-overlay z-50">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-4xl font-bold mb-6 text-white text-center">{project.title}</h2>
        <p className="text-xl text-gray-300 mb-8 text-center font-semibold">{project.description}</p>
        
        <div className="space-y-12">
          {project.gifs.map((gif, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <img src={gif.src} alt={`${project.title} gif ${index + 1}`} className="w-full rounded-lg shadow-lg object-cover" />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <p className="text-lg text-gray-300 font-semibold">{gif.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-700 rounded-xl p-6 my-8">
          <h3 className="text-2xl font-bold mb-4 text-white">Game Overview</h3>
          <p className="text-lg text-gray-300">{project.generalDescription}</p>
        </div>
        
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={project.video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
          ></iframe>
        </div>
        
        <button 
          onClick={onClose}
          className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold block mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  )
}

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
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <section className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900">
        <img src="dev.png" alt="José Antonio Romo Terán" className="w-64 h-64 rounded-full mb-8 object-cover shadow-lg" />
        <h1 className="text-4xl font-bold mb-4">José Antonio Romo Terán</h1>
        <div className="flex space-x-6">
          <a href="https://github.com/BlacktonDev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/antonioromot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            <FaLinkedin size={40} />
          </a>
        </div>
      </section>

      <section className="min-h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6">Video Game Programming Engineer</h2>
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

      <section className="min-h-screen w-full p-8 bg-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-600 rounded-xl shadow-md overflow-hidden text-left transition-transform duration-300 hover:scale-105 focus:outline-none"
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

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}
