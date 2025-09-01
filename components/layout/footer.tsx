"use client"

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { personalInfo } from "@/lib/data"

export function Footer() {
  const { t, isRTL } = useLanguage()

  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? "text-right" : ""}`}>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.hero.title}</h3>
            <p className="text-muted-foreground text-sm">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.footer.contactInfo}</h3>
            <div className="space-y-2">
              <div className={`flex items-center text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                <Mail className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {personalInfo.email}
              </div>
              <div className={`flex items-center text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                <Phone className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {personalInfo.phone}
              </div>
              <div className={`flex items-center text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                <MapPin className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {personalInfo.location}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.footer.connect}</h3>
            <div className={`flex space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
