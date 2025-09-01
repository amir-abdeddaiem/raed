import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { education } from "@/lib/data"

export function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Education</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Academic foundation in commerce and distribution
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground text-balance">{edu.degree}</h3>
                    <p className="mt-1 text-lg text-primary font-medium">{edu.institution}</p>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.period}
                    </div>
                    <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
