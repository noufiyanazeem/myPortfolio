import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const workExperience = [
  {
    id: 1,
    title: 'AI & Digital Solutions Associate Engineer',
    company: 'Self-Employed',
    location: 'Dubai, UAE',
    period: '06/2023 - Present',
    type: 'Freelancer | Remote',
    description: 'Self-driven AI Web Developer with practical experience in building real-time web platforms and intelligent automation tools.',
    achievements: [
      'Designed, developed, and deployed a responsive tourism web platform featuring interactive UI cards, wishlist, cart, and booking functionalities',
      'Integrated Pabbly\'s Whatsapp API to automate user confirmations for bookings via WhatsApp',
      'Built the frontend entirely using Firebase AI Studio with Next.js, and managed the backend using Supabase for authentication, data storage, and booking management',
      'Utilized AI tools like Cursor AI, Firebase AI Studio, ChatGPT, and Gemini to accelerate development, streamline debugging, and assist in code generation',
      'Version-controlled the project using Git for structured and maintainable development',
      'Handled branding and design work, creating all visual assets including logos, business cards, and UI visuals'
    ],
    tools: ['Next.js', 'Supabase', 'Pabbly (Whatsapp API)', 'Cursor AI', 'Firebase AI Studio', 'ChatGPT', 'Gemini', 'Git'],
    featured: true
  },
  {
    id: 2,
    title: 'IT Support Analyst',
    company: 'MICROTECH Institute of Computer Technology',
    location: 'Punalur',
    period: '08/2020 - 08/2022',
    type: 'Full-time',
    description: 'Provided technical support and system optimization for educational institution.',
    achievements: [
      'Assisted users in troubleshooting and resolving technical issues related to login access, file recovery, software crashes, and other technology-related challenges',
      'Identified and resolved data inconsistencies, missing records, or system errors by querying the database',
      'Developed expertise in creating reports to support IT functions',
      'Gained experience using data analysis tools to support IT troubleshooting and system optimization'
    ],
    tools: ['Data Analysis', 'System Troubleshooting', 'Database Management', 'Report Creation'],
    featured: false
  }
]

export default function WorkExperience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            My professional journey showcasing expertise in AI development, web solutions, and IT support.
          </p>
        </motion.div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`glass dark:glass-dark rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                job.featured ? 'border-2 border-primary-200 dark:border-primary-800' : ''
              }`}
            >
              {/* Job Header */}
              <div className="p-6 border-b border-dark-200 dark:border-dark-600">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                          {job.title}
                        </h3>
                        <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-dark-600 dark:text-dark-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  {job.featured && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 px-3 py-1 rounded-full">
                        Current Role
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Job Content */}
              <div className="p-6">
                <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                  {job.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-dark-600 dark:text-dark-300"
                      >
                        <span className="text-primary-600 dark:text-primary-400 font-bold mt-1">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used */}
                <div>
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.tools.map((tool, toolIndex) => (
                      <motion.span
                        key={toolIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: toolIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="text-xs font-medium text-dark-500 dark:text-dark-400 bg-dark-100 dark:bg-dark-700 px-3 py-1 rounded-full"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass dark:glass-dark p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed max-w-3xl mx-auto">
              With a combination of technical expertise in AI development and practical experience in IT support, 
              I bring a unique perspective to problem-solving and user experience design. My experience spans from 
              building intelligent web applications to providing technical support, giving me a comprehensive understanding 
              of both development and user needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 