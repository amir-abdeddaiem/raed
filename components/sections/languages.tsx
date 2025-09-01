import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Globe } from "lucide-react"
import { languages } from "@/lib/data"

export function Languages() {
  return (
    <section id="languages" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Languages</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Multilingual communication capabilities
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Language Proficiency</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {languages.map((lang, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-semibold text-foreground mb-2">{lang.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{lang.level}</p>
                    <div className="relative">
                      <Progress value={lang.proficiency} className="h-3" />
                      <span className="absolute -top-6 right-0 text-xs text-muted-foreground">{lang.proficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
