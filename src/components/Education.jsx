import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'Master of Computer Applications',
    institution: 'Mar Thoma Institute of Information Technology',
    university: 'University of Kerala',
    location: 'Ayur',
    period: '07/2022 - 09/2024',
    percentage: '76%',
    description: 'Advanced studies in computer applications with focus on software development, database management, and system analysis.',
    achievements: [
      'Specialized in advanced programming concepts and software engineering',
      'Completed comprehensive coursework in database management systems',
      'Developed expertise in system analysis and design methodologies',
      'Gained practical experience in modern software development practices'
    ],
    featured: true
  },
  {
    id: 2,
    degree: 'B.Sc. Computer Science',
    institution: 'University Institute of Technology',
    university: 'University of Kerala',
    location: 'Yeroor',
    period: '06/2017 - 06/2020',
    percentage: '70%',
    description: 'Foundation studies in computer science covering programming fundamentals, data structures, and computer architecture.',
    achievements: [
      'Studied core computer science principles and programming fundamentals',
      'Learned data structures, algorithms, and software development basics',
      'Gained understanding of computer architecture and system design',
      'Developed strong foundation in problem-solving and logical thinking'
    ],
    featured: false
  }
]

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            My academic journey that laid the foundation for my technical expertise and professional growth.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`glass dark:glass-dark rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                edu.featured ? 'border-2 border-primary-200 dark:border-primary-800' : ''
              }`}
            >
              {/* Education Header */}
              <div className="p-6 border-b border-dark-200 dark:border-dark-600">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                                             <div>
                         <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                           {edu.degree}
                         </h3>
                         <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                           {edu.institution}
                         </p>
                         <p className="text-sm text-dark-600 dark:text-dark-300">
                           {edu.university}
                         </p>
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-dark-600 dark:text-dark-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span className="text-primary-600 dark:text-primary-400 font-medium">
                          {edu.percentage}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {edu.featured && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 px-3 py-1 rounded-full">
                        Latest Degree
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Education Content */}
              <div className="p-6">
                <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass dark:glass-dark p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
              Academic Journey
            </h3>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed max-w-3xl mx-auto">
              My educational background provides a strong foundation in computer science principles, 
              from fundamental programming concepts to advanced software development methodologies. 
              This academic journey has equipped me with both theoretical knowledge and practical skills 
              essential for modern software development and AI applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 