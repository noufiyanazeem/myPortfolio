import { motion } from 'framer-motion'
import { Download, Code, Brain, Zap, Palette } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Specialized in AI/ML solutions, LangChain, and intelligent automation systems.'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Full-stack development with React, Node.js, and modern web technologies.'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Building efficient workflows and automation solutions with n8n and custom scripts.'
  },
  {
    icon: Palette,
    title: 'Complex UI/UX',
    description: 'Creating intuitive and beautiful user interfaces with modern design principles.'
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
              Passionate Developer & AI Enthusiast
            </h3>
            <div className="space-y-4 text-dark-600 dark:text-dark-300 text-lg leading-relaxed">
              <p>
                I'm a dedicated Software Developer and AI Specialist with a passion for creating innovative digital solutions. 
                My expertise spans across artificial intelligence, web development, automation, and complex user interface design.
              </p>
              <p>
                With a strong foundation in modern technologies, I specialize in building intelligent applications that leverage 
                the power of AI to solve real-world problems. From developing sophisticated web applications to creating 
                seamless automation workflows, I bring creativity and technical excellence to every project.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. 
                My goal is to bridge the gap between cutting-edge technology and practical, user-friendly solutions.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 inline-flex"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark-800 dark:text-white mb-2">
                      {area.title}
                    </h4>
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 