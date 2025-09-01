"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useEffect, useState } from "react"

export function Skills() {
  const { t } = useLanguage()
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({})

  const skills = {
    technical: [
      { name: t.skills.skillNames.excel, level: 85 },
      { name: t.skills.skillNames.word, level: 90 },
    ],
    soft: [
      { name: t.skills.skillNames.organization, level: 90 },
      { name: t.skills.skillNames.leadership, level: 85 },
      { name: t.skills.skillNames.communication, level: 95 },
      { name: t.skills.skillNames.teamwork, level: 90 },
    ],
  }

  useEffect(() => {
    if (isIntersecting) {
      const allSkills = [...skills.technical, ...skills.soft]

      allSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues((prev) => ({
            ...prev,
            [skill.name]: skill.level,
          }))
        }, index * 200)
      })
    }
  }, [isIntersecting])

  return (
    <section id="skills" className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t.skills.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{t.skills.subtitle}</p>
        </AnimatedSection>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <AnimatedSection animation="slide-right" delay={200}>
              <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{t.skills.technical}</h3>
                  </div>

                  <div className="space-y-6">
                    {skills.technical.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{animatedValues[skill.name] || 0}%</span>
                        </div>
                        <Progress
                          value={animatedValues[skill.name] || 0}
                          className="h-2 transition-all duration-1000 ease-out"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Soft Skills */}
            <AnimatedSection animation="slide-left" delay={400}>
              <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{t.skills.soft}</h3>
                  </div>

                  <div className="space-y-6">
                    {skills.soft.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{animatedValues[skill.name] || 0}%</span>
                        </div>
                        <Progress
                          value={animatedValues[skill.name] || 0}
                          className="h-2 transition-all duration-1000 ease-out"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
