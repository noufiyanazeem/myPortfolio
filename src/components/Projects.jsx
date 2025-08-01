import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'HR Analytics Dashboard',
    description: 'Designed and developed a fully interactive HR Analytics Dashboard to visualize and analyze key human resource metrics, providing insights into attrition, employee demographics, and workforce structure. Tracked and visualized employee records with real-time KPIs such as Attrition Count and Rate, Average Age, Salary, and Tenure.',
    image: '/api/placeholder/400/250',
    category: 'Data Analytics',
    tech: ['Power BI', 'Excel', 'Data Modeling', 'DAX Measures'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    period: '01/2024 - 03/2025'
  },
  {
    id: 2,
    title: 'Two Player Games',
    description: 'Two-Player Games is an interactive and dynamic collection of classic two-player games implemented in the Python programming language. The primary aim is to provide users with an engaging and enjoyable gaming experience while demonstrating the versatility and power of Python in game development.',
    image: '/api/placeholder/400/250',
    category: 'Game Development',
    tech: ['Python', 'Pygame Library', 'Game Development'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    period: '04/2024 - 08/2024'
  },
  {
    id: 3,
    title: 'Tourism Web Platform',
    description: 'Designed, developed, and deployed a responsive tourism web platform featuring interactive UI cards, wishlist, cart, and booking functionalities. Integrated Pabbly\'s Whatsapp API to automate user confirmations for bookings via WhatsApp.',
    image: '/api/placeholder/400/250',
    category: 'Web Development',
    tech: ['Next.js', 'Supabase', 'Pabbly API', 'Firebase AI Studio'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    period: '04/2023 - Present'
  }
]

const categories = ['All', 'Data Analytics', 'Game Development', 'Web Development']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Explore my latest work showcasing expertise in AI, web development, and automation solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'glass dark:glass-dark text-dark-700 dark:text-white hover:bg-white/20 dark:hover:bg-dark-700/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass dark:glass-dark rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-600/30 dark:text-primary-400/30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                      >
                        <Eye className="w-5 h-5 text-dark-700" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                      >
                        <Github className="w-5 h-5 text-dark-700" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="text-xs font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                      <span className="text-xs text-dark-500 dark:text-dark-400">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-dark-500 dark:text-dark-400 bg-dark-100 dark:bg-dark-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass dark:glass-dark text-dark-700 dark:text-white text-sm font-medium rounded-lg hover:bg-white/20 dark:hover:bg-dark-700/50 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
} 