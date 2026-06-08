import { motion } from "framer-motion"
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext"

export default function Footer() {
  const currentYear = new Date().getFullYear()
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const quickLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const socialLinks = [
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AR</span>
              </div>
              <span className="text-xl font-serif font-bold text-[#0F172A]">Al-Ridwan</span>
            </div>
            <p className="text-[#64748B] leading-relaxed">
              {t.footer.brandText}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:border-primary-600 hover:text-primary-600 transition-all"
                    title={social.label}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold text-[#0F172A] text-lg">{t.footer.quickLinks}</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: lang === "ar" ? -5 : 5 }}
                  className="text-[#64748B] hover:text-primary-600 transition-colors flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <FaArrowRight className={`text-xs text-primary-400 ${lang === "ar" ? "rotate-180" : ""}`} />
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold text-[#0F172A] text-lg">{t.footer.services}</h4>
            <div className="space-y-2">
              {t.services.list.map((service, index) => (
                <motion.a
                  key={index}
                  href="#services"
                  whileHover={{ x: lang === "ar" ? -5 : 5 }}
                  className="text-[#64748B] hover:text-primary-600 transition-colors flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <FaArrowRight className={`text-xs text-primary-400 ${lang === "ar" ? "rotate-180" : ""}`} />
                  <span>{service.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold text-[#0F172A] text-lg">
              {t.footer.newsletter}
            </h4>
            <p className="text-[#64748B]">
              {t.footer.newsletterText}
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-50 transition-all"
              />
              <button className="btn-primary">{t.footer.subscribe}</button>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#E2E8F0] my-12" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-[#94A3B8] text-sm">
            &copy; {currentYear} {t.footer.copyright}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse text-sm">
            <a
              href="#"
              className="text-[#64748B] hover:text-primary-600 transition-colors"
            >
              {t.footer.privacyPolicy}
            </a>
            <a
              href="#"
              className="text-[#64748B] hover:text-primary-600 transition-colors"
            >
              {t.footer.termsOfService}
            </a>
            <a
              href="#"
              className="text-[#64748B] hover:text-primary-600 transition-colors"
            >
              {t.footer.sitemap}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors hidden md:flex"
      >
        ↑
      </motion.button>
    </footer>
  )
}
