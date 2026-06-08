import { useState } from "react"
import { useLanguage } from "./context/LanguageContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import WhyChooseUs from "./components/WhyChooseUs"
import Testimonials from "./components/Testimonials"
import ProcessTimeline from "./components/ProcessTimeline"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { dir } = useLanguage()

  return (
    <div dir={dir} className="bg-white text-[#475569]">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <ProcessTimeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
