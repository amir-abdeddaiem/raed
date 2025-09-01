"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Language, Translations } from "@/lib/translations"
import { translations } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem("language") as Language
    const browserLanguage = navigator.language.split("-")[0] as Language

    if (savedLanguage && ["en", "fr", "ar"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else if (["en", "fr", "ar"].includes(browserLanguage)) {
      setLanguage(browserLanguage)
    }

    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)

      // Update document direction for RTL languages
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  const contextValue: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
    isRTL: language === "ar",
  }

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
