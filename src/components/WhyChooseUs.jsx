import { motion } from "framer-motion"
import { FaTrophy, FaClock, FaHandshake, FaShieldAlt } from "react-icons/fa"

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const reasons = [
    {
      icon: FaTrophy,
      title: "Quality Excellence",
      description: "Award-winning construction standards and premium materials",
    },
    {
      icon: FaClock,
      title: "On-Time Delivery",
      description: "Guaranteed project completion within agreed timelines",
    },
    {
      icon: FaHandshake,
      title: "Customer Support",
      description: "Dedicated support team available throughout your project",
    },
    {
      icon: FaShieldAlt,
      title: "Certified & Insured",
      description: "Full certifications, licenses, and comprehensive insurance coverage",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold text-lg mb-4">Why Choose Us</p>
          <h2 className="section-title">Your Trusted Construction Partner</h2>
          <p className="section-subtitle">
            Discover what makes Al-Ridwan the preferred choice for premium construction
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 h-full text-center shadow-sm card-hover">
                  {/* Icon */}
                  <div className="mb-6 inline-block">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-accent-50 rounded-full flex items-center justify-center group-hover:bg-accent-100 transition-colors"
                    >
                      <Icon className="text-accent-500 text-3xl" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#0F172A]">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#475569] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-600 rounded-2xl p-12 text-center shadow-lg"
        >
          <h3 className="text-3xl font-serif font-bold mb-4 text-white">
            Commitment to Excellence
          </h3>
          <p className="text-primary-100 text-lg max-w-3xl mx-auto leading-relaxed">
            At Al-Ridwan, we don't just build structures—we create lasting legacies.
            Every project reflects our dedication to innovation, sustainability, and
            client satisfaction. With our experienced team and proven methodology, we
            transform visions into reality with precision and care.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
