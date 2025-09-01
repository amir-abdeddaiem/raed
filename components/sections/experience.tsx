"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/ui/animated-section"

export function Experience() {
  const { t, isRTL } = useLanguage()

  const experiences = [
    {
      title: t.experience.positions.internship1.title,
      company: t.experience.positions.internship1.company,
      period: "FEB 2025 - MAY 2025",
      description: t.experience.positions.internship1.description,
    },
    {
      title: t.experience.positions.internship2.title,
      company: t.experience.positions.internship2.company,
      period: "JAN 2024 - FEB 2024",
      description: t.experience.positions.internship2.description,
    },
    {
      title: t.experience.positions.internship3.title,
      company: t.experience.positions.internship3.company,
      period: "JAN 2023 - FEB 2023",
      description: t.experience.positions.internship3.description,
    },
  ]

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t.experience.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{t.experience.subtitle}</p>
        </AnimatedSection>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-8">
                    <div className={`flex items-start gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                          <Briefcase className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>

                      <div className={`flex-1 ${isRTL ? "text-right" : ""}`}>
                        <h3 className="text-xl font-semibold text-foreground text-balance">{exp.title}</h3>
                        <p className="mt-1 text-lg text-secondary font-medium">{exp.company}</p>
                        <div
                          className={`mt-2 flex items-center text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}
                        >
                          <Calendar className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                          {exp.period}
                        </div>

                        <div className="mt-6 space-y-3">
                          {exp.description.map((desc, descIndex) => (
                            <div
                              key={descIndex}
                              className={`flex items-start gap-3 opacity-0 animate-fade-in-up ${isRTL ? "flex-row-reverse" : ""}`}
                              style={{
                                animationDelay: `${800 + index * 200 + descIndex * 100}ms`,
                                animationFillMode: "forwards",
                              }}
                            >
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
