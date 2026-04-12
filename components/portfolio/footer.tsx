import Link from "next/link"
import { ArrowUp } from "lucide-react"

const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name and Nav */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold sm:text-xl">William Inzandara</h3>
            <nav>
              <ul className="flex flex-wrap justify-center gap-3 md:justify-start md:gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Back to top */}
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Ir al principio</span>
          </Link>
        </div>

        {/* Copyright and Tech Stack */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-background/20 pt-8 md:flex-row">
          <p className="text-center text-sm text-background/70 md:text-left">
            © 2025 William Darío Inzandara Lagos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end md:gap-4">
            <span className="text-sm text-background/70">Next.js</span>
            <span className="text-sm text-background/70">TypeScript</span>
            <span className="text-sm text-background/70">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
