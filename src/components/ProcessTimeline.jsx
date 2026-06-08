import { motion } from "framer-motion"
import { FaCompass, FaRuler, FaHammer, FaCheckCircle } from "react-icons/fa"

export default function ProcessTimeline() {
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

  const steps = [
    {
      icon: FaCompass,
      number: "01",
      title: "Planning & Design",
      description: "We start with comprehensive planning, understanding your vision, and creating detailed designs tailored to your needs.",
    },
    {
      icon: FaRuler,
      number: "02",
      title: "Consultation & Approval",
      description: "Our team consults with you, refines designs, obtains necessary permits, and gets your final approval.",
    },
    {
      icon: FaHammer,
      number: "03",
      title: "Construction & Execution",
      description: "We begin construction with skilled workers, quality materials, and strict adherence to safety standards.",
    },
    {
      icon: FaCheckCircle,
      number: "04",
      title: "Completion & Handover",
      description: "Final inspections, quality checks, and smooth handover with comprehensive documentation and warranty.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-900 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold-300 font-semibold text-lg mb-4">Our Process</p>
          <h2 className="section-title">Construction Workflow</h2>
          <p className="section-subtitle">
            A proven 4-step process ensuring excellence at every stage
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-500 to-transparent" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Card */}
                  <div className="glass-effect p-8 rounded-2xl h-full card-hover">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-5xl font-bold text-gold-500/20">
                        {step.number}
                      </div>
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-gold-300 to-gold-500 rounded-full flex items-center justify-center">
                          <Icon className="text-primary-900 text-xl" />
                        </div>
                        {/* Connecting Dot */}
                        {index < steps.length - 1 && (
                          <div className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-900 border-3 border-gold-500 rounded-full" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-serif font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden text-center mt-4 text-gold-500">
                      ↓
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to start your construction project? Let's discuss your requirements.
          </p>
          <button className="btn-primary">Schedule Consultation</button>
        </motion.div>
      </div>
    </section>
  )
}
