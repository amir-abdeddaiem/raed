import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { Skills } from "@/components/sections/skills"
import { Volunteer } from "@/components/sections/volunteer"
import { Languages } from "@/components/sections/languages"
import { Contact } from "@/components/sections/contact"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Skills />
        <Volunteer />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
