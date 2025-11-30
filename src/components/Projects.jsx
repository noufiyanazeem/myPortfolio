import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

// Helpers to sort projects by period end date ("Present" treated as current date)
const parseMonthYear = (value) => {
  if (!value) return new Date(0)
  const [mm, yyyy] = value.split('/').map((t) => t.trim())
  const month = parseInt(mm, 10)
  const year = parseInt(yyyy, 10)
  if (Number.isNaN(month) || Number.isNaN(year)) return new Date(0)
  return new Date(year, month - 1, 1)
}

const getPeriodEndDate = (period) => {
  if (!period || typeof period !== 'string') return new Date(0)
  const parts = period.split('-').map((p) => p.trim())
  const end = parts[1] || ''
  if (end.toLowerCase().includes('present')) return new Date()
  return parseMonthYear(end)
}

const sortProjectsByEndDateDesc = (list) => {
  return [...list].sort((a, b) => getPeriodEndDate(b.period) - getPeriodEndDate(a.period))
}
const projects = [
  {
    id: 1,
    title: 'Hugging Face RAG Document QA',
    description: 'Built a full-stack AI Q&A system for querying PDFs using embeddings and LLMs. Backend: Python, Flask, PyPDF2, FAISS, sentence-transformers for PDF ingestion, text chunking, and vector search. Frontend: Next.js for PDF upload, document selection, question submission, and real-time answer display. Integrated Hugging Face Transformers QA pipeline for AI-powered answers.',
    image: '/api/placeholder/400/250',
    category: 'AI & ML',
    tech: ['Python', 'Flask', 'FAISS', 'Hugging Face', 'Next.js', 'PyPDF2', 'Vector Search'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    period: '01/2025 - Present'
  },
  {
    id: 2,
    title: 'AI-Powered ATS Resume Analyzer',
    description: 'Built an ATS-powered resume analysis system using Google Gemini LLM, Streamlit, and Python. Integrated Google AI Studio API key authentication and securely managed environment variables using .env. Used Gemini 2.x models to evaluate resumes and generate structured JSON outputs. Implemented PDF text extraction using PyPDF2 and automated job description comparison. Designed a clean, user-friendly Streamlit web interface for uploading resumes and viewing AI-generated insights.',
    image: '/api/placeholder/400/250',
    category: 'AI & ML',
    tech: ['Google Gemini LLM', 'Streamlit', 'Python', 'PyPDF2', 'Google AI Studio'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    period: '01/2025 - Present'
  },
  {
    id: 3,
    title: 'AI Customer Support Chatbot',
    description: 'Built an AI chatbot using Hugging Face Transformers for intent detection and response. Stored conversation history in Supabase for seamless user experience. Deployed via web interface for interactive Q&A sessions with intelligent response generation.',
    image: '/api/placeholder/400/250',
    category: 'AI & ML',
    tech: ['Hugging Face', 'Supabase', 'Next.js', 'Transformers'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    period: '01/2025 - Present'
  },
  {
    id: 4,
    title: 'AI-Powered Web Automation - Tourism Platform',
    description: 'Designed, developed, and deployed a responsive tourism web platform featuring interactive UI cards, wishlist, cart, and booking functionalities. Integrated Pabbly\'s WhatsApp API to automate user confirmations for bookings via WhatsApp, cutting manual admin effort by 60%. Built the frontend entirely using Firebase AI Studio with Next.js, and managed the backend using Supabase for authentication, data storage, and booking management. Utilized AI tools like Cursor AI, Firebase AI Studio, ChatGPT, and Gemini to accelerate development, streamline debugging, and assist in code generation. Version-controlled using Git for structured and maintainable development. Handled branding and design work, creating all visual assets including logos, business cards, and UI visuals.',
    image: '/api/placeholder/400/250',
    category: 'Web Development',
    tech: ['Next.js', 'Supabase', 'Firebase AI Studio', 'WhatsApp API', 'Pabbly API', 'Git', 'Cursor AI', 'ChatGPT', 'Gemini'],
    liveUrl: 'https://dubai-horizon-v3.vercel.app/',
    githubUrl: '#',
    featured: true,
    period: '04/2025 - Present'
  },
  {
    id: 5,
    title: 'HR Analytics Dashboard',
    description: 'Built an interactive HR dashboard visualizing attrition, tenure, and demographics. Applied data modelling and DAX to compute real-time KPIs such as attrition rate and average salary. Enhanced HR decision-making through data-driven insights and visual storytelling.',
    image: '/api/placeholder/400/250',
    category: 'Data Analytics',
    tech: ['Power BI', 'Excel', 'Data Modeling', 'DAX Measures'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    period: '11/2024 - 03/2025'
  },
  {
    id: 6,
    title: 'Two-Player Games Suite',
    description: 'Designed a Python-based multi-game app with scoreboard, sound, and offline mode, achieving 20+ installs in the first month. Interactive and dynamic collection of classic two-player games implemented in Python.',
    image: '/api/placeholder/400/250',
    category: 'Game Development',
    tech: ['Python', 'Pygame', 'Game Development'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    period: '04/2024 - 09/2024'
  },
  {
    id: 7,
    title: 'AI-Powered Shopify Store Builder',
    description: 'Built AI-optimized e-commerce stores with smart product recommendations, variant management, and secure payments. Leveraged Shopify Liquid templates and AI tools for enhanced shopping experience.',
    image: '/api/placeholder/400/250',
    category: 'E-Commerce',
    tech: ['Shopify', 'Liquid', 'AI Integration'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    period: '06/2023 - 12/2024'
  }
]

const categories = ['All', 'AI & ML', 'Web Development', 'Data Analytics', 'Game Development', 'E-Commerce']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(sortProjectsByEndDateDesc(projects))

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    const next = category === 'All'
      ? projects
      : projects.filter((project) => project.category === category)
    setFilteredProjects(sortProjectsByEndDateDesc(next))
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
                className="group modern-card dark:modern-card-dark rounded-xl overflow-hidden hover:shadow-3xl transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 flex items-center justify-center">
                    {project.id === 1 && (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3">
                          <span className="text-white text-3xl font-bold">🤖</span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">RAG System</p>
                      </div>
                    )}
                    {project.id === 2 && (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3">
                          <span className="text-white text-3xl font-bold">📄</span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">ATS Analyzer</p>
                      </div>
                    )}
                    {project.id === 3 && (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3">
                          <span className="text-white text-3xl font-bold">💬</span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">AI Chatbot</p>
                      </div>
                    )}
                    {project.id === 4 && (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-3">
                          <span className="text-white text-3xl font-bold">🌐</span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">Web Platform</p>
                      </div>
                    )}
                    {project.id === 5 && (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                          <span className="text-white text-3xl font-bold">📊</span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">HR Analytics</p>
                      </div>
                    )}
                    {project.id === 6 && (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                          <span className="text-white text-3xl font-bold">🎮</span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">Game Suite</p>
                      </div>
                    )}
                    {project.id === 7 && (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                          <span className="text-white text-3xl font-bold">🛒</span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">E-Commerce</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                      >
                        <Github className="w-6 h-6 text-dark-700" />
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
                  <div className="flex justify-center gap-3">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="flex items-center justify-center gap-2 px-6 py-2 glass dark:glass-dark text-dark-700 dark:text-white text-sm font-medium rounded-lg hover:bg-white/20 dark:hover:bg-dark-700/50 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
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