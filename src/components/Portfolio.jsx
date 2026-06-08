import { motion } from "framer-motion"
import { useState } from "react"
import { FaFilter } from "react-icons/fa"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

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

  const categories = ["all", "commercial", "residential", "renovation"]

  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "commercial",
      image: "🏢",
      location: "Downtown District",
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      category: "residential",
      image: "🏛️",
      location: "Premium Zone",
    },
    {
      id: 3,
      title: "Heritage Renovation",
      category: "renovation",
      image: "🏗️",
      location: "Historic Area",
    },
    {
      id: 4,
      title: "Tech Park Development",
      category: "commercial",
      image: "🏢",
      location: "Business District",
    },
    {
      id: 5,
      title: "Contemporary Apartments",
      category: "residential",
      image: "🏘️",
      location: "Suburban Area",
    },
    {
      id: 6,
      title: "Mall Refurbishment",
      category: "renovation",
      image: "🏬",
      location: "City Center",
    },
  ]

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-300 font-semibold text-lg mb-4">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of exceptional construction projects
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
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-gold-500 text-primary-900"
                  : "bg-primary-900 border-2 border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-primary-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat === "all" && <FaFilter />}
              <span className="capitalize">{cat}</span>
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
                className="relative rounded-xl overflow-hidden card-hover cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-72 bg-gradient-to-br from-gold-500/40 via-primary-900/40 to-primary-900/40 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 bg-primary-900/50 backdrop-blur-sm border-t border-gold-500/20">
                  <p className="text-gold-300 text-sm mb-2">{project.location}</p>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-300 transition-colors">
                    {project.title}
                  </h3>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-gold-300 font-semibold text-sm flex items-center space-x-2"
                  >
                    <span>View Project</span>
                    <span>→</span>
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
          <button className="btn-primary">View Complete Portfolio</button>
        </motion.div>
      </div>
    </section>
  )
}
