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
    title: 'Frontend Development',
    icon: Globe,
    skills: [
      { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
      { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
      { name: 'TailwindCSS', level: 90, color: 'from-cyan-400 to-cyan-600' },
      { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600' }
    ]
  },
  {
    title: 'Backend & Database',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 88, color: 'from-green-400 to-green-600' },
      { name: 'Python', level: 85, color: 'from-blue-500 to-blue-700' },
      { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700' },
      { name: 'PostgreSQL', level: 75, color: 'from-blue-600 to-blue-800' },
      { name: 'Firebase', level: 85, color: 'from-orange-400 to-orange-600' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'LangChain', level: 90, color: 'from-purple-400 to-purple-600' },
      { name: 'OpenAI API', level: 88, color: 'from-green-500 to-green-700' },
      { name: 'TensorFlow', level: 75, color: 'from-orange-500 to-orange-700' },
      { name: 'Python ML', level: 80, color: 'from-blue-400 to-blue-600' },
      { name: 'NLP', level: 85, color: 'from-pink-400 to-pink-600' }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: Zap,
    skills: [
      { name: 'n8n', level: 90, color: 'from-purple-500 to-purple-700' },
      { name: 'Git', level: 92, color: 'from-orange-500 to-orange-700' },
      { name: 'Docker', level: 70, color: 'from-blue-500 to-blue-700' },
      { name: 'AWS', level: 75, color: 'from-yellow-500 to-yellow-700' },
      { name: 'Vercel', level: 85, color: 'from-black to-gray-600' }
    ]
  }
]

const techIcons = [
  { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' },
  { name: 'Python', icon: '🐍', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' },
  { name: 'AI/ML', icon: '🤖', color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400' },
  { name: 'LangChain', icon: '🔗', color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' },
  { name: 'Firebase', icon: '🔥', color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400' },
  { name: 'Supabase', icon: '⚡', color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' },
  { name: 'n8n', icon: '⚙️', color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400' },
  { name: 'Node.js', icon: '🟢', color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' },
  { name: 'TypeScript', icon: '📘', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' },
  { name: 'TailwindCSS', icon: '🎨', color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-400' },
  { name: 'MongoDB', icon: '🍃', color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' },
  { name: 'Docker', icon: '🐳', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' }
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
              className="flex flex-col items-center gap-3 p-4 glass dark:glass-dark rounded-xl hover:shadow-lg transition-all duration-300"
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
              className="glass dark:glass-dark p-6 rounded-xl"
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
      </div>
    </section>
  )
} 