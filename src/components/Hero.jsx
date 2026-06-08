import { motion } from "framer-motion"
import { FaPhone, FaWhatsapp, FaArrowRight, FaCheckCircle } from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()

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
    { number: "500+", label: t.hero.statsProjects },
    { number: "15+", label: t.hero.statsYears },
    { number: "98%", label: t.hero.statsSatisfaction },
    { number: "50+", label: t.hero.statsTeam },
  ]

  return (
    <div id="hero" className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=%2260%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%232563EB%27 fill-opacity=%271%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
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
                className="text-primary-600 font-semibold text-lg"
              >
                {t.hero.badge}
              </motion.p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-[#0F172A]">
                {t.hero.heading}
                <span className="text-primary-600">{t.hero.headingHighlight}</span>
                {t.hero.headingEnd}
              </h1>
              <p className="text-[#475569] text-lg leading-relaxed max-w-lg">
                {t.hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="btn-primary inline-flex items-center justify-center space-x-2 rtl:space-x-reverse group">
                <span>{t.hero.cta}</span>
                <FaArrowRight className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/your-phone-number"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <FaWhatsapp />
                <span>{t.hero.whatsapp}</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4 rtl:space-x-reverse pt-4">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-primary-600 font-bold text-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-[#64748B]">
                {t.hero.trustText}
              </p>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-white border border-[#E2E8F0] shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-4xl font-bold">AR</span>
                  </div>
                  <p className="text-xl text-[#475569] font-semibold">
                    {t.hero.imageTitle}
                  </p>
                  <p className="text-[#64748B] mt-2">{t.hero.imageSubtitle}</p>
                </div>
              </div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-100 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-50 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <p className="text-[#475569] text-sm">{stat.label}</p>
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
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </div>
  )
}
