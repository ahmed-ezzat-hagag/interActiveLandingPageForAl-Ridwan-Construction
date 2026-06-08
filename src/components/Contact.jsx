import { motion } from "framer-motion"
import { useState } from "react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", phone: "", project: "", message: "" })
  }

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

  const contactInfo = [
    {
      icon: FaPhone,
      title: t.contact.phone,
      details: t.contact.phoneDetails,
    },
    {
      icon: FaEnvelope,
      title: t.contact.email,
      details: t.contact.emailDetails,
    },
    {
      icon: FaMapMarkerAlt,
      title: t.contact.address,
      details: t.contact.addressDetails,
    },
    {
      icon: FaClock,
      title: t.contact.hours,
      details: t.contact.hoursDetails,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold text-lg mb-4">{t.contact.badge}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-serif font-bold mb-8 text-[#0F172A]">
                {t.contact.infoTitle}
              </h3>
            </motion.div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 rtl:space-x-reverse bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] mb-1">{info.title}</p>
                    <p className="text-[#64748B]">{info.details}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Map Placeholder */}
            <motion.div
              variants={itemVariants}
              className="w-full h-64 rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm mt-8"
            >
              <iframe
                title="Al-Ridwan Location"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8206859837803!2d55.27619!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f60a1e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sDubai%2CUAE!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8F0] rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-serif font-bold mb-6 text-[#0F172A]">
              {t.contact.formTitle}
            </h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
              >
                {t.contact.successMessage}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-50 transition-all"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-50 transition-all"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  {t.contact.phoneLabel}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-50 transition-all"
                  placeholder={t.contact.phonePlaceholder}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  {t.contact.projectLabel}
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-50 transition-all"
                >
                  <option value="">{t.contact.projectPlaceholder}</option>
                  <option value="commercial">{t.contact.projectCommercial}</option>
                  <option value="residential">{t.contact.projectResidential}</option>
                  <option value="renovation">{t.contact.projectRenovation}</option>
                  <option value="other">{t.contact.projectOther}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-50 transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full"
              >
                {t.contact.submit}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
