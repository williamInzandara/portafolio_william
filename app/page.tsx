import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { AboutMe } from "@/components/portfolio/about-me"
import { Languages } from "@/components/portfolio/languages"
import { Projects } from "@/components/portfolio/projects"
import { Hobbies } from "@/components/portfolio/hobbies"
import { Testimonials } from "@/components/portfolio/testimonials"
import { Experience } from "@/components/portfolio/experience"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Languages />
      <Projects />
      <Hobbies />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
