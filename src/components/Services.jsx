import { motion } from "framer-motion"
import {
  FaBuilding,
  FaHammer,
  FaRuler,
  FaTools,
  FaPaintBrush,
  FaCity,
} from "react-icons/fa"

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const services = [
    {
      icon: FaBuilding,
      title: "Commercial Buildings",
      description: "State-of-the-art commercial spaces designed for modern business",
    },
    {
      icon: FaCity,
      title: "Residential Projects",
      description: "Premium residential complexes with luxury amenities",
    },
    {
      icon: FaHammer,
      title: "Renovation & Refurbishment",
      description: "Transform existing structures with contemporary designs",
    },
    {
      icon: FaRuler,
      title: "Project Management",
      description: "Expert oversight from planning to final completion",
    },
    {
      icon: FaTools,
      title: "Infrastructure",
      description: "Robust infrastructure solutions for lasting impact",
    },
    {
      icon: FaPaintBrush,
      title: "Interior Design",
      description: "Stunning interiors that combine beauty and functionality",
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold text-lg mb-4">Our Services</p>
          <h2 className="section-title">Comprehensive Construction Solutions</h2>
          <p className="section-subtitle">
            We offer a complete range of construction and design services tailored
            to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 h-full shadow-sm card-hover">
                  {/* Icon */}
                  <div className="mb-6 inline-block">
                    <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                      <Icon className="text-primary-600 text-2xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#0F172A]">
                    {service.title}
                  </h3>
                  <p className="text-[#475569] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="mt-6 inline-block text-primary-600 group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-semibold">Learn More →</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
