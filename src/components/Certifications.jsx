import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, Eye } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    image: '/api/placeholder/400/300',
    credentialId: 'AWS-123456',
    description: 'Demonstrates expertise in designing distributed systems on AWS platform.'
  },
  {
    id: 2,
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    year: '2023',
    image: '/api/placeholder/400/300',
    credentialId: 'GCP-789012',
    description: 'Validates skills in developing and deploying applications on Google Cloud Platform.'
  },
  {
    id: 3,
    title: 'Microsoft Azure Developer Associate',
    issuer: 'Microsoft',
    year: '2023',
    image: '/api/placeholder/400/300',
    credentialId: 'AZURE-345678',
    description: 'Certifies ability to design, build, test, and maintain cloud applications.'
  },
  {
    id: 4,
    title: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    year: '2023',
    image: '/api/placeholder/400/300',
    credentialId: 'CKA-901234',
    description: 'Validates skills in managing Kubernetes clusters and applications.'
  },
  {
    id: 5,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    year: '2023',
    image: '/api/placeholder/400/300',
    credentialId: 'TF-567890',
    description: 'Demonstrates proficiency in building and training machine learning models.'
  },
  {
    id: 6,
    title: 'React Developer Certification',
    issuer: 'Meta',
    year: '2023',
    image: '/api/placeholder/400/300',
    credentialId: 'REACT-123789',
    description: 'Validates expertise in building modern web applications with React.'
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
              className="group glass dark:glass-dark rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 flex items-center justify-center">
                  <Award className="w-16 h-16 text-primary-600/30 dark:text-primary-400/30" />
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
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(cert)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  <Eye className="w-4 h-4" />
                  View Certificate
                </motion.button>
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
                      <Award className="w-20 h-20 text-primary-600/30 dark:text-primary-400/30" />
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Online
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 