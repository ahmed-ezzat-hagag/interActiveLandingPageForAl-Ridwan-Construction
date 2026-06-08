import { motion } from "framer-motion"
import { FaPhone, FaWhatsapp, FaArrowRight } from "react-icons/fa"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team" },
  ]

  return (
    <div id="hero" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=%2260%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23d4af37%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-900/95 to-primary-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-gold-300 font-semibold text-lg"
              >
                Premium Construction Excellence
              </motion.p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                <span className="text-white">Building Your </span>
                <span className="gradient-text">Dreams</span>
                <span className="text-white"> with Precision</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Transform your vision into reality with Al-Ridwan's world-class
                construction services. From concept to completion, we deliver
                excellence in every detail.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="btn-primary inline-flex items-center justify-center space-x-2 group">
                <span>Get Started</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/your-phone-number"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <FaWhatsapp />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 border-2 border-primary-900 flex items-center justify-center text-primary-900 font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-gray-400">
                Trusted by 500+ satisfied clients
              </p>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/40 to-primary-900/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-serif font-bold text-gold-300 mb-4">
                    AR
                  </div>
                  <p className="text-xl text-gray-300">
                    Al-Ridwan Construction
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-6 text-center hover:bg-white/20 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold-300 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-gold-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold-300 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </div>
  )
}
