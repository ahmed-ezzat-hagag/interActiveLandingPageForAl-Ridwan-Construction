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
    <section id="about" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden h-96 bg-gradient-to-br from-primary-100 to-white border border-[#E2E8F0] shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏗️</div>
                  <p className="text-2xl font-serif text-[#0F172A] font-bold">
                    Engineering Excellence
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-primary-600 font-semibold">About Us</p>
              <h2 className="section-title">Excellence in Every Project</h2>
              <p className="text-[#475569] leading-relaxed text-lg">
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
                  <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-[#475569]">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E2E8F0]"
            >
              <div>
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <p className="text-sm text-[#64748B]">Years Active</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <p className="text-sm text-[#64748B]">Projects Done</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <p className="text-sm text-[#64748B]">Team Members</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
