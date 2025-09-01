"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

const languages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
  { code: "ar" as Language, name: "العربية", flag: "🇹🇳" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t, isRTL } = useLanguage()

  const navigation = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.certifications, href: "#certifications" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.contact, href: "#contact" },
  ]

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ${isRTL ? "flex-row-reverse" : ""}`}
      >
        <div className={`flex lg:flex-1 ${isRTL ? "justify-end" : ""}`}>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-primary">{t.hero.title}</span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className={`hidden lg:flex lg:gap-x-12 ${isRTL ? "flex-row-reverse" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div
          className={`hidden lg:flex lg:flex-1 lg:items-center lg:gap-4 ${isRTL ? "lg:justify-start" : "lg:justify-end"}`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Globe className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {languages.find((lang) => lang.code === language)?.flag}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? "start" : "end"}>
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="cursor-pointer"
                >
                  <span className={isRTL ? "ml-2" : "mr-2"}>{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div
            className={`fixed inset-y-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border ${isRTL ? "left-0" : "right-0"}`}
          >
            <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold text-primary">{t.hero.title}</span>
              </a>
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code)
                          setMobileMenuOpen(false)
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted w-full text-left"
                      >
                        <span className={isRTL ? "ml-2" : "mr-2"}>{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
