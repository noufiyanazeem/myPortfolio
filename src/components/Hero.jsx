import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-primary-50/80 dark:from-dark-900/90 dark:via-dark-800/80 dark:to-dark-700/90 backdrop-blur-sm">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Modern Floating Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-blue-500/20 rounded-full blur-xl neon-glow"
      />
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl neon-glow"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-lg neon-glow"
      />

      <div className="container-custom section-padding relative z-10">
        <div className="text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/50 dark:border-dark-600/50 shadow-2xl mx-auto float neon-glow">
              <img 
                src="/p.jpg" 
                alt="Noufiya Nazeem" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-800 dark:text-white mb-4">
              Noufiya Nazeem
            </h1>
            <p className="text-xl sm:text-2xl text-dark-600 dark:text-dark-300 font-medium">
              Software Developer & AI Specialist
            </p>
          </motion.div>

          {/* Animated Headline */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl text-dark-700 dark:text-dark-200 max-w-3xl mx-auto leading-relaxed">
              Crafting Creative & Complex Digital Solutions with{' '}
              <span className="gradient-text font-semibold">AI & Code</span>
            </h2>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="/NoufiyaNazeemResume.pdf"
              download="NoufiyaNazeem-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-modern flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-glass"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-2 rounded-full glass dark:glass-dark hover:bg-white/20 dark:hover:bg-dark-700/50 transition-colors duration-200"
            >
              <ChevronDown className="w-6 h-6 text-dark-700 dark:text-white" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 