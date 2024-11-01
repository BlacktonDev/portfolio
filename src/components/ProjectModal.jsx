import React from 'react'
import { motion } from 'framer-motion'
import { engineIcons } from '../index'

const ProjectModal = ({ project, onClose }) => {
  const EngineIcon = engineIcons[project.engine]

  return (
    <motion.div
      className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-blue-300">{project.title}</h2>
        <EngineIcon className="text-3xl text-blue-400" title={`${project.engine} Engine`} />
      </div>
      <p className="text-xl text-gray-300 mb-8 font-semibold">{project.description}</p>
      
      <div className="space-y-12">
        {project.gifs.map((gif) => (
          <motion.div 
            key={gif.id}
            className={`flex flex-col ${gif.id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: gif.id * 0.2 }}
          >
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <img src={gif.src} alt={`${project.title} gif ${gif.id}`} className="w-full rounded-lg shadow-lg object-cover" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <p className="text-lg text-gray-300 font-semibold">{gif.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="bg-gray-700 rounded-xl p-6 my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-300">Game Overview</h3>
        <p className="text-lg text-gray-300">{project.generalDescription}</p>
      </motion.div>
      
      <motion.div 
        className="relative w-full" 
        style={{ paddingBottom: '56.25%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <iframe
          src={project.video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
        ></iframe>
      </motion.div>
      
      <motion.button 
        onClick={onClose}
        className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold block mx-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Close
      </motion.button>
    </motion.div>
  )
}

export default ProjectModal