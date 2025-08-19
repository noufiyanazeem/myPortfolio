import { motion } from 'framer-motion'
import { Download, Code, Brain, Zap, Palette } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Brain,
    title: 'AI & Web Development',
    description: 'Specialized in Firebase AI Studio, Supabase, and intelligent web applications with AI integration.'
  },
  {
    icon: Code,
    title: 'Data Analytics',
    description: 'Expert in Power BI, data modeling, and creating interactive analytics dashboards.'
  },
  {
    icon: Zap,
    title: 'Automation & Integration',
    description: 'Building efficient workflows with Pabbly API and WhatsApp automation for business solutions.'
  },
  {
    icon: Palette,
    title: 'Full Product Development',
    description: 'End-to-end development from clean code to responsive UI/UX design and seamless AI integration.'
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
              Self-driven AI Web Developer & IT Support Analyst
            </h3>
            <div className="space-y-4 text-dark-600 dark:text-dark-300 text-lg leading-relaxed">
              <p>
                I'm a self-driven AI Web Developer and former IT Support Analyst with practical experience in building real-time web platforms 
                and intelligent automation tools. My expertise spans across Firebase AI Studio, Supabase, and Pabbly.
              </p>
              <p>
                I specialize in full product development—from clean, scalable code and responsive UI/UX design to seamless AI integration. 
                I combine technical precision with a creative edge in graphic design to craft user-centric, visually compelling web applications.
              </p>
              <p>
                With experience in both development and IT support, I bring a unique perspective to problem-solving and user experience design. 
                I'm passionate about leveraging AI tools to accelerate development and create innovative solutions.
              </p>
            </div>
            
            <motion.a
              href="/NoufiyaNazeemResume.pdf"
              download="NoufiyaNazeem-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 inline-flex cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Work Experience & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >




            {/* Expertise Areas */}
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
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