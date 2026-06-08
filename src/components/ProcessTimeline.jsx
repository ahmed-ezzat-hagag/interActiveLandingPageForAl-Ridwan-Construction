import { motion } from "framer-motion"
import { FaCompass, FaRuler, FaHammer, FaCheckCircle } from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext"

export default function ProcessTimeline() {
  const { t } = useLanguage()

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

  const icons = [FaCompass, FaRuler, FaHammer, FaCheckCircle]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary-600 font-semibold text-lg mb-4">{t.process.badge}</p>
          <h2 className="section-title">{t.process.title}</h2>
          <p className="section-subtitle">
            {t.process.subtitle}
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
          <div className="hidden lg:block absolute top-32 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-[#E2E8F0]" />
          <div className="hidden lg:block absolute top-32 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-primary-600" style={{ width: "75%" }} />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Card */}
                  <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 h-full shadow-sm card-hover">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-5xl font-bold text-[#E2E8F0]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="relative">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                          <Icon className="text-primary-600 text-xl" />
                        </div>
                        {/* Connecting Dot */}
                        {index < t.process.steps.length - 1 && (
                          <div className="hidden lg:block absolute -right-[3.25rem] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary-600 border-4 border-white rounded-full shadow-sm" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-serif font-bold mb-3 text-[#0F172A]">
                      {step.title}
                    </h3>
                    <p className="text-[#475569] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile/tablet */}
                  {index < t.process.steps.length - 1 && (
                    <div className="lg:hidden text-center mt-4 text-primary-400">
                      {index < t.process.steps.length - 1 ? "↓" : ""}
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
          <p className="text-[#475569] text-lg mb-6">
            {t.process.ctaText}
          </p>
          <button className="btn-accent">{t.process.ctaButton}</button>
        </motion.div>
      </div>
    </section>
  )
}
