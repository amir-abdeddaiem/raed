import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"
import { certifications } from "@/lib/data"

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Certifications</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Continuous learning and professional development
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                        <Award className="h-5 w-5 text-accent" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-balance">{cert.title}</h3>
                      <p className="mt-1 text-sm text-accent font-medium">{cert.issuer}</p>
                      <div className="mt-2 flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
