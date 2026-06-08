import { motion } from "framer-motion"
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ]

  const services = [
    "Commercial Buildings",
    "Residential Projects",
    "Renovation Services",
    "Project Management",
    "Infrastructure",
    "Interior Design",
  ]

  const socialLinks = [
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-primary-900 border-t border-gold-500/20">
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
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-300 to-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-primary-900 font-bold">AR</span>
              </div>
              <span className="text-xl font-serif font-bold">Al-Ridwan</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium construction solutions for commercial, residential, and
              infrastructure projects across the region.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2, color: "#d4af37" }}
                    className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-300 hover:border-gold-500 transition-colors"
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
            <h4 className="font-serif font-bold text-white text-lg">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-gold-300 transition-colors flex items-center space-x-2"
                >
                  <FaArrowRight className="text-xs" />
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold text-white text-lg">Services</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <motion.a
                  key={index}
                  href="#services"
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-gold-300 transition-colors flex items-center space-x-2"
                >
                  <FaArrowRight className="text-xs" />
                  <span>{service}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold text-white text-lg">
              Newsletter
            </h4>
            <p className="text-gray-400">
              Subscribe to get updates on our latest projects and services.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-primary-900/50 border border-gold-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button className="btn-primary">Subscribe</button>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gold-500/20 my-12" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Al-Ridwan Construction. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-gold-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gold-300 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gold-300 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gold-500 text-primary-900 flex items-center justify-center shadow-lg hover:bg-gold-400 transition-colors hidden md:flex"
      >
        ↑
      </motion.button>
    </footer>
  )
}
