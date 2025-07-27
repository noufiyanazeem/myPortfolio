import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Chat Assistant',
    description: 'An intelligent chatbot built with LangChain and OpenAI, featuring natural language processing and context-aware responses.',
    image: '/api/placeholder/400/250',
    category: 'AI',
    tech: ['React', 'LangChain', 'OpenAI', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
    image: '/api/placeholder/400/250',
    category: 'Web Apps',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Workflow Automation System',
    description: 'Automated business processes using n8n workflows, reducing manual tasks by 80% and improving efficiency.',
    image: '/api/placeholder/400/250',
    category: 'Automation',
    tech: ['n8n', 'JavaScript', 'API Integration', 'Webhooks'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Smart Data Analytics Dashboard',
    description: 'Real-time data visualization dashboard with AI-powered insights and predictive analytics.',
    image: '/api/placeholder/400/250',
    category: 'AI',
    tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    image: '/api/placeholder/400/250',
    category: 'Web Apps',
    tech: ['React', 'Firebase', 'TailwindCSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Email Marketing Automation',
    description: 'Automated email marketing system with personalized content generation and campaign optimization.',
    image: '/api/placeholder/400/250',
    category: 'Automation',
    tech: ['Python', 'AI/ML', 'Email APIs', 'Analytics'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
]

const categories = ['All', 'AI', 'Web Apps', 'Automation']

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
                    {project.featured && (
                      <span className="text-xs font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
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