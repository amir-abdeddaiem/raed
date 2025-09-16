"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t, isRTL } = useLanguage()

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative mx-auto h-32 w-32 mb-8 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-10 animate-ping" />
              <img
                src="/profile-photo.png"
                alt={t.hero.title}
                className="relative z-10 h-full w-full rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance animate-fade-in-up delay-200">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up delay-400">
            {t.hero.subtitle}
          </p>

          <p className="mt-4 text-base leading-7 text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in-up delay-600">
            {t.hero.profile}
          </p>

          <div
            className={`mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up delay-800 ${isRTL ? "flex-row-reverse" : ""}`}
          >

            <Button size="lg" onClick={scrollToContact} className="group hover:scale-105 transition-all duration-300 hover:shadow-lg" >
              <Mail className={`h-4 w-4 group-hover:scale-110 transition-transform ${isRTL ? "ml-2" : "mr-2"}`} />
              {t.hero.getInTouch}
            </Button>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <Download className={`h-4 w-4 group-hover:scale-110 transition-transform ${isRTL ? "ml-2" : "mr-2"}`} />
                {t.hero.downloadCV}
              </Button>
            </a>
          </div>

          <div className="mt-16 animate-fade-in-up delay-1000">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className={isRTL ? "ml-2" : "mr-2"}>{t.hero.learnMore}</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
