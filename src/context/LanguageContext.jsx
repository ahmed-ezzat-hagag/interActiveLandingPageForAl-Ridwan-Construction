import { createContext, useContext, useState, useCallback } from "react"
import translations from "../data/translations"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en")

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"))
  }, [])

  const t = translations[lang]
  const dir = lang === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
