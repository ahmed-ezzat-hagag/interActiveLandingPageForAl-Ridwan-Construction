import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const features = [
    "State-of-the-art facilities and equipment",
    "Certified and experienced engineering team",
    "Sustainable and eco-friendly practices",
    "On-time project delivery guarantee",
  ]

  return (
    <section id="about" className="py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/40 to-primary-900/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏗️</div>
                  <p className="text-2xl font-serif text-gray-300">
                    Engineering Excellence
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-gold-300 font-semibold">About Us</p>
              <h2 className="section-title">Excellence in Every Project</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                With over 15 years of experience in the construction industry,
                Al-Ridwan has established itself as a leader in delivering
                premium construction solutions. Our commitment to quality,
                innovation, and client satisfaction sets us apart.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div variants={containerVariants} className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <FaCheckCircle className="text-gold-300 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gold-500/20"
            >
              <div>
                <div className="text-3xl font-bold text-gold-300">15+</div>
                <p className="text-sm text-gray-400">Years Active</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-300">500+</div>
                <p className="text-sm text-gray-400">Projects Done</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-300">50+</div>
                <p className="text-sm text-gray-400">Team Members</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
