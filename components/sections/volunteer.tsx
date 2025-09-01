import { Card, CardContent } from "@/components/ui/card"
import { Heart, Calendar } from "lucide-react"
import { volunteer } from "@/lib/data"

export function Volunteer() {
  return (
    <section id="volunteer" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Volunteer Experience
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Community involvement and leadership development
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteer.map((vol, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="font-semibold text-foreground text-balance mb-2">{vol.role}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{vol.organization}</p>
                    <div className="flex items-center justify-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {vol.period}
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
