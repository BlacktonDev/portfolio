import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUnrealengine, SiUnity } from 'react-icons/si'

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' }
]

export const socialLinks = [
  { id: 1, href: "https://github.com/BlacktonDev", icon: FaGithub, color: "gray-300", label: "GitHub" },
  { id: 2, href: "https://linkedin.com/in/antonioromot", icon: FaLinkedin, color: "blue-400", label: "LinkedIn" }
]

export const projects = [
    {
        id: 1,
        title: "Cat-astrophe",
        description: "A feline-themed FPS game where players navigate through a cat-infested map.",
        image: "Catastrophe.png",
        video: "https://www.youtube.com/embed/I631z42M1LI",
        engine: "unreal",
        gifs: [
          { src: "Catastrophe1.gif", description: "Players can use various cat-themed weapons to navigate through the city." },
          { src: "Catastrophe2.gif", description: "The game include a wave system" },
          { src: "Catastrophe3.gif", description: "Players can sprint and slide inthe map. At the end of every round they can buy upgrades for their weapons!" }
        ],
        additionalImages: [
          { src: "Catastrophe4.jpg", description: "Weapons" },
          { src: "Catastrophe5.jpg", description: "Character" },
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
          { src: "MegaDungeon2.gif", description: "Multiple obstacles." },
        ],
        additionalImages: [
          { src: "MegaDungeon4.jpg", description: "Directions Array" },
          { src: "MegaDungeon5.jpg", description: "UI input System" },
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
        additionalImages: [
          { src: "NeoPlanet4.jpg", description: "WallJump Blueprint" },
          { src: "NeoPlanet5.jpg", description: "Attacks" },
          { src: "NeoPlanet6.jpg", description: "Dash" }
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
        ],
        generalDescription: "Another Zombie Game was my first foray into Unity development, created as a learning project to understand FPS mechanics and AI behavior. Set in a post-apocalyptic world, players must survive waves of increasingly difficult zombies. The game features intense, fast-paced gameplay and a unique crafting system. Players can combine various items to create powerful weapons and defenses against the zombie hordes, adding a layer of strategy to the survival horror experience."
      },
]

export const engineIcons = {
  unreal: SiUnrealengine,
  unity: SiUnity
}