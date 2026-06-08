import { motion } from "framer-motion"
import { useState } from "react"
import { FaFilter } from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const { t, lang } = useLanguage()

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const projectImages = ["🏢", "🏛️", "🏗️", "🏢", "🏘️", "🏬"]

  const categories = [
    { key: "all", label: t.portfolio.all },
    { key: "commercial", label: t.portfolio.commercial },
    { key: "residential", label: t.portfolio.residential },
    { key: "renovation", label: t.portfolio.renovation },
  ]

  const projects = t.portfolio.projects.map((p, i) => ({
    id: i + 1,
    title: p.title,
    category: ["commercial", "residential", "renovation", "commercial", "residential", "renovation"][i],
    image: projectImages[i],
    location: p.location,
  }))

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold text-lg mb-4">{t.portfolio.badge}</p>
          <h2 className="section-title">{t.portfolio.title}</h2>
          <p className="section-subtitle">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat.key
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-white border-2 border-[#E2E8F0] text-[#475569] hover:border-primary-600 hover:text-primary-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.key === "all" && <FaFilter />}
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="relative rounded-xl overflow-hidden card-hover bg-white border border-[#E2E8F0] shadow-sm"
              >
                {/* Image */}
                <div className="relative h-72 bg-gradient-to-br from-primary-50 to-white flex items-center justify-center overflow-hidden">
                  <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <p className="text-primary-600 text-sm mb-2 font-medium">{project.location}</p>
                  <h3 className="text-xl font-serif font-bold text-[#0F172A] mb-4 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <motion.button
                    whileHover={{ x: lang === "ar" ? -5 : 5 }}
                    className="text-primary-600 font-semibold text-sm flex items-center space-x-2 rtl:space-x-reverse"
                  >
                    <span>{t.portfolio.viewProject}</span>
                    <span>{lang === "ar" ? "←" : "→"}</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary">{t.portfolio.viewAll}</button>
        </motion.div>
      </div>
    </section>
  )
}
