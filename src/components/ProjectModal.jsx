import React from 'react'
import { motion } from 'framer-motion'
import { SiUnrealengine, SiUnity } from 'react-icons/si'

const ProjectModal = ({ project, onClose }) => {
  const EngineIcon = project.engine === 'unreal' ? SiUnrealengine : SiUnity

  return (
    <motion.div
      className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full my-8"
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <div className="flex items-center mb-6">
        <h2 className="flex-1 text-4xl font-bold text-blue-300 text-center">{project.title}</h2>
        <EngineIcon className="text-3xl text-blue-400" title={`${project.engine} Engine`} />
      </div>
      <p className="text-xl text-gray-300 mb-8 font-semibold">{project.description}</p>
      
      <div className="space-y-8">
        {project.gifs.map((gif, index) => (
          <motion.div 
            key={index}
            className="rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="w-full md:w-1/2 p-4">
                <img src={gif.src} alt={`${project.title} gif ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-1/2 p-4 flex items-center">
                <p className="text-lg text-gray-300 font-semibold">{gif.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="space-y-8 my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {project.additionalImages && project.additionalImages.map((image, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img 
              src={image.src} 
              alt={`${project.title} additional image ${index + 1}`} 
              className="w-full max-w-2xl h-auto object-cover rounded-lg shadow-lg mb-4" 
            />
            <p className="text-lg text-gray-300 font-semibold text-center max-w-2xl">{image.description}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="bg-gray-700 rounded-xl p-6 my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-300">Game Overview</h3>
        <p className="text-lg text-gray-300">{project.generalDescription}</p>
      </motion.div>
      
      <motion.div 
        className="relative w-full" 
        style={{ paddingBottom: '56.25%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
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