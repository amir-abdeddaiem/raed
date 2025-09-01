"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { personalInfo } from "@/lib/data"
import { AnimatedSection } from "@/components/ui/animated-section"

export function About() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t.about.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{t.about.subtitle}</p>
        </AnimatedSection>

        <div className="mx-auto mt-16 max-w-5xl">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? "lg:grid-flow-col-dense" : ""}`}
          >
            <AnimatedSection animation="slide-right" delay={200} className={isRTL ? "lg:col-start-2" : ""}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{t.about.profileTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{t.hero.profile}</p>

                  <div className="mt-8 space-y-4">
                    {[
                      { icon: MapPin, text: personalInfo.location },
                      { icon: Mail, text: personalInfo.email },
                      { icon: Phone, text: personalInfo.phone },
                      { icon: Globe, text: personalInfo.website },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center text-sm opacity-0 animate-fade-in-up ${isRTL ? "flex-row-reverse" : ""}`}
                        style={{ animationDelay: `${800 + index * 100}ms`, animationFillMode: "forwards" }}
                      >
                        <item.icon className={`h-4 w-4 text-primary ${isRTL ? "ml-3" : "mr-3"}`} />
                        <span className="text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <div className={`space-y-6 ${isRTL ? "lg:col-start-1" : ""}`}>
              {[
                {
                  title: t.about.commercialExcellence,
                  desc: t.about.commercialExcellenceDesc,
                  color: "primary",
                },
                {
                  title: t.about.businessDevelopment,
                  desc: t.about.businessDevelopmentDesc,
                  color: "secondary",
                },
                {
                  title: t.about.teamLeadership,
                  desc: t.about.teamLeadershipDesc,
                  color: "accent",
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="slide-left" delay={400 + index * 200}>
                  <Card
                    className={`border-t-0 border-r-0 border-b-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                      isRTL ? `border-r-4 border-r-${item.color} border-l-0` : `border-l-4 border-l-${item.color}`
                    }`}
                  >
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground text-pretty">{item.desc}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
