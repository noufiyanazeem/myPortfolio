import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, Eye } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'Data Analytics',
    issuer: 'Codtech IT Solutions',
    year: '01/2025',
    pdfUrl: '/data analytics.pdf',
    credentialId: 'DATA-ANALYTICS-2025',
    description: 'Comprehensive data analytics certification covering data visualization, statistical analysis, and business intelligence tools.'
  },
  {
    id: 2,
    title: 'SQL Certification: Basic to Advance',
    issuer: 'Geekster',
    year: '08/2024', 
    pdfUrl: '/sql.pdf',
    credentialId: 'SQL-GEEKSTER-2024',
    description: 'Complete SQL certification from basic concepts to advanced database management and optimization techniques.'
  },
  {
    id: 3,
    title: 'Python Programming Fundamentals',
    issuer: 'Geekster',
    year: '08/2024',
    pdfUrl: '/Python Programming fundamentals.pdf',
    credentialId: 'PYTHON-GEEKSTER-2024',
    description: 'Fundamental Python programming certification covering core concepts, data structures, and programming best practices.'
  },
  {
    id: 4,
    title: 'Introduction to Data Structures in Python',
    issuer: 'CodeSignal',
    year: '08/2024',
    pdfUrl: '/Introduction to simple data structures in python.pdf',
    credentialId: 'PYTHON-DS-CODESIGNAL-2024',
    description: 'Specialized certification in Python data structures including arrays, linked lists, stacks, queues, and trees.'
  }
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  const openModal = (cert) => {
    setSelectedCert(cert)
  }

  const closeModal = () => {
    setSelectedCert(null)
  }

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and platforms.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group modern-card dark:modern-card-dark rounded-xl overflow-hidden hover:shadow-3xl transition-all duration-500"
            >
                             {/* Certificate Image */}
               <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 flex items-center justify-center">
                   {cert.id === 1 && (
                     <div className="text-center">
                       <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-2">
                         <span className="text-white text-2xl font-bold">📊</span>
                       </div>
                       <p className="text-primary-600 dark:text-primary-400 text-xs font-medium">Data Analytics</p>
                     </div>
                   )}
                   {cert.id === 2 && (
                     <div className="text-center">
                       <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-2">
                         <span className="text-white text-2xl font-bold">🗄️</span>
                       </div>
                       <p className="text-primary-600 dark:text-primary-400 text-xs font-medium">SQL Database</p>
                     </div>
                   )}
                   {cert.id === 3 && (
                     <div className="text-center">
                       <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-xl flex items-center justify-center mb-2">
                         <span className="text-white text-2xl font-bold">🐍</span>
                       </div>
                       <p className="text-primary-600 dark:text-primary-400 text-xs font-medium">Python</p>
                     </div>
                   )}
                   {cert.id === 4 && (
                     <div className="text-center">
                       <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-2">
                         <span className="text-white text-2xl font-bold">📈</span>
                       </div>
                       <p className="text-primary-600 dark:text-primary-400 text-xs font-medium">Data Structures</p>
                     </div>
                   )}
                 </div>
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                   <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={() => openModal(cert)}
                     className="opacity-0 group-hover:opacity-100 transition-all duration-300 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white"
                   >
                     <Eye className="w-6 h-6 text-dark-700" />
                   </motion.button>
                 </div>
               </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/50 px-3 py-1 rounded-full">
                    {cert.year}
                  </span>
                  <span className="text-xs text-dark-500 dark:text-dark-400">
                    ID: {cert.credentialId}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                
                <p className="text-dark-600 dark:text-dark-300 mb-3 font-medium">
                  {cert.issuer}
                </p>
                
                <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(cert)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </motion.button>
                  <motion.a
                    href={cert.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-2 glass dark:glass-dark text-dark-700 dark:text-white text-sm font-medium rounded-lg hover:bg-white/20 dark:hover:bg-dark-700/50 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    PDF
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-dark-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-dark-200 dark:border-dark-600">
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="w-8 h-8 rounded-full bg-dark-100 dark:bg-dark-700 flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-dark-700 dark:text-white" />
                  </motion.button>
                </div>

                                 {/* Modal Content */}
                 <div className="p-6">
                   <div className="mb-6">
                     <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 rounded-lg flex items-center justify-center">
                       <div className="text-center">
                         {selectedCert.id === 1 && (
                           <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                             <span className="text-white text-4xl font-bold">📊</span>
                           </div>
                         )}
                         {selectedCert.id === 2 && (
                           <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                             <span className="text-white text-4xl font-bold">🗄️</span>
                           </div>
                         )}
                         {selectedCert.id === 3 && (
                           <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                             <span className="text-white text-4xl font-bold">🐍</span>
                           </div>
                         )}
                         {selectedCert.id === 4 && (
                           <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                             <span className="text-white text-4xl font-bold">📈</span>
                           </div>
                         )}
                         <p className="text-dark-600 dark:text-dark-300 text-sm">
                           PDF Certificate Available
                         </p>
                       </div>
                     </div>
                   </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-2">
                        Certificate Details
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-dark-500 dark:text-dark-400">Issuer:</span>
                          <p className="font-medium text-dark-700 dark:text-white">{selectedCert.issuer}</p>
                        </div>
                        <div>
                          <span className="text-dark-500 dark:text-dark-400">Year:</span>
                          <p className="font-medium text-dark-700 dark:text-white">{selectedCert.year}</p>
                        </div>
                        <div>
                          <span className="text-dark-500 dark:text-dark-400">Credential ID:</span>
                          <p className="font-medium text-dark-700 dark:text-white">{selectedCert.credentialId}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-2">
                        Description
                      </h4>
                      <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex gap-3 p-6 border-t border-dark-200 dark:border-dark-600">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 glass dark:glass-dark text-dark-700 dark:text-white font-medium rounded-lg hover:bg-white/20 dark:hover:bg-dark-700/50 transition-colors duration-200"
                    onClick={closeModal}
                  >
                    Close
                  </motion.button>
                  <motion.a
                    href={selectedCert.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Download PDF
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 