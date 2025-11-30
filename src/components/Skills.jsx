import { motion } from 'framer-motion'
import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Zap, 
  Palette,
  Globe,
  Smartphone,
  Server,
  Shield
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 90, color: 'from-blue-400 to-blue-600' },
      { name: 'SQL', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'PL/SQL', level: 80, color: 'from-green-500 to-green-700' },
      { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
      { name: 'HTML', level: 85, color: 'from-orange-500 to-orange-700' },
      { name: 'CSS', level: 85, color: 'from-blue-500 to-blue-700' }
    ]
  },
  {
    title: 'AI & Technologies',
    icon: Brain,
    skills: [
      { name: 'AI & Chatbot Technologies', level: 88, color: 'from-purple-400 to-purple-600' },
      { name: 'Machine Learning', level: 82, color: 'from-green-500 to-green-700' },
      { name: 'LLM Prompt Engineering', level: 85, color: 'from-pink-400 to-pink-600' },
      { name: 'RAG Pipelines', level: 80, color: 'from-indigo-400 to-indigo-600' },
      { name: 'Vector Databases', level: 75, color: 'from-violet-400 to-violet-600' },
      { name: 'Hugging Face', level: 82, color: 'from-yellow-400 to-yellow-600' },
      { name: 'OpenAI GPT', level: 80, color: 'from-green-400 to-green-600' },
      { name: 'Google Gemini', level: 85, color: 'from-blue-400 to-blue-600' },
      { name: 'Claude', level: 75, color: 'from-orange-400 to-orange-600' },
      { name: 'Data Science', level: 85, color: 'from-teal-400 to-teal-600' },
      { name: 'Data Analytics & Visualization', level: 88, color: 'from-pink-500 to-pink-700' },
      { name: 'Power BI', level: 85, color: 'from-orange-400 to-orange-600' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: Zap,
    skills: [
      { name: 'React.js', level: 88, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600' },
      { name: 'Pygame', level: 80, color: 'from-blue-400 to-blue-600' },
      { name: 'Tkinter', level: 75, color: 'from-green-400 to-green-600' },
      { name: 'LangChain', level: 80, color: 'from-purple-400 to-purple-600' },
      { name: 'LlamaIndex', level: 75, color: 'from-orange-400 to-orange-600' },
      { name: 'PyPDF2', level: 85, color: 'from-red-400 to-red-600' }
    ]
  },
  {
    title: 'Software Engineering & Processes',
    icon: Shield,
    skills: [
      { name: 'SDLC', level: 85, color: 'from-indigo-400 to-indigo-600' }
    ]
  },
  {
    title: 'Database & Tools',
    icon: Database,
    skills: [
      { name: 'Supabase', level: 88, color: 'from-green-400 to-green-600' },
      { name: 'PostgreSQL', level: 85, color: 'from-blue-500 to-blue-700' },
      { name: 'MySQL', level: 85, color: 'from-blue-600 to-blue-800' },
      { name: 'Oracle', level: 75, color: 'from-red-400 to-red-600' },
      { name: 'Git/GitHub', level: 90, color: 'from-orange-500 to-orange-700' },
      { name: 'Visual Studio Code', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'Excel', level: 85, color: 'from-green-500 to-green-700' },
      { name: 'Webhooks', level: 80, color: 'from-purple-400 to-purple-600' }
    ]
  },
  {
    title: 'Platforms & AI Tools',
    icon: Cloud,
    skills: [
      { name: 'Firebase AI Studio', level: 90, color: 'from-orange-400 to-orange-600' },
      { name: 'Supabase', level: 88, color: 'from-green-500 to-green-700' },
      { name: 'Cursor AI', level: 85, color: 'from-blue-400 to-blue-600' },
      { name: 'Google AI Studio', level: 82, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Pabbly API', level: 85, color: 'from-red-400 to-red-600' },
      { name: 'Zapier', level: 80, color: 'from-orange-500 to-orange-700' },
      { name: 'n8n', level: 75, color: 'from-purple-400 to-purple-600' },
      { name: 'Shopify', level: 80, color: 'from-green-400 to-green-600' },
      { name: 'Vercel', level: 85, color: 'from-black to-gray-600' },
      { name: 'Anaconda', level: 80, color: 'from-green-600 to-green-800' },
      { name: 'AWS', level: 75, color: 'from-orange-400 to-orange-600' }
    ]
  }
]

const techIcons = [
  { name: 'Python', icon: '🐍', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' },
  { name: 'JavaScript', icon: '📜', color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400' },
  { name: 'SQL', icon: '🗄️', color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' },
  { name: 'React', icon: '⚛️', color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-400' },
  { name: 'Next.js', icon: '▲', color: 'bg-gray-100 text-gray-600 dark:bg-gray-900/50 dark:text-gray-400' },
  { name: 'Power BI', icon: '📊', color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400' },
  { name: 'LangChain', icon: '🔗', color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400' },
  { name: 'Hugging Face', icon: '🤗', color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400' },
  { name: 'Firebase AI', icon: '🔥', color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400' },
  { name: 'Supabase', icon: '⚡', color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' },
  { name: 'Gemini', icon: '💎', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' },
  { name: 'Git', icon: '📝', color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400' },
  { name: 'VS Code', icon: '💻', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' },
  { name: 'Pygame', icon: '🎮', color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' },
  { name: 'Shopify', icon: '🛒', color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' },
  { name: 'Vercel', icon: '▲', color: 'bg-black text-white dark:bg-gray-800 dark:text-gray-200' }
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-white mb-4">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-16"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-3 p-4 modern-card dark:modern-card-dark rounded-xl hover:shadow-3xl transition-all duration-500"
            >
              <div className={`text-3xl ${tech.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-dark-700 dark:text-white text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="modern-card dark:modern-card-dark p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-dark-700 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
              Languages
            </h3>
            <p className="text-dark-600 dark:text-dark-300">
              Communication skills across multiple languages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Malayalam', level: 'Native', color: 'from-green-400 to-green-600' },
              { name: 'English', level: 'Proficient', color: 'from-blue-400 to-blue-600' },
              { name: 'Hindi', level: 'Advanced', color: 'from-orange-400 to-orange-600' },
              { name: 'Tamil', level: 'Basic', color: 'from-purple-400 to-purple-600' }
            ].map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card dark:modern-card-dark p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-bold text-dark-800 dark:text-white mb-2">
                  {language.name}
                </h4>
                <span className={`text-sm font-medium bg-gradient-to-r ${language.color} bg-clip-text text-transparent`}>
                  {language.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 