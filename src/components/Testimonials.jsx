import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hassan",
      role: "CEO, Hassan Industries",
      rating: 5,
      text: "Al-Ridwan delivered our office building on time and exceeded our expectations. Professional team and outstanding quality!",
      image: "👨‍💼",
    },
    {
      id: 2,
      name: "Fatima Al-Mansouri",
      role: "Property Owner",
      rating: 5,
      text: "Incredible craftsmanship and attention to detail. They transformed our vision into a stunning residential complex.",
      image: "👩‍💼",
    },
    {
      id: 3,
      name: "Mohammed Al-Rashid",
      role: "Project Manager",
      rating: 5,
      text: "Working with Al-Ridwan was seamless. Their expertise in project management and communication was exceptional.",
      image: "👨‍💼",
    },
    {
      id: 4,
      name: "Sarah Al-Zahra",
      role: "Interior Designer",
      rating: 5,
      text: "They brought my designs to life perfectly. Their team understood the vision and executed it flawlessly.",
      image: "👩‍💼",
    },
  ]

  // Auto-scroll
  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold text-lg mb-4">
            Client Testimonials
          </p>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${
                  index === currentIndex ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-12 h-full flex flex-col justify-center shadow-sm">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-accent-500" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[#475569] text-lg mb-8 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-serif font-bold text-[#0F172A]">
                        {testimonial.name}
                      </p>
                      <p className="text-primary-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 z-10 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] text-primary-600 flex items-center justify-center hover:bg-primary-50 hover:border-primary-600 transition-all shadow-sm hidden md:flex"
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 z-10 w-12 h-12 rounded-full bg-white border border-[#E2E8F0] text-primary-600 flex items-center justify-center hover:bg-primary-50 hover:border-primary-600 transition-all shadow-sm hidden md:flex"
          >
            <FaChevronRight />
          </motion.button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoplay(false)
                }}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary-600 w-8"
                    : "bg-[#E2E8F0] w-3 hover:bg-primary-400"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">98%</p>
            <p className="text-[#64748B]">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">500+</p>
            <p className="text-[#64748B]">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">4.9/5</p>
            <p className="text-[#64748B]">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
